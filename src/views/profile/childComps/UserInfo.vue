<template>
  <div id="user-info" class="clear-fix">
    <div v-if="userInfo.id">
        <slot name="user-icon">
          <div class="privateImage">
            <img class="portrait" src="~assets/img/common/missing-face.png"/>
          </div>
        </slot>
        <div class="login-info">
          <slot name="user-nickname">
            <div>{{userInfo.mobile}}</div>
          </slot>
          <div class="phone">
            <slot name="user-phone">{{userInfo.nickname}}</slot>
          </div>
        </div>
      </div>
      <a v-else href="/#/login">
        <slot name="user-icon">
          <div class="privateImage">
            <img class="portrait" src="~assets/img/common/missing-face.png"/>
          </div>
        </slot>
        <div class="login-info">
          <slot name="user-nickname">
            <div>注册/登录</div>
          </slot>
          <div class="phone">
            <slot name="user-phone">暂无绑定手机号</slot>
          </div>
        </div>
      </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserInfo',
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>

<style scoped>
  #user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
  }

  #user-info .privateImage {
    width: 60px;
    height: 60px;
    float: left;
  }

  #user-info .privateImage .portrait{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    overflow: hidden;
}

  #user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
    float: left;
  }

  #user-info .login-info .phone {
    position: relative;
    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
  }

</style>
