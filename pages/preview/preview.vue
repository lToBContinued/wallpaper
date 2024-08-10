<template>
  <view class="preview">
    <swiper circular="true" :current="currentIndex" @change="swiperChange">
      <swiper-item v-for="(item, index) in classList" :key="item._id">
        <image v-if="readImgs.includes(index)" :src="item.picUrl" mode="aspectFill" @click="maskChange"></image>
      </swiper-item>
    </swiper>
    <image-mask
      v-show="maskState"
      :classList="classList"
      :currentIndex="currentIndex"
      :currentInfo="currentInfo"
      :wallPaperClass="wallPaperClass"
    ></image-mask>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import ImageMask from './components/image-mask.vue'

const maskState = ref(true) // 遮罩层显隐状态
const classList = ref([]) // 分类列表
const currentId = ref(null) // 当前图片的id
const currentIndex = ref(0) // 当前图片的索引
const readImgs = ref([]) // 看过的图片索引
const currentInfo = ref(null)
const wallPaperClass = ref('')

onLoad((e) => {
  currentId.value = e.id
  currentIndex.value = classList.value.findIndex((item) => item._id === currentId.value)
  currentInfo.value = classList.value[currentIndex.value]
  wallPaperClass.value = e.name
  readImgsFn()
})

// 获取缓存的分类列表数据
const storageClassList = uni.getStorageSync('storageClassList') || []
// 将小图中的_small.webp换成大图的.jpg
classList.value = storageClassList.map((item) => {
  return {
    ...item,
    picUrl: item.smallPicurl.replace('_small.webp', '.jpg')
  }
})

// 滑动切换图片
const swiperChange = (e) => {
  currentIndex.value = e.detail.current
  currentInfo.value = classList.value[currentIndex.value]
  readImgsFn()
}

// 遮罩的显示/隐藏
const maskChange = () => {
  maskState.value = !maskState.value
}

// 记录看过的图片索引并提前加载
function readImgsFn() {
  readImgs.value.push(
    currentIndex.value <= 0 ? classList.value.length - 1 : currentIndex.value - 1,
    currentIndex.value,
    currentIndex.value >= classList.value.length - 1 ? 0 : currentIndex.value + 1
  )
  readImgs.value = [...new Set(readImgs.value)] // 数组去重
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
