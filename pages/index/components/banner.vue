<template>
  <view class="banner">
    <swiper
      indicator-dots="true"
      indicator-color="rgba(255,255,255,0.5)"
      indicator-active-color="#fff"
      autoplay="true"
      interval="3000"
      duration="1000"
      circular="true"
    >
      <swiper-item v-for="item in 3" :key="item">
        <image src="/common/images/banner1.jpg" mode="aspectFill"></image>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup></script>

<style scoped lang="scss">
.banner {
  width: 750rpx;
  padding: 30rpx 0;

  swiper {
    width: 750rpx;
    height: 340rpx;

    &-item {
      width: 100%;
      height: 100%;
      padding: 0 30rpx;

      image {
        width: 100%;
        height: 100%;
        border-radius: 10rpx;
      }
    }
  }
}
</style>
