<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton @click.native="checkedChange(itemInfo.id)" v-model="itemInfo.checked"></CheckButton>
    </div>
    <div class="item-img">
      <img :src="itemInfo.smallImage" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.name}}</div>
      <div class="item-desc">商品描述: {{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.price}}</div>
        <div class="shopDeal right">
          <span @click="reduceGoods(itemInfo.id,itemInfo.num)">-</span>
          <input type="number"
                  disabled
                  v-model="itemInfo.num">
          <span @click="addGoods(itemInfo.id,itemInfo.name,itemInfo.smallImage,itemInfo.price,itemInfo.desc)">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { Dialog } from 'vant'

import CheckButton from './CheckButton'

export default {
  name: 'ShopCartItem',
  props: {
    itemInfo: Object
  },
  components: {
    CheckButton
  },
  methods: {
    // 0.延展mutations中的方法
    ...mapMutations(['ADD_GOODS', 'REDUCE_GOODS', 'SINGLE_SELECT_GOODS']),
    // 1.单个商品的选中/取消
    checkedChange: function (goodsID) {
      // this.itemInfo.checked = !this.itemInfo.checked
      this.SINGLE_SELECT_GOODS({ goodsID })
    },
    // 2.减少商品数量
    reduceGoods (goodsID, goodsNum) {
      if (goodsNum > 1) {
        // 2.1 通过goodsID减少商品
        this.REDUCE_GOODS({
          goodsID
        })
      } else if (goodsNum === 1) {
        Dialog.confirm({
          title: '温馨提示',
          message: '确定删除该商品吗?'
        }).then(() => {
          // on confirm 确认删除
          this.REDUCE_GOODS({ goodsID })
        }).catch(() => {
          // on cancel
        })
      }
    },
    // 3.增加商品数量 保证传递数据和 mutations 一致
    addGoods (goodsID, goodsName, goodsSmallImage, goodsPrice, desc) {
      this.ADD_GOODS({
        goodsID,
        goodsName,
        goodsSmallImage,
        goodsPrice,
        desc
      })
    }

  }
}
</script>

<style scoped>
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
    line-height: 22px;
  }

  .shopDeal span {
    float: left;
    display: inline-block;
    width: 18px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-size: 18px;
  }
.shopDeal input {
    float: left;
    width: 42px;
    height:  22px;
    text-align: center;
    margin: 0 5px;
    font-size: 14px;
    background-color: #f5f5f5;
    border: 0;
}
</style>
