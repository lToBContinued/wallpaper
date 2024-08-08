import request from '/utils/request'

export const getBannerListService = async () => {
  return request({
    url: '/homeBanner'
  })
}

export const getDayRandomWallpaperListService = () => {
  return request({
    url: '/randomWall'
  })
}

export const getNewsListService = (data = {}) => {
  return request({
    url: '/wallNewsList',
    data
  })
}

export const getRecommendListService = (data) => {
  return request({
    url: '/classify',
    data
  })
}
