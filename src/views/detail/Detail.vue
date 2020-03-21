<template>
  <div id="detail">
    <!-- 事件:itemClick, 传入值:itemClick -->
    <detail-nav-bar @itemClick="itemClick" ref="nav"/>
    <scroll class="content" ref='scroll' :probe-type="3" @scroll="contentScroll">
      <!-- 属性:topImages, 传入值:top-images, 属性不区分大小写，解析后可能出错-->
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :paramInfo="paramInfo" ref="params"/>
      <detail-comment-info :comment-info="commentInfo" ref="comments"/>
      <goods-list :goods="recommends" ref="recommends"/>
    </scroll>
    <up-box :is-show-back-top="isShowBackTop"></up-box>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
    <detail-bottom-bar @addCart="addToCart"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'common/scroll/Scroll'
import GoodsList from 'content/goods/GoodsList'
import UpBox from 'content/upBox/UpBox'

import { getDetail, getRecommend, Goods, Shop, GoodsParam } from 'network/detail'
import { itemListenerMixin, backTopMixin } from '@/common/mixin'

import { mapMutations } from 'vuex'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    UpBox
  },
  data () {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      currentIndex: 0
    }
  },
  mixins: [itemListenerMixin, backTopMixin],
  created () {
    // 1、保存存入的id
    this.id = this.$route.params.id

    // 2、根据id请求详情数据
    getDetail(this.id).then(res => {
      // console.log(res)
      const data = res.result

      // 2.1、获取顶部的图片轮播数据
      this.topImages = data.topImages

      // 2.2、获取商品信息
      this.goods = new Goods(data.itemInfo, data.itemServices.columns, data.shopInfo.services)

      // 2.3、创建店铺信息
      this.shop = new Shop(data.shopInfo)

      // 2.4、保存商品的详情数据
      this.detailInfo = data.detailInfo

      // 2.5、获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      // 2.6、获取评论信息
      this.commentInfo = data.rate.list[0]

      // 渲染完毕后执行该回调函数
      // 根据最新的数据，对应的DOM是已经被渲染出来，
      // 但是图片依然是没有加载完(目前获取到的offsetTop不包括其中的图片)
      this.$nextTick(() => {
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comments.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
      })
    })

    // 3、请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.list
    })
  },
  mounted () {

  },
  updated () {
    // this.themeTopYs = []
    // this.themeTopYs.push(0)
    // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.comments.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
    // console.log(this.themeTopYs)
  },
  destroyed () {
    this.$bus.$off('itemImageLoad', this.detailItemListener)
  },
  methods: {
    ...mapMutations(['ADD_TO_CART']),
    imageLoad () {
      this.$refs.scroll.refresh()
      // 标题内容对应
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comments.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
    },

    // 点击标题定位到相应位置
    itemClick (index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    // 滚动内容对应标题选中状态
    contentScroll (position) {
      const positionY = -position.y
      // 遍历数组 [0,1000,2000,3000,Number.MAX_VALUE] Number.MAX_VALUE -> js中能取到的最大值

      // 方法一：for (let i=0; i<this.themeTopYs.length ;i++){}
      for (let i in this.themeTopYs) {
        // 这里的 i 是 字符串类型（str）i*1 或者 parseInt(i)转为 number
        i = parseInt(i)
        let length = this.themeTopYs.length
        // if (positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
        //   console.log(i) //越界,最后一个是undefined
        // }
        // 正确的方法
        if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
        // 简单方法 for (let i=0; i<this.themeTopYs.length-1 ;i++){}
        // if (this.currentIndex !== i && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
        //   this.currentIndex = i
        //   this.$refs.nav.currentIndex = this.currentIndex
        // }
      }

      // 1、判断BackTop(返回顶部图标)是否显示
      this.listenShowBackTop(position)
    },
    addToCart () {
      // 获取购物车需要展示的信息
      const product = {}
      product.small_image = this.topImages[0]
      product.name = this.goods.title
      product.price = this.goods.newPrice
      product.desc = this.goods.desc
      product.id = this.id
      // 将商品添加到购物车 (返回promise)
      // this.$store.commit('addCart', product) // commit提交mutations
      // this.$store.dispatch('addCart', product).then(res => { // dispatch提交actions
      //   console.log(res)
      // })

      // this.addCart(product).then(res => { // mapAction 映射关系
      //   this.$toast.show(res, 2000)
      // })

      this.ADD_TO_CART(product)
    }
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 1;
  background-color: #ffffff;
  height: 100vh;
}

.content{
  position: absolute;
  top: 44px;
  bottom: 58px;
  left: 0;
  right: 0;
  overflow: hidden;
}

</style>
