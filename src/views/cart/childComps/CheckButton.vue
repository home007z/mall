<template>
    <div>
      <div class="icon-selector" :class="{'selector-active': checked}">
        <img src="~/assets/img/cart/tick.svg" alt="">
      </div>
    </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      checked: this.value
    }
  },
  methods: {
  },
  watch: {
    value: function (newValue) {
      this.checked = newValue
    }
  }
}
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .icon-selector img{
    display: none;
  }

  .selector-active {
    background-color: #ff4500;
    border-color: #ff4500;
  }

  .selector-active img{
    display: block;
  }
</style>
