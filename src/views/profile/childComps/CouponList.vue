<template>
    <div id="coupon-list">
      <van-nav-bar title="我的优惠券"
                 :fixed=true
                 :border=false
                 @click-left="backClick"
                 left-arrow
                 style="height:44px" />
    <!--优惠券列表-->
    <van-coupon-list :coupons="coupons"
                     style="margin-top:46px"
                     input-placeholder="搜索优惠券"
                     @exchange="onExchange" />

    </div>
</template>

<script>
export default {
  name: 'CouponList',
  data () {
    return {
      coupons: [{ // 优惠券信息
        available: 1,
        condition: '无使用门槛\r\n最多优惠5元',
        reason: '',
        value: 150,
        name: '5元优惠券',
        startAt: 1549104000,
        endAt: 1614592000,
        valueDesc: '5',
        unitDesc: '元'
      }, { // 优惠券信息
        available: 1,
        condition: '满20元使用\r\n最多优惠20元',
        reason: '',
        value: 200,
        name: '20元优惠券',
        startAt: 1549104000,
        endAt: 1614592000,
        valueDesc: '20',
        unitDesc: '元'
      }]
    }
  },
  methods: {
    backClick () {
      this.$router.back()
    },
    onExchange (code) {
      // 兑换优惠券
      if (code === '520it') {
        this.coupons.push(this.coupons[0])
      }
    }
  }
}
</script>

<style scoped>
  #coupon-list{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    background-color: #f6f6f6
  }
  .back{
    margin-top: 12px;
  }
</style>
