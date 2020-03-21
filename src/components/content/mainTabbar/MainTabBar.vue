<template>
  <tab-bar>
    <tab-bar-item link="/home" activeColor="#fa436a">
      <img slot="icon" src="~assets/img/tabbar/tab-home.png" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/tab-home-current.png" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category" activeColor="#fa436a">
     <img slot="icon" src="~assets/img/tabbar/tab-cate.png" alt=""> <!--DOM属性里找某个路径，别名前面加波浪号 (~) -->
      <img slot="active-icon" src="~assets/img/tabbar/tab-cate-current.png" alt="">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart" activeColor="#fa436a">
      <img slot="icon" src="~assets/img/tabbar/tab-cart.png" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/tab-cart-current.png" alt="">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile" activeColor="#fa436a">
      <img slot="icon" src="~assets/img/tabbar/tab-my.png" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/tab-my-current.png" alt="">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'common/tabbar/TabBar'
import TabBarItem from 'common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar, TabBarItem
  }
}
</script>

<style scoped>

</style>
