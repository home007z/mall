<template>
    <div>
        <div class="empty-cart">
            <img src="~assets/img/cart/empty.png">
            <div class="title">购物车空空滴~</div>
            <router-link to="/" class="goHome">去逛逛</router-link>
        </div>
        <div class="empty-list">
            <div class="title">猜你喜欢</div>
        </div>
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

.empty-list .title{
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin: 16px 0;
    font-size: 14px;
    line-height: 24px;
    border-style: solid;
    border-width: 0;
    border-color: grey;
    color: black;
    padding: 0px 16px;
}

.empty-list .title::after, .empty-list .title::before {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    box-sizing: border-box;
    height: 1px;
    border-color: inherit;
    border-style: inherit;
    border-width: 1px 0 0;
    content: "";
}

.empty-list .title::before{
    margin-right: 16px;
}

.empty-list .title::after{
    margin-left: 16px;
}
</style>
