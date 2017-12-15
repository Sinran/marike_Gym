<template>
  <div class="coach-home">
    <div class="home-header">
      <div class="header-picture">
        <img src="../../assets/img/user.png">
      </div>
      <div class="header-message">
        <div class="header-name">
          <span>杜江</span>
          <span class="iconfont icon-xing2"></span>
          <span class="score">4.9分</span>
        </div>
        <div class="header-info">
          <span>入职日期 :</span>
          <span class="header-info-space">2017.10.12</span>
        </div>
        <div class="useful-date">贡献值 : <span class="header-info-space">100分</span></div>
      </div>
      <div class="add-member" @click="increaseMember">
        <span class="iconfont icon-xinzenghuiyuan-"></span>
        <span>添加会员</span>
      </div>
      <div class="experience-lesson" @click="experienceReservation">
        <span class="iconfont icon-yuyuekechengjilu"></span>
        <span>体验课</span>
      </div>
    </div>
    <div class="home-lesson">
      <div class="lesson-finish">
        <span class="lesson-number"><a>1000</a>课</span>
        <span class="lesson-name">历史总计课时</span>
      </div>
      <div class="lesson-surplus">
        <span class="lesson-number"><a>50</a>节</span>
        <span class="lesson-name">本月完成课时</span>
      </div>
      <div class="lesson-integral">
        <span class="lesson-number"><a>10</a>名</span>
        <span class="lesson-name">我的会员</span>
      </div>
    </div>
    <div class="coach-reservation">
      <div class="reservation-title">
        <div class="reservation-title-left">
          <span class="active">今日预约</span>
        </div>
        <div class="reservation-title-center">
          <span>明日预约</span>
        </div>
        <div class="reservation-title-right">
          <span>后日预约</span>
        </div>
      </div>
      <div class="reservation-lesson-group">
        <div class="reservation-lesson-list">
          <div class="reservation-lesson-member">
            预约会员:<span>张三三</span>
          </div>
          <div class="reservation-lesson-time">
            预约时间:<span>19:00-20:00</span>
          </div>
          <span class="iconfont icon-yiquxiao" v-show="false"></span>
          <span class="iconfont icon-yiwancheng"></span>
        </div>
        <div class="reservation-lesson-list">
          <div class="reservation-lesson-member">
            预约会员:<span>张三三</span>
          </div>
          <div class="reservation-lesson-time">
            预约时间:<span>19:00-20:00</span>
            <span class="reservation-lesson-experience">体验课</span>
          </div>
          <span class="iconfont icon-yiquxiao" v-show="false"></span>
          <span class="iconfont icon-yiwancheng"></span>
        </div>
        <div class="reservation-lesson-list">
          <div class="reservation-lesson-member">
            预约会员:<span class="reservation-cancel">张三三</span>
          </div>
          <div class="reservation-lesson-time">
            预约时间:<span class="reservation-cancel">19:00-20:00</span>
            <span class="reservation-lesson-experience">体验课</span>
          </div>
          <span class="iconfont icon-yiquxiao"></span>
          <span class="iconfont icon-yiwancheng" v-show="false"></span>
        </div>
      </div>
    </div>
    <div class="home-picture">
      <img src="../../assets/img/banner.png">
    </div>
    <div class="home-operation">
      <table>
        <tr>
          <td class="history-lesson" @click="courseCalendar">
            <span class="iconfont icon-rili2"></span>
            <span class="operation-name">课程日历</span>
          </td>
          <td class="my-evaluate">
            <span class="iconfont icon-wodehuiyuan" @click="coachMember"></span>
            <span class="operation-name">我的会员</span>
          </td>
          <td class="cancel-record" @click="myHoliday">
            <span class="iconfont icon-imgholiday"></span>
            <span class="operation-name">我的请假</span>
          </td>
          <td class="my-holiday" @click="contributionStatistics">
            <span class="iconfont icon-youlegongxianzhi"></span>
            <span class="operation-name">贡献统计</span>
          </td>
        </tr>
        <tr>
          <td class="history-lesson">
            <span class="iconfont icon-ticheng"></span>
            <span class="operation-name">课时提成</span>
          </td>
          <td class="my-evaluate">
            <span class="iconfont icon-huiyuantuiguangdingdan-"></span>
            <span class="operation-name">会员推广</span>
          </td>
        </tr>
      </table>
    </div>
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
      courseCalendar() {
        this.$router.push({path: 'CourseCalendar'})
      },
      coachMember() {
        this.$router.push({path: 'CoachMember'})
      },
      experienceReservation() {
        this.$router.push({path: 'ExperienceReservation'})
      },
      contributionStatistics() {
        this.$router.push({path: 'ContributionStatistics'})
      },
      myHoliday() {

      },
      increaseMember() {
        this.$router.push({path: 'IncreaseMember'})
      }
    },
    computed: {

    },
    watch: {

    }
  }

</script>

<style scoped lang="sass">
  @import "../../assets/scss/coach/CoachHome"
</style>
