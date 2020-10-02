<template>
	<view class="comment-page">
		<view class="userInfo-content">
			<view class="userInfo-box">
				<view class="userInfo">
					<image src="../../static/user-photo.jpg"></image>
					<view class="userInfo-name">
						<text class="nickName">进击的M先生</text>
						<text class="date">10/10</text>
					</view>
				</view>
				<i class="more iconfont icon-sandian"></i>
			</view>
			<view class="userInfo-text">
				<text>梦里相逢人不见，若知是梦何须醒，纵然梦里常相会，怎比真如见一回</text>
				<image src="https://img3.doubanio.com/view/photo/l/public/p2520448771.webp"></image>
			</view>
		</view>
		<view class="userInfo-content">
			<view class="userInfo-box">
				<view class="userInfo">
					<image src="../../static/user-photo.jpg"></image>
					<view class="userInfo-name">
						<text class="nickName">进击的M先生</text>
						<text class="date">10/10</text>
					</view>
				</view>
				<i class="more iconfont icon-sandian"></i>
			</view>
			<view class="userInfo-text">
				<text>梦里相逢人不见，若知是梦何须醒，纵然梦里常相会，怎比真如见一回</text>
				<view class="text-box">
					<image src="https://img3.doubanio.com/view/photo/l/public/p2520448771.webp"></image>
					<image src="https://img3.doubanio.com/view/photo/l/public/p2520448771.webp"></image>
					<image src="https://img3.doubanio.com/view/photo/l/public/p2520448771.webp"></image>
				</view>

			</view>
		</view>
		<view class="userInfo-content">
			<view class="userInfo-box">
				<view class="userInfo">
					<image src="../../static/user-photo.jpg"></image>
					<view class="userInfo-name">
						<text class="nickName">进击的M先生</text>
						<text class="date">10/10</text>
					</view>
				</view>
				<i class="more iconfont icon-sandian"></i>
			</view>
			<view class="userInfo-text">
				<text>梦里相逢人不见，若知是梦何须醒，纵然梦里常相会，怎比真如见一回</text>
				<image src="https://img3.doubanio.com/view/photo/l/public/p2520448771.webp"></image>
			</view>
		</view>
		<view class="comment-btn">
			<i class="iconfont icon-hao"></i>
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
	.comment-page {
		background-color: #F6F7FB;
		overflow: hidden;
	}

	.userInfo-content {
		background-color: #FFFFFF;
		margin-top: 20rpx;
		padding: 20rpx 40rpx;
	}

	.userInfo {
		display: flex;
		align-items: center;
		color: #333333;
		font-size: 32rpx;
	}

	.userInfo>image {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}

	.userInfo-name {
		display: flex;
		flex-direction: column;
	}

	.userInfo-text text {
		font-size: 30rpx;
		color: #333333;
	}

	.userInfo-text>image {
		width: 100%;
		height: 400rpx;
		margin-top: 20rpx;
		vertical-align: middle;
	}

	.nickName {
		font-size: 30rpx;
	}

	.date {
		font-size: 28rpx;
		color: #999999;
	}

	.userInfo-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
	}

	.more {
		color: #333333;
	}

	.text-box {
		display: flex;
		margin-top: 20rpx;
		justify-content: space-between;
	}

	.text-box>image {
		width: 220rpx;
		height: 180rpx;
	}

	.comment-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100rpx;
		width: 100rpx;
		position: fixed;
		right: 40rpx;
		bottom: 100rpx;
		border-radius: 50%;
		background-color: #506CEC;
		box-shadow: 0px 0px 10px rgba(86, 117, 255, 1);
		font-weight: bold;
		color: #FFFFFF;
	}
</style>
