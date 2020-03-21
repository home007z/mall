import { debounce } from './utils'
import BackTop from 'components/content/backTop/BackTop'
import { BACK_POSITION, POP, NEW, SELL } from './const'

export const itemListenerMixin = {
  data () {
    return {
      detailItemListener: null
    }
  },
  mounted () {
    // // 1、图片加载完成的事件监听
    // // 这里的newRefresh是一个函数
    // const newRefresh = debounce(this.$refs.scroll.refresh, 500) // this.$refs.scroll.refresh这里不能加括号()，加上括号就把值传进去了，并不是把函数传进去
    // // 监听items中图片加载完成
    // this.homeItemListener = () => {
    //   // this.$refs.scroll.refresh()
    //   // console.log('-----')
    //   // 防止非常频繁提交刷新（防抖操作debounce）节流throttle
    //   newRefresh('args1', 'args2') // 这里可以传多个参数
    // }
    // this.$bus.$on('itemImageLoad', this.homeItemListener)
    // 2、获取tabControl的offsetTop
    // 所有组件都有一个属性 $el：用于获取组件中的元素
    // console.log(this.$refs.tabControl.offsetTop) // undefined 组件没有offsetTop属性
    // console.log(this.$refs.tabControl.$el.offsetTop) // 组件转为元素，使用offsetTop属性,(不包含图片的高度，图片未加载出来)

    const newRefresh = debounce(this.$refs.scroll.refresh, 500)
    this.detailItemListener = () => {
      newRefresh()
    }
    this.$bus.$on('itemImageLoad', this.detailItemListener)
    // console.log('我是混入中的内容')
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop () { // 返回顶部事件
      // 方法1: 可以直接调用scroll属性中有scrollTo（返回顶部）的方法
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      // 方法2: 直接调用组件的方法
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    listenShowBackTop (position) { // 监听（滚动时）是否回到顶部
      // 1、判断BackTop(返回顶部图标)是否显示
      // console.log(position) //position.y 均为负值
      this.isShowBackTop = (-position.y) > BACK_POSITION
    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP,
      isTabFixed: false
    }
  },
  methods: {
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      };
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    }
  }
}
