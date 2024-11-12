<template>
    <div class="circle">
        <div ref="circleLeft" class="circle_left ab"></div>
        <div ref="circleRight" class="circle_right ab"></div>
        <div class="circle_text">
            <span class="name">立即登录</span>
			<span class="name">记录饮食</span>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref} from 'vue';

const circleLeft= ref(null);
const circleRight= ref(null);
let timer = 0;
let percent = 0;
let num = 80

const step = () => {
	if(percent < num){
		percent+=1
	}

	if (percent < 50) {
		circleRight.value.style.transform = 'rotate(' + 3.6 * percent + 'deg)';
	} else {
		circleRight.value.style.transform = 'rotate(0)';
		circleRight.value.style.borderColor = '#54c4fd';
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
    box-shadow: inset 0 0 0 16rpx #54c4fd;

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
        height: 100%;
        display: flex;
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
