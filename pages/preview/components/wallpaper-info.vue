<template>
  <view class="wallpaperInfo">
    <view class="box" @click="checkDetail">
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

  <!--弹出层-->
  <uni-popup ref="infoPopup" type="bottom">
    <view class="info-popup">
      <view class="pop-header">
        <view></view>
        <view class="title">壁纸信息</view>
        <view class="close">
          <uni-icons type="closeempty" size="18" color="#999" @click="closePopup"></uni-icons>
        </view>
      </view>

      <scroll-view scroll-y="true">
        <view class="content">
          <view class="row">
            <view class="label">壁纸ID：</view>
            <text selectable="true" class="value">123123123123abcdefg</text>
          </view>
          <view class="row">
            <view class="label">分类：</view>
            <text selectable="true" class="value category">明星美女</text>
          </view>
          <view class="row">
            <view class="label">发布者：</view>
            <text selectable="true" class="value">咸虾米</text>
          </view>
          <view class="row">
            <view class="label">评分：</view>
            <view class="value rate-box">
              <uni-rate readonly touchable value="3" size="16"></uni-rate>
              <text class="score">5分</text>
            </view>
          </view>
          <view class="row">
            <view class="label">摘要：</view>
            <text selectable="true" class="value"> 摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要 </text>
          </view>
          <view class="row">
            <view class="label">标签：</view>
            <view class="value tabs">
              <text selectable="true" class="tab" v-for="item in 3" :key="item">标签名</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </uni-popup>
</template>

<script setup>
import { ref } from 'vue'

const infoPopup = ref(null)
// 打开信息弹出层
const checkDetail = () => {
  infoPopup.value.open()
}
// 关闭信息弹出层
const closePopup = () => {
  infoPopup.value.close()
}
</script>

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

.info-popup {
  padding: 30rpx;
  background-color: #fff;
  border-radius: 30rpx 30rpx 0 0;
  overflow: hidden;

  .pop-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      color: $text-font-color-2;
      font-size: 26rpx;
    }

    .close {
      padding: 6rpx;
    }
  }

  scroll-view {
    max-height: 60vh;

    .content {
      .row {
        display: flex;
        padding: 16rpx 0;
        font-size: 32rpx;
        line-height: 1.7em;

        .label {
          width: 140rpx;
          font-size: 30rpx;
          color: $text-font-color-3;
          text-align: right;
        }

        .value {
          flex: 1;
          width: 0;
        }

        .rate-box {
          display: flex;
          align-items: center;

          .score {
            padding-left: 10rpx;
            font-size: 26rpx;
            color: $text-font-color-2;
          }
        }

        .tabs {
          display: flex;
          flex-wrap: nowrap;

          .tab {
            margin: 0 10rpx 0 10rpx;
            border: 1px solid $brand-theme-color;
            color: $brand-theme-color;
            font-size: 22rpx;
            padding: 10rpx 30rpx;
            border-radius: 40rpx;
            line-height: 1em;
          }
        }

        .category {
          color: $brand-theme-color;
        }
      }
    }
  }
}
</style>
