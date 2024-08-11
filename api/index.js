import request from '/utils/request'

// 获取轮播图列表
export const getBannerListService = async () => {
  return request({
    url: '/homeBanner'
  })
}

// 获取每日推荐壁纸列表
export const getDayRandomWallpaperListService = () => {
  return request({
    url: '/randomWall'
  })
}

// 获取公告列表
export const getNewsListService = (data = {}) => {
  return request({
    url: '/wallNewsList',
    data
  })
}

// 获取分类壁纸列表
export const getRecommendListService = (data = {}) => {
  return request({
    url: '/classify',
    data
  })
}

// 获取公告详情
export const getNoticeDetailService = (data = {}) => {
  return request({
    url: '/wallNewsDetail',
    data
  })
}
