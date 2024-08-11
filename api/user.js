import request from '/utils/request'

// 获取用户信息
export const getUserInfoService = () => {
  return request({
    url: '/userInfo'
  })
}
