<template>
  <view class="notice">
    <view class="left">
      <uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
      <text class="text">公告</text>
    </view>

    <view class="center">
      <swiper vertical="true" autoplay="true" interval="1500" duration="300" circular="true">
        <swiper-item v-for="item in newsList" :key="item._id">
          <navigator url="/pages/notice/detail">{{ item.title }}</navigator>
        </swiper-item>
      </swiper>
    </view>

    <view class="right">
      <uni-icons type="right" size="16"></uni-icons>
    </view>
  </view>
</template>

<script setup>
import { getNewsListService } from '/api'
import { ref } from 'vue'

const newsList = ref([]) // 公告列表

// 获取公告列表
const getNewList = async () => {
  const params = {
    select: true
  }
  const res = await getNewsListService(params)
  newsList.value = res.data
}
getNewList()
</script>

<style scoped lang="scss">
.notice {
  display: flex;
  width: 690rpx;
  height: 80rpx;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 80rpx;
  line-height: 80rpx;

  .left,
  .right {
    @include flex-center;
  }

  .left {
    width: 140rpx;

    .text {
      color: $brand-theme-color;
      font-weight: 700;
      font-size: 28rpx;
    }
  }

  .center {
    flex: 1;

    swiper {
      height: 100%;

      &-item {
        height: 100%;
        font-size: 30rpx;
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .right {
    width: 70rpx;
  }
}
</style>
