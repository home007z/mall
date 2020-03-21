<template>
    <div class="goods">
        <goods-list-item
        v-for="(item, index) in goods"
        :goods-item="item"
        :key="index"/>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  created () {
    // console.log(this.goods)
  }
}
</script>

<style scoped>
.goods{
    display: flex; /* flex布局 */
    flex-wrap: wrap; /* 包裹在内 */
    justify-content: space-around; /* 均等分 */
    padding: 2px;
}

</style>
