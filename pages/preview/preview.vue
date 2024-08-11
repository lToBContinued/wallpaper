<template>
  <view class="preview" v-if="currentInfo">
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
import { onLoad, onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import ImageMask from './components/image-mask.vue'
import { getSingleWallpaperDetailService } from '/api/preview'

const maskState = ref(true) // 遮罩层显隐状态
const classList = ref([]) // 分类列表
const currentId = ref(null) // 当前图片的id
const currentIndex = ref(0) // 当前图片的索引
const readImgs = ref([]) // 看过的图片索引
const currentInfo = ref(null) // 当前图片信息
const wallPaperClass = ref('') // 壁纸分类名称

onLoad(async (e) => {
  currentId.value = e.id
  // 如果是分享过来的页面，则根据id发送网络请求获取单张壁纸详情
  if (e.type === 'share') {
    const res = await getSingleWallpaperDetailService({ id: currentId.value })
    smallPicToBigPic(res.data)
  }
  currentIndex.value = classList.value.findIndex((item) => item._id === currentId.value)
  currentInfo.value = classList.value[currentIndex.value]
  wallPaperClass.value = e.name
  readImgsFn()
})

// 分享给好友
onShareAppMessage(() => {
  return {
    title: `咸虾米壁纸`,
    path: `/pages/preview/preview?id=${currentId.value}&type=share`
  }
})

// 分享朋友圈
onShareTimeline(() => {
  return {
    title: `咸虾米壁纸`,
    query: `id=${currentId.value}&type=share`
  }
})

// 获取缓存的分类列表数据
const storageClassList = uni.getStorageSync('storageClassList') || []
smallPicToBigPic(storageClassList)

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

// 将小图中的_small.webp换成大图的.jpg
function smallPicToBigPic(arr){
  classList.value = arr.map((item) => {
    return {
      ...item,
      picUrl: item.smallPicurl.replace('_small.webp', '.jpg')
    }
  })
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
