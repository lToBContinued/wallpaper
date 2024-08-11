import request from '/utils/request'

// 获取搜索数据
export const getSearchDataService = (data = {}) => {
  return request({
    url: '/searchWall',
    data
  })
}
