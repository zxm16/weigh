<template>
    <div class="circleSmall">
        <div ref="circleSmallLeft" class="circleSmall_left ab"></div>
        <div ref="circleSmallRight" class="circleSmall_right ab"></div>
        <div class="circleSmall_text">
            <span class="name">能量</span>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, getCurrentInstance} from 'vue';

const circleSmallLeft= ref(null);
const circleSmallRight= ref(null);
let timer = 0;
let percent = 0;
let num = 70

const step = () => {
	if(percent < num){
		percent+=1
	}

	if (percent < 50) {
		circleSmallRight.value.style.transform = 'rotate(' + 3.6 * percent + 'deg)';
	} else {
		circleSmallRight.value.style.transform = 'rotate(0)';
		circleSmallRight.value.style.borderColor = '#fcbd71';
		circleSmallLeft.value.style.transform = 'rotate(' + 3.6 * (percent - 50) + 'deg)';
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
.circleSmall {
    width:  160rpx;
    height: 160rpx;
    position: relative;
    border-radius: 50%;
    box-shadow: inset 0 0 0 16rpx #fcbd71;

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
		clip: rect(0, 80rpx,160rpx, 0);
    }

    &_right {
        border: 16rpx solid #e4e7ed;
        border-radius: 50%;
		clip: rect(0, 160rpx, 160rpx, 80rpx);
    }

    &_text {
        height: 100%;
        display: flex;
		font-size: 10rpx;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;

        .name {
            margin-bottom: 4px;
        }
    }
}
</style>
