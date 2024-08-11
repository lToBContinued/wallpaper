<template>
  <view class="homeLayout pageBg">
    <custom-nav-bar title="推荐"></custom-nav-bar>
    <!--顶部轮播图-->
    <banner></banner>
    <!--公告-->
    <notice></notice>
    <!--每日推荐-->
    <view class="select">
      <common-title>
        <template #name>每日推荐</template>
        <template #custom>
          <view class="date">
            <uni-icons type="calendar" size="18"></uni-icons>
            <view class="text">
              <uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
            </view>
          </view>
        </template>
      </common-title>
      <view class="content">
        <scroll-view scroll-x="true">
          <view class="box" v-for="item in dayRandomWallpaperList" :key="item._id" @click="goPreview(item._id)">
            <image :src="item.smallPicurl" mode="aspectFill"></image>
          </view>
        </scroll-view>
      </view>
    </view>
    <!--专题-->
    <view class="theme">
      <common-title>
        <template #name>专题精选</template>
        <template #custom>
          <navigator url="/pages/classify/classify" open-type="reLaunch" class="more">More+</navigator>
        </template>
      </common-title>
      <view class="content">
        <theme-item v-for="item in recommendList" :key="item._id" :item="item"></theme-item>
        <theme-item :isMore="true"></theme-item>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CommonTitle from '/components/global/common-title.vue'
import Banner from './components/banner.vue'
import Notice from './components/notice.vue'
import ThemeItem from '/components/global/theme-item.vue'
import CustomNavBar from '/components/global/custom-nav-bar.vue'
import { getRecommendListService, getDayRandomWallpaperListService } from '/api'

const dayRandomWallpaperList = ref([]) // 每日推荐壁纸列表
const recommendList = ref([]) // 专题精选列表

// 分享给好友
onShareAppMessage(() => {
  return {
    title: '咸虾米壁纸，好看的手机壁纸',
    path: '/pages/index/index'
  }
})

// 分享朋友圈
onShareTimeline(() => {
  return {
    title: '咸虾米壁纸，好看的手机壁纸'
  }
})

// 跳转到预览页面
const goPreview = (id) => {
  uni.setStorageSync('storageClassList', dayRandomWallpaperList.value)
  uni.navigateTo({
    url: `/pages/preview/preview?id=${id}`
  })
}

// 获取每日推荐壁纸
const getDayRandomWallpaperList = async () => {
  const res = await getDayRandomWallpaperListService()
  dayRandomWallpaperList.value = res.data
}
getDayRandomWallpaperList()

// 获取专题精选列表
const getRecommendList = async () => {
  const params = {
    select: true
  }
  const res = await getRecommendListService(params)
  recommendList.value = res.data
}
getRecommendList()
</script>

<style lang="scss" scoped>
.homeLayout {
  .select {
    padding-top: 50rpx;

    .date {
      :deep(.uni-icons) {
        color: $brand-theme-color !important;
      }
    }

    .date {
      display: flex;
      align-items: center;
      color: $brand-theme-color;

      .text {
        margin-left: 5rpx;
      }
    }

    .content {
      width: 720rpx;
      margin-left: 30rpx;
      margin-top: 30rpx;

      scroll-view {
        white-space: nowrap;

        .box {
          display: inline-block;
          width: 200rpx;
          aspect-ratio: 9/20;
          margin-right: 15rpx;

          image {
            width: 100%;
            height: 100%;
            border-radius: 10rpx;
          }

          &:last-child {
            margin-right: 30rpx;
          }
        }
      }
    }
  }

  .theme {
    padding: 50rpx 0;

    .more {
      font-size: 32rpx;
      color: #888;
    }

    .content {
      display: grid;
      gap: 15rpx;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 30rpx;
      padding: 0 30rpx;
    }
  }
}
</style>
