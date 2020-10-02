<template>
	<view class="movies-page" @touchstart="startFn" @touchend="endFn">
		<view class="movies-title">
			<view class="title-left">
				影片大全
			</view>
			<view class="title-right">
				<navigator url="../search/search">
					<i class="iconfont icon-sousuo"></i>
				</navigator>
				<i class="iconfont icon-santiaogang"></i>
			</view>
		</view>
		<view class="movies-swiper">
			<swiper class="swiper" circular indicator-dots autoplay>
				<swiper-item>
					<view class="swiper-item">
						<image src="https://hbimg.huabanimg.com/89af7d20df0f721d1499cf5106dcee29c4372c7eab62-Bkpb9S_fw658" mode="aspectFill"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="https://hbimg.huabanimg.com/89af7d20df0f721d1499cf5106dcee29c4372c7eab62-Bkpb9S_fw658" mode="aspectFill"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="https://hbimg.huabanimg.com/89af7d20df0f721d1499cf5106dcee29c4372c7eab62-Bkpb9S_fw658" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="moves-tab">
			<view class="tabBar">
				<block v-for="(plate, index) in plateArr">
					<view @click="selected(index)" class="tabBar-item" :class="activeI == index ? 'active' : ''">
						° {{ plate }}
					</view>
				</block>
			</view>
			<swiper class="tabContent-box" :current="activeI" @change="changeCurrent">
				<swiper-item class="tabContent" :class="fixed ? 'fixed' : ''">
					<block v-show="movieList" v-for="(item, index) in movieList" :key="index">
						<view class="tabContent-item" @click="toDetail">
							<view class="item-img">
								<image :src="item.imgUrl" mode="widthFix"></image>
							</view>
							<view class="item-content-box">
								<view class="item-content">
									<view class="content-name">
										{{item.name}}
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
											<text>{{item.average.toFixed(1)}}</text>
										</view>
									</view>
									<view class="content-actor-box">
										<view class="content-actor">
											导演：<text>{{item.director}}</text>
										</view>
										<view class="content-casts">
											主演：王宝强 / 郭富城 / 林志玲
										</view>
									</view>
								</view>
								<view class="item-icon">
									<i class="iconfont icon-jiantou-xia"></i>
								</view>
							</view>
						</view>
					</block>
				</swiper-item>
				<swiper-item class="tabContent" :class=" fixed ? 'fixed' : ''">
					<block v-show="movieList" v-for="(item, index) in movieList" :key="index">
						<view class="tabContent-item">
							<view class="item-img">
								<image :src="item.imgUrl" mode="widthFix"></image>
							</view>
							<view class="item-content-box">
								<view class="item-content">
									<view class="content-name">
										{{item.name}}
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
											<text>{{item.average}}</text>
										</view>
									</view>
									<view class="content-actor-box">
										<view class="content-actor">
											导演：<text>{{item.director}}</text>
										</view>
										<view class="content-casts">
											主演：王宝强 / 郭富城 / 林志玲
										</view>
									</view>
								</view>
								<view class="item-icon">
									<i class="iconfont icon-jiantou-xia"></i>
								</view>
							</view>
						</view>
					</block>
				</swiper-item>
				<swiper-item class="tabContent" :class=" fixed ? 'fixed' : ''">
					<view class="tabContent-item">
						<view class="item-img">
							<image src="https://hbimg.huabanimg.com/91ce6836eb6e97cfbd87f95563272f56df775ac61e9a0-jUwsGo_fw658" mode="widthFix"></image>
						</view>
						<view class="item-content-box">
							<view class="item-content">
								<view class="content-name">
									道士下山
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
										<text>9.0</text>
									</view>
								</view>
								<view class="content-actor-box">
									<view class="content-actor">
										导演：<text>陈凯歌</text>
									</view>
									<view class="content-casts">
										主演：王宝强 / 郭富城 / 林志玲
									</view>
								</view>
							</view>
							<view class="item-icon">
								<i class="iconfont icon-jiantou-xia"></i>
							</view>
						</view>
					</view>
					<view class="tabContent-item">
						<view class="item-img">
							<image src="https://hbimg.huabanimg.com/a7c7042aa85e6c44d786e9aeb82f57d7e1a978404c89e-j5lk9e_fw658" mode="widthFix"></image>
						</view>
						<view class="item-content-box">
							<view class="item-content">
								<view class="content-name">
									寄生虫
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
										<text>8.7</text>
									</view>
								</view>
								<view class="content-actor-box">
									<view class="content-actor">
										导演：<text>奉俊昊</text>
									</view>
									<view class="content-casts">
										主演： 宋康昊 / 李善均 / 赵汝贞
									</view>
								</view>
							</view>
							<view class="item-icon">
								<i class="iconfont icon-jiantou-xia"></i>
							</view>
						</view>
					</view>
					<view class="tabContent-item">
						<view class="item-img">
							<image src="https://hbimg.huabanimg.com/5e8d157fc95ba76cabf075b6e03470ee0ccbe0342ed84-AbaaU1_fw658" mode="widthFix"></image>
						</view>
						<view class="item-content-box">
							<view class="item-content">
								<view class="content-name">
									未来的未来
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
										<text>6.8</text>
									</view>
								</view>
								<view class="content-actor-box">
									<view class="content-actor">
										导演：<text>细田守</text>
									</view>
									<view class="content-casts">
										主演：上白石萌歌 / 黑木华 / 星野源
									</view>
								</view>
							</view>
							<view class="item-icon">
								<i class="iconfont icon-jiantou-xia"></i>
							</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item @touchmove.stop="null" class="tabContent" :class=" fixed ? 'fixed' : ''">
					<view class="tabContent-item">
						<view class="item-img">
							<image src="https://hbimg.huabanimg.com/91ce6836eb6e97cfbd87f95563272f56df775ac61e9a0-jUwsGo_fw658" mode="widthFix"></image>
						</view>
						<view class="item-content-box">
							<view class="item-content">
								<view class="content-name">
									道士下山
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
										<text>9.0</text>
									</view>
								</view>
								<view class="content-actor-box">
									<view class="content-actor">
										导演：<text>陈凯歌</text>
									</view>
									<view class="content-casts">
										主演：王宝强 / 郭富城 / 林志玲
									</view>
								</view>
							</view>
							<view class="item-icon">
								<i class="iconfont icon-jiantou-xia"></i>
							</view>
						</view>
					</view>
					<view class="tabContent-item">
						<view class="item-img">
							<image src="https://hbimg.huabanimg.com/a7c7042aa85e6c44d786e9aeb82f57d7e1a978404c89e-j5lk9e_fw658" mode="widthFix"></image>
						</view>
						<view class="item-content-box">
							<view class="item-content">
								<view class="content-name">
									寄生虫
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
										<text>8.7</text>
									</view>
								</view>
								<view class="content-actor-box">
									<view class="content-actor">
										导演：<text>奉俊昊</text>
									</view>
									<view class="content-casts">
										主演： 宋康昊 / 李善均 / 赵汝贞
									</view>
								</view>
							</view>
							<view class="item-icon">
								<i class="iconfont icon-jiantou-xia"></i>
							</view>
						</view>
					</view>
					<view class="tabContent-item">
						<view class="item-img">
							<image src="https://hbimg.huabanimg.com/5e8d157fc95ba76cabf075b6e03470ee0ccbe0342ed84-AbaaU1_fw658" mode="widthFix"></image>
						</view>
						<view class="item-content-box">
							<view class="item-content">
								<view class="content-name">
									未来的未来
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
										<text>6.8</text>
									</view>
								</view>
								<view class="content-actor-box">
									<view class="content-actor">
										导演：<text>细田守</text>
									</view>
									<view class="content-casts">
										主演：上白石萌歌 / 黑木华 / 星野源
									</view>
								</view>
							</view>
							<view class="item-icon">
								<i class="iconfont icon-jiantou-xia"></i>
							</view>
						</view>
					</view>
				</swiper-item>
			
			</swiper>
			<view>

			</view>
		</view>
	</view>
</template>

<script>
	const C = require("../../utils/utils.js")
	export default {
		data() {
			return {
				plateArr: ["推荐", "热门", "榜单", "专题"],
				activeI: 0,
				currentP: 0,
				timer: null,
				fixed: false,
				movieList: []
			}
		},
		onLoad(option) {
			C.request('Recommend').then(res => {
				this.movieList = res.data.data.movies;
				uni.showToast({
					title: '加载完成'
				});
			});
		},
		onPageScroll(e) {
			if (e.scrollTop >= 0 && e.scrollTop < 184) {
				this.currentP = e.scrollTop;
				this.fixed = false;
			} else {
				clearTimeout(this.timer);
				this.fixed = true;
			}
			console.log(this.fixed);
		},
		onReachBottom() {
			console.log(1)
		},
		methods: {
			selected(index) {
				this.activeI = index;
			},
			changeCurrent(e) {
				this.activeI = e.detail.current;
			},
			endFn() {
				const that = this;
				this.timer = setTimeout(function() {
					console.log(that.currentP)
					if (that.currentP > 0 && that.currentP < 184) {
						if (that.currentP > 0 && that.currentP <= 127) {
							that.currentP = 0;
						} else if (that.currentP > 127 && that.currentP < 184) {
							that.currentP = 184;
						}
						wx.pageScrollTo({
							scrollTop: that.currentP,
							duration: 300
						})
					}
				}, 500)
			},
			startFn() {
				if (this.timer) {
					clearTimeout(this.timer);
				}
			},
			toDetail() {
				uni.navigateTo({
					url:"/pages/detail/detail"
				})
			}
		}
	}
</script>

<style>
	.movies-title {
		display: flex;
		justify-content: space-between;
		padding: 40rpx;
		font-size: 48rpx;
		align-items: center;
		color: #333333;
	}

	.movies-title .title-left {
		font-weight: bold;
	}

	.movies-title .title-right {
		display: flex;
	}
	
	.movies-title .title-right navigator {
		display: flex;
	}

	.movies-title .title-right i {
		margin-left: 20rpx;
		color: #333333;
	}
	
	

	.movies-swiper {
		padding: 0rpx 40rpx;
	}

	.movies-swiper .swiper {
		border-radius: 4px;
		overflow: hidden;
		height: 220rpx;
		box-shadow: 0px 0px 10px rgba(51, 51, 51, .1);
	}

	.movies-swiper .swiper .swiper-item {
		background-color: #eeeeee;
	}

	.movies-swiper .swiper .swiper-item image {
		width: 100%;
	}

	.moves-tab .tabBar {
		padding: 40rpx;
		display: flex;
		justify-content: space-between;
		background-color: #FFFFFF;
		width: 100vw;
		box-sizing: border-box;
	}

	.moves-tab .tabBar .tabBar-item {
		color: #333333;
		background-color: #f6f7fb;
		padding: 20rpx 40rpx;
		font-size: 28rpx;
		border-radius: 4px;
		transition: all .3s;
	}

	.moves-tab .tabBar .tabBar-item.active {
		background-color: #506CEC;
		color: #FFFFFF;
		box-shadow: 0px 2px 5px rgba(40, 55, 120, .4);
		font-weight: bold;
	}

	.tabContent-box {
		height: calc(100vh - 254.4rpx);
	}

	.tabContent-box swiper-item {
		padding-top: 90rpx;
		overflow-y: hidden;
		box-sizing: border-box;
	}

	.moves-tab .tabContent.fixed{
		overflow-y: auto;
	}

	.moves-tab .tabContent .tabContent-item {

		display: flex;
		box-shadow: 0px 2px 10px rgba(40, 55, 120, .1);
		margin: 0rpx 40rpx;
		height: 210rpx;
		border-radius: 4px;
		align-items: flex-end;
		padding: 20rpx;
		box-sizing: border-box;
		margin-bottom: 90rpx;
		color: #333333;

	}

	.moves-tab .tabContent .item-img {
		margin-right: 20rpx;
		border-radius: 4px;
		overflow: hidden;
	}

	.moves-tab .tabContent .item-img image {
		width: 160rpx;
		height: 240rpx !important;
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
		margin-left: 5rpx;
	}

	.content-actor-box {
		font-size: 24rpx;
		color: #666666;
	}

	.tabContent-item .item-icon {
		align-self: flex-start;
		padding: 2rpx 10rpx;
		background-color: #506CEC;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		height: 24rpx;
	}

	.tabContent-item .item-icon .iconfont {
		line-height: 1;
		font-size: 24rpx;
	}

	.item-content-box {
		display: flex;
		justify-content: space-between;
		width: calc(100% - 160rpx);
	}

	.content-name {
		font-size: 38rpx;
	}
</style>
