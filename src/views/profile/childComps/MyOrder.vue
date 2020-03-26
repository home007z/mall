<template>
  <div id="myOrder">
    <van-nav-bar title="我的订单"
                 :border=false
                 :fixed="true"
                 @click-left="onClickLeft"
                 left-arrow
                 style="height:44px" />
    <van-tabs v-model="active"
              animated
              swipeable
              sticky
              :border="false"
              :offset-top="47"
              ref="tabs"
              type="line"
              color="var(--color-tint)"
              title-active-color="var(--color-tint)"
              animated:yes>
      <!-- 全部 -->
      <van-tab>
        <div slot="title">
          <span>全部</span>
        </div>
        <OrderType :orderTypeDataArray="typeArray" />
      </van-tab>
      <!-- 待支付 -->
      <van-tab>
        <div slot="title">
          <span>待支付</span>
        </div>
        <OrderType :orderTypeDataArray="typeArray" />
      </van-tab>
      <!-- 待收货 -->
      <van-tab>
        <div slot="title">
          <span>待收货</span>
        </div>
        <OrderType :orderTypeDataArray="typeArray" />
      </van-tab>
      <!-- 待评价-->
      <van-tab>
        <div slot="title">
          <span>待评价</span>
        </div>
        <OrderType :orderTypeDataArray="typeArray" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import OrderType from './MyOrderChildren/OrderType'
export default {
  data () {
    return {
      typeArray: [],
      // 路由传递过来的数据 active
      active: this.$route.params.active
    }
  },
  components: {
    OrderType
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
#myOrder {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: #f6f6f6
}
</style>
