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
          <view class="box" v-for="item in 8" :key="item" @click="goPreview">
            <image src="/common/images/preview_small.webp" mode="aspectFill"></image>
          </view>
        </scroll-view>
      </view>
    </view>

    <!--专题-->
    <view class="theme">
      <common-title>
        <template #name>专题精选</template>
        <template #custom>
          <navigator url="" class="more">More+</navigator>
        </template>
      </common-title>
      <view class="content">
        <theme-item v-for="item in 8" :key="item"></theme-item>
        <theme-item :isMore="true"></theme-item>
      </view>
    </view>
  </view>
</template>

<script setup>
import CommonTitle from '@/components/global/common-title.vue'
import Banner from './components/banner.vue'
import Notice from './components/notice.vue'
import ThemeItem from '@/components/global/theme-item.vue'
import CustomNavBar from '@/components/global/custom-nav-bar.vue'





// 跳转到预览页面
const goPreview = ()=>{
  uni.navigateTo({
    url:'/pages/preview/preview'
  })
}



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
