<template>
  <view class="classLayout">
    <view class="classify">
      <theme-item v-for="item in 15" :key="item"></theme-item>
    </view>
  </view>
</template>

<script setup>
import ThemeItem from '../../components/global/theme-item.vue'
</script>

<style scoped lang="scss">
.classLayout {
  .classify {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15rpx;
    padding: 30rpx;
  }
}
</style>
