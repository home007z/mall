<template>
    <div id="my-vip">
      <nav-bar>
        <img slot="left" class="back" @click="backClick" src="~assets/img/common/back.svg">
        <div slot="center">绿卡</div>
    </nav-bar>
    </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
export default {
  name: 'MyVip',
  components: {
    NavBar
  },
  methods: {
    backClick () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  #my-vip{
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
