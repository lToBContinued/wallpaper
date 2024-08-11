import request from '/utils/request'

// 获取用户信息
export const getUserInfoService = () => {
  return request({
    url: '/userInfo'
  })
}

// 获取我的评分/我的下载列表
export const getUserHistoryWallListService = (data = {}) => {
  return request({
    url: '/userWallList',
    data
  })
}
