<template>
  <view class="classLayout pageBg">
    <custom-nav-bar title="分类"></custom-nav-bar>
    <view class="classify" v-if="recommendList.length !== 0">
      <theme-item v-for="item in recommendList" :key="item._id" :item="item"></theme-item>
    </view>
    <loading v-else></loading>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import ThemeItem from '/components/global/theme-item.vue'
import CustomNavBar from '/components/global/custom-nav-bar.vue'
import { getRecommendListService } from '/api'
import Loading from '/components/global/loading.vue'

const recommendList = ref([]) // 分类列表

// 分享给好友
onShareAppMessage(() => {
  return {
    title: '咸虾米壁纸，精选分类',
    path: '/pages/classify/classify'
  }
})

// 分享朋友圈
onShareTimeline(() => {
  return {
    title: '咸虾米壁纸，精选分类'
  }
})

// 获取分类壁纸列表
const getRecommendList = async () => {
  const params = {
    pageSize: 20
  }
  const res = await getRecommendListService(params)
  recommendList.value = res.data
}
getRecommendList()
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
