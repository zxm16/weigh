<template>
	<view class="main">
		
		<!-- 顶部返回栏 -->
		<view class="top-box">
			<u-icon name="arrow-left" 
			color="#303133" size="50" 
			class="top-box-icon">
			</u-icon>
		</view>
		
		<!-- 顶部提示信息 -->
		<view class="top-msgbox">
			<view class="top-msgbox-bigText">
				手机验证码登录
			</view>
			<view class="top-msgbox-smallText">
				未注册手机号将自动注册并登录
			</view>
		</view>
		
		<!-- 手机验证 -->
		<view class="loginBox">
			<view class="loginBox-innerBox">
				<view class="loginBox-innerBox-phoneNumBox">
					<view class="loginBox-innerBox-phoneNumBox-iconBox">
						
						<view class="loginBox-innerBox-phoneNumBox-iconBox-icon">
							<view >
								<u-icon name="phone"
								class="loginBox-innerBox-phoneNumBox-iconBox-icon-x"></u-icon>
							</view>
							
						</view>
						
						<view class="loginBox-innerBox-phoneNumBox-iconBox-text">
							+86
						</view>
						
					</view>
					<view class="loginBox-innerBox-phoneNumBox-inputBox">
						<input type="text"
						class="loginBox-innerBox-phoneNumBox-inputBox-x"
						placeholder="11位手机号码"
						maxlength="11"
						placeholder-style="color:#c0c4cc"
						>
					</view>
					
				</view>
				<view class="loginBox-innerBox-verifyNumBox">
					<view class="loginBox-innerBox-verifyNumBox-icon">
						<u-icon name="lock"
						class="loginBox-innerBox-phoneNumBox-iconBox-icon-x"></u-icon>
					</view>
					<view class="loginBox-innerBox-verifyNumBox-input">
						<input type="text"
						class="loginBox-innerBox-verifyNumBox-input-x"
						placeholder="请输入验证码"
						maxlength="6"
						placeholder-style="color:#c0c4cc"
						>
					</view>
					<view class="loginBox-innerBox-verifyNumBox-button">
						<view class="loginBox-innerBox-verifyNumBox-button-b">
							获取验证码
						</view>
					</view>
				</view>
				<view class="loginBox-innerBox-buttonBox">
					<view class="loginBox-innerBox-buttonBox-article">
						登录即代表同意
						<a class="loginBox-innerBox-buttonBox-article-x" @click="toArticle(1)">
							《隐私政策条款》
						</a>
						和
						<a class="loginBox-innerBox-buttonBox-article-x" @click="toArticle(2)">
							《用户服务协议》
						</a>
					</view>
					<view class="loginBox-innerBox-buttonBox-btn">
						登录
					</view>
					<view class="loginBox-innerBox-buttonBox-text">
						登录后可永久保存数据
					</view>
				</view>
	
			</view>
		</view>
		
		<!-- 其他方式登录 -->
		<view class="othersLoginBox">
			<view class="othersLoginBox-msg">
				其他方式登录
			</view>
			<view class="othersLoginBox-logo">
				<view class="othersLoginBox-logo-innerBox">
					<u-icon name="qq-circle-fill" color="#2979ff" size="100"></u-icon>
					<u-icon name="weixin-circle-fill" color="#19be6b" size="100"></u-icon>
				</view>
			</view>
		</view>
	
	</view>
</template>

<script setup>
	
	let toArticle = (data) => {
		if(data === 1){
			console.log(data)
		}else{
			console.log(data)
		}
	}
	
</script>

<style lang="scss" scoped>
	

	
.main{
	position: relative;
	height: 100vh;
	width: 100%;
}

.top-box{
	width: 100%;
	height: 80rpx;
	/* background-color: aqua; */
	position: fixed;
	display: flex;
	top: 54px;
	
	&-icon{
		margin-left: 15rpx;
		margin-top: 20rpx;
	}
}

.top-msgbox{
	width: 100%;
	height: 10vh;
	position: absolute;
	top: 204rpx;
	padding-left: 50rpx;	
	padding-right: 50rpx;
	
	&-bigText{
		font-size: 55rpx;
		font-weight: bold;
		color: #303133 ;
		margin-bottom: 20rpx;
		letter-spacing: 2rpx;
	}
	
	&-smallText{
		font-size: 32rpx;
		color: #c0c4cc ;
		letter-spacing: 2rpx;
	}
}

.loginBox{
	width: 100%;
	height: 45vh;
	position: absolute;
	top: 434rpx;
	
	&-innerBox{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
		
		&-phoneNumBox{
			width: 90%;
			height: 8vh;
			margin-bottom: 3vh;
			border: 3rpx solid #e4e7ed;
			border-radius: 100px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			
			&-iconBox{
				width: 28%;
				height: 80%;
				border-radius: 90px  0 0 100px;
				border-right: 3rpx solid #e4e7ed ;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				
				&-icon{
					height: 100%;
					width: 40%;
					display: flex;
					
					&-x{
						width: 100%;
						height: 100%;
						font-size: 42rpx;
						margin-right: 10rpx;
						margin-left: 10rpx;						
						
					}
					
					
				}
				&-text{
					width:60%;
					font-size: 32rpx;
				}
			}
			
			&-inputBox{
				width: 62%;
				height: 80%;
				border-right: 1px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				padding-left: 30rpx;
				&-x{
					font-size: 32rpx;	
				}
			}
		}
		
		&-verifyNumBox{
			width: 90%;
			height: 8vh;
			margin-bottom: 5vh;
			border: 3rpx solid #e4e7ed;
			border-radius: 100px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			
			&-icon{
				width: 11.2%;
				height: 80%;
			}
			
			&-input{
				width: 52%;
				height: 80%;
				// background-color: red;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				
				&-x{
					height: 80%;
					width: 100%;
					font-size: 32rpx;
					caret-color: #606266;
				}
				
			}
			
			&-button{
				width: 26.8%;
				height: 40%;
				background-color: #f2f6fc;
				border-radius: 50rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #c0c4cc;
				font-size: 28rpx;
			}
			
		}
		
		&-buttonBox{
			width: 90%;
			height: 21vh;
			
			&-article{
				width: 100%;
				height:3vh ;
				font-size: 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color:#c0c4cc ;
				
				&-x{
					color: #606266;	
					letter-spacing: 2rpx;
				}
				
			}
			
			&-btn{
				height: 8vh;
				width: 100%;
				background-color: #f2f6fc;
				margin-top: 2vh;
				border-radius: 100px;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 40rpx;
				font-weight: bold;
				color: #c0c4cc;
			}
			
			&-text{
				width: 100%;
				height: 3vh;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #c0c4cc;
				margin-top: 2vh;
				letter-spacing: 2rpx;
			}
		}
		
	}
}

.othersLoginBox{
	width: 100%;
	height: 15vh;
	position: absolute;
	top: calc(554rpx + 40vh);
	
	&-msg{
		display: flex;
		justify-content: center;
		align-items: center;
		color: #c0c4cc;
	}
	&-logo{
		width: 100%;
		height: 150rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		
		&-innerBox{
			width: 50%;
			height: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
		}
	}
}
input::placeholder{
	color: red !important;
}
</style>
