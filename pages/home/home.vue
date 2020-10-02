<template>
	<view class="home-page">
		<view class="home-titel">
			<view class="title-left">
				<text>轻</text>
				<text class="ying">影</text>
			</view>
			<view class="title-right">
				<text>*深夜记得早睡</text>
			</view>
		</view>
		<form>
			<view class="home-search">
				<input type="text" value="" placeholder="请输入影片" @click="toSerach" />
				<i class="iconfont icon-sousuo search-icon"></i>
			</view>
		</form>
		<view class="home-swiper">
			<swiper class="swiper" circular previous-margin="40rpx" next-margin="40rpx">
				<block v-for="(item, index) in movieList" :key="index">
					<swiper-item>
						<view class="movie-box">
							<view class="movie">
								<image :src="item.imgUrl" mode="scaleToFill"></image>
								<view class="movie-text">
									<view>{{item.quotation}}</view>
									<view class="movie-name">—— {{item.source}} *</view>
								</view>
							</view>
						</view>
					</swiper-item>
				</block>
			</swiper>
		</view>
	</view>
</template>

<script>
	const C = require('../../utils/utils.js')
	
	export default {
		data() {
			return {
				movieList: []
			}
		},
		onLoad(options) {
			C.request("home").then(res => {
				this.movieList = res.data.data.movies;
				uni.showToast({
					title:"加载成功"
				})
			})
		},
		methods: {
			toSerach: () => {
				uni.navigateTo({
					url: '../search/search'
				})
			}
		}
	}
</script>

<style>
	.home-page {
		overflow: hidden;
		padding-top: 20rpx;
	}

	.home-titel {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
		padding: 0rpx 20rpx;
	}

	.home-titel .title-left {
		font-size: 48rpx;
		color: #333333;
		font-weight: bold;
	}

	.home-titel .title-left .ying {
		color: #506cec;
		margin-left: 2px;
	}

	.home-titel .title-right {
		font-size: 28rpx;
		color: #999999;
	}

	.home-search {
		padding: 0rpx 20rpx;
		position: relative;
	}

	.search-icon {
		position: absolute;
		right: 60rpx;
		top: 50%;
		font-size: 44rpx;
		margin-top: -25rpx;
		color: #999999;
	}

	.home-search input {
		/* border: 1px solid #999999; */
		box-shadow: 0px 0px 10px rgba(51, 51, 51, .1);
		border-radius: 4px;
		padding: 20rpx 94rpx 20rpx 40rpx;
		font-size: 32rpx;
	}

	.swiper {
		height: 1034rpx;
	}

	.home-swiper swiper-item .movie-box {
		padding: 40rpx 10rpx;
	}

	,
	.home-swiper swiper-item .movie {
		padding: 30rpx;
		box-shadow: 0px 0px 20px rgba(51, 51, 51, .1);
	}

	.home-swiper swiper-item .movie image {
		width: 100%;
		height: 780rpx;
	}

	.home-swiper swiper-item .movie .movie-text {
		font-size: 28rpx;
	}

	.home-swiper swiper-item .movie .movie-text .movie-name {
		display: flex;
		justify-content: flex-end;
	}
</style>
