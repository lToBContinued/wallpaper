<template>
  <view class="loadBox">
    <view class="box">
      <view class="loader"></view>
      <view class="text">加载中……</view>
    </view>
  </view>
</template>

<style scoped>
.loadBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loader {
  margin-bottom: 20rpx;
  width: 60rpx;
  aspect-ratio: 0.577;
  clip-path: polygon(0 0, 100% 100%, 0 100%, 100% 0);
  position: relative;
  animation: l19 2s infinite linear;
  overflow: hidden;
}

.loader:before {
  content: '';
  position: absolute;
  inset: -150% -150%;
  background: repeating-conic-gradient(from 30deg, #ffabab 0 60deg, #abe4ff 0 120deg, #28b389 0 180deg);
  animation: inherit;
  animation-direction: reverse;
}

.text {
  color: #676767;
}

@keyframes l19 {
  100% {
    transform: rotate(360deg);
  }
}
</style>
