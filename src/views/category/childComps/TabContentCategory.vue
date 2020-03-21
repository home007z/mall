<template>
    <div class="categorylist" v-if="subcategories.list">
      <div class="item" v-for="(item, index) in subcategories.list" :key="index">
        <a href="#">
          <img class="item-img" :src="item.image" alt="" @load="imageLoad">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TabContentCategory',
  props: {
    subcategories: {
      type: Object,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    imageLoad () {
      if (++this.counter === this.subcategories.list.length) {
        this.$emit('imageLoad')
      }
    }
  }
}
</script>

<style scoped>
  .categorylist {
    display: flex; /* flex布局 */
    flex-wrap: wrap; /* 包裹在内 */
    justify-content: space-around; /* 均等分 */
  }

  .item{
    position: relative;
    width: 33%;
    margin: 10px 0;
    text-align: center;
    font-size: 12px;
  }

  .item-img {
    width: 60%;
  }

  .item-text {
    margin-top: 5px;
  }
</style>
