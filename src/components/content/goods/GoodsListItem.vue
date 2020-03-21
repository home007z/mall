<template>
    <div class="goods-item" @click="itemClick">
      <img :src="goodsItem.image" alt="" @load="imageLoad">
      <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">￥{{goodsItem.price}}</span>
          <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    imageLoad () { // 每张图片加载完后会执行该方法
      // 最终需要执行this.scroll.refresh()
      // 事件总线 (需要在mian.js)中添加原型 Vue.prototype.$bus = new Vue()
      this.$bus.$emit('itemImageLoad') // 向事件总线发送 itemImageLoad 事件，在Home.vue接收、监听

      // 思路一：根据路由判断，返回不同的事件
      // if (this.$route.path.indexOf('/home')) {
      //   this.$bus.$emit('homeItemImageLoad')
      // } else if (this.$route.path.indexOf('/detail')) {
      //   this.$bus.$emit('detailItemImageLoad')
      // }
    },
    itemClick () {
      this.$router.push('../detail/' + this.goodsItem.id) // push跳转后可用 back 返回
    }
  }
}
</script>

<style scoped>
.goods-item{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
    margin-bottom: 10px;
}

.goods-item img{
    width: 100%;
    border-radius: 5px;
}
.goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}

.goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px

}
.goods-info .price{
    color: var(--color-high-text);
    float: left;
    margin-left: 10px;
}

.goods-info .collect{
    position: relative;
    float: right;
    margin-right: 10px;
}

.goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
