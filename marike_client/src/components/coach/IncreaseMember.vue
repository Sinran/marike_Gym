<template>
  <div class="increase-member">
    <div class="add-user">
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
          <option value="">男</option>
          <option value="">女</option>
        </select>
      </div>
      <div class="class-num">
        <span>课程数量</span><span>36节</span>
      </div>
      <div class="effective-length">
        <span>有效时长</span><span>12个月</span>
      </div>
      <div class="curriculum-cost">
        <span>课程费用</span><span>7000元</span>
      </div>
    </div>
    <div class="button">提交</div>
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

    },
    computed: {

    },
    watch: {

    }
  }

</script>

<style scoped lang="sass">
  @import "../../assets/scss/coach/IncreaseMember"
</style>
