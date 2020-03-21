<template>
  <div id="home">
    <nav-bar class="home-nav-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control"
                 :titles="['流行','新款','精选']"
                 @itemClick="tabClick"
                 ref="tabControl1" v-show="isTabFixed"/>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp = "loadMore">
      <home-swiper :banners="banners" ref="hSwiper" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-control class="home-tab-control"
                   :titles="['流行','新款','精选']"
                   @itemClick="tabClick"
                   ref="tabControl2" />
                   <!-- :class="{fixed: isTabFixed}"/> -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backTop" v-show="isShowBackTop"/>

  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import TabControl from 'content/tabControl/TabControl'
import GoodsList from 'content/goods/GoodsList'
import Scroll from 'common/scroll/Scroll'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import { getHomeMultidata, getHomeData, RECOMMEND, BANNER } from 'network/home'
import { itemListenerMixin, backTopMixin, tabControlMixin } from '@/common/mixin'

export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      tabOffsetTop: 0,
      saveY: 0
    }
  },
  mixins: [itemListenerMixin, backTopMixin, tabControlMixin],
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  destroyed () {
    // console.log('home destroyed')
  },
  activated () {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated () {
    // 1、保存y值
    this.saveY = this.$refs.scroll.scroll.y

    // 2、取消全局事件的监听
    this.$bus.$off('itemImageLoad', this.homeItemListener)
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  created () {
    // 请求多个数据
    this.getMultiData()

    // 请求商品数据
    this.getHomeProducts('pop')
    this.getHomeProducts('new')
    this.getHomeProducts('sell')
  },
  mounted () {
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    contentScroll (position) {
      // 1、判断BackTop(返回顶部图标)是否显示
      this.listenShowBackTop(position)
      // 2、决定tabControl是否吸顶(position:fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore () {
      this.getHomeProducts(this.currentType)
      // this.$refs.scroll.refresh()
    },
    swiperImageLoad () {
      // console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /**
     * 网络请求相关方法
     */
    getMultiData () {
      // 直接调用getHomeMultidata()函数, getHomeMultidata()返回的是一个Promise, 接.then()操作
      getHomeMultidata().then(res => {
        this.banners = res.data[BANNER].list
        this.recommends = res.data[RECOMMEND].list
        // 下次更新DOM时,获取新的tabOffsetTop值(不保险,可以在updated钩子中获取)
        // this.$nextTick(() => {
        //   this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
        // })
      })
    },
    getHomeProducts (type) {
      const page = this.goods[type].page + 1
      getHomeData(type, page).then(res => {
        const resgoodsList = res.data.list
        this.goods[type].list.push(...resgoodsList) // ...是指push可变数组（解析后一个个push）
        this.goods[type].page += 1

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp() // 才能进行下一次的(加载更多)
      })
    }
  }
}
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
  }

  .home-nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;

    /* 在使用浏览器原生滚动时，为了让导航不跟随一起滚动 */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9 */
  }

  /* .home-tab-control{
    position: sticky;
    top: 44px;
    z-index: 9
  } */

  /* .fixed{
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    z-index: 9
  } */

  .tab-control{
    position: relative;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  /* .content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  } */

</style>
