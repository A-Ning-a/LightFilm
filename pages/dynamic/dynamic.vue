<template>
	<view class="dynamic-page">
		<view class="dynamic-title">
			<view class="title-left">
				社区
			</view>
			<view class="title-right">
				<image src="../../static/edit.png"></image>
			</view>
		</view>
		<view class="title-tab-box">
			<view class="title-tab">
				<block v-for="(plate, index) in plateArr">
					<view class="tabBar-item" :class="activeI == index ? 'active' : ''" @click="selected(index)">
						{{ plate }}
					</view>
				</block>
			</view>
			<view class="tabBar-line" :style="{left: p + 'rpx'}" ref="line"></view>
		</view>
		<swiper :current="activeI" @change="changeCurrent" @transition="move" @animationfinish="endMove">
			<swiper-item>
				<view class="movie-box">
					<image src="https://hbimg.huabanimg.com/f79ae0bc77405ae379822db4a080fe7a1fabac2e56e9-TmYL7R_fw658"></image>
					<view class="movie-text">
						<view class="movie-top">
							<image src="../../static/movie-logo.png"></image>
							<text>每周影报</text>
						</view>
						<view class="movie-bottom">
							<view class="movie-title">
								盘点2018年9月来，特效细节最好的十大电影的拍摄历程
							</view>
							<view class="movie-alt">
								三观很正的青年
							</view>
						</view>
					</view>
				</view>
				<view class="movie-list">
					<image src="https://hbimg.huabanimg.com/addd108e356d8008b73259640a02b06f582a4366cbba-s3R7EC_fw658"></image>
					<view class="list-text">
						<text class="text-title">“三体”电影究竟想要带给我们怎样的世界观</text>
						<text class="text-alt">毁掉的世界观</text>
					</view>
				</view>
				<view class="movie-list">
					<image src="https://hbimg.huabanimg.com/b0f2be444ac0b149641e47f702914225c33f842d1e348-WxwjoB_fw658"></image>
					<view class="list-text">
						<text class="text-title">探究“捉妖记”创作团队背后的拍摄世界</text>
						<text class="text-alt">会拍摄的铅笔</text>
					</view>
				</view>
				<view class="text-box">
					<view class="text-box-top">
						<view class="text-box-title">
							#你最喜欢的一部电影
						</view>
						<view class="text-box-content">
							本次讨论向全体好友限时开放，感兴趣的朋友可以无条件加入本次讨论
						</view>
					</view>
					<view class="text-box-bottom">
						<text>325人正在进行讨论</text>
						<i class="iconfont icon-jiantou-xia"></i>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="userInfo-content">
					<view class="userInfo">
						<image src="../../static/user-photo.jpg"></image>
						<text>进击的M先生</text>
					</view>
					<view class="userInfo-text">
						<text>梦里相逢人不见，若知是梦何须醒，纵然梦里常相会，怎比真如见一回</text>
						<image src="https://hbimg.huabanimg.com/ea446e516c6921dea5d7affd1feeef6fe582c3ce4542-XRDJh0_fw658"></image>
					</view>
					<view class="userInfo-message">
						<view class="message">
							<i class="iconfont icon-pinglun1"></i>
							<text>120</text>
						</view>
						<view class="message">
							<i class="iconfont icon-fenxiangzhuanfafasongzhijiantoufangxingshar"></i>
							<text>28</text>
						</view>
						<view class="message">
							<i class="iconfont icon-dianzan"></i>
							<text>32</text>
						</view>
					</view>
				</view>
				<view class="userInfo-content">
					<view class="userInfo">
						<image src="../../static/user-photo.jpg"></image>
						<text>进击的M先生</text>
					</view>
					<view class="userInfo-text">
						<text>梦里相逢人不见，若知是梦何须醒，纵然梦里常相会，怎比真如见一回</text>
						<image src="https://hbimg.huabanimg.com/ea446e516c6921dea5d7affd1feeef6fe582c3ce4542-XRDJh0_fw658"></image>
					</view>
					<view class="userInfo-message">
						<view class="message">
							<i class="iconfont icon-pinglun1"></i>
							<text>120</text>
						</view>
						<view class="message">
							<i class="iconfont icon-fenxiangzhuanfafasongzhijiantoufangxingshar"></i>
							<text>28</text>
						</view>
						<view class="message">
							<i class="iconfont icon-dianzan"></i>
							<text>32</text>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="talk-box">
					<view class="talk-item">
						<view class="item-img">
							<image src="../../static/coffee.png"></image>
						</view>
						<view class="item-text">
							<view class="talk-title">
								看电影的时你喜欢喝什么
							</view>
							<view class="talk-context">
								已有4302人参与了该话题的讨论
							</view>
						</view>
					</view>
					<view class="talk-item">
						<view class="item-img">
							<image src="../../static/book.png"></image>
						</view>
						<view class="item-text">
							<view class="talk-title">
								关于你和TA的电影往事
							</view>
							<view class="talk-context">
								已有1320人参与了该话题的讨论
							</view>
						</view>
					</view>
					<view class="talk-item">
						<view class="item-img">
							<image src="../../static/movie.png"></image>
						</view>
						<view class="item-text">
							<view class="talk-title">
								你是什么时候爱上了电影
							</view>
							<view class="talk-context">
								已有127人参与了该话题的讨论
							</view>
						</view>
					</view>
					<view class="talk-item">
						<view class="item-img">
							<image src="../../static/music.png"></image>
						</view>
						<view class="item-text">
							<view class="talk-title">
								你最喜欢的电影主题曲是哪首
							</view>
							<view class="talk-context">
								已有689人参与了该话题的讨论
							</view>
						</view>
					</view>
					<view class="talk-item">
						<view class="item-img">
							<image src="../../static/ku.png"></image>
						</view>
						<view class="item-text">
							<view class="talk-title">
								你认为最酷的电影角色是什么
							</view>
							<view class="talk-context">
								已有4302人参与了该话题的讨论
							</view>
						</view>
					</view>
					<view class="talk-item">
						<view class="item-img">
							<image src="../../static/type.png"></image>
						</view>
						<view class="item-text">
							<view class="talk-title">
								你喜欢的电影类型是什么
							</view>
							<view class="talk-context">
								已有368人参与了该话题的讨论
							</view>
						</view>
					</view>

				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				plateArr: ["热门推荐", "达人动态", "话题聚焦", "同城轻友"],
				activeI: 0,
				currentP: 68.8,
				p: 68.8
			}
		},
		methods: {
			selected(index) {
				this.activeI = index;
			},
			changeCurrent(e) {
				this.activeI = e.detail.current;
			},
			move(e) {
				this.p = this.currentP + e.detail.dx / 2;
			},
			endMove(e) {
				this.currentP = 750 / 4 * this.activeI + 68.8;
				this.p = this.currentP;
			}
		}
	}
</script>

<style>
	.dynamic-page {
		background-color: #f6f7fb;
		overflow: hidden;
		height: calc(100vh - 100rpx);
	}

	.dynamic-title {
		display: flex;
		padding: 30rpx 40rpx;
		justify-content: space-between;
		color: #333333;
		background-color: #FFFFFF;
		align-items: center;
	}

	.dynamic-title .title-left {
		font-size: 48rpx;
		font-weight: bold;
	}

	.dynamic-title .title-right image {
		width: 50rpx;
		height: 50rpx;
		vertical-align: middle;
	}

	.title-tab-box {
		position: relative;
	}

	.title-tab {
		display: flex;
		justify-content: space-between;
		padding: 0rpx 0rpx 20rpx;
		background-color: #FFFFFF;
		color: #999999;
		font-size: 32rpx;
	}

	.title-tab .tabBar-item {
		transition: all .3s;
		width: 25%;
		text-align: center;
	}

	.title-tab .tabBar-item.active {
		color: #506CEC;
		font-weight: bold;
	}

	.title-tab-box .tabBar-line {
		position: absolute;
		bottom: 0px;
		border-radius: 1.5px;
		height: 6rpx;
		width: 50rpx;
		background-color: #506cec;
	}

	swiper {
		height: calc(100% - 186rpx);
	}

	swiper-item {
		overflow-y: auto;
	}

	.movie-box {
		margin: 20rpx;
		position: relative;
		height: 350rpx;
	}

	.movie-box>image,
	.movie-box .movie-text {
		position: absolute;
		top: 0rpx;
		left: 0rpx;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}

	.movie-box .movie-text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		z-index: 1;
		color: #FFFFFF;
		padding: 20rpx;
	}

	.movie-box .movie-text .movie-top {
		display: flex;
		align-items: center;
	}

	.movie-box .movie-text image {
		width: 60rpx;
		height: 60rpx;
		margin-right: 20rpx;
		border-radius: 50%;
	}

	.movie-box .movie-text .movie-top text {
		font-size: 32rpx;
	}

	.movie-box .movie-text .movie-title {
		font-size: 32rpx;
		margin-bottom: 20rpx;
	}

	.movie-box .movie-text .movie-alt {
		font-size: 24rpx;
		color: #f6f7fb;
	}

	.movie-list {
		display: flex;
		margin: 20rpx;
		background-color: #FFFFFF;
	}

	.movie-list>image {
		height: 180rpx;
		width: 400rpx;
		flex: 1.3;
	}

	.movie-list .list-text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20rpx;
		flex: 2;
	}

	.list-text .text-title {
		font-size: 28rpx;
		color: #333333;
	}

	.list-text .text-alt {
		font-size: 24rpx;
		color: #999999;
	}

	.text-box {
		margin: 20rpx;
		padding: 30rpx;
		background: url(../../static/bg.jpg);
		background-size: cover;
		background-position: center;
	}

	.text-box .text-box-top .text-box-title {
		font-size: 32rpx;
		color: #FFFFFF;
		margin-bottom: 20rpx;
	}

	.text-box .text-box-top .text-box-content {
		font-size: 28rpx;
		color: #999999;
		margin-bottom: 30rpx;
	}

	.text-box .text-box-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.text-box .text-box-bottom text {
		font-size: 30rpx;
		color: #FFFFFF;
	}

	.text-box .text-box-bottom i {
		color: #FFFFFF;
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
		margin-bottom: 20rpx;
	}

	.userInfo>image {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}

	.userInfo-text text {
		font-size: 30rpx;
		color: #333333;
	}

	.userInfo-text>image {
		width: 100%;
		height: 400rpx;
		margin-top: 20rpx;
		border-radius: 6px;
		vertical-align: middle;
	}

	.userInfo-message {
		display: flex;
		justify-content: space-between;
	}

	.message {
		font-size: 32rpx;
		color: #999999;
		padding-top: 20rpx;
	}

	.message i {
		padding-right: 10rpx;
	}

	.talk-box {
		margin: 40rpx;
	}

	.talk-item {
		/* margin: 40rpx; */
		background-color: #FFFFFF;
		padding: 30rpx;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
		box-shadow: 0px 0px 10px rgba(51, 51, 51, .1);
	}

	.talk-item .item-img {
		width: 80rpx;
		height: 80rpx;
		margin-right: 40rpx;
	}

	.talk-item .item-img image {
		width: 100%;
		height: 100%;
	}

	.talk-item .item-text .talk-title {
		color: #333333;
		font-size: 30rpx;
		margin-bottom: 10rpx;
	}

	.talk-item .item-text .talk-context {
		color: #999999;
		font-size: 28rpx;
	}
</style>
