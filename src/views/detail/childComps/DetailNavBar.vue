<template>
  <nav-bar class="detail-nav">
    <img slot="left" class="back" @click="backClick" src="~assets/img/common/back.svg">
    <div slot="center" class="title">
      <span class="title-item"
           v-for="(item, index) in titleInfos"
           :key="index"
           :class="{'active' : index === currentIndex}"
           @click="itemClick(index)">
        {{item}}
      </span>
    </div>
    <div slot="right" class="nav-bar-right">
      <i class="fa fa-share-square-o"></i>
      <i class="fa fa-ellipsis-v"></i>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data () {
    return {
      titleInfos: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick: function (index) {
      this.currentIndex = index
      this.$emit('itemClick', index)
    },
    backClick () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .detail-nav {
    background-color: #fff;
    font-weight: normal;
    position: relative;
    z-index: 9;
  }

  .title {
    display: flex;
    padding: 0 20px;
    font-size: 14px;
  }

  .title-item {
    flex: 1;
  }

  .title-item.active {
    color: var(--color-high-text);
  }

  .back{
    margin-top: 12px;
  }

  .nav-bar-right i{
    font-size: 18px;
    font-weight: initial;
    margin: 0 8px;
    color: #7a7a7a;
  }

  .share, .more{
    height: 22px;
    margin-top: 12px;
    padding: 0 3px;
  }
</style>
