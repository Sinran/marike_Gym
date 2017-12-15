<template>
  <div class="home">
    <div class="home-header">
      <div class="header-picture" @click="lessonRecord">
        <img src="../../assets/img/1.png">
      </div>
      <div class="header-message">
        <div class="header-name">{{ memberData.name }}</div>
        <div class="header-info">
          <span class="iconfont icon-vip"></span>
          <span>{{ memberData.memberClass }}</span>
          <span class="header-info-space">{{ memberData.lessonNum }}节私教课</span>
        </div>
        <div class="useful-date">有效期 :<span class="header-info-space">{{ memberData.dateTime }}</span></div>
        <span class="iconfont icon-qianjin" @click="memberInfo"></span>
      </div>
    </div>
    <div class="home-lesson">
      <div class="lesson-finish">
        <span class="lesson-number"><a>{{ lessonData.complete }}</a>节</span>
        <span class="lesson-name">已完成课时</span>
      </div>
      <div class="lesson-surplus">
        <span class="lesson-number"><a>{{ lessonData.surplus }}</a>节</span>
        <span class="lesson-name">剩余课时</span>
      </div>
      <div class="lesson-integral">
        <span class="lesson-number">{{ lessonData.integral }}</span>
        <span class="lesson-name">我的积分</span>
      </div>
    </div>
    <div class="home-coach-reservation">
      <div class="home-coach-reservation-box">
        <div class="reservation-title">私教预约</div>
        <div class="reservation-name">
          <span>预约教练: </span>
          <span>{{ reservationLessonData.coach }}</span>
        </div>
        <div class="reservation-time">
          <span>预约时间: </span>
          <span class="reservation-time-message">{{ reservationLessonData.time }}</span>
        </div>
        <div class="reservation-cancel">
          <span v-show="!reservationLessonData.status" @click="cancelReservation">取消预约</span>
          <span v-show="reservationLessonData.status" class="home-reservation" @click="immediateReservation">立即预约</span>
        </div>
        <img class="home-logo" src="../../assets/img/log.png">
      </div>
    </div>
    <div class="home-picture">
      <img src="../../assets/img/banner.png">
    </div>
    <div class="home-operation">
      <table @click="memberAction">
        <tr>
          <td class="history-lesson">
            <span class="iconfont icon-yuyue3 history-lesson"></span>
            <span class="operation-name history-lesson">历史课程</span>
          </td>
          <td class="cancel-record">
            <span class="iconfont icon-yuyue2 cancel-record"></span>
            <span class="operation-name cancel-record">取消记录</span>
          </td>
          <td class="my-holiday">
            <span class="iconfont icon-imgholiday my-holiday"></span>
            <span class="operation-name my-holiday">我的请假</span>
          </td>
          <td class="my-evaluate">
            <span class="iconfont icon-qianbi-lg my-evaluate"></span>
            <span class="operation-name my-evaluate">我的评价</span>
          </td>
        </tr>
      </table>
    </div>
    <div class="cancel-reservation" v-show="cancelReservationShow">
      <div class="cancel-reservation-box">
        <div class="cancel-reservation-content">
          <div class="cancel-content" v-show="!lessonConfirm">
            <img src="../../assets/img/log.png">
            <div>您确定取消本次私教课程么</div>
          </div>
          <div class="confirm-content"  v-show="lessonConfirm">
            <img src="../../assets/img/log.png">
            <div class="confirm-content-message">您已经顺利完成本次课程!</div>
            <div class="confirm-content-evaluate">给本次课程评价一下呗</div>
          </div>
          <div :class="{'cancel-btn': !lessonConfirm, 'confirm-btn': lessonConfirm}" @click="cancelReservationConfirm">确认</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        //会员数据
        memberData: {
          name: '周玉梅',
          memberClass: '季卡会员',
          lessonNum: 36,
          dateTime: '2017.10.12-2018.1.12'
        },
        //课程数据
        lessonData: {
          complete: 3,
          surplus: 5,
          integral: 0
        },
        //预约弹框状态
        cancelReservationShow: false,
        //预约课程数据
        reservationLessonData: {
          status: false,
          coach: '何清',
          time: ' 19:00-20:00 今天'
        },
        //预约取消/课程确认开关
        lessonConfirm: false
      }
    },
    mounted() {

    },
    methods: {
      //会员信息
      memberInfo() {
        this.$router.push({path: 'MemberInfo'})
      },
      //立即预约
      immediateReservation() {
        this.$router.push({path: 'ReservationImmediate'})
      },
      //取消预约
      cancelReservation() {
        this.cancelReservationShow = true;
        this.lessonConfirm = false;
      },
      //取消预约确认
      cancelReservationConfirm() {
        if (this.lessonConfirm) {

        } else {
          this.cancelReservationShow = false;
          this.reservationLessonData = {
            status: true,
            coach: '无',
            time: '无'
          }
        }
      },
      //课程记录
      lessonRecord() {
        this.$router.push({path: 'LessonRecord'})
      },
      memberAction() {
        let ev = ev || window.event;
        let target = ev.target || ev.srcElement;
        if (!Object.is(target.className.indexOf('history-lesson'), -1)) {
          this.$router.push({path: 'HistoryLesson'})
        } else if (!Object.is(target.className.indexOf('cancel-record'), -1)) {
          this.$router.push({path: 'CancelRecord'})
        } else if (!Object.is(target.className.indexOf('my-holiday'), -1)) {
          this.$router.push({path: 'MyLeave'})
        } else if (!Object.is(target.className.indexOf('my-evaluate'), -1)) {
          this.$router.push({path: 'Evaluate'})
        }
      }
    },
    watch: {

    },
    computed: {

    }
  }
</script>

<style scoped lang="sass">
  @import '../../assets/scss/client/ClientHome.scss';
</style>
