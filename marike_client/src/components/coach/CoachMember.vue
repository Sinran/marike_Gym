<template>
    <div class="coach-member">
    <div class="my-members">
      <span :class="{'active': memberShow}" @click="memberChange(true)">普通会员</span>
      <span :class="{'active': !memberShow}" @click="memberChange(false)">体验课会员</span>
    </div>
    <div class="ordinary-member"  v-show="memberShow">
      <div class="contain">
        <div class="user-imgs">
          <img src="../../assets/img/user.png">
        </div>
        <div class="card-information">
          <div class="names">张三<span>15921260888</span></div>
          <div class="num-courses">课程数量：36节</div>
          <div class="spare-time">剩余课时：<span>3</span>节</div>
          <div class="a-time">开卡时间：2017年10月12日</div>
          <div class="effective-time-length">有效时长：12个月</div>
          <div class="curriculum-cost">课程费用：7000元</div>
        </div>
        <div class="right">
          <div class="give-score">给您评分:<span class="iconfont icon-xing1 "></span>4.9分</div>
          <div class="iconfont icon-qianjin"></div>
        </div>
      </div>
    </div>
    <div class="experience-class" v-show="!memberShow">
      <div class="contain">
        <div class="user-imgs">
          <img src="../../assets/img/user.png">
        </div>
        <div class="card-information">
          <div class="names">张三<span>15921260888</span></div>
          <div class="num-courses">课程数量：1节</div>
          <div class="spare-time">剩余课时：<span>0</span>节</div>
          <div class="a-time">体验时间：2017年10月12日</div>
          <div class="curriculum-cost">客户来源：大众点评</div>
        </div>
        <div class="right">
          <div class="give-score">给您评分:<span class="iconfont icon-xing1"></span>4.9分</div>
          <div class="iconfont icon-qianjin"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return{
        memberShow: true
      }
    },
    mounted() {

    },
    methods: {
      memberChange(val) {
        this.memberShow = val;
      }
    },
    computed: {

    },
    watch: {

    }
  }

</script>

<style scoped lang="sass">
  @import "../../assets/scss/coach/CoachMember"
</style>
