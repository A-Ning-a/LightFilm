<template>
	<view class="login-page">
		<view class="login-top">
			<image src="../../static/qingying-logo.png"></image>
			<view class="login-tab">
				<view class="tab-item active">登陆</view>
				<view class="tab-item">注册</view>
			</view>
		</view>
		<view class="login-content">
			<form>
				<input type="text" value="" placeholder="请输入你的账号"/>
				<input type="text" value="" placeholder="请输入你的密码"/>
				<button class="login-btn" form-type="reset" @click="login">登陆</button>
			</form>
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
				uni.reLaunch({
					url:"../my/my"
				})
			}
		}
	}
</script>

<style>
	.login-top{
		background-color: #1a1f25;
		position: relative;
		height: 40vh;
	}
	.login-top>image{
		width: 150rpx;
		height: 150rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -75rpx;
		margin-top: -75rpx;
	}
	
	.login-top .login-tab{
		position: absolute;
		bottom: 0rpx;
		color: #FFFFFF;
		display: flex;
		width: 100%;
		text-align: center;
		align-items: center;
		padding-bottom: 20rpx;
	}
	
	.login-top .login-tab .tab-item {
		flex: 1;
		font-size: 28rpx;
		color: #F6F7FB;
	}
	
	.login-top .login-tab .tab-item.active {
		font-size: 32rpx;
		color: #FFFFFF;
		font-weight: bold;
	}
	
	.login-content {
		height: 60vh;
		overflow: hidden;
	}
	
	.login-content form {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		margin-top: 60rpx;
	}
	
	.login-content input{
		padding: 20rpx 0rpx;
		border-bottom: 1px solid #999999;
		width: 500rpx;
		margin-top: 40rpx;
		font-size: 28rpx;
	}
	
	.login-btn {
		background-color: #1a1f25;
		box-shadow: 0px 0px 10px rgba(51, 51, 51, .6);
		color: #FFFFFF;
		width: 500rpx;
		border: none;
		border-radius: 0px;
		margin-top: 140rpx;
	}
</style>
