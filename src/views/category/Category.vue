<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"/>
      <div class="category-content">
        <tab-control :titles="['综合', '新品', '销量']"
                     @itemClick="tabClick"
                     ref="tabControl1"
                     v-show="isTabFixed"
                     class="category-tab-control"/>
          <scroll id="tab-content"
              :probe-type="3"
              @scroll="contentScroll"
              :pull-up-load="true"
              @pullingUp = "loadMore"
              ref="scroll">
          <tab-content-category :subcategories="showSubcategory" @imageLoad="imageLoad"/>
          <tab-control :titles="['综合', '新品', '销量']"
                        @itemClick="tabClick"
                        ref="tabControl2"/>
          <goods-list :goods="showCategoryDetail"></goods-list>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import Scroll from 'common/scroll/Scroll'
import TabControl from 'content/tabControl/TabControl'
import GoodsList from 'content/goods/GoodsList'

import TabMenu from './childComps/TabMenu'
import TabContentCategory from './childComps/TabContentCategory'

import { getCat, getSubcat, getCategoryDetail } from 'network/category'
import { POP, SELL, NEW } from '@/common/const'
import { tabControlMixin } from '@/common/mixin'

export default {
  name: 'Category',
  components: {
    NavBar,
    TabMenu,
    TabControl,
    GoodsList,
    Scroll,
    TabContentCategory
  },
  mixins: [tabControlMixin],
  data () {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
      tabOffsetTop: 0,
      showSubcategory: {},
      showCategoryDetail: []
    }
  },
  created () {
    // 1.请求分类数据
    this._getCategory()
  },
  // computed: {
  //   showSubcategory () {
  //     if (this.currentIndex === -1) return {}
  //     return this.categoryData[this.currentIndex].subcategories
  //   },
  //   showCategoryDetail () {
  //     if (this.currentIndex === -1) return []
  //     return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
  //   }
  // },
  watch: {
    currentType () {
      this.showSubcategory = this.categoryData[this.currentIndex].subcategories
      this.showCategoryDetail = this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  methods: {
    _getCategory () {
      getCat().then(res => {
        // 1.获取分类数据
        this.categories = res.data.list
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0)
      })
    },
    _getSubcategories (index) {
      this.currentIndex = index
      const mailKey = this.categories[index].mailKey
      getSubcat(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data
        this.categoryData = { ...this.categoryData }
        this._getCategoryDetail(POP)
        this._getCategoryDetail(SELL)
        this._getCategoryDetail(NEW)
      })
    },
    _getCategoryDetail (type) {
      // 1.获取请求的miniWallkey
      const mailKey = this.categories[this.currentIndex].mailKey
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(mailKey, type).then(res => {
        // 3.将获取的数据保存下来
        // this.categoryData[this.currentIndex].categoryDetail[type] = res.data.list

        const categoryList = res.data.list
        this.categoryData[this.currentIndex].categoryDetail[type].push(...categoryList)

        this.categoryData = { ...this.categoryData }

        this.showSubcategory = this.categoryData[this.currentIndex].subcategories
        this.showCategoryDetail = this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      })
    },
    /**
       * 事件响应相关的方法
       */
    selectItem (index) {
      this._getSubcategories(index)
    },
    /**
     * 小分类图片加载完毕
     */
    imageLoad () {
      this.$refs.scroll.refresh()
      // tabControl 离顶部的高度
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /**
     * tabControl是否吸顶
     */
    contentScroll (position) {
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    /**
     * 上拉加载更多
     */
    loadMore () {
      this._getCategoryDetail(this.currentType)
      this.$refs.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>
  #category {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
  }

  .category-content{
    position: relative;
    height: 100%;
    width: 100%;
  }

  .category-tab-control{
    position: absolute;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    height: 40px;
  }

  #tab-content {
    height: 100%;
    flex: 1;
    overflow: hidden;
  }
</style>
