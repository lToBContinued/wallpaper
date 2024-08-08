export default function request(config = {}) {
  let { url, method = 'GET', header={} } = config
  const baseURL = 'https://tea.qingnian8.com/api/bizhi' // 基地址
  url = baseURL + url
  header['access-key'] = 'seele123' // 请求头

  return new Promise((resolve, reject) => {
    uni.request({
      url,
      method,
      header,
      success: res => {
        if (res.data.errCode === 0) {
          resolve(res)
        } else if (res.data.errCode === 400) {
          uni.showModal({
            title: '错误提示',
            content: res.data.errMsg,
            showCancel: false
          })
          reject(res.data)
        } else {
          uni.showToast({
            title: res.data.errMsg,
            icon: 'none'
          })
        }
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
