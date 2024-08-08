<template>
  <view class="preview">
    <swiper circular="true">
      <swiper-item v-for="item in 5" :key="item">
        <image src="/common/images/preview1.jpg" mode="aspectFill" @click="maskChange"></image>
      </swiper-item>
    </swiper>
    <image-mask v-show="maskState"></image-mask>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import ImageMask from './components/image-mask.vue'

const maskState = ref(true)
// 遮罩的显示/隐藏
const maskChange = () => {
  maskState.value = !maskState.value
}
</script>

<style scoped lang="scss">
.preview {
  width: 100%;
  height: 100vh;
  position: relative;

  swiper {
    width: 100%;
    height: 100%;

    image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
