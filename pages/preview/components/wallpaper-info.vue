<template>
  <view class="wallpaperInfo">
    <view class="box">
      <uni-icons type="info" size="24"></uni-icons>
      <view class="text">信息</view>
    </view>
    <view class="box">
      <uni-icons type="star" size="24"></uni-icons>
      <view class="text">5分</view>
    </view>
    <view class="box">
      <uni-icons type="download" size="24"></uni-icons>
      <view class="text">下载</view>
    </view>
  </view>
</template>

<script setup></script>

<style scoped lang="scss">
.wallpaperInfo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 83vh;
  left: 50%;
  transform: translateX(-50%);
  width: 65vw !important;
  height: 120rpx;
  border-radius: 60rpx;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10rpx);

  .box {
    @include flex-center;
    flex-direction: column;
    padding: 2rpx 12rpx;

    .text {
      font-size: 26rpx;
      color: $text-font-color-2;
    }
  }
}
</style>
