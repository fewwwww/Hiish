# coding: utf-8
'''
利用tushare的API下载A股所有股票和一些主要指数的不复权日线数据
股票数据包含每日的涨跌停价格（从2007-01-04开始）
'''

import tushare as ts
import pandas as pd
import os
import datetime
import time

token = '4c4079faba1d95c7ed54c420938f7f58858be5d7645fd1ebaa175789'
api = ts.pro_api(token)

data_dir = '/Volumes/Quant/Nut/quant/data'

# 注意tushare的一次请求的数据条数有一定限制，所以如果从沪深股市开始交易以来的数据要分段下载
# start = '19890101'
start = '20190101'
# end = '20191231'
end = datetime.datetime.today().strftime('%Y%m%d')

# 读取所有交易日
dates = pd.read_csv(os.path.join(data_dir, 'trading_dates.csv'), index_col = 0)

# 两次请求之间的间隔时间
pause = 0.0

# 下载开始时间
t1 = datetime.datetime.now()

# ==============================================================
# 						股票每日features
# ==============================================================
# 读取所有股票列表，包含已退市股票
stock_list = pd.read_csv(os.path.join(data_dir, 'stock_basics', 'full_shares.csv'))

n_stocks = len(stock_list)
n = 0
for stock in stock_list['code']:
	n += 1
	print('=====================')
	print('stock job {0} {1}/{2}'.format(stock, n, n_stocks))
	if stock[-2:] in ['SH', 'sh', 'Sh', 'sH']:
		file = os.path.join(data_dir, 'daily_bar_tushare_bfq', 'sh' + stock[:6] + '_daily_bar_tushare_bfq.csv')
	elif stock[-2:] in ['SZ', 'sz', 'Sz', 'sZ']:
		file = os.path.join(data_dir, 'daily_bar_tushare_bfq', 'sz' + stock[:6] + '_daily_bar_tushare_bfq.csv')
	else:
		continue

	# 判断下载初始日期
	if os.path.exists(file):
		data0 = pd.read_csv(file, index_col = 'date')
		last_date = data0.index[-1]
		if last_date.replace('-', '') >= end:
			print('stock job {0}: no update'.format(stock))
			continue
		else:
			start_date = dates.loc[dates['date'] > last_date].iloc[0,0].replace('-', '')
	else:
		start_date = start

	time.sleep(pause)

	# 下载数据
	while True:
		try:
			data = ts.pro_bar(ts_code = stock, start_date = start_date, end_date = end,
				api = api, asset = 'E', adj = None, freq = 'D', factors = ['tor', 'vr'])
			# data = api.daily(ts_code = stock, start_date = start_date, end_date = end)
			time.sleep(0.3)
			price_limits = api.stk_limit(ts_code = stock, start_end = start_date, end_date = end)
			if data is None:
				continue
			break
		except Exception as e:
			print(e, '\ntry again....')
			time.sleep(5)
			continue
	data = data[['trade_date', 'open', 'high', 'low', 'close', 'pre_close', 
					'change', 'pct_chg', 'vol', 'amount', 'turnover_rate', 'volume_ratio']]	
	data['trade_date'] = data['trade_date'].apply(lambda x: x[:4]+'-'+x[4:6]+'-'+x[6:])
	data.set_index('trade_date', inplace = True)
	data.sort_index(inplace = True)

	price_limits['trade_date'] = price_limits['trade_date'].apply(lambda x: x[:4]+'-'+x[4:6]+'-'+x[6:])
	price_limits.set_index('trade_date', inplace = True)
	price_limits.sort_index(inplace = True)
	price_limits = price_limits[['up_limit', 'down_limit']]

	# 将日线数据和当日涨跌停价合并
	# 因为日线数据不包含停牌日数据，而涨跌停数据包含停牌日数据
	# 去除涨跌停数据中的停牌日期，使二者index相同
	price_limits = price_limits.reindex(data.index)
	data = pd.concat([data, price_limits], axis = 1)

	data.index.name = 'date'

	# 保存数据
	if len(data) > 0:
		if os.path.exists(file):
			data.to_csv(file, mode = 'a', header = False, index = True)
			print('stock job {0}: {1} lines updated'.format(stock, len(data)))
		else:
			data.to_csv(file, mode = 'w', header = True, index = True)
			print('stock job {0}: {1} lines downloaded'.format(stock, len(data)))
	else:
		print('stock job {0}: no update'.format(stock))


# ==============================================================
# 						指数每日features
# ==============================================================
index_code = ['000001.SH',				# 上证指数
			'000016.SH',				# 上证50 
			'000300.SH', '399300.SZ', 	# 沪深300
			'000905.SH', '399905.SZ',	# 中证500
			'000005.SH', 				# 商业指数
			'000006.SH', 				# 地产指数
			'399001.SZ',				# 深证成指 
			'399005.SZ', 				# 中小板指
			'399006.SZ', 				# 创业板指
			'399016.SZ', ]				# 深证创新

n_indices = len(index_code)
n = 0
for code in index_code:
	n += 1
	print('=====================')
	print('index job {0}, {1}/{2}'.format(code, n, n_indices))

	if code[-2:] in ['SH', 'sh', 'Sh', 'sH']:
		file = os.path.join(data_dir, 'daily_bar_tushare_bfq', 'SH' + code[:6] + '_daily_bar_tushare_bfq.csv')
	elif code[-2:] in ['SZ', 'sz', 'Sz', 'sZ']:
		file = os.path.join(data_dir, 'daily_bar_tushare_bfq', 'SZ' + code[:6] + '_daily_bar_tushare_bfq.csv')
	else:
		continue

	# 判断下载初始日期
	if os.path.exists(file):
		data = pd.read_csv(file, index_col = 'date')
		last_date = data.index[-1]
		if last_date.replace('-', '') >= end:
			print('index job {0}: no update'.format(code))
			continue
		else:
			start_date = dates.loc[dates['date'] > last_date].iloc[0,0].replace('-', '')
	else:
		start_date = start

	time.sleep(pause)

	# 下载数据
	while True:
		try:
			data = ts.pro_bar(ts_code = code, start_date = start_date, end_date = end,
				api = api, asset = 'I', freq = 'D')
			break
		except Exception as e:
			print(e, '\ntry again....')
			time.sleep(5)
			continue
	data = data[['trade_date', 'open', 'high', 'low', 'close', 'pre_close', 
					'change', 'pct_chg', 'vol', 'amount']]	
	data['trade_date'] = data['trade_date'].apply(lambda x: x[:4]+'-'+x[4:6]+'-'+x[6:])
	data.set_index('trade_date', inplace = True)
	data.sort_index(inplace = True)
	data.index.name = 'date'

	# 保存数据
	if len(data) > 0:
		if os.path.exists(file):
			data.to_csv(file, mode = 'a', header = False, index = True)
			print('index job {0}: {1} lines updated'.format(code, len(data)))
		else:
			data.to_csv(file, mode = 'w', header = True, index = True)
			print('index job {0}: {1} lines downloaded'.format(code, len(data)))
	else:
		print('index job {0}: no update'.format(code))


# 下载结束时间
t2 = datetime.datetime.now()
print('job finished.')
print('start time: ', t1)
print('finished time: ', t2)
print('time elapsed: ', t2 - t1)
