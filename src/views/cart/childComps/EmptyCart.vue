<template>
    <div>
        <div class="empty-cart">
            <img src="~assets/img/cart/empty.png">
            <div class="title">购物车空空滴~</div>
            <router-link to="/" class="goHome">去逛逛</router-link>
        </div>

        <van-divider :style="{ color: 'black', borderColor: 'grey', padding: '0 16px' }">
          猜你喜欢
        </van-divider>
    </div>
</template>

<script>
export default {
  name: 'EmptyCart'
}
</script>

<style scoped>
.empty-cart{
  text-align: center;
  background: whitesmoke;
  padding: 40px 0;
}

.empty-cart img{
  height: 160px;
}

.empty-cart .title{
  font-size: 18px;
  color: #000;
}

.empty-cart a{
  background: #ff8198;
  color: #fff;
  display: block;
  width: 120px;
  line-height: 40px;
  border-radius: 20px;
  margin: auto;
  margin-top: 10px;
}

</style>
