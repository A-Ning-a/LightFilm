<template>
	<view class="my-page">
		<view class="my-title">
			<view class="title-left">
				我的
			</view>
			<view class="title-right">
				<image src="../../static/message.png"></image>
			</view>
		</view>
		<view class="my-userInfo">
			<view class="userInfo-top">
				<view class="userInfo-photo" @click="login">
					<image src="../../static/user-photo.jpg"></image>
				</view>
				<view class="userInfo-content">
					<view class="userInfo-name">
						<text>阿宁啊</text>
						<text class="alt">轻影达人</text>
					</view>
					<view class="userInfo-sign">
						骆媛媛是我的小臭🐷！
					</view>
				</view>
			</view>
			<view class="userInfo-bottom">
				<view class="bttom-item">
					<image src="../../static/history.png"></image>
					<text>观影历史</text>
				</view>
				<view class="bttom-item">
					<image src="../../static/comment.png" mode=""></image>
					<text>我的评论</text>
				</view>
				<view class="bttom-item">
					<image src="../../static/ticket.png" mode=""></image>
					<text>轻影卡券</text>
				</view>
				<view class="bttom-item">
					<image src="../../static/badge.png"></image>
					<text>我的徽章</text>
				</view>
			</view>
		</view>
		<view class="time">
			<view class="time-number">
				<text class="time-title">本周观影时常</text>
				<view class="time-content">
					<text class="number">256</text>
					<text class="danwei">min</text>
				</view>
			</view>
			<view class="time-text">
				<view class="text">
					呐，你知道吗？听说樱花飘落的速度是秒速五厘米哦
				</view>
				<view class="text-alt">
					——《秒速五厘米》
				</view>
			</view>
		</view>
		<view class="my-content">
			<view class="content-item">
				<text>我发布的主题</text>
				<i class="iconfont icon-icon"></i>
			</view>
			<view class="content-item">
				<text>我参与的话题</text>
				<i class="iconfont icon-icon"></i>
			</view>
			<view class="content-item">
				<text>我喜欢的电影</text>
				<i class="iconfont icon-icon"></i>
			</view>
		</view>
		<view class="my-content">
			<view class="content-item">
				<text>帮助与反馈</text>
				<i class="iconfont icon-icon"></i>
			</view>
			<view class="content-item">
				<text>分享APP</text>
				<i class="iconfont icon-icon"></i>
			</view>
			<view class="content-item">
				<text>我的设置</text>
				<i class="iconfont icon-icon"></i>
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
			login(){
				uni.redirectTo({
					url:"../login/login"
				})
			}
		}
	}
</script>

<style>

	.iconfont {
		font-size: 20px;
	}

	.my-page {
		background-color: #f6f7fb;
		overflow: hidden;
	}

	.my-title {
		display: flex;
		padding: 30rpx 40rpx;
		justify-content: space-between;
		color: #333333;
		background-color: #FFFFFF;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		box-sizing: border-box;
		z-index: 9999;
	}

	.my-title .title-left {
		font-size: 48rpx;
		font-weight: bold;
	}

	.my-title .title-right image{
		width: 50rpx;
		height: 50rpx;
		vertical-align: middle;
	}

	.my-userInfo {
		background-color: #FFFFFF;
		padding: 40rpx;
		margin-top: 134rpx;
		margin-bottom: 20rpx;
	}

	.my-userInfo .userInfo-top {
		display: flex;
		margin-bottom: 40rpx;
		align-items: center;
	}

	.my-userInfo .userInfo-top .userInfo-photo {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		border: hidden;
		margin-right: 40rpx;
		overflow: hidden;
	}

	.my-userInfo .userInfo-top .userInfo-photo image {
		width: 100%;
		height: 100%;
	}

	.my-userInfo .userInfo-top .userInfo-name {
		font-size: 36rpx;
		color: #333333;
		font-weight: bold;
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
	}

	.my-userInfo .userInfo-top .userInfo-name .alt {
		padding: 2rpx 6rpx;
		color: #506CEC;
		border: 1px solid #506CEC;
		border-radius: 2px;
		font-size: 24rpx;
		font-weight: normal;
		margin-left: 20rpx;

	}

	.my-userInfo .userInfo-top .userInfo-sign {
		font-size: 30rpx;
		color: #999999;
	}

	.my-userInfo .userInfo-bottom {
		display: flex;
		justify-content: space-between;
	}

	.my-userInfo .userInfo-bottom .bttom-item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.my-userInfo .userInfo-bottom .bttom-item image {
		width: 65rpx;
		height: 65rpx;
		margin-bottom: 10rpx;
	}

	.my-userInfo .userInfo-bottom .bttom-item text {
		font-size: 28rpx;
	}

	.time {
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
		display: flex;
		justify-content: space-between;
		padding: 40rpx;
		font-size: 28rpx;
		/* color: #666666; */
	}

	.time .time-number {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-right: 60rpx;
	}

	.time .time-number .time-content {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.time .time-number .time-content .number {
		font-weight: bold;
		font-size: 52rpx;
		margin-right: 28rpx;
		color: #333333;
	}

	.time .time-text .text {
		margin-bottom: 20rpx;
	}

	.time .time-text .text-alt {
		text-align: right;
		color: #999999;
	}

	.danwei {
		margin-bottom: 8rpx;
	}

	.my-content {
		padding: 20rpx 0rpx;
		background-color: #FFFFFF;
		font-size: 30rpx;
		margin-bottom: 20rpx;
	}
	
	.my-content+.my-content{
		margin-bottom: 0rpx;
	}

	.my-content .content-item {
		padding: 20rpx 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.my-content .content-item .iconfont {
		line-height: 20px;
		color: #333333;
	}
</style>
