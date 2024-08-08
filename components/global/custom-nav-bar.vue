<template>
  <view class="navBarLayout">
    <view class="nav-bar">
      <view class="status-bar" :style="{ height: getStatusBarHeight() + 'px' }"></view>
      <view class="title-bar" :style="{ height: getTitleBarHeight() + 'px', marginLeft: getLeftIconLeft + 'px' }">
        <view class="title">{{ title }}</view>
        <view class="search">
          <uni-icons type="search" color="#888" size="18" class="icon"></uni-icons>
          <text class="text">搜索</text>
        </view>
      </view>
    </view>
    <!--填充区-->
    <view class="fill" :style="{ height: getFillHeight() + 'px' }"></view>
  </view>
</template>

<script setup>
import { getStatusBarHeight, getTitleBarHeight, getFillHeight, getLeftIconLeft } from '/utils/system'

const props = defineProps({
  title:{
    type: String,
    default: '壁纸'
  }
})
</script>

<style scoped lang="scss">
.navBarLayout {
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background: linear-gradient(to bottom, transparent, #fff 400rpx), linear-gradient(to right, #beecd8 20%, #f4e2d8);

    .status-bar {
    }

    .title-bar {
      display: flex;
      align-items: center;
      padding: 0 30rpx;
      height: 100rpx;

      .title {
        font-size: 44rpx;
        font-weight: 700;
        color: $text-font-color-1;
      }

      .search {
        display: flex;
        align-items: center;
        width: 220rpx;
        height: 56rpx;
        margin-left: 30rpx;
        border-radius: 60rpx;
        background-color: rgba(255, 255, 255, 0.4);
        border: 1px solid #fff;
        color: #999;
        font-size: 28rpx;

        .icon {
          margin-left: 5rpx;
        }

        .text {
          padding-left: 10rpx;
        }
      }
    }
  }

  .fill {
  }
}
</style>
