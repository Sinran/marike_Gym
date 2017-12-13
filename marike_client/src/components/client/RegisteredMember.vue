<template>
  <div class="register-member">
    <div class="register">
      <div class="head-portrait">
        <span>头像</span>
        <img src="../../assets/img/1.png">
      </div>
      <div class="name">
        <span>姓名</span>
        <input type="text" name="" placeholder="输入姓名">
      </div>
      <div class="phone-num">
        <span>手机号码</span>
        <input type="text" name="" placeholder="输入手机号码">
      </div>
      <div class="sex">
        <span>性别</span>
        <select>
          <option>女&nbsp;&nbsp;&nbsp;</option>
          <option>男&nbsp;&nbsp;&nbsp;</option>
        </select>

      </div>
      <div class="coach">
        <span>我的教练</span>
        <select>
          <option>无</option>
          <option>阿杜</option>
          <option>阿杜</option>
          <option>阿杜</option>
          <option>阿杜</option>
          <option>阿杜</option>
        </select>

      </div>
    </div>
    <div class="submit" @click="submitRegister">提交</div>
    <div class="notes">美瑞克温馨提示：如果您没有确定的教练，请在我的教练栏选择(无)!</div>
  </div>
</template>

<script>
  export default {
    data() {
      return{

      }
    },
    mounted() {

    },
    methods: {
      submitRegister() {
        this.$router.push({path: 'Home'})
      }
    },
    computed: {

    },
    watch: {

    }
  }
</script>

<style scoped lang="sass">
  @import "../../assets/scss/client/RegisteredMember"
</style>
