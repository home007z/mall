<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">阿正商城</div>
      <div slot="right" class="nav-bar-right">
        <i class="fa fa-commenting-o"></i>
        <i class="fa fa-cog"></i>
      </div>
    </nav-bar>
    <!--1.单独封装一个组件: 利用slot知识点-->
    <UserInfo></UserInfo>

    <!--2.没有单独封装: 不同的地方太多, 需要传过多的参数-->
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>

    <!--3.封装成一个整体-->
    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>

    <button class="login-out" @click="LoginOut">退出</button>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'

import UserInfo from './childComps/UserInfo'
import ListView from './childComps/ListView'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Profile',
  components: {
    UserInfo,
    ListView,
    NavBar
  },
  data: function () {
    return {
      orderList: [
        { icon: '#order', iconColor: '#ff8198', info: '我的消息' },
        { icon: '#point', iconColor: '#fc7b53', info: '积分商城' },
        { icon: '#vip', iconColor: '#ffc636', info: '会员卡' }
      ],
      serviceList: [
        { icon: '#service', iconColor: '#ff8198', info: '我的购物车' },
        { icon: '#download', iconColor: '#ff8198', info: '下载购物APP' }
      ]
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['LOGIN_OUT']),
    LoginOut () {
      this.LOGIN_OUT()
    }
  }
}
</script>

<style scoped>
  #profile {
    background-color: #f2f2f2;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

.nav-bar-right i{
    font-size: 16px;
    font-weight: initial;
    margin: 0 5px;
    color: #ffffff;
  }
  .account {
    display: flex;
  }

  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
  }

  .account-item:last-of-type {
    margin-right: 0;
  }

  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }

  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }

  .account-info {
    margin-top: 6px;
  }

  .order-list, .service-list {
    margin-top: 12px;
  }

  .login-out{
    border: none;
    width: 90%;
    height: 36px;
    border-radius: 18px;
    background: var(--color-tint);
    color: #fff;
    margin: 20px 5%;
  }

</style>
