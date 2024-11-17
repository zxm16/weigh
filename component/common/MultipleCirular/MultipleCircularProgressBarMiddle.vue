<template>
	<div class="circleBig">
	    <div ref="circleBigLeft" class="circleBig_left ab"></div>
	    <div ref="circleBigRight" class="circleBig_right ab"></div>
	    <div class="circleBig_text">
			<slot></slot>
	    </div>
	</div>
</template>
<script setup>
import { onMounted, ref, getCurrentInstance} from 'vue';

const circleBigLeft= ref(null);
const circleBigRight= ref(null);
let timer = 0;
let percent = 0;
let num = 80

const step = () => {
	if(percent < num){
		percent+=1
	}

	if (percent < 50) {
		circleBigRight.value.style.transform = 'rotate(' + 3.6 * percent + 'deg)';
	} else {
		circleBigRight.value.style.transform = 'rotate(0)';
		circleBigRight.value.style.borderColor = '#fab6b6';
		circleBigLeft.value.style.transform = 'rotate(' + 3.6 * (percent - 50) + 'deg)';
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
    step();
});

</script>
  
<style lang="scss" scoped>
.circleBig {
    width:  200rpx;
    height: 200rpx;
    position: relative;
    border-radius: 50%;
    box-shadow: inset 0 0 0 16rpx #fab6b6;

    .ab {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    &_left {
        border: 16rpx solid #e4e7ed;
        border-radius: 50%;
		clip: rect(0, 100rpx,200rpx, 0);
    }

    &_right {
        border: 16rpx solid #e4e7ed;
        border-radius: 50%;
		clip: rect(0, 200rpx, 200rpx, 100rpx);
    }

    &_text {
        position: absolute;
        top: 20rpx;
        left: 20rpx;
        height: 160rpx;
        width: 160rpx;
    }
}
</style>
