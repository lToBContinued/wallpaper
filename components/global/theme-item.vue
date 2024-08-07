<template>
  <view class="theme-item">
    <navigator v-if="!isMore" url="" class="box">
      <image class="pic" src="/common/images/classify1.jpg" mode="aspectFill"></image>
      <view class="mask">明星美女</view>
      <view class="tab">3天前更新</view>
    </navigator>

    <navigator v-else url="" class="box more">
      <image class="pic" src="/common/images/more.jpg" mode="aspectFill"></image>
      <view class="mask">
        <uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
        <view class="text">更多</view>
      </view>
    </navigator>
  </view>
</template>

<script setup>
defineProps({
  isMore: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="scss">
.theme-item {
  .box {
    position: relative;
    height: 340rpx;
    border-radius: 10rpx;
    overflow: hidden;

    .pic {
      width: 100%;
      height: 100%;
    }

    .mask {
      @include flex-center;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 70rpx;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(20rpx);
      color: #fff;
      font-weight: 700;
      font-size: 30rpx;
    }

    .tab {
      position: absolute;
      top: 0;
      left: 0;
      padding: 6rpx 14rpx;
      border-radius: 10rpx 0 10rpx 0;
      background: rgba(250, 129, 90, 0.7);
      backdrop-filter: blur(20rpx);
      color: #fff;
      font-size: 22rpx;
      transform: scale(0.8);
      transform-origin: left top;
    }
  }

  .box.more {
    .mask {
      flex-direction: column;
      width: 100%;
      height: 100%;
    }

    .text {
      font-size: 28rpx;
    }
  }
}
</style>
