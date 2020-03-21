<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: { // 是否实时监听
      type: Number,
      default: 1
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    pullUpLoad: { // 是否上拉加载更多
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: {} // scroll属性中有scrollTo（返回顶部）的方法
    }
  },
  mounted () {
    // setTimeout(this.__initScroll, 20)
    this.__initScroll()
  },
  methods: {
    __initScroll () {
      // 1.初始化（创建）BScroll对象
      if (!this.$refs.wrapper) return
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType, // 是否实时监听（3为实时监听）
        click: true, // 这里必须设置为true；设置为false时，只有button才能点击
        pullUpLoad: this.pullUpLoad
      })

      // 2.将监听(滚动)事件回调
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', pos => {
          // console.log(pos)
          this.$emit('scroll', pos)
        })
      }

      // 3.监听上拉到底部
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    refresh () {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
    },
    scrollTo (x, y, time) {
      // 调用scroll属性中有scrollTo（返回顶部）的方法，也可以从外部直接调用
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    }
  },
  watch: {
    data () {
      // setTimeout(this.refresh, 20)
    }
  }
}
</script>

<style scoped>

</style>
