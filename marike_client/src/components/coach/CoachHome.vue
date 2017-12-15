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
      <table @click="coachAction">
        <tr>
          <td class="lesson-date">
            <span class="iconfont icon-rili2 lesson-date"></span>
            <span class="operation-name lesson-date">课程日历</span>
          </td>
          <td class="my-member">
            <span class="iconfont icon-wodehuiyuan my-member"></span>
            <span class="operation-name my-member">我的会员</span>
          </td>
          <td class="my-holiday">
            <span class="iconfont icon-imgholiday my-holiday"></span>
            <span class="operation-name my-holiday">我的请假</span>
          </td>
          <td class="contribution-data">
            <span class="iconfont icon-youlegongxianzhi contribution-data"></span>
            <span class="operation-name contribution-data">贡献统计</span>
          </td>
        </tr>
        <tr>
          <td class="lesson-ommission">
            <span class="iconfont icon-ticheng lesson-ommission"></span>
            <span class="operation-name lesson-ommission">课时提成</span>
          </td>
          <td class="member-push">
            <span class="iconfont icon-huiyuantuiguangdingdan- member-push"></span>
            <span class="operation-name member-push">会员推广</span>
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
      experienceReservation() {
        this.$router.push({path: 'ExperienceReservation'})
      },
      increaseMember() {
        this.$router.push({path: 'IncreaseMember'})
      },
      coachAction() {
        let ev = ev || window.event;
        let target = ev.target || ev.srcElement;
        if (!Object.is(target.className.indexOf('lesson-date'), -1)) {
          this.$router.push({path: 'CourseCalendar'})
        } else if (!Object.is(target.className.indexOf('my-member'), -1)) {
          this.$router.push({path: 'CoachMember'})
        } else if (!Object.is(target.className.indexOf('my-holiday'), -1)) {
          this.$router.push({path: 'MyLeave'})
        } else if (!Object.is(target.className.indexOf('contribution-data'), -1)) {
          this.$router.push({path: 'ContributionStatistics'})
        } else if (!Object.is(target.className.indexOf('lesson-ommission'), -1)) {

        } else if (!Object.is(target.className.indexOf('member-push'), -1)) {

        }
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
