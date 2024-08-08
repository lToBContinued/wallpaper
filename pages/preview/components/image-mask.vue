<template>
  <view class="imageMask">
    <view class="go-back" :style="{ top: getStatusBarHeight() + 'px' }" @click="goBack">
      <uni-icons type="back" color="#fff" size="20"></uni-icons>
    </view>
    <view class="count">3&nbsp;/&nbsp;9</view>
    <view class="time">
      <uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
    </view>
    <view class="date">
      <uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
    </view>
    <wallpaper-info></wallpaper-info>
  </view>
</template>

<script setup>
import WallpaperInfo from './wallpaper-info.vue'

const goBack = () => {
  uni.navigateBack()
}
</script>

<style scoped lang="scss">
.imageMask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  & > view {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    color: #fff;
  }

  .go-back {
    @include flex-center;
    left: 60rpx;
    top: 0;
    width: 76rpx;
    height: 76rpx;
    margin-left: 0;
    border-radius: 100px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10rpx);
  }

  .count {
    top: 10vh;
    padding: 8rpx 28rpx;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 40rpx;
    backdrop-filter: blur(10rpx);
    font-size: 28rpx;
  }

  .time {
    top: calc(10vh + 80rpx);
    font-size: 140rpx;
    line-height: 1em;
    text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
  }

  .date {
    font-size: 34rpx;
    top: calc(10vh + 230rpx);
    text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
  }
}
</style>
