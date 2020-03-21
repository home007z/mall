<template>
  <div class="back-top">
    <!-- <slot></slot> -->
    <div class="up-arrows">
      <img src="~assets/img/common/up-arrows.png" alt="">
      置顶
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackTop'

}
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
.up-arrows{
  position: relative;
  right: 0;
  width: 50px;
  height: 50px;
  margin-top: 6px;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #FFF;
  background: #000;
  opacity: .7;
  border-radius: 50%;
  float: right;
  box-shadow: 0 0.08rem 0.16rem rgba(0,0,0,0.3);
  overflow: hidden;
  opacity: .7;
  transition: all 500ms;
}
.back-top img {
  display: block;
  width: 14px;
  height: 17px;
  margin: 10px auto 0;
}
</style>
