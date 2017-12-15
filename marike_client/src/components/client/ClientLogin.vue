<template>
  <div class="client-login">
    <div class="top">
      <span>美瑞克会员登录</span>
      <span @click="registerMember">注册</span>
    </div>
    <div class="body">
      <div class="first-line">
        <span>+86</span>
        <input type="text" name="" placeholder="请输入您的手机号" v-model="telNumber.content" @blur="checkLogin(telNumber)">
      </div>

      <div class="second-line">
        <input type="text" name="" placeholder="请输入收到的验证码" v-model="verificationCode.content"
               @blur="checkLogin(verificationCode)">
        <span>获取验证码</span>
      </div>


    </div>
    <div class="loginBtn" @click="login">
      登陆
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        telNumber: {
          content: '',
          status: false,
          mes: '电话不能为空'
        },
        verificationCode: {
          content: '',
          status: false,
          mes: '验证码不能为空'
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        $(".body .first-line input").click(function () {
          $(".body .first-line input").css({
            borderBottom: '2px solid #f6ab00'
          });
          $(".body .second-line").css({
            borderBottom: '2px solid #cccccc'
          });
        });
        $(".body .second-line input").click(function () {
          $(".body .second-line").css({
            borderBottom: '2px solid #f6ab00'
          });
          $(".body .first-line input").css({
            borderBottom: '2px solid #cccccc'
          });
        });
      })
    },
    methods: {
      checkLogin(data) {
        if (Object.is(data.content, '') || Object.is(data.content, null)) {
          data.status = true;
          console.log(data.mes)
        } else {
          data.status = false;
        }
      },
      login() {
        this.checkLogin(this.telNumber);
        this.checkLogin(this.verificationCode);
        if (this.telNumber.status || this.verificationCode.status) return;
        let loginData = {
          userName: this.telNumber.content,
          password: this.verificationCode.content
        };
        this.axios.post('/api/account/get_my_info ', loginData).then(res => {
          console.log(res.data);
          this.$store.commit('changeLoginStatus', true);
          if (Object.is(res.data.status, 200)) {

            this.$router.push({path: 'CoachHome'})
          } else {
            this.$router.push({path: 'ClientHome'})
          }
        }).catch(err => {
          console.log(err)
        })
      },
      registerMember() {
        this.$store.commit('changeLoginStatus', true);
        this.$router.push({path: 'RegisteredMember'});
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "../../assets/scss/client/ClientLogin.scss";
</style>
