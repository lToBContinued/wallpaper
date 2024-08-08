<template>
  <view class="userLayout pageBg">
    <view class="userInfo">
      <view class="avatar">
        <image src="/static/images/avatar.png" mode="aspectFill"></image>
      </view>
      <view class="ip">100.100.100.100</view>
      <view class="address">来自于：山东</view>
    </view>

    <view class="section">
      <navigator url="/pages/classlist/classlist">
        <info-list title="我的下载" iconType="download-filled" num="33"></info-list>
      </navigator>
      <navigator url="/pages/classlist/classlist">
        <info-list title="我的评分" iconType="star-filled" num="33"></info-list>
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
      <info-list title="订阅更新" iconType="notification-filled"></info-list>
      <info-list title="常见问题" iconType="flag-filled" :bottomLine="false"></info-list>
    </view>
  </view>
</template>

<script setup>
import InfoList from './components/info-list.vue'

// 拨打电话
const clickContact = () => {
  uni.makePhoneCall({
    phoneNumber: '12345678901'
  })
}
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
