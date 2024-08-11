import request from '/utils/request'

// 给壁纸评分
export const getSetupScoreService = (data = {}) => {
  return request({
    url: '/setupScore',
    data
  })
}

// 获取下载记录的信息
export const getDownloadRecordService = (data = {}) => {
  return request({
    url: '/downloadWall',
    data
  })
}

// 获取单张壁纸的详情
export const getSingleWallpaperDetailService = (data = {}) => {
  return request({
    url: '/detailWall',
    data
  })
}
