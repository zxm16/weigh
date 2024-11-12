<template>
	<view class="main">
		
		<!-- 顶部导航栏 -->
		<view class="main-topBox" :style="{'top': height.navHeight + 'px'}">
			<view class="main-topBox-innerBox">
				
				<view class="main-topBox-innerBox-avator">
					<view class="main-topBox-innerBox-avator-icon">
						<u-icon name="account" size="20px"></u-icon>
					</view>
				</view>
				
				<view class="main-topBox-innerBox-nav">
					
					<view class="main-topBox-innerBox-nav-bottom">
						
					</view>
					
					<view :class="control.navStyle">
						
						<view class="main-topBox-innerBox-nav-middle-top">
							
						</view>
						
						<view class="main-topBox-innerBox-nav-middle-bottom" >
							<view class="main-topBox-innerBox-nav-middle-bottom-left" >
								
							</view>
							<view class="main-topBox-innerBox-nav-middle-bottom-center">
								
							</view>
							<view class="main-topBox-innerBox-nav-middle-bottom-right">
								
							</view>
						</view>
						
					</view>
					
					<view class="main-topBox-innerBox-nav-top">
						
						<view class="main-topBox-innerBox-nav-top-left" @click="changeNavStyle('left')">
							<p class="main-topBox-innerBox-nav-top-left-x" 
							>饮食</p>
							
						</view>
						
						<view class="main-topBox-innerBox-nav-top-right" @click="changeNavStyle('right')">
							<p class="main-topBox-innerBox-nav-top-right-x"
							>体重</p>
							
						</view>
						
					</view>
				</view>
				
				<view class="main-topBox-innerBox-icon" >
					<view class="main-topBox-innerBox-icon-left" v-if="control.navIcon" >
						<u-icon name="search" size="20px" ></u-icon>
					</view>
					<view class="main-topBox-innerBox-icon-right" v-if="control.navIcon">
						<u-icon name="calendar" size="20px"></u-icon>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 顶部导航栏联动卡片 -->
		<view class="main-middleCard" :style="{'top': height.cardHeight + 'rpx'}">
			<view class="main-middleCard-innerBox">
				<swiper class="main-middleCard-innerBox-swiper" @change='changeSwiper' :current ='control.swiperControl'>
						<!-- 第一张图用swiper-item包裹 -->
						<swiper-item class="main-middleCard-innerBox-swiper-x">
							<view class="main-middleCard-innerBox-swiper-x-top">
								<view class="main-middleCard-innerBox-swiper-x-top-left">
									均衡饮食计划
								</view>
								<view class="main-middleCard-innerBox-swiper-x-top-right">
									今天
									<view class="main-middleCard-innerBox-swiper-x-top-right-triangle">
										
									</view>
								</view>
							</view>
							<view class="main-middleCard-innerBox-swiper-x-middle">
								<bigCircleBar/>
								<bigCircleBar/>
							</view>
							<view class="main-middleCard-innerBox-swiper-x-bottom">
								<smallCircleBar mealsTime="早餐" color='#71d5a1' progress='20'/>
								<smallCircleBar  mealsTime="中餐" color='#a0cfff' progress='40'/>
								<smallCircleBar  mealsTime="晚餐" color='#fcbd71' progress='75'/>
								<smallCircleBar  mealsTime="加餐" color='#fab6b6' progress='100'/>
							</view>
						</swiper-item>
						<!-- 第二张图 -->
						<swiper-item class="main-middleCard-innerBox-swiper-y">
							<view class="main-middleCard-innerBox-swiper-y-cover">
								体重
							</view>
						</swiper-item>
						
					</swiper>
			</view>
		</view>
	</view>
</template>

<script setup>
	//属性
	import{reactive, ref} from "vue"
	import {onLoad} from '@dcloudio/uni-app'
	import {Login} from '@/api/login.js'
	import{useStore} from "@/store/index.js"
	import{storeToRefs} from 'pinia'
	import  bigCircleBar from '@/component/common/CircularProgressBarBigOne.vue'
	import  smallCircleBar from '@/component/common/CircularProgressBarSmallOne.vue'
	
	//引入pinia
	const store = useStore()
	//获取刘海高度
	const {screenTopNavHeight} = storeToRefs(store)
	
	
	// 参数
	/**
	 * 这是一个示例函数，用于加法运算。
	 * @param {number} navHeight - 控制nav高度
	 * @param {number} cardHeight - 控制卡的高度
	 */
	let height = reactive({
		navHeight: 0,
		cardHeight: 0
	})
	
	
	/**
	 * 这是一个示例函数，用于加法运算。
	 * @param {number} controlValue - 控制nav框控制参数 
	 * @param {number} swiperControl - 控制是swiper参数
	 * @param {string} navLocation - 显示nav当前位置
	 * @param {string} navStyle - 动态添加class属性
	 * param {Blooen} navIcon - 控制在h5或微信小程序展示右上角图标
	 */
	let control = reactive({
		controlValue: 0,
		swiperControl:1,
		navLocation: "right",
		navStyle:'main-topBox-innerBox-nav-middle',
		navIcon: true
	})
	
	
	//方法
	// 切换顶部nav
	let changeNavStyle = (e) =>{
		if(e === 'left'){
			control.navLocation = 'left'
			control.navStyle = 'main-topBox-innerBox-nav-middley'
			control.controlValue = 1
			control.swiperControl = 0
		}else{
			if(control.controlValue === 1){
				control.navLocation = 'right'
				control.navStyle = 'main-topBox-innerBox-nav-middlex'
			}
			control.controlValue = 0
			control.swiperControl = 1
			
		}
	}
	
	//切换swiper卡片
	let changeSwiper = (e) =>{
		if(e.detail.current === 0){
			control.navLocation = 'left'
			control.navStyle = 'main-topBox-innerBox-nav-middley'
			changeNavStyle('left')
		}else{
			control.navLocation = 'right'
			control.navStyle = 'main-topBox-innerBox-nav-middlex'
			changeNavStyle('right')
		}
	}
	
	
	//生命周期
	onLoad(() => {
		//更改高度
		if(screenTopNavHeight.value === '0'){
			height.navHeight = '54'
		}else{
			height.navHeight = screenTopNavHeight.value
		}
		height.cardHeight = Number(height.navHeight) + 200
		
		/*#ifdef MP-WEIXIN*/
		  // 微信小程序端执行的逻辑
			 control.navIcon = false
			 console.log( control.navIcon)
		/*#endif*/

	})
	
		
</script>

<style lang="scss" scoped>
.main{
	
	//顶部盒子
	&-topBox{
		width: 100%;
		height: 100rpx;
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		
		&-innerBox{
			width: 90%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			
			//头像图标
			&-avator{
				width: 10%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 2%;
				
				&-icon{
				}
				
			}
			
			// 顶部导航栏
			&-nav{
				width: 40%;
				height: 100%;
				position: relative;
				margin-left: 10%;
				
				&-bottom{
					width: 100%;
					height: 90%;
				}
				
				&-middle{
					position: absolute;
					top:0;
					right: 0%;
					width:50%;
					height: 100%;
					
					&-top{
						width: 80%;
						height: 65%;
						background-color: #606266;
					}
					
					&-bottom{
						width: 100%;
						height: 10%;
						margin-top: 6%;
						display: flex;
						justify-content: center;
						align-items: center;
						
						&-left{
							width: 10%;
							height: 80%;
							border-radius: 50% 0 0 50%;
							background-color: #606266;
							
						}
						
						&-center{
							width: 50%;
							height: 80%;
							background-color: #606266;
						}
						
						&-right{
							width: 10%;
							height: 80%;
							border-radius: 0 50% 50% 0;
							background-color: #606266;
						}
					
					}
				}
				
				&-middlex{
					position: absolute;
					top:0;
					right: 0%;
					width:50%;
					height: 100%;
					animation-name: example2;
					animation-duration: 0.15s;
				}
				
				&-middley{
					position: absolute;
					top:0;
					width:50%;
					height: 100%;
					animation-name: example;
					animation-duration: 0.15s;
				}
				
				&-top{
					width: 100%;
					height: 70%;
					position: absolute;
					top: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					
					&-left{
						width: 50%;
						height: 100%;
						display: flex;
						justify-content: center;
						background-color: white;
						align-items: center;
						font-size: 30rpx;
						font-weight: bold;
						mix-blend-mode: screen;
					}
					
					&-right{
						width: 50%;
						height: 100%;
						display: flex;
						justify-content: center;
						background-color: white;
						align-items: center;
						font-size: 30rpx;
						font-weight: bold;
						mix-blend-mode: screen;
						
						
					}
				}
			}
			
			//顶部右侧图标
			&-icon{
				width: 20%;
				height: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-bottom: 2%;
			}
			
		}	
		
	}
	
	&-middleCard{
		width: 100%;
		height: 600rpx;
		position: relative;
		top: 250rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		
		&-innerBox{
			width: 90%;
			height: 100%;
			display: flex;
			align-items: center;
			background-color: #c0c4cc;
			border-radius: 20px;
			overflow: hidden;
			
			&-swiper{
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.3);
				 backdrop-filter: blur(20px);
				 -webkit-backdrop-filter: blur(10px);
				
				&-x{
					width: 100%;
					height: 100%;
					 display: flex;
					 align-items: center;
					 justify-content: center;
					 flex-direction: column;
					 overflow: hidden;
					 
					 &-top{
						 width: 100%;
						 height: 15%;
						 display: flex;
						 align-items: center;
						 justify-content: space-between;
						 padding: 0 30rpx;
						 
						 &-left{
							 width: 250rpx;
							 color: white;
							 font-size: 32rpx;
							 letter-spacing: 4rpx;
							 font-weight: bold;
						 }
						 
						 &-right{
							 height: 100%;
							 display: flex;
							 width: 100rpx;
							 align-items: center;
							 justify-content: center;
							 font-size: 25rpx;
							 color: white;
							 
							 &-triangle{
								 margin-left: 10rpx;
								width: 0;
								height: 0;
								border-left: 6rpx solid transparent;
								border-right: 6rpx solid transparent;
								border-top: 12rpx solid white;
							 }
						 }
					 }
					 &-middle{
					 	width: 100%;
					 	height: 50%;
						display: flex;
						align-items: center;
						justify-content: space-around;
						
					 }
					 &-bottom{
					 	width: 100%;
					 	height: 35%;
						padding: 0 15rpx;
						display: flex;
						align-items: center;
						justify-content: space-around;
					 }
					
				}
				&-y{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}

/* 动画代码 */
@keyframes example {
  from {right: 0%;}
    to {right: 50%;}
}

@keyframes example2 {
  from {right: 50%;}
    to {right: 0%;}
}
</style>
