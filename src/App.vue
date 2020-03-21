<template>
  <div id="app">
    <keep-alive exclude="Detail"> <!-- 不销毁页面,排除Detail页面（重新获取） -->
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'content/mainTabbar/MainTabBar'

import { mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
    MainTabBar
  },
  mounted () {
    this._initData()
  },
  methods: {
    ...mapMutations(['INIT_SHOP_CART', 'INIT_USER_INFO']),
    _initData () {
      this.INIT_SHOP_CART() // 初始化购物车数据
      this.INIT_USER_INFO() // 初始化用户信息
    }
  }
}
// 禁止手机端扩大和缩小手势
window.onload = function () {
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  document.addEventListener('gesturestart', function (event) {
    event.preventDefault()
  })
}
</script>

<style>
  @import "assets/css/base.css";

  #app {
    position: relative;
  }
</style>
