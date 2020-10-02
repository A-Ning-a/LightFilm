<template>
	<view class="detail-page">
		<view class="detail-img">
			<image src="https://img9.doubanio.com/view/photo/l/public/p2530515855.webp" mode="aspectFill"></image>
		</view>
		<view class="detail-content">
			<view class="detail-title">
				<text class="movie-name">影</text>
				<text class="movie-type">动作/古装/剧情</text>
			</view>
			<view class="movie-rating">
				<view class="movie-star">
					<image src="../../static/start_full.png"></image>
					<image src="../../static/start_full.png"></image>
					<image src="../../static/start_full.png"></image>
					<image src="../../static/start_full.png"></image>
					<image src="../../static/start_none.png"></image>
				</view>
				<text>9.0</text>
			</view>
			<view class="detail-summary">
				<view class="summary-title">
					剧情简介
				</view>
				<view class="summary-context">
					这是一个关于替身的故事，替身自古有之，人称“影子”，有刺杀，就有影子，影子必须在危急关头挺身而出，替主人博回一命；影子又必须与真身互为一体，令旁人真假难辨如同孪生，若无真身，影子何在...关于影子的来龙去脉，真身从来忌讳......
				</view>
			</view>
			<view class="movie-photo">
				<view class="photo-title">剧照</view>
				<view>
					<scroll-view class="photo-img" scroll-x="true" scroll-left="120">
						<view class="item">
							<image src="https://img3.doubanio.com/view/photo/l/public/p2530516030.webp"></image>
						</view>
						<view class="item">
							<image src="https://img1.doubanio.com/view/photo/l/public/p2530516018.webp"></image>
						</view>
						<view class="item">
							<image src="https://img1.doubanio.com/view/photo/l/public/p2530516007.webp"></image>
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="movie-photo">
				<view class="photo-title">演员列表</view>
				<view>
					<scroll-view class="photo-img" scroll-x="true" scroll-left="120">
						<view class="item item1">
							<image src="https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p805.webp"></image>
						</view>
						<view class="item item1">
							<image src="https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1415690807.36.webp"></image>
						</view>
						<view class="item item1">
							<image src="https://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366015827.84.webp"></image>
						</view>
						<view class="item item1">
							<image src="https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1445948736.67.webp"></image>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<view class="movie-btn">立即观看</view>
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
	.detail-img {
		width: 100%;
		height: 40vh;
		position: fixed;
		top: 0;
		left: 0;
		overflow: hidden;
	}

	.detail-img image {
		width: 100%;
		height: 200%;
		position: absolute;
		bottom: 0;
		left: 0;
	}

	.detail-content {
		margin-top: 40vh;
		background-color: #FFFFFF;
		z-index: 1;
		position: absolute;
		width: 100%;
		box-sizing: border-box;
		/* padding: 30rpx; */
		padding-bottom: 150rpx;
	}

	.detail-title {
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
		padding: 30rpx 30rpx 0rpx;
	}

	.detail-title .movie-name {
		font-size: 48rpx;
		color: #333333;
		font-weight: bold;
		padding-right: 20rpx;
	}

	.detail-title .movie-type {
		font-size: 28rpx;
		color: #999999;
	}

	.movie-rating {
		display: flex;
		align-items: center;
		margin-bottom: 40rpx;
		padding: 0rpx 30rpx;
	}

	.movie-star {
		display: flex;
		align-items: center;
	}

	.movie-star image {
		width: 25rpx;
		height: 25rpx;
		margin-right: 20rpx;
	}

	.movie-rating text {
		font-size: 28rpx;
		color: #506CEC;
		font-weight: bold;
	}

	.detail-summary {
		/* margin-bottom: 40rpx; */
		padding: 0rpx 30rpx;
	}

	.detail-summary .summary-title {
		font-weight: bold;
		margin-bottom: 20rpx;
		font-size: 32rpx;
		color: #333333;
	}

	.detail-summary .summary-context {
		font-size: 24rpx;
		color: #999999;
		position: relative;
	}

	.detail-summary .summary-context::before {
		content: "[更多]";
		color: #506CEC;
		position: absolute;
		right: 0;
		bottom: 0;
		background-color: #FFFFFF;
		padding: 0rpx 6rpx;
	}

	.movie-btn {
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 30rpx 0;
		text-align: center;
		color: #FFFFFF;
		background-color: #506CEC;
		z-index: 2;
	}
	
	.movie-photo {
		margin-top: 40rpx;
	}
	
	.photo-img {
		white-space: nowrap;
		margin-top: 20rpx;
	}
	
	.photo-title {
		padding-left: 30rpx;
		font-size: 32rpx;
		color: #333333;
		font-weight: bold;
	}
	
	.photo-img .item{
		display: inline-block;
		width: 280rpx;
		height: 200rpx;
		margin-right: 20rpx;
	}
	
	.photo-img .item.item1{
		display: inline-block;
		width: 160rpx;
		height: 220rpx;
		margin-right: 20rpx;
	}
	
	.photo-img .item:first-child{
		margin-left: 20rpx;
	}
	
	.photo-img .item image{
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}
</style>
