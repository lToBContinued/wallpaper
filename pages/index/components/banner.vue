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
      <swiper-item v-for="item in bannerList" :key="item._id">
        <image :src="item.picurl" mode="aspectFill" @click="gotoLink(item)"></image>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { getBannerListService } from '/api'

const bannerList = ref([]) // 轮播图列表

// 获取轮播图列表
const getBannerList = async () => {
  const res = await getBannerListService()
  bannerList.value = res.data
}
getBannerList()

// 轮播图点击跳转
const gotoLink = (data) => {
  // 跳转到其他小程序
  if (data.target === 'miniProgram') {
    uni.navigateToMiniProgram({
      appId: data.appid
    })
  }
  // 小程序内跳转
  if (data.target === 'self') {
    uni.navigateTo({
      url: `/pages/classlist/classlist?${data.url}`
    })
  }
}
</script>

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
