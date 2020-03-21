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

    <van-cell-group>
      <van-cell title="我的订单"
                icon="label"
                value="查看全部订单"
                is-link
                @click="goTomyOrder(-1)">
      </van-cell>
      <van-grid :border=false>
        <van-grid-item v-for="(order,index) in orderData"
                       :key="index"
                       :icon="order.icon"
                       :text="order.title"
                       @click="goTomyOrder(index)" />
      </van-grid>
    </van-cell-group>
    <van-cell-group style="margin-top:5px">
      <van-cell title="我的优惠券"
                icon="gold-coin"
                :value="userInfo.token?'2':''"
                @click="goToPage('couponList')"
                is-link />
      <van-cell title="我的收货地址"
                icon="todo-list"
                is-link
                @click="goToPage('myAddress')" />
    </van-cell-group>
    <van-cell-group style="margin-top:5px">
      <van-cell is-link
                icon="vip-card"
                @click="goToPage('myVip')">
        <template slot="title">
          <span class="custom-title">我的绿卡</span>
          <van-tag type="danger"
                   :round=true>NEW</van-tag>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group style="margin-top:5px">
      <van-cell title="联系客服"
                icon="phone"
                value="客服时间 07:00-22:00"
                is-link />
      <van-cell title="意见反馈"
                icon="comment-circle"
                is-link
                @click="onFeedBack" />
      <van-cell title="Vant UI"
                icon="clock"
                @click="learnVant"
                is-link />
    </van-cell-group>
    <van-cell-group style="margin-top:5px">
      <van-cell title="退出"
                icon="clear"
                @click="LoginOut"
                is-link />
    </van-cell-group>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'

import UserInfo from './childComps/UserInfo'

import { mapState, mapMutations } from 'vuex'

import { Dialog, Toast } from 'vant'

export default {
  name: 'Profile',
  components: {
    UserInfo,
    NavBar
  },
  data: function () {
    return {
      orderData: [
        { icon: 'cart-circle-o', title: '待支付' },
        { icon: 'gift-o', title: '待收货' },
        { icon: 'smile-comment-o', title: '待评价' },
        { icon: 'cash-back-record', title: '售后/退款' }
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
    },
    // 跳转到我的订单
    goTomyOrder (index) {
      // if (index !== 3) {
      //   return this.$router.push({ name: 'myOrder', params: { active: index + 1 } })
      // }
      // 跳转到售后退款界面
      Toast({
        message: '售后/退款',
        duration: 1500
      })
    },
    // 跳转页面
    goToPage (name) {
      // this.$router.push({ name })
    },
    // 意见反馈
    onFeedBack () {
      Dialog.alert({
        title: '💘感谢您的关注💘',
        message: 'GitHub上搜索 xxx 🦉欢迎提出优化建议🙉',
        confirmButtonText: '记得点个小星❤️哦~'
      }).then(() => {
        // on close
      })
    },
    learnVant () {

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
  .van-cell__left-icon {
    color: rgb(250, 67, 106);
    font-size: 20px;
}
</style>
