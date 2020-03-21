<template>
  <div class="recommend">
    <grid-view :cols="5" :lineSpace="5" :vMargin='5' :hMargin='5' :itemSpace='0' :v-margin="20" v-if="recommends">
      <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" alt="" />
          <div>{{item.title}}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from 'common/gridView/GridView'

export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GridView
  }
}
</script>

<style scoped>
  .recommend-item{
    text-align: center;
    margin: 10px 0;
    font-size: 14px;
  }
  .recommend img {
    width: 50px;
    height: 50px;
  }
</style>
