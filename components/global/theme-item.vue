<template>
  <view class="theme-item">
    <navigator v-if="!isMore" :url="`/pages/classlist/classlist?id=${item._id}&name=${item.name}`" class="box">
      <image class="pic" :src="item.picurl" mode="aspectFill"></image>
      <view class="mask">{{ item.name }}</view>
      <view class="tab">{{ compareTimestamp(item.updateTime) }}前更新</view>
    </navigator>

    <navigator v-else url="/pages/classify/classify" open-type="reLaunch" class="box more">
      <image class="pic" src="/common/images/more.jpg" mode="aspectFill"></image>
      <view class="mask">
        <uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
        <view class="text">更多</view>
      </view>
    </navigator>
  </view>
</template>

<script setup>
import { onMounted } from 'vue'
import { compareTimestamp } from '/utils/common'

const props = defineProps({
  isMore: {
    type: Boolean,
    default: false
  },
  item: {
    type: Object,
    default: () => {
      return {
        name: '默认名称',
        picurl: '../../common/images/classify1.jpg',
        updateTime: Date.now() - 1000 * 60 * 60 * 5
      }
    }
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
