<template>
  <view class="wallpaperInfo">
    <view class="box" @click="checkDetail">
      <uni-icons type="info" size="24"></uni-icons>
      <view class="text">信息</view>
    </view>
    <view class="box" @click="giveScore">
      <uni-icons type="star" size="24"></uni-icons>
      <view class="text">{{ currentInfo.score }}分</view>
    </view>
    <view class="box" @click="downloadPic">
      <uni-icons type="download" size="24"></uni-icons>
      <view class="text">下载</view>
    </view>
  </view>

  <!--图片信息弹出层-->
  <uni-popup ref="infoPopup" type="bottom">
    <view class="info-popup">
      <view class="pop-header">
        <view></view>
        <view class="title">壁纸信息</view>
        <view class="close">
          <uni-icons type="closeempty" size="18" color="#999" @click="closeInfoPopup"></uni-icons>
        </view>
      </view>

      <scroll-view scroll-y="true">
        <view class="content">
          <view class="row">
            <view class="label">壁纸ID：</view>
            <text selectable="true" class="value">{{ currentInfo._id }}</text>
          </view>
          <view class="row">
            <view class="label">分类：</view>
            <text selectable="true" class="value category">{{ wallPaperClass }}</text>
          </view>
          <view class="row">
            <view class="label">发布者：</view>
            <text selectable="true" class="value">{{ currentInfo.nickname }}</text>
          </view>
          <view class="row">
            <view class="label">评分：</view>
            <view class="value rate-box">
              <uni-rate readonly touchable :value="currentInfo.score" size="16"></uni-rate>
              <text class="score">{{ currentInfo.score }}分</text>
            </view>
          </view>
          <view class="row">
            <view class="label">摘要：</view>
            <text selectable="true" class="value"> {{ currentInfo.description }}</text>
          </view>
          <view class="row">
            <view class="label">标签：</view>
            <view class="value tabs">
              <text selectable="true" class="tab" v-for="item in currentInfo.tabs" :key="item">
                {{ item }}
              </text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </uni-popup>

  <!--评分弹出层-->
  <uni-popup ref="scorePopup" :is-mask-click="false">
    <view class="score-popup">
      <view class="pop-header">
        <view></view>
        <view class="title">{{ isScore ? '评分过了~' : '壁纸评分' }}</view>
        <view class="close">
          <uni-icons type="closeempty" size="18" color="#999" @click="closeScorePopup"></uni-icons>
        </view>
      </view>
      <view class="content">
        <uni-rate
          touchable
          v-model="userScore"
          size="20"
          allowHalf
          :disabled="isScore"
          disabled-color="#ffca3e"
        ></uni-rate>
        <text class="text">{{ userScore }}分</text>
      </view>
      <view class="footer">
        <button type="default" size="mini" plain="true" :disabled="isScore" @click="submitScore">确认评分</button>
      </view>
    </view>
  </uni-popup>
</template>

<script setup>
import { ref } from 'vue'
import { getSetupScoreService } from '/api/preview'

const props = defineProps({
  // 分类图片列表
  classList: {
    type: Array,
    default() {
      return []
    }
  },
  // 当前图片索引
  currentIndex: {
    type: Number,
    default: 0
  },
  // 当前图片信息
  currentInfo: {
    type: Object,
    default() {
      return {}
    }
  },
  // 当前壁纸分类
  wallPaperClass: {
    type: String,
    default: ''
  }
})

const infoPopup = ref(null)
const scorePopup = ref(null)
const userScore = ref(0)
const isScore = ref(false) // 用户是否有评分

// 打开信息弹出层
const checkDetail = () => {
  infoPopup.value.open()
}
// 关闭信息弹出层
const closeInfoPopup = () => {
  infoPopup.value.close()
}

// 打开评分弹出层
const giveScore = () => {
  if (props.currentInfo.userScore) {
    isScore.value = true
    userScore.value = props.currentInfo.userScore
  }
  scorePopup.value.open()
}
// 关闭评分弹出层
const closeScorePopup = () => {
  scorePopup.value.close()
  userScore.value = 0
  isScore.value = false
}
// 确认评分
const submitScore = async () => {
  uni.showLoading({
    title: '评分中~'
  })
  let { classid, _id: wallId } = props.currentInfo
  const params = {
    classid,
    wallId,
    userScore: userScore.value
  }
  // 评分
  const res = await getSetupScoreService(params)
  uni.hideLoading()
  if (res.errCode === 0) {
    uni.showToast({
      title: '评分成功',
      icon: 'none'
    })
    // 将评分后的结果保存
    props.classList[props.currentIndex]['userScore'] = userScore.value
    uni.setStorageSync('storageClassList', props.classList)
    closeScorePopup()
  }
}

// 下载壁纸
const downloadPic = () => {
  // 条件编译
  // H5下载方式
  // #ifdef H5
  uni.showModal({
    content: '请长按保存壁纸',
    showCancel: false
  })
  // #endif

  // 小程序下载方式
  // #ifndef H5
  uni.showLoading({
    title: '全力下载中~',
    mask: true
  })
  uni.getImageInfo({
    src: props.currentInfo.picUrl,
    success: (res) => {
      // 保存图片到相册
      uni.saveImageToPhotosAlbum({
        filePath: res.path,
        // 同意授权
        success: () => {
          uni.showToast({
            title: '保存成功',
            icon: 'none'
          })
        },
        // 不同意授权
        fail: (err) => {
          if (err.errMsg === 'saveImageToPhotosAlbum:fail cancel') {
            uni.showToast({
              title: '保存失败，请重新点击下载',
              icon: 'none'
            })
            return
          }
          // 再次询问
          uni.showModal({
            title: '提示',
            content: '需要授权相册权限',
            success: (res) => {
              if (res.confirm) {
                uni.openSetting({
                  success: (setting) => {
                    console.log(setting)
                    if (setting.authSetting['scope.writePhotosAlbum']) {
                      uni.showToast({
                        title: '获取授权成功',
                        icon: 'none'
                      })
                    } else {
                      uni.showToast({
                        title: '获取授权失败',
                        icon: 'none'
                      })
                    }
                  }
                })
              }
            }
          })
        },
        complete: () => {
          uni.hideLoading()
        }
      })
    }
  })
  // #endif
}
</script>

<style scoped lang="scss">
.wallpaperInfo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 83vh;
  left: 50%;
  transform: translateX(-50%);
  width: 65vw !important;
  height: 120rpx;
  border-radius: 60rpx;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10rpx);

  .box {
    @include flex-center;
    flex-direction: column;
    padding: 2rpx 12rpx;

    .text {
      font-size: 26rpx;
      color: $text-font-color-2;
    }
  }
}

.pop-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    color: $text-font-color-2;
    font-size: 26rpx;
  }

  .close {
    padding: 6rpx;
  }
}

.info-popup {
  padding: 30rpx;
  background-color: #fff;
  border-radius: 30rpx 30rpx 0 0;
  overflow: hidden;

  scroll-view {
    max-height: 60vh;

    .content {
      .row {
        display: flex;
        padding: 16rpx 0;
        font-size: 32rpx;
        line-height: 1.7em;

        .label {
          width: 140rpx;
          font-size: 30rpx;
          color: $text-font-color-3;
          text-align: right;
        }

        .value {
          flex: 1;
          width: 0;
        }

        .rate-box {
          display: flex;
          align-items: center;

          .score {
            padding-left: 10rpx;
            font-size: 26rpx;
            color: $text-font-color-2;
          }
        }

        .tabs {
          display: flex;
          flex-wrap: nowrap;
          height: 50rpx;

          .tab {
            margin: 0 10rpx 0 10rpx;
            border: 1px solid $brand-theme-color;
            color: $brand-theme-color;
            font-size: 22rpx;
            padding: 0 30rpx;
            border-radius: 40rpx;
            line-height: 50rpx;
          }
        }

        .category {
          color: $brand-theme-color;
        }
      }
    }
  }
}

.score-popup {
  width: 70vw;
  padding: 30rpx;
  background-color: #fff;
  border-radius: 30rpx;

  .content {
    @include flex-center;
    padding: 30rpx 0;

    .text {
      width: 80rpx;
      padding-left: 10rpx;
      color: #ffca3e;
      line-height: 1em;
      text-align: right;
    }
  }

  .footer {
    @include flex-center;
    padding: 10rpx 0;
  }
}
</style>
