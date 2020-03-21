<template>
  <div class="feature">
    <div class="titleWrapper">
      <div class="title">限时抢购</div>
      <div class="countStyle">
        <span class="item">{{hour}}</span>
        <span class="item">{{minute}}</span>
        <span class="item">{{second}}</span>
      </div>
      <div class="more">更多</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureView',
  data () {
    return {
      time: 7200,
      bundleIntervalEvent: ''
    }
  },
  computed: {
    hour () { return this.timeFormat(Math.floor((this.time % 86400) / 3600)) },
    minute () { return this.timeFormat(Math.floor(((this.time % 86400) % 3600) / 60)) },
    second () { return this.timeFormat(Math.floor(((this.time % 86400) % 3600) % 60)) }
  },
  created () {
    this.bundleIntervalEvent = setInterval(this.intervalEvent, 1000)
  },
  methods: {
    intervalEvent () {
      if (this.time > 0) {
        this.time--
      } else {
        clearInterval(this.bundleIntervalEvent)
      }
    },
    timeFormat (param) {
      return param < 10 ? '0' + param : param
    }
  },
  beforeDestroy () {
    clearInterval(this.bundleIntervalEvent)
  }
}
</script>

<style scoped>
  .titleWrapper {
    margin: 0 10px 10px;
    height: 24px;
  }
  .title {
    display: inline-block;
    border-left: 4px solid var(--color-tint);
    padding-left: 10px;
    height: 22px;
    line-height: 22px;
    vertical-align: middle;
    font-size: 18px;
    color: #323233;
    float: left;
  }
  .countStyle {
    float: left;
    margin-left: 8px;
    color: #323233;
    font-size: 14px;
    line-height: 20px;
  }
  .item {
    display: inline-block;
    width: 22px;
    margin-right: 5px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #000;
    line-height: 20px;
  }
  .more {
    color: #32b35a;
    float: right;
    font-size: 16px;
}
</style>
