<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{totalCount}})</div>
      <div slot="right" v-show="isShowEmptyCart"
                        :style="selectedGoodsCount==0?'color:#8c8485':'color:white'"
                        @click="clearCart">删除</div>
    </nav-bar>
    <empty-cart v-show="!isShowEmptyCart" />
    <cart-list v-show="isShowEmptyCart"/>
    <bottom-bar v-show="isShowEmptyCart" :is-checked-all="isCheckedAll"
                :check-length="submitBarText"
                :total-price="totalPrice"
                @allSelectGoods="allSelectGoods"/>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'

import CartList from './childComps/CartList'
import BottomBar from './childComps/BottomBar'
import EmptyCart from './childComps/EmptyCart'

import { mapState, mapGetters, mapMutations } from 'vuex'

// 引入提示框
import { Dialog } from 'vant'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    BottomBar,
    EmptyCart
  },
  computed: {
    // 0.结算数量
    submitBarText () {
      const count = this.selectedGoodNum
      return count || 0
    },
    // 1.是否显示空购物车
    isShowEmptyCart () {
      let isshow = false
      if (this.totalCount > 0) {
        isshow = true
      }
      return isshow
    },
    // 2.延展出store里的shopCart的数据
    ...mapState(['shopCart', 'userInfo']),
    ...mapGetters({
      selectedGoodNum: 'SELECTED_GOODS_COUNT',
      totalPrice: 'SELECTED_GOODS_PRICE'
    }),
    // 3.计算shopCart的数量
    totalCount () {
      return Object.keys(this.shopCart).length
    },
    // 4.计算shopCart中选中商品的数量
    selectedGoodsCount () {
      let selectedGoodsCount = 0
      Object.values(this.shopCart).forEach((goods, index) => {
        if (goods.checked) {
          selectedGoodsCount++
        }
      })
      return selectedGoodsCount
    },
    // 5.是否全部选中
    isCheckedAll: {
      get () {
        let tag = this.totalCount > 0
        let shopCart = this.shopCart
        Object.values(shopCart).forEach(goods => {
          if (!goods.checked) {
            tag = false
          }
        })
        return tag
      },
      set (value) {
        // 改变store中的值
        // 解决 assigned to but it has no setter.
        // https://vuex.vuejs.org/zh/guide/forms.html
        //  https://stackoverflow.com/questions/55097118/computed-property-was-assigned-to-but-it-has-no-setter-a-toggle-component
        let isCheckedAll = !value
        this.ALL_SELECT_GOODS({ isCheckedAll })
      }
    }
  },
  methods: {
    // 0.延展mutations中的方法
    ...mapMutations(['ADD_GOODS', 'REDUCE_GOODS', 'SINGLE_SELECT_GOODS', 'ALL_SELECT_GOODS', 'DELETE_SELECT_GOODS', 'ADD_TO_CART']),
    // 1.右上角删除
    clearCart () {
      if (this.selectedGoodsCount > 0) {
        Dialog.confirm({
          title: '温馨提示：',
          message: '确定要删除选中商品吗？'
        }).then(() => {
          // on confirm 确认删除
          this.DELETE_SELECT_GOODS()
        }).catch(() => {
          // on cancel
        })
      }
    },
    // 全选/取消
    allSelectGoods () {
      this.isCheckedAll = !this.isCheckedAll
    }
  }
}
</script>

<style scoped>
.cart{
  height: 100vh;
  background-color: whitesmoke;
}
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}

</style>
