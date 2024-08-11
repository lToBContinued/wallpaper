<template>
  <navigator :url="pageUrl" class="row" :style="{ borderBottom: bottomLine ? '1px solid #eee' : 'none' }">
    <view class="left">
      <uni-icons :type="iconType" size="20" color="#28b389"></uni-icons>
      <view class="text">{{ title }}</view>
    </view>

    <view class="right">
      <view class="text">{{ num }}</view>
      <uni-icons type="right" size="15"></uni-icons>
      <slot></slot>
    </view>
  </navigator>
</template>

<script setup>
const props = defineProps({
  iconType: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  num: {
    type: String,
    default: ''
  },
  bottomLine: {
    type: Boolean,
    default: true
  },
  pageUrl: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
.row {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100rpx;
  padding: 0 30rpx;
  background-color: #fff;

  .left,
  .right {
    display: flex;
    align-items: center;

    .text {
      padding-left: 10rpx;
      color: #666;
    }
  }

  .right {
    .text {
      font-size: 28rpx;
      color: #aaa;
    }
  }
}
</style>
