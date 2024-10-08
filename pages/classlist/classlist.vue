<template>
  <view class="classList">
    <!--加载中-->
    <view class="loading-layout" v-if="!classList.length && !noData">
      <loading></loading>
    </view>
    <!--内容-->
    <view class="content">
      <navigator
        v-for="item in classList"
        :key="item._id"
        :url="`/pages/preview/preview?id=${item._id}&name=${currentPageName}`"
        class="item"
      >
        <image :src="item.smallPicurl" mode="aspectFill"></image>
      </navigator>
    </view>
    <!--触底-->
    <view class="loading-layout" v-if="classList.length || noData">
      <uni-load-more :status="noData ? 'noMore' : 'loading'"></uni-load-more>
    </view>
    <!--设备底部虚拟控件占位-->
    <view class="safe-area-inset-bottom"></view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad, onUnload, onReachBottom, onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import { getClassListService } from '/api/classlist'
import { getUserHistoryWallListService } from '../../api/user'
import Loading from '../../components/global/loading.vue'

const currentPageName = ref('')
const classList = ref([]) // 分类中壁纸列表
// 请求参数
const params = {
  pageNum: 1,
  pageSize: 12
}
const noData = ref(false) // 判断是否还有数据
let pageName = ref('') // 页面名称

// 页面加载时修改导航栏标题并获取分类中壁纸列表
onLoad((e) => {
  let { id = null, name = null, type = null } = e // 获取分类页面id和分类名称
  if (type) {
    params['type'] = type
  }
  if (id) {
    params['classid'] = id
  }
  currentPageName.value = name
  pageName.value = name
  // 修改导航栏标题
  uni.setNavigationBarTitle({
    title: name
  })
  getClassList()
})

// 离开页面时清楚缓存
onUnload(() => {
  uni.removeStorageSync('storageClassList')
})

// 触底加载
onReachBottom(() => {
  if (noData.value) return
  params['pageNum']++
  getClassList()
})

// 分享给好友
onShareAppMessage(() => {
  return {
    title: `咸虾米壁纸-${pageName.value}`,
    path: `/pages/classlist/classlist?id=${params.classid}&name=${pageName.value}`
  }
})

// 分享朋友圈
onShareTimeline(() => {
  return {
    title: `咸虾米壁纸-${pageName.value}`,
    query: `id=${params.classid}&name=${pageName.value}`
  }
})

// 获取分类中壁纸列表
const getClassList = async () => {
  let res
  // 通过id查询
  if (params.classid) {
    res = await getClassListService(params)
  }
  // 通过个人中心的查询历史数据
  if (params.type) {
    res = await getUserHistoryWallListService(params)
  }
  if (res.data.length < params.pageSize) {
    noData.value = true
  }
  classList.value = [...classList.value, ...res.data]
  uni.setStorageSync('storageClassList', classList.value) // 缓存获取到的数据
}
</script>

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
