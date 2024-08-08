<template>
  <view class="classList">
    <view class="content">
      <navigator url="/pages/preview/preview" class="item" v-for="item in classList" :key="item._id">
        <image :src="item.smallPicurl" mode="aspectFill"></image>
      </navigator>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getClassListService } from '/api/classlist'

const classList = ref([]) // 分类中壁纸列表
const params = {} // 请求参数

onLoad((e) => {
  let { classid = null, name = null } = e
  params.classid = classid
  // 修改导航栏标题
  uni.setNavigationBarTitle({
    title: name
  })
  getClassList()
})

// 获取分类中壁纸列表
const getClassList = async () => {
  const res = await getClassListService(params)
  classList.value = res.data
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
