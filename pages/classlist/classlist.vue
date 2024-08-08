<template>
  <view class="classList">
    <view class="content">
      <navigator url="/pages/preview/preview" class="item" v-for="item in 10" :key="item">
        <image src="/common/images/preview2.jpg" mode="aspectFill"></image>
      </navigator>
    </view>
  </view>
</template>

<script setup></script>

<style scoped lang="scss">
.classList {
  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rpx;
    padding: 5rpx;

    .item {
      image {
        display: block;
        width: 100%;
        aspect-ratio: 9/20;
      }
    }
  }
}
</style>
