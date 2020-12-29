# -- coding: utf-8 -
'''
从money.sina.finance.com.cn上下载tick数据，并保存为csv文件
结构：
- 反爬虫手段：User-Agent，使用代理服务器：set_proxy()
- 用urllib爬取数据，存为csv文件，也可用于更新数据：download()
'''

from urllib import request
from pandas.compat import StringIO
import pandas as pd
import numpy as np
import os
import re
import datetime
import time
import random
from multiprocessing import Process, Pool, Queue, Value, Lock
import sys
sys.path.append('/Volumes/Quant/Nut/quant/fetch_data')
from GeneralCrawlerMultiProcessing import GeneralCrawlerMultiProcessing


class TencentTickCrawler(GeneralCrawlerMultiProcessing):
	'''
	爬取腾讯财经的历史tick数据
	'''
	def __init__(self, stock_list_src = 'tushare', # or joinquant
		         n_process = 1,
		         start = None, 
		         end = None,
		         finished_jobs_file = ''):
		super().__init__(stock_list_src, n_process, start, end)
		# 数据所在年份
		self.year = self.end.split('-')[0]
		# url
		self.url_base = 'http://stock.gtimg.cn/data/index.php?appn=detail&action=download&c=%s&d=%s'
		# 下载数据保存文件夹
		self.data_dir = '/Volumes/Quant/tick_data/tick_tencent_%s' % self.year
		if not os.path.exists(self.data_dir):
			os.mkdir(self.data_dir)
		# 定义tick成交类型
		self.tick_type = {u'买盘': 'B', u'卖盘': 'S', u'中性盘': 'N'}
		# tick数据的columns
		self.columns = ['datetime', 'price', 'change', 'volume', 'amount', 'type']
		# 下载完成的任务文件
		self.finished_jobs_file = finished_jobs_file

	# 转换下载网址函数
	def get_url(self, code, date):
		url = self.url_base % (code, date.replace('-', ''))
		return url

	def crawl_single_day_data(self, code, date, request, retry = 3, pause = 0.5):
		'''
		抓取给定日期的tick数据
		'''
		for _ in range(retry):
			time.sleep(pause)
			try:
				url = self.get_url(code, date)
				# print('{0}, {1}, {2}'.format(code, date, url))
				data = request.urlopen(url, timeout = 10).read().decode('GBK')
				# print('{0}, {1}, {2}'.format(code, date, data[:50]))
				# 如果获取数据只有表头，表示当日没有数据
				if len(data) < 20:
					return None
				df = pd.read_csv(StringIO(data), sep = '\t', names = self.columns, skiprows = [0])

				if len(df) > 0:
					# 下载原始数据中成交类型为中文，修改成英文
					df['type'] = df['type'].replace(self.tick_type)
					# 下载原始数据中的时间只有HH:MM:SS，修改成YYYY-mm-dd HH:MM:SS
					df['datetime'] = df['datetime'].apply(lambda x: date + ' ' + x)
					return df
				else:
					return None
			except Exception as e:
				# print(e)
				continue
		raise IOError

	def crawler(self, process, request, proxy, is_proxy, code, name, list_date, delist_date, cur_counter):
		'''
		定义函数：下载单支股票的tick数据
		'''
		print('='*80 + '\n' + 
			  'process {0}, {1} {2} start, {3}/{4}, proxy {5}, {6}'.format(process, code, name, cur_counter,
			  	self.n_jobs, proxy, self.get_cur_time().strftime('%H:%M:%S')) + 
			  '\n' + '='*80)

		# 文件名称
		filename = os.path.join(self.data_dir, code + '_tick_data_tencent_%s.csv' % self.year)

		# 确定是否有已下载数据
		if os.path.exists(filename):
			last_date = self.read_last_date(filename)[:10]
		else:
			last_date = None

		# 判断已保存数据的最后日期是否达到设定的截止日期
		if last_date is not None:
			if last_date >= self.end:
				print('process {0}, {1} {2}, no update'.format(process, code, name))
				with open(self.finished_jobs_file, 'a') as f:
					f.write('{0},{1},{2},{3},{4}\n'.format(process, code, name,
						self.get_cur_time().strftime('%Y-%m-%d %H:%M:%S'), self.n_jobs))
				return request, proxy

		# 根据last_date, list_date和delist_date调整下载日期
		start_date, end_date = self.set_start_end_date(last_date, list_date, delist_date)
		dates = self.trading_dates.loc[(self.trading_dates['date'] >= start_date) & (self.trading_dates['date'] <= end_date)]

		# 如果dates长度为0，表示没有数据需要下载
		if len(dates) == 0:
			print('process {0}, {1} {2}, no data'.format(process, code, name))
			# 保存任务完成log
			with open(self.finished_jobs_file, 'a') as f:
				f.write('{0},{1},{2},{3},{4}\n'.format(process, code, name,
					self.get_cur_time().strftime('%Y-%m-%d %H:%M:%S'), self.n_jobs))
			return request, proxy

		# 抓取数据
		proxy_counter = 0
		for date in dates.date.values:
			while True:
				try: 
					df = self.crawl_single_day_data(code, date, request)
					proxy_counter += 1
					break
				except Exception as e:
					# print(e)
					proxy_counter = 0
					# 重置proxy
					request, proxy = self.update_proxy_ua(is_proxy, proxy)
					continue

			# 如果没有新数据，则继续下载下一日数据
			if df is None or df.shape[0] == 0:
				print('process {0}, {1} {2}, {3} no data'.format(process, code, name, date))
				# if not os.path.exists(filename):
				# 	with open(filename, 'a') as f:
				# 		f.write('datetime,price,change,volume,amount,type\n')
				# 		f.write('{0},,,,,\n'.format(date + ' 15:00:00'))
				# else:
				# 	with open(filename, 'a') as f:
				# 		f.write('{0},,,,,\n'.format(date + ' 15:00:00'))
			else:
				# 有数据时保存数据
				if os.path.exists(filename):
					df.to_csv(filename, mode = 'a', header = False, index = False)
				else:
					df.to_csv(filename, mode = 'w', header = True, index = False)
				print('process {0}, {1} {2}, {3}, {4} lines updated'.format(process, code, name, date, df.shape[0]))

		# 保存任务完成log
		with open(self.finished_jobs_file, 'a') as f:
			f.write('{0},{1},{2},{3},{4}\n'.format(process, code, name, 
				self.get_cur_time().strftime('%Y-%m-%d %H:%M:%S'), self.n_jobs))

		print('*** process {0}, {1} {2} finished ***'.format(process, code, name))

		return(request, proxy)



if __name__ == '__main__':
	n_process = 16*os.cpu_count()
	print('num of process: ', n_process)
	
	# startdate = '2020-11-01'
	d = datetime.datetime.now().date()
	startdate = datetime.date(d.year, d.month, 1).strftime('%Y-%m-%d')
	# enddate = '2020-07-19'
	enddate = datetime.date.today().strftime('%Y-%m-%d')

	finished_jobs_file = os.path.join(os.getcwd(), 'jobs_tick_tencent_%s.csv' % enddate[:4])
	if os.path.exists(finished_jobs_file):
		os.remove(finished_jobs_file)


	mycrawler = TencentTickCrawler(stock_list_src = 'tushare',
		                           n_process = n_process,
		                           start = startdate,
		                           end = enddate,
		                           finished_jobs_file = finished_jobs_file)

	mycrawler.is_proxy_list = [False]*n_process
	# mycrawler.is_proxy_list = [False] + [True]*(n_process-1)

	mycrawler.run()






