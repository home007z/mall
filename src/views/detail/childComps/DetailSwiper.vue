<template>
    <swiper class="detail-swiper" v-if="topImages.length">
      <swiper-item class="item" v-for="(item, index) in topImages" :key="index" @click.native="Preview(index)">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
import { ImagePreview } from 'vant'

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    Preview (index) {
      ImagePreview({
        images: this.topImages,
        startPosition: parseInt(index--),
        onClose () {
          // do something
        }
      })
    }
  }
}
</script>

<style scoped>
  .item {
    text-align: center;
    height: 300px;
  }
</style>
