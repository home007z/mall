<template>
  <div id="orderType">
    <div v-if="orderTypeDataArray.length>0">
    </div>
    <div v-else class="noDataPlaceHold">
      <img src="~assets/img/common/noData.jpeg" alt="">
      <span class="desc">暂时还没有相关订单</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    orderTypeDataArray: Array
  },
  mounted () {

  },
  data () {
    return {

    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<style scoped>
#orderType {
  margin-top: 5rem;
  height: 20rem;
}
img {
  width: 60%;
  height: 60%;
}
.desc {
  color: grey;
  font-size: 0.6rem;
}
.noData {
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  text-align: center;
}
.noDataPlaceHold {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
