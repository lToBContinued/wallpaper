import request from '/utils/request'

// 给壁纸评分
export const getSetupScoreService = (data) => {
  return request({
    url: '/setupScore',
    data
  })
}

export const getDownloadRecordService = (data) => {
  return request({
    url: '/downloadWall',
    data
  })
}
