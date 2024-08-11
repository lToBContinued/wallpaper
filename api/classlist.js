import request from '/utils/request'

export const getClassListService = (data = {}) => {
  return request({
    url: '/wallList',
    data
  })
}
