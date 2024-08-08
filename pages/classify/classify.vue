<template>
  <view class="classLayout pageBg">
    <custom-nav-bar title="分类"></custom-nav-bar>
    <view class="classify">
      <theme-item v-for="item in recommendList" :key="item._id" :item="item"></theme-item>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import ThemeItem from '/components/global/theme-item.vue'
import CustomNavBar from '/components/global/custom-nav-bar.vue'
import { getRecommendListService } from '/api'

const recommendList = ref([]) // 分类列表

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
