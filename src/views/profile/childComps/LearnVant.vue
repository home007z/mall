<template>
    <div id="learn-vant">
      <nav-bar>
        <img slot="left" class="back" @click="backClick" src="~assets/img/common/back.svg">
        <div slot="center">Learn Vant UI</div>
      </nav-bar>
      <div class="content">
        <van-divider>Button</van-divider>
        <div class="content-list">
          <van-button type="primary">主要按钮</van-button>
          <van-button loading type="primary" />
          <van-button icon="star-o" type="primary">按钮</van-button>
        </div>
        <van-divider>Cell </van-divider>
        <div class="content-list">
          <van-cell-group>
            <van-cell title="单元格" is-link />
            <van-cell title="单元格" is-link value="内容" />
            <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
          </van-cell-group>
        </div>
      </div>
      <van-divider>Icon</van-divider>
      <div class="content-list">
        <van-icon name="chat-o" dot />
        <van-icon name="chat-o" info="9" />
        <van-icon name="chat-o" info="99+" />
      </div>
      <van-divider>Image</van-divider>
      <div class="content-list">
        <van-image
          round
          width="100px"
          height="100px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <van-divider>Layout</van-divider>
      <div class="content-list">
        <van-row type="flex" justify="center">
          <van-col span="6">span: 6</van-col>
          <van-col span="6">span: 6</van-col>
          <van-col span="6">span: 6</van-col>
        </van-row>
      </div>
      <van-divider>Popup</van-divider>
      <div class="content-list">
        <van-cell is-link @click="showPopup">底部弹出层</van-cell>
        <van-popup
            v-model="show"
            closeable
            round
            position="bottom"
            :style="{ height: '30%' }">
            内容</van-popup>
      </div>
    </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
export default {
  name: 'LearnVant',
  data () {
    return {
      show: false
    }
  },
  components: {
    NavBar
  },
  methods: {
    backClick () {
      this.$router.back()
    },
    showPopup () {
      this.show = true
    }
  }
}
</script>

<style scoped>
  #learn-vant{
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
  .van-divider{
    color: black;
    border-color: gray;
    padding: 0 16px;
    margin: 5px 0;
  }
  .content-list{
    margin: 0 auto;
    text-align: center;
  }
  .van-button--normal {
    margin: 0 5px;
  }
  .van-icon.van-icon-chat-o {
    font-size: 30px;
    margin: 0 5px;
  }
  .van-col:nth-child(odd) {
    background-color: #39a9ed;
  }
  .van-col:nth-child(even) {
    background-color: #66c6f2;
  }
  .van-col {
    margin-bottom: 10px;
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;
  }
</style>
