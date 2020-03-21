<template>
  <div class="bottom-menu">
    <CheckButton class="select-all"
      @click.native="checkBtnClick"
      v-model="isCheckedAll" />
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice |numFilter}}</span>
    <button class="buy-product"
          @click="calcClick"
          :disabled="!(checkLength>0)">去计算<span v-show="checkLength">({{checkLength}})</span>
    </button>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

import { Toast } from 'vant'

export default {
  name: 'BottomBar',
  components: {
    CheckButton
  },
  props: {
    totalPrice: {
      type: Number,
      default: 0
    },
    checkLength: {
      type: Number,
      default: 0
    },
    isCheckedAll: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkBtnClick: function () {
      this.$emit('allSelectGoods')
    },
    calcClick () {
      if (this.checkLength > 0) {
        // 跳转到订单界面
        // this.$router.push('/order');
        Toast({
          message: '开发中……',
          duration: 1000
        })
      } else {
        Toast({
          message: '选择结算商品',
          duration: 1000
        })
      }
    }
  },
  filters: {
    numFilter (value) {
      let realVal = ''
      if (!isNaN(value) && value !== '') {
        realVal = parseFloat(value).toFixed(2)
      } else {
        realVal = '0.00'
      }
      return realVal
    }
  }
}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
    border: none
  }

  .buy-product[disabled]{
    background: #dcdcdc;
    color: #8c8485;
  }
</style>
