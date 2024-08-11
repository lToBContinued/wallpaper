export function compareTimestamp(timestamp) {
  const now = Date.now()
  const diff = now - timestamp // 时间差，单位为毫秒

  // 计算时间差对应的单位
  const minute = 60 * 1000 // 1分钟
  const hour = 60 * minute // 1小时
  const day = 24 * hour // 1天
  const month = 30 * day // 近似1个月（假设30天）

  // 判断时间差，并返回相应的字符串
  if (diff < minute) {
    return '1分钟内'
  } else if (diff < hour) {
    return `${Math.floor(diff / minute)}分钟`
  } else if (diff < day) {
    return `${Math.floor(diff / hour)}小时`
  } else if (diff < month) {
    return `${Math.floor(diff / day)}天`
  } else if (diff < 3 * month) {
    return `${Math.floor(diff / month)}个月`
  } else {
    return '3个月'
  }
}

// 页面错误跳转到首页
export const gotoHome = () => {
  uni.showModal({
    title: '提示',
    content: '页面错误，将返回首页',
    showCancel: false,
    success: (res) => {
      if (res.confirm) {
        uni.reLaunch({
          url: '/pages/index/index'
        })
      }
    }
  })
}
