import axios from './request'

export function getDetail (id) {
  return axios({
    url: '/detail',
    params: {
      id
    }
  })
}

export function getRecommend () {
  return axios({
    url: '/recommend'
  })
}

// 将所需的数据整合到一个对象中
export class Goods {
  constructor (itemInfo, columns, services) { // new Goods() 要求传三个参数
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.Price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.nowPrice = itemInfo.highNowPrice
  }
}

export class GoodsParam {
  constructor (info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}

export class Shop {
  constructor (shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

export class Comment {
  constructor (commentInfo, user) {
    this.avatar = user.avatar
    this.name = user.name
    this.content = commentInfo.content
    this.created = commentInfo.created
    this.style = commentInfo.style
    this.images = commentInfo.images
  }
}
