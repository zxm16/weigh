<template>
	<view class="main">
		
		<!-- 顶部导航栏 -->
		<view class="main-topBox" :style="{'height': height.topNav + 'rpx'}">
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
						
						<view class="main-topBox-innerBox-nav-top-left"
						:style="{'color': control.topNavColor === false ? '#c0c4cc': '#606266'}"
						 @click="changeNavStyle('left')">
							<p class="main-topBox-innerBox-nav-top-left-x" 
							>饮食</p>
							
						</view>
						
						<view class="main-topBox-innerBox-nav-top-right" 
						@click="changeNavStyle('right')"
						:style="{'color': control.topNavColor === true ? '#c0c4cc': '#606266'}"
						>
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
		<view class="main-middleCard" :style="{'top': height.cardHeight + 'rpx'}" >
			
			<view class="main-middleCard-innerBox">
				<swiper class="main-middleCard-innerBox-swiper" @change='changeSwiper' :current ='control.swiperControl'>
						
						<!-- 饮食栏 -->
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
								<multipleCirclar/>
							</view>
							<view class="main-middleCard-innerBox-swiper-x-bottom">
								<smallCircleBar mealsTime="早餐" color='#71d5a1' progress='20'/>
								<smallCircleBar  mealsTime="中餐" color='#a0cfff' progress='40'/>
								<smallCircleBar  mealsTime="晚餐" color='#fcbd71' progress='75'/>
								<smallCircleBar  mealsTime="加餐" color='#fab6b6' progress='100'/>
							</view>
						</swiper-item>
						
						<!-- 体重栏 -->
						<swiper-item class="main-middleCard-innerBox-swiper-y">
							<view class="main-middleCard-innerBox-swiper-y-cover">
								<view class="main-middleCard-innerBox-swiper-y-cover-top">
									
								</view>
								<view 
								
								class="main-middleCard-innerBox-swiper-y-cover-bottom">
									<!-- 初始体重 -->
									<view class="main-middleCard-innerBox-swiper-y-cover-bottom-itemleft ab">
										<view >
											--
										</view>
										<view style="margin-top: 15rpx;" @click="OpenCard(control.openOverCardStyle)">
											初始体重
										</view>
									</view>
									
									<!-- 距离目标 -->
									<view class="main-middleCard-innerBox-swiper-y-cover-bottom-itemCenter ab">
											<view>
												--
											</view>
											<view style="margin-top: 15rpx;" @click="OpenCard(control.openOverCardStyle)">
												距离目标
											</view>
									</view>
									
									<!-- 设置目标 -->
									<view class="main-middleCard-innerBox-swiper-y-cover-bottom-itemRight ab">
										<view class="">
											<u-icon size="45"
											name="edit-pen-fill"></u-icon>
										</view>
										<view style="margin-top: 10rpx;" >
											设置目标
										</view>
									</view>
								
								</view>
								
							</view>
						</swiper-item>
						
					</swiper>
			</view>
			
		</view>
	
		<view :class="control.openOverCardStyle" >
			<view class="main-overCard-innerBox">
				
			</view>
		</view>
		
		<view class="main-chart" :class="control.chartStyle">
			
		</view>
	</view>

			<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
	<!-- <u-tabbar v-model="current" 
	:list="list"
	:border-top='false' active-color='#606266'
	inactive-color="#c0c4cc"
	>
	</u-tabbar> -->
</template>

<script setup>
	//属性
	import{reactive, ref, watch} from "vue"
	import {onLoad} from '@dcloudio/uni-app'
	import {Login} from '@/api/login.js'
	import{useStore} from "@/store/index.js"
	import{storeToRefs} from 'pinia'
	import  bigCircleBar from '@/component/common/CircularProgressBarBigOne.vue'
	import  smallCircleBar from '@/component/common/CircularProgressBarSmallOne.vue'
	import multipleCirclar from "@/component/common/MultipleCirular/MultipleCircularProgressBarBig.vue"
	
	//引入pinia
	const store = useStore()
	//获取刘海高度
	const {screenTopNavHeight} = storeToRefs(store)
	
	let list = reactive([{
							iconPath: "list",
							selectedIconPath: "list",
							text: '记录',
							count: 2,
							isDot: true,
							customIcon: false,
						},
						// {
						// 	iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
						// 	selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
						// 	// text: '发布',
						// 	midButton: true,
						// 	customIcon: false,
						// },
						{
							iconPath: "account",
							selectedIconPath: "account-fill",
							text: '设置',
							count: 23,
							isDot: false,
							customIcon: false,
						}
					])
					
	let current = ref(0)
	// 参数
	/**
	 * 这是一个示例函数，用于加法运算。
	 * @param {number} navHeight - 控制nav高度
	 * @param {number} cardHeight - 控制卡的高度
	 */
	let height = reactive({
		navHeight: 0,
		cardHeight: 0,
		overCardHeigh: 0,
		topNav:0
		
	})
	
	// 设置目标高度
	let overCardHeigh = ref(0)
	let overCardMoveHeigh = ref(0)
	
	let chartHeigh = ref(0)
	let chartMoveHeigh = ref(0)
	
	
	/**
	 * 这是一个示例函数，用于加法运算。
	 * @param {number} controlValue - 控制nav框控制参数 
	 * @param {number} swiperControl - 控制是swiper参数
	 * @param {string} navLocation - 显示nav当前位置
	 * @param {string} navStyle - 动态添加class属性
	 * param {Blooen} navIcon - 控制在h5或微信小程序展示右上角图标
	 * param {Blooen} openOverCard - 控制设置目标卡片开关
	 */
	let control = reactive({
		controlValue: 0,
		swiperControl:1,
		navLocation: "right",
		navStyle:'main-topBox-innerBox-nav-middle',
		navIcon: true,
		openOverCardStyle: 'main-overCard',
		chartStyle: 'main-chart',
		topNavColor: false
	})
	
	
	//方法
	// 切换顶部nav
	let changeNavStyle = (e) =>{
		if(e === 'left'){
			control.navLocation = 'left'
			control.navStyle = 'main-topBox-innerBox-nav-middley'
			control.controlValue = 1
			control.swiperControl = 0
			setTimeout(() => {
				control.topNavColor = true
			}, 250)
		}else{
			if(control.controlValue === 1){
				control.navLocation = 'right'
				control.navStyle = 'main-topBox-innerBox-nav-middlex'
			}
			setTimeout(() => {
				control.topNavColor = false
			}, 250)
			control.controlValue = 0
			control.swiperControl = 1
			
		}
	}
	
	//切换swiper卡片
	let changeSwiper = (e) =>{
		
		if(e.detail.current === 0){
			control.navLocation = 'left'
			control.navStyle = 'main-topBox-innerBox-nav-middley'
			// 需要优化
			if(control.openOverCardStyle !== 'main-overCard'){
				control.openOverCardStyle = 'main-overCardClose'
			}
			changeNavStyle('left')
		}else{
			control.navLocation = 'right'
			control.navStyle = 'main-topBox-innerBox-nav-middlex'
			changeNavStyle('right')
		}
	}
	
	//开关设置目标卡片
	let OpenCard = (e) => {
		if(e === 'main-overCard'){
			control.openOverCardStyle =  'main-overCardOpen'
		}else if(e === 'main-overCardOpen'){
			control.openOverCardStyle = 'main-overCardClose'
		}else{
			control.openOverCardStyle =  'main-overCardOpen'
		}
	}
	
	
	//监听超出card变化对下面的卡片进行移动
	watch(() => control.openOverCardStyle, (newVal) => {
		console.log(newVal)
		if(newVal === 'main-overCardOpen'){
			control.chartStyle = 'main-chartOpen'
		}else{
			control.chartStyle = 'main-chartClose'
		}
		
	})
	
	//生命周期
	onLoad(() => {
		//更改高度
		if(screenTopNavHeight.value === '0'){
			height.navHeight = '54'
		}else{
			height.navHeight = screenTopNavHeight.value
		}
		height.topNav = Number(height.navHeight)*2 + 100
		height.cardHeight = Number(height.navHeight) + 200
		height.overCardHeigh = Number(height.navHeight) + 800
		
		overCardHeigh.value = height.overCardHeigh - 200 + 'rpx'
		overCardMoveHeigh.value = height.overCardHeigh - 100 + 'rpx'
		
		chartHeigh.value = height.overCardHeigh + 50 + 'rpx'
		chartMoveHeigh.value = height.overCardHeigh + 150 + 'rpx'
	
	
		/*#ifdef MP-WEIXIN*/
		  // 微信小程序端执行的逻辑
			 control.navIcon = false
			 // console.log( control.navIcon)
		/*#endif*/

	})
	
		
</script>

<style lang="scss" scoped>
.main{
	
	//顶部盒子
	&-topBox{
		width: 100%;
		// height: 100rpx;
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		z-index: 10;
		background-color: white;
		
		&-innerBox{
			width: 90%;
			height: 100rpx;
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
					background-color: white;
					
					&-left{
						width: 50%;
						height: 100%;
						display: flex;
						justify-content: center;
						background-color: white;
						align-items: center;
						font-size: 30rpx;
						font-weight: bold;
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
	
	//卡片
	&-middleCard{
		width: 100%;
		height: 600rpx;
		position: relative;
		top: 250rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 2;
		
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
				// background-color: rgba(0, 0, 0, 0.3);
				 backdrop-filter: blur(20px);
				 -webkit-backdrop-filter: blur(10px);
				 border-radius: 20px;
				 overflow: hidden;
				
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
					
					&-cover{
						width: 100%;
						height: 100%;
						position: relative;
						
						&-top{
							width: 100%;
							height: 70%;
						}
						
						&-bottom{
							width: 100%;
							height: 30%;
							display: flex;
							justify-content: center;
							
							.ab{
								width: 33.3%;
								height: 80%;
								display: flex;
								flex-direction: column;
								align-items: center;
								justify-content: center;
								color: white;
								font-size: 30rpx;
								font-weight: bold;
								letter-spacing: 1px;
							}
							&-itemRight{
								
							}
							&-itemCenter{
								
							}
							&-itemLeft{
								
							}
						}
					}
					
				}
			}
		}
	}
	
	//超出卡片
	&-overCard{
		z-index: 1;
		position: absolute;
		top: v-bind(overCardHeigh);
		width: 100%;
		height: 200rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		&-innerBox{
			width: 90%;
			height: 100%;
			background-color: #c0c4cc;
			border-radius:0px 0 20px 20px;
			overflow: hidden;
			
		}
	}
	
	&-overCardOpen{
		z-index: 1;
		position: absolute;
		top: v-bind(overCardMoveHeigh);
		width: 100%;
		height: 200rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		animation-name: openCard;
		animation-duration: 0.5s;	
		
	}

	&-overCardClose{
		z-index: 1;
		position: absolute;
		width: 100%;
		height: 200rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		top: v-bind(overCardHeigh);
		animation-name: closeCard;
		animation-duration: 0.5s;
	}

	//表格
	&-chart{
		width: 100%;
		height: 1000rpx;
		position: absolute;
		background-color: red;
		top: v-bind(chartHeigh);
	}
	
	&-chartClose{
		width: 100%;
		height: 450rpx;
		position: absolute;
		animation-name: chartClose;
		animation-duration: 0.5s;
	}
	
	&-chartOpen{
		width: 100%;
		height: 450rpx;
		position: absolute;
		animation-name: chartOpen;
		animation-duration: 0.5s;
		top: v-bind(chartMoveHeigh);
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

@keyframes openCard {
  from {top: v-bind(overCardHeigh);}
    to {top: v-bind(overCardMoveHeigh);}
}

@keyframes closeCard {
  from {top: v-bind(overCardMoveHeigh);}
    to {top: v-bind(overCardHeigh);}
}

@keyframes chartClose {
  from {top: v-bind(chartMoveHeigh);}
    to {top: v-bind(chartHeigh);}
}

@keyframes chartOpen {
  from {top: v-bind(chartHeigh);}
    to {top: v-bind(chartMoveHeigh);}
}
</style>
