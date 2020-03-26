<template>
  <div id="login">
    <nav-bar>
      <img slot="left" class="back" @click="backClick" src="~assets/img/common/back.svg">
      <div slot="center">登录</div>
    </nav-bar>
    <div class="left-bottom-sign"></div>
    <div class="right-top-sign"></div>
    <div class="wrapper">
        <div class="left-top-sign">LOGIN</div>
        <div class="welcome">欢迎回来！</div>
        <div class="input-content">
            <div class="input-item">
                <div class="tit">手机号码</div>
                <input type="text" placeholder="请输入手机号码" :value="mobile"/>
            </div>
        </div>
        <div class="input-content">
            <div class="input-item">
                <div class="tit">密码</div>
                <input type="password" placeholder="8-18位不含特殊字符的数字、字母组合" :value="password"/>
            </div>
        </div>
    </div>
    <button class="confirm-btn" @click="toLogin" :disabled="logining">登录</button>
    <div class="forget-section" @click="forgetPwd">忘记密码?</div>
    <div class="register-section">
        还没有账号?
        <div @click="toRegist">马上注册</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import NavBar from 'common/navbar/NavBar'
export default {
  name: 'Login',
  components: {
    NavBar
  },
  data () {
    return {
      mobile: '13888888888',
      password: '123456',
      logining: false
    }
  },
  methods: {
    ...mapActions(['syncuserInfo']),
    toLogin () {
      this.logining = true
      const userinfo = {
        id: 1,
        token: 'Djx7894544001sxxJd',
        mobile: this.mobile,
        password: this.password,
        nickname: 'Leo yo'
      }
      this.$toast.show('登录成功')
      this.syncuserInfo(userinfo)
      this.$router.back()
    },
    backClick () {
      this.$router.back()
    },
    forgetPwd () {
      this.$toast.show('忘记密码')
    },
    toRegist () {
      this.$toast.show('马上注册')
    }
  }
}

</script>

<style scoped>
  #login {
    position: relative;
    z-index: 1;
    background-color: #ffffff;
    height: 100vh;
    overflow: hidden;
  }
  #nav-bar{
      box-shadow: none;
  }
  .back{
    margin-top: 12px;
  }
  .right-top-sign{
    position: fixed;
    top: -120px;
    right: -90px;
    z-index: 95;
  }
  .right-top-sign::before, .right-top-sign::after{
    display:block;
    content:"";
    width: 600px;
    height: 40px;
    background: #b4f3e2;
  }
  .right-top-sign::before{
    transform: rotate(50deg);
    border-radius: 0 50px 0 0;
  }
  .right-top-sign::after{
    position: absolute;
    right: -356px;
    top: 0;
    transform: rotate(-50deg);
    border-radius: 50px 0 0 0;
  }
  .left-bottom-sign {
    position: absolute;
    left: -135px;
    bottom: -160px;
    border: 50px solid #d0d1fd;
    border-radius: 50%;
    padding: 90px;
  }
  .wrapper{
    position:relative;
    background: #fff;
    margin-top: 60px;
  }
  .left-top-sign {
    font-size: 60px;
    color: #f8f8f8;
    position: relative;
    left: -8px;
  }
  .welcome {
    position: relative;
    left: 25px;
    top: -45px;
    font-size: 23px;
    color: #555;
    text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3);
  }
  .input-content{
    padding: 0 30px;
  }
  .input-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15px;
    background: #f8f6fc;
    height: 60px;
    border-radius: 4px;
    margin-bottom: 25px;
  }
  .input-item .tit {
    height: 25px;
    line-height: 28px;
    font-size: 13px;
    color: #606266;
  }
  .input-item input {
    height: 30px;
    font-size: 15px;
    color: #303133;
    width: 100%;
    border: 0;
    background: transparent;
    outline: none;
  }
  .confirm-btn {
    outline: none;
    position: relative;
    display: block;
    margin: 0 auto;
    text-align: center;
    text-decoration: none;
    overflow: hidden;
    width: 315px;
    height: 38px;
    line-height: 38px;
    border-radius: 50px;
    margin-top: 35px;
    background: #fa436a;
    color: #fff;
    font-size: 16px;
    border: 0;
  }
  button[disabled] {
    background: #cdcdcd !important;
  }
  .forget-section {
    font-size: 13px;
    color: #4399fc;
    text-align: center;
    margin-top: 20px;
  }
  .register-section {
    position: absolute;
    left: 0;
    bottom: 25px;
    width: 100%;
    font-size: 13px;
    color: #606266;
    text-align: center;
  }
  .register-section>div {
    color: #4399fc;
    margin-left: 5px;
    display: inline-block;
  }
</style>
