<template>
	<view class="search-page">
		<view class="search-input">
			<input type="text" value="" placeholder="请输入影片" />
			<i class="iconfont icon-sousuo"></i>
		</view>
		<view class="search-block">
			<view class="search-history">
				<view class="title">
					最近搜索
				</view>
				<view class="history-box">
					<view class="history-item">
						<image src="https://img9.doubanio.com/view/photo/l/public/p2236250836.webp" mode="widthFix"></image>
						<text>道士下山</text>
					</view>
					<view class="history-item">
						<image src="https://hbimg.huabanimg.com/a7c7042aa85e6c44d786e9aeb82f57d7e1a978404c89e-j5lk9e_fw658" mode="widthFix"></image>
						<text>寄生虫</text>
					</view>
					<view class="history-item">
						<image src="https://img9.doubanio.com/view/photo/l/public/p2520174596.webp" mode="widthFix"></image>
						<text>未来的未来</text>
					</view>
				</view>
			</view>
			<view class="search-hot">
				<view class="title">
					最近热门
				</view>
				<view class="hot-box">
					<view class="hot-item">
						悲伤逆流成河
					</view>
					<view class="hot-item">
						玛雅蜜蜂历险记
					</view>
					<view class="hot-item">
						影
					</view>
					<view class="hot-item">
						李茶的姑妈
					</view>
					<view class="hot-item">
						超能泰坦
					</view>
					<view class="hot-item">
						阿凡提之奇缘历险
					</view>
				</view>
			</view>
		</view>
		<view class="search-none">
			<view class="tabContent-item">
				<view class="item-img">
					<image src="https://img9.doubanio.com/view/photo/l/public/p2530515855.webp" mode="widthFix"></image>
				</view>
				<view class="item-content-box">
					<view class="content-top">
						<view class="content-name">
							影
						</view>
						<view class="content-rating">
							<view class="rating-start">
								<image src="../../static/start_full.png"></image>
								<image src="../../static/start_full.png"></image>
								<image src="../../static/start_full.png"></image>
								<image src="../../static/start_none.png"></image>
								<image src="../../static/start_none.png"></image>
							</view>
							<view class="rating-average">
								<text>7.2</text>
							</view>
						</view>
					</view>
					<view class="content-actor-box">
						<view class="content-actor">
							导演：<text>张艺谋</text>
						</view>
						<view class="content-casts">
							主演：邓超 / 孙俪 / 郑恺
						</view>
					</view>
				</view>
			</view>
			<view class="tabContent-item">
				<view class="item-img">
					<image src="https://img9.doubanio.com/view/photo/l/public/p2518243296.webp" mode="widthFix"></image>
				</view>
				<view class="item-content-box">
					<view class="content-top">
						<view class="content-name">
							如影随心
						</view>
						<view class="content-rating">
							<view class="rating-start">
								<image src="../../static/start_full.png"></image>
								<image src="../../static/start_full.png"></image>
								<image src="../../static/start_none.png"></image>
								<image src="../../static/start_none.png"></image>
								<image src="../../static/start_none.png"></image>
							</view>
							<view class="rating-average">
								<text>4.3</text>
							</view>
						</view>
					</view>
					<view class="content-actor-box">
						<view class="content-actor">
							导演：<text>霍建起</text>
						</view>
						<view class="content-casts">
							主演：陈晓 / 杜鹃 / 王嘉
						</view>
					</view>
				</view>
			</view>
			<view class="tabContent-item">
				<view class="item-img">
					<image src="https://img1.doubanio.com/view/photo/l/public/p792223507.webp" mode="widthFix"></image>
				</view>
				<view class="item-content-box">
					<view class="content-top">
						<view class="content-name">
							谍影重重
						</view>
						<view class="content-rating">
							<view class="rating-start">
								<image src="../../static/start_full.png"></image>
								<image src="../../static/start_full.png"></image>
								<image src="../../static/start_full.png"></image>
								<image src="../../static/start_full.png"></image>
								<image src="../../static/start_none.png"></image>
							</view>
							<view class="rating-average">
								<text>8.8</text>
							</view>
						</view>
					</view>
					<view class="content-actor-box">
						<view class="content-actor">
							导演：<text>保罗·格林格拉斯</text>
						</view>
						<view class="content-casts">
							主演： 马特·达蒙 / 朱丽娅·斯蒂尔斯
						</view>
					</view>
				</view>
			</view>
			<view class="tabContent-item">
				<view class="item-img">
					<image src="https://img9.doubanio.com/view/photo/l/public/p2236250836.webp" mode="widthFix"></image>
				</view>
				<view class="item-content-box">
					<view class="content-top">
						<view class="content-name">
							古墓兽影
						</view>
						<view class="content-rating">
							<view class="rating-start">
								<image src="../../static/start_full.png"></image>
								<image src="../../static/start_full.png"></image>
								<image src="../../static/start_none.png"></image>
								<image src="../../static/start_none.png"></image>
								<image src="../../static/start_none.png"></image>
							</view>
							<view class="rating-average">
								<text>3.4</text>
							</view>
						</view>
					</view>
					<view class="content-actor-box">
						<view class="content-actor">
							导演：<text>李麒麟</text>
						</view>
						<view class="content-casts">
							主演：聂远 / 莫少聪 / 安泽豪
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

	.iconfont {
		font-size: 24px;
	}

	.icon-sousuo:before {
		color: #999999;
	}

	.search-page {
		padding: 0rpx 25rpx;
	}

	.search-input {
		position: relative;
	}

	.search-input input {
		background-color: #f6f7fb;
		/* margin: 0rpx 40rpx; */
		padding: 20rpx 40rpx;
		padding-right: 88rpx;
		border-radius: 6px;
		margin-bottom: 40rpx;
	}

	.search-input i {
		position: absolute;
		right: 20rpx;
		top: 50%;
		margin-top: -12px;
	}

	.search-history {
		margin-bottom: 40rpx;
	}

	.search-history .history-box {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.search-history .history-box .history-item {
		width: 30%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.search-history .history-box .history-item image {
		width: 100%;
		margin-bottom: 10rpx;
		vertical-align: middle;
		border-radius: 4px;
		height: 304rpx!important;
	}

	.search-history .history-box .history-item text {
		font-size: 28rpx;
	}

	.title {
		font-size: 32rpx;
		color: #333333;
		margin-bottom: 20rpx;
	}

	.hot-box {
		display: flex;
		/* justify-content: space-between; */
		flex-wrap: wrap;
	}

	.hot-item {
		padding: 10rpx 40rpx;
		font-size: 28rpx;
		background-color: #F6F7FB;
		margin-bottom: 20rpx;
		margin-right: 20rpx;
		border-radius: 4px;
		margin-bottom: 40rpx;
	}

	.tabContent-item {
		display: flex;
		border-radius: 4px;
		align-items: flex-end;
		box-sizing: border-box;
		margin-bottom: 40rpx;
		color: #333333;
		height: 240rpx;
	}

	.item-img {
		margin-right: 20rpx;
		border-radius: 4px;
		overflow: hidden;
	}

	.item-img image {
		width: 160rpx;
		vertical-align: middle;
	}

	.content-rating {
		display: flex;
		align-items: center;
		margin: 10rpx 0rpx;
	}

	.content-rating .rating-start {
		display: flex;
		align-items: center;
	}

	.content-rating .rating-start image {
		width: 25rpx;
		height: 25rpx;
		margin-right: 15rpx;
	}

	.content-rating .rating-average {
		color: #506CEC;
		font-size: 24rpx;
		margin-left: 20rpx;
		font-weight: bold;
	}

	.content-actor {
		margin-bottom: 10rpx;
	}

	.content-actor-box {
		font-size: 28rpx;
		color: #666666;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 10rpx;
	}

	.tabContent-item .item-icon .iconfont {
		line-height: 1;
		font-size: 24rpx;
	}

	.item-content-box {
		display: flex;
		justify-content: space-between;
		width: calc(100% - 160rpx);
		flex-direction: column;
		height: 100%;
	}

	.content-name {
		font-size: 38rpx;
		margin-top: 10rpx;
	}
	
	.search-none{
		display: none;
	}
	
	.search-block{
		/* display: none; */
	}
</style>
