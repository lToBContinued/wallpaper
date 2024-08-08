const SYSTEM_INFO = uni.getSystemInfoSync() // 获取设备信息
// 状态栏高度
export const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 15

// 标题栏高度
export const getTitleBarHeight = () => {
  if (uni.getMenuButtonBoundingClientRect) {
    let { top, height } = uni.getMenuButtonBoundingClientRect()
    return (top - getStatusBarHeight()) * 2 + height
  } else {
    return 40
  }
}

// 填充区高度
export const getFillHeight = () => {
  return getTitleBarHeight() + getStatusBarHeight()
}

// 针对于抖音小程序的适配
export const getLeftIconLeft = () => {
  // #ifdef MP-TOUTIAO
  const {
    leftIcon: { left, width }
  } = tt.getCustomButtonBoundingClientRect()
  return left + parseInt(width) + 5
  // #endif
  // #ifndef MP-TOUTIAO
  return 0
  // #endif
}
