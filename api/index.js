import request from '@/utils/request'

export const getBannerListService = async ()=>{
  return request({
    url:'/homeBanner'
  })
}
