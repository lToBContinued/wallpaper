<template>
  <view class="userLayout pageBg" v-if="userInfo">
    <view class="status-bar" :style="{ height: getStatusBarHeight() + 'px' }"></view>
    <view class="userInfo">
      <view class="avatar">
        <image src="/static/images/avatar.png" mode="aspectFill"></image>
      </view>
      <view class="ip">{{ userInfo.IP }}</view>
      <view class="address">
        来自于：{{ userInfo.address.city || userInfo.address.province || userInfo.address.country }}
      </view>
    </view>

    <view class="section">
      <navigator url="/pages/classlist/classlist?name=我的下载&type=download">
        <info-list title="我的下载" iconType="download-filled" :num="userInfo.downloadSize"></info-list>
      </navigator>
      <navigator url="/pages/classlist/classlist?name=我的评分&type=score">
        <info-list title="我的评分" iconType="star-filled" :num="userInfo.scoreSize"></info-list>
      </navigator>
      <info-list title="联系客服" iconType="chatboxes-filled" :bottomLine="false">
        <template>
          <!-- #ifdef MP -->
          <!--小程序联系客服-->
          <button open-type="contact">联系客服</button>
          <!-- #endif -->
          <!-- #ifndef MP -->
          <!--网页端联系客服-->
          <button @click="clickContact">拨打电话</button>
          <!-- #endif -->
        </template>
      </info-list>
    </view>

    <view class="section">
      <info-list
        title="订阅更新"
        iconType="notification-filled"
        pageUrl="/pages/notice/notice?id=65361e318b0da4ca084e3ce0&name=订阅更新"
      ></info-list>
      <info-list
        title="常见问题"
        iconType="flag-filled"
        :bottomLine="false"
        pageUrl="/pages/notice/notice?id=6536358ce0ec19c8d67fbe82&name=常见问题"
      ></info-list>
    </view>
  </view>
  <loading v-else></loading>
</template>

<script setup>
import { ref } from 'vue'
import InfoList from './components/info-list.vue'
import { getStatusBarHeight } from '/utils/system'
import { getUserInfoService } from '/api/user'
import Loading from '../../components/global/loading.vue'

const userInfo = ref(null) // 用户信息

// 拨打电话
const clickContact = () => {
  uni.makePhoneCall({
    phoneNumber: '12345678901'
  })
}

// 获取用户信息
const getUserInfo = async () => {
  const res = await getUserInfoService()
  userInfo.value = res.data
}
getUserInfo()
</script>

<style scoped lang="scss">
.userLayout {
  .userInfo {
    @include flex-center;
    flex-direction: column;
    padding: 50rpx 0;

    .avatar {
      width: 160rpx;
      height: 160rpx;
      border-radius: 50%;
      overflow: hidden;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .ip {
      padding: 20rpx 0 5rpx;
      font-size: 44rpx;
      color: #333;
    }

    .address {
      font-size: 28rpx;
      color: #ababab;
    }
  }

  .section {
    width: 690rpx;
    margin: 50rpx auto;
    border: 1px solid #eee;
    border-radius: 10rpx;
    box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100rpx;
    opacity: 0;
  }
}
</style>
