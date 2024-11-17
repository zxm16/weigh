<template>
	<div class="mainBox">
		<div class="circle" :style="{'box-shadow': 'inset 0 0 0 10rpx ' + color}">
		    <div ref="circleLeft" class="circle_left ab"></div>
		    <div ref="circleRight" class="circle_right ab"></div>
		    <div class="circle_text">
		       <u-icon name="plus" color="white" size="30rpx"></u-icon>
		    </div>
		</div>
		<div class="msgBox">
			{{mealsTime}}
		</div>
	</div>
   
</template>

<script setup>
import { onMounted, ref, getCurrentInstance} from 'vue';

const circleLeft= ref(null);
const circleRight= ref(null);
let timer = 0;
let percent = 0;
let num = 0
const props = defineProps(['mealsTime','color','progress'])
let mealsTime = ref('')
let color = ref('')

//控制动态显示进度条
const step = () => {
	if(percent < num){
		percent += 1
	}

	if (percent < 50) {
		circleRight.value.style.transform = 'rotate(' + 3.6 * percent + 'deg)';
	} else {
		circleRight.value.style.transform = 'rotate(0)';
		circleRight.value.style.borderColor = color.value;
		circleLeft.value.style.transform = 'rotate(' + 3.6 * (percent - 50) + 'deg)';
	}
	if (percent < num) {
		window.clearTimeout(timer);
		timer = window.setTimeout(step, 20);
	}
};

onMounted(() => {
	/*#ifdef MP-WEIXIN*/
	  // 微信小程序端执行的逻辑
	  const instance = getCurrentInstance();
	  
	  const query = uni.createSelectorQuery().in(instance);
	
		query.select('#circleLeft').boundingClientRect(data => {
		  if (data) {
			circleLeft.value = data
		  }
		}).exec();
		
		query.select('#circleRight').boundingClientRect(data => {
		  if (data) {
			circleRight.value = data
		  }
		}).exec();
	
	
	/*#endif*/
	mealsTime.value = props.mealsTime
	color.value = props.color
	num = Number(props.progress)
	step()
});

       
</script>


   
<style lang="scss" scoped>
	
.mainBox{
	width: 100rpx;
	height: 160rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.msgBox{
	width: 100rpx;
	text-align: center;
	color: white;
	font-size: 30rpx;	
}
.circle {
    width:  100rpx;
    height: 100rpx;
    position: relative;
    border-radius: 50%;
    

    .ab {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    &_left {
        border: 10rpx solid #e4e7ed;
        border-radius: 50%;
		clip: rect(0, 50rpx,100rpx, 0);
    }

    &_right {
        border: 10rpx solid #e4e7ed;
        border-radius: 50%;
		clip: rect(0, 100rpx, 100rpx, 50rpx);
    }

    &_text {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
