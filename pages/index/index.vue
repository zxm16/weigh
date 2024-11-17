<template>
	<view class="content">
		<view class="innerBox">
			<view class="text-area">
				<text class="title">{{title}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
import {onLoad} from '@dcloudio/uni-app'
import {Login} from '@/api/login.js'
import  {useStore} from '@/store/index.js'

const store = useStore()

let title = ref('体重记录册')

//获取刘海高度
const SYSTEM_INFO = uni.getSystemInfoSync();
const statusBarHeight = SYSTEM_INFO.statusBarHeight || 15;

let getLoginMsg = (data) => {
	Login(data)
	.then(res => {
		// console.log(res.data)
		if(res.data.data === false){
			setTimeout(() => {
				uni.navigateTo({
					url:'/pages/main/main'
				})
			}, 2000)
		}
		
	})
	.catch(err => {
		// console.log(err)
	})
	.finally(() => {
		// console.log(1111)
	})
	
}

onLoad(()=>{
	
	// console.log(1)
	// store.setScreenTopNavHeight(statusBarHeight)
	// getLoginMsg()
	
	//微信小程序测试代码
	setTimeout(() => {
		uni.navigateTo({
			url:'/pages/main/main'
		})
	}, 2000)
})
</script>

<style>
	.content {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color:rgba(229, 229, 229);
	
	}
	.innerBox{
		height: 20vh;
		display: flex;
		flex-direction: column;
		
	}
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 30rpx;
		border-radius: 30%;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 42rpx;
		color: black;
		text-align: center;
		letter-spacing: 2px;
		font-family: 'Courier New', Courier, monospace;
	}
</style>
