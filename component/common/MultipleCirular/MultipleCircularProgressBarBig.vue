<template>
	<div class="circle">
	    <div ref="circleLeft" class="circle_left ab"></div>
	    <div ref="circleRight" class="circle_right ab"></div>
	    <div class="circle_text">
	        <MiddleBar>
				<SmallBar/>			
			</MiddleBar>
	    </div>
	</div>
</template>
<script setup>
import { onMounted, ref} from 'vue';
import MiddleBar from './MultipleCircularProgressBarMiddle.vue'
import SmallBar from './MultipleCircularProgressBarSmall.vue'

const circleLeft= ref(null);
const circleRight= ref(null);
let timer = 0;
let percent = 0;
let num = 50

const step = () => {
	if(percent < num){
		percent+=1
	}

	if (percent < 50) {
		circleRight.value.style.transform = 'rotate(' + 3.6 * percent + 'deg)';
	} else {
		circleRight.value.style.transform = 'rotate(0)';
		circleRight.value.style.borderColor = '#71d5a1';
		circleLeft.value.style.transform = 'rotate(' + 3.6 * (percent - 50) + 'deg)';
	}
	if (percent < num) {
		window.clearTimeout(timer);
		timer = window.setTimeout(step, 20);
	}
};

onMounted(() => {
    step();
});

</script>
  
<style lang="scss" scoped>
.circle {
    width:  240rpx;
    height: 240rpx;
    position: relative;
    border-radius: 50%;
    box-shadow: inset 0 0 0 16rpx #71d5a1;
	position: relative;

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
		clip: rect(0, 120rpx,240rpx, 0);
    }

    &_right {
        border: 16rpx solid #e4e7ed;
        border-radius: 50%;
		clip: rect(0, 240rpx, 240rpx, 120rpx);
    }

    &_text {
		position: absolute;
		top: 20rpx;
		left: 20rpx;
        height: 200rpx;
		width: 200rpx;
		// background-color: green;
        

    }
}
</style>
