import request from './request'

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export function getHomeMultidata () {
  return request({ // request返回的是一个Promise
    url: '/multidata'
  })
}

export function getHomeData (type, page) {
  return request({
    url: '/data',
    params: {
      type,
      page
    }
  })
}
