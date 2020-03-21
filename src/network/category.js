import axios from './request'

export function getCat () {
  return axios({
    url: '/category'
  })
}

export function getSubcat (maitKey) {
  return axios({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail (maitKey, type) {
  return axios({
    url: '/getsubcategory',
    params: {
      maitKey,
      type
    }
  })
}
