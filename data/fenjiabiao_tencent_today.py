# -*- coding: utf-8 -*-
'''
从腾讯财经下载当日分价表数据
链接：http://stock.gtimg.cn/data/index.php?appn=price&c=sz000333&_=1583292928153
返回数据包括：
 - price
 - buy_volume
 - sell_volume
 - neutral_volume
 - total_volume

 注意：
 - 抓取的网页上包含有日期信息
'''

import pandas as pd
from urllib import request
import datetime
import time
import os
import re
import sys
sys.path.append('/Volumes/Quant/Nut/quant/fetch_data/')
from GeneralCrawlerMultiProcessing import GeneralCrawlerMultiProcessing

class TencentFenjiabiaoTodayCrawler(GeneralCrawlerMultiProcessing):
	'''
	'''
	def __init__(self, stock_list_src = 'tushare',  # or joinquant
		         n_process = 1, start = None, end = None):
		super().__init__(stock_list_src, n_process, start, end)
		# 链接地址
		self.url_base = 'http://stock.gtimg.cn/data/index.php?appn=price&c=%s'
		# 数据保存文件夹
		self.data_dir = os.path.join(self.main_dir, 'data', 'fenjiabiao_tencent')
		if not os.path.exists(self.data_dir):
			os.mkdir(self.data_dir)

	def __parse_data(self, request, url):
		# 抓取html源数据
		html = request.urlopen(url, timeout = 5).read().decode('utf-8')
		# 初始化data_df，如果没有抓取到数据，则data_df.shape[0]==0
		# data_df = pd.DataFrame(columns = ['price', 'buy_volume', 'sell_volume', 'neutral_volume', 'total_volume'])
		data = []
		if len(html) != 0:  # 判断是否有抓取到数据
			content = re.search('\[(.*?)\]', html).group(1).split(',')
			date = content[0]
			date = date[:4]+'-'+date[4:6]+'-'+date[6:8]
			raw_data = content[3][1:-1]
			if len(raw_data) != 0:   # 判断当日是否停牌
				raw_data = raw_data.split('^')
				for idx in range(len(raw_data)):
					tmp = raw_data[idx].split('~')
					# 大多数股票的分价表数据包括price, buy_volume, sell_volume, neutral_volume和total_volume
					if len(tmp) == 5:
						data.append(','.join([date, tmp[0], tmp[1], tmp[3], tmp[4], tmp[2]]))
					# 有些股票的分价表数据只有price, buy_volume和total_volume
					elif len(tmp) == 3:
						data.append(','.join([date, tmp[0], tmp[1], '', '', tmp[2]]))
		return data

	def crawler(self, process, request, proxy, is_proxy, code, name, list_date, delist_date, cur_counter):
		# time.sleep(0.1)
		print('='*50)
		print('process {0}, {1} {2} start, {3}/{4}, proxy {5}, {6}'.format(process, code, name, 
			cur_counter, self.n_jobs, proxy, self.get_cur_time().strftime('%Y-%m-%d %H:%M:%S')))
		print('='*50)

		# 文件名称
		filename = os.path.join(self.data_dir, code + '_fenjiabiao_tencent.csv')

		# 如果文件已存在，读取最后保存数据的日期，判断是否为当日，如果为当日则函数直接返回
		if os.path.exists(filename):
			last_date = self.read_last_date(filename)
			if last_date >= datetime.date.today().strftime('%Y-%m-%d'):
				print('process {0}, {1} {2}, no update'.format(process, code, name))
				return request, proxy

		# 抓取数据
		proxy_counter = 0
		url = self.url_base % code
		while True:
			try:
				data = self.__parse_data(request, url)
				proxy_counter += 1
				break
			except Exception as e:
				# 写proxy使用log
				with open(self.proxy_log_file, 'a') as f:
					if proxy is not None:
						f.write('{0},{1},{2}\n'.format(proxy, proxy_counter, self.get_cur_time().strftime('%Y-%m-%d %H:%M:%S')))
				proxy_counter = 0
				# 重新设置proxy和user-agent
				request, proxy = self.update_proxy_ua(is_proxy, proxy)
				continue

		# 如果没有新数据，函数直接返回
		if len(data) == 0:
			print('process {0}, {1} {2}, no data'.format(process, code, name))
			return request, proxy
		else:
			# 保存新数据
			if os.path.exists((filename)):
				with open(filename, 'a') as f:
					for line in data:
						f.write(line + '\n')
			else:
				with open(filename, 'a') as f:
					f.write('date,price,buy_volume,sell_volume,neutral_volume,total_volume\n')
					for line in data:
						f.write(line + '\n')
			print('process {0}, {1} {2}, {3} lines updated'.format(process, code, name, len(data)))
			return request, proxy

if __name__ == '__main__':
	# 设置start日期为当月1日
	d = datetime.datetime.now()
	start = datetime.date(d.year, d.month, 1).strftime('%Y-%m-%d')
	end = None

	n_process = 4*os.cpu_count()
	mycrawler = TencentFenjiabiaoTodayCrawler(stock_list_src = 'tushare', 
		                                      n_process = n_process,
		                                      start = start, 
		                                      end = end)

	mycrawler.is_proxy_list = [False]*n_process
	mycrawler.run()





