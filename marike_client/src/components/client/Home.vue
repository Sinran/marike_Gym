<template>
  <div class="home">
    <div class="home-header">
      <div class="header-picture" @click="lessonRecord">
        <img src="../../assets/img/1.png">
      </div>
      <div class="header-message">
        <div class="header-name">周玉梅</div>
        <div class="header-info">
          <span class="iconfont icon-huiyuan"></span>
          <span>季卡会员</span>
          <span class="header-info-space">36节私教课</span>
        </div>
        <div class="useful-date">有效期 :<span class="header-info-space">2017.10.12-2018.1.12</span></div>
        <span class="iconfont icon-qianjin" @click="memberInfo"></span>
      </div>
    </div>
    <div class="home-lesson">
      <div class="lesson-finish">
        <span class="lesson-number"><a>3</a>节</span>
        <span class="lesson-name">已完成课时</span>
      </div>
      <div class="lesson-surplus">
        <span class="lesson-number"><a>5</a>节</span>
        <span class="lesson-name">剩余课时</span>
      </div>
      <div class="lesson-integral">
        <span class="lesson-number">0</span>
        <span class="lesson-name">我的积分</span>
      </div>
    </div>
    <div class="home-coach-reservation">
      <div class="reservation-title">私教预约</div>
      <div class="reservation-name">
        <span>预约教练: </span>
        <span>何清</span>
      </div>
      <div class="reservation-time">
        <span>预约时间: </span>
        <span class="reservation-time-message"> 19:00-20:00 今天</span>
      </div>
      <div class="reservation-cancel">
        <span v-show="!reservationStatus" @click="cancelReservation">取消预约</span>
        <span v-show="reservationStatus" class="home-reservation" @click="immediateReservation">立即预约</span>
      </div>
      <img class="home-logo" src="../../assets/img/log.png">
    </div>
    <div class="home-picture">
      <img src="../../assets/img/banner.png">
    </div>
    <div class="home-operation">
      <div class="operation-icon history-lesson" @click="historyLesson">
        <span class="iconfont icon-yiquxiao"></span>
        <span class="operation-name">历史课程</span>
      </div>
      <div class="operation-icon cancel-record" @click="cancelRecord">
        <span class="iconfont icon-yiquxiao"></span>
        <span class="operation-name">取消记录</span>
      </div>
      <div class="operation-icon my-holiday" @click="myLeave">
        <span class="iconfont icon-yiquxiao"></span>
        <span class="operation-name">我的请假</span>
      </div>
      <div class="operation-icon my-evaluate" @click="myEvaluate">
        <span class="iconfont icon-yiquxiao"></span>
        <span class="operation-name">我的评价</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        reservationStatus: true
      }
    },
    mounted() {

    },
    methods: {
      //会员信息
      memberInfo() {
        this.$router.push({path: 'MemberInfo'})
      },
      //历史课程
      historyLesson() {
        this.$router.push({path: 'HistoryLesson'})
      },
      //取消记录
      cancelRecord() {
        this.$router.push({path: 'CancelRecord'})
      },
      //我的请假
      myLeave() {
        this.$router.push({path: 'MyLeave'})
      },
      //我的评价
      myEvaluate() {
        this.$router.push({path: 'Evaluate'})
      },
      //立即预约
      immediateReservation() {
        this.$router.push({path: 'ReservationImmediate'})
      },
      //取消预约
      cancelReservation() {

      },
      //课程记录
      lessonRecord() {
        this.$router.push({path: 'LessonRecord'})
      }
    },
    watch: {

    },
    computed: {

    }
  }
</script>

<style scoped lang="sass">
  @import '../../assets/scss/client/Home.scss';
</style>
