import request from '/utils/request'

export const getSetupScoreService = (data) => {
  return request({
    url: '/setupScore',
    data
  })
}
