<template>
    <div class="up-box">
        <div class="ui-mask" :class="{'show-mask' : isShow}" @click="close"></div>
        <div class="menus-box" :class="{'show-menus' : isShow, 'show-back-top': isShowBackTop}">
            <div class="menus">
                <div class="menu-item">
                    <p>首页</p>
                    <a class="icon-menu" href="/#/home">
                        <img class="icon" src="~assets/img/tabbar/tab-home.png" alt="">
                    </a>
                </div>
                <div class="menu-item">
                    <p>分类</p>
                    <a class="icon-menu" href="/#/category">
                        <img class="icon" src="~assets/img/tabbar/tab-cate.png" alt="">
                    </a>
                </div>
                <div class="menu-item">
                    <p>购物车</p>
                    <a class="icon-menu" href="/#/cart">
                        <img class="icon" src="~assets/img/tabbar/tab-cart.png" alt="">
                    </a>
                </div>
                <div class="menu-item">
                    <p>我的</p>
                    <a class="icon-menu" href="/#/profile">
                        <img class="icon" src="~assets/img/tabbar/tab-my.png" alt="">
                    </a>
                </div>
             </div>
            <div class="icon-plus-nav" :class="{opacity : isShow}" @click="upBox">
                <p>快捷<br>导航</p>
                <i class="icon" v-show="isShow">
                    <img class="icon" src="~assets/img/common/error.png" alt="">
                </i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'UpBox',
  props: {
    isShowBackTop: { // 是否显示回到顶部
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShow: false // 是否显示快捷菜单
    }
  },
  methods: {
    upBox () {
      this.isShow = !this.isShow
    },
    close () {
      this.isShow = false
    }
  }
}
</script>

<style scoped>
  .ui-mask {
    position: fixed;
    height: 0;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(0,0,0,0.2);
    z-index: 997;
    transition: all 120ms ease-in;
  }
  .show-mask{
    height: 100%;
    top: 0;
    background: rgba(0,0,0,0.7);
  }
  .menus-box {
    position: absolute;
    bottom: 60px;
    right: 10px;
    transition: all 200ms;
    z-index: 998;
    display: block;
 }
 .show-back-top{
   bottom: 120px;
 }
 .menus {
    z-index: 999;
    display: none;
    position: relative;
  }
  .show-menus .menus{
   display: block;
 }
  .menus .menu-item {
    height: 40px;
    width: 110px;
    margin-top: 13px;
    overflow: hidden;
    position: relative;
    clear: both;
    transition: all 150ms;
    position: absolute;
    opacity: 0.5;
    right: 0;
    bottom: -60px;
  }
  .show-menus .menus .menu-item {
    position: relative;
    opacity: 1;
    bottom: 0;

  }
  .menus .menu-item p {
    display: block;
    width: 63px;
    font-size: 14px;
    line-height: 40px;
    color: #FFF;
    text-align: center;
    float: left;
  }
  .menus .menu-item .icon-menu {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    opacity: 1;
    background: #FFF;
    margin-right: 5px;
    float: right;
  }
  .menus .menu-item .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 9px;
  }

  .icon-plus-nav {
    position: relative;
    right: 0;
    width: 50px;
    height: 50px;
    margin-top: 15px;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #FFF;
    background: #000;
    opacity: .7;
    border-radius: 50%;
    float: right;
    box-shadow: 0 0.08rem 0.16rem rgba(0,0,0,0.3);
    overflow: hidden;
    z-index: 1000;
  }
  .icon-plus-nav.opacity{
      opacity:1;
      background: transparent;
  }
  .icon-plus-nav p {
    padding: 10px 0 0 0;
  }
  .icon-plus-nav .icon{
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    background: #FF5577;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    margin: auto;
  }
  .icon-plus-nav .icon img{
      height: 18px;
      width: 18px;
  }
</style>
