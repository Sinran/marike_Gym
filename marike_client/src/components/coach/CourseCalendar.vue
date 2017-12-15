<template>
  <div class="course-calendar">
    <div class="top-week">
      <span>日</span>
      <span>一</span>
      <span>二</span>
      <span>三</span>
      <span>四</span>
      <span>五</span>
      <span>六</span>
    </div>
    <div class="date-calendar">
      <table class="date-calendar-table">
        <tr class="date-year-month">
          <td>
            <span class="iconfont icon-xiangzuozhedie"></span>
            <span class="now-year-month">10月2017年</span>
            <span class="iconfont icon-xiangyoufen"></span>
          </td>
        </tr>
        <tr class="date-day">
          <td><span></span><span class="day-time">1</span><span></span></td>
          <td><span></span><span class="day-time">2</span><span></span></td>
          <td><span class="have-rest">休</span><span class="day-time">3</span><span></span></td>
          <td><span></span><span class="day-time">4</span><span></span></td>
          <td><span></span><span class="day-time">5</span><span></span></td>
          <td><span></span><span class="day-time">6</span><span></span></td>
          <td><span></span><span class="day-time">7</span><span></span></td>
        </tr>
        <tr class="date-day">
          <td><span></span><span class="day-time">8</span><span class="lessons-number">4</span></td>
          <td><span></span><span class="day-time">9</span><span class="lessons-number">5</span></td>
          <td><span class="have-rest">休</span><span class="day-time">10</span><span></span></td>
          <td><span></span><span class="day-time">11</span><span></span></td>
          <td><span></span><span class="day-time">12</span><span></span></td>
          <td><span></span><span class="day-time">13</span><span></span></td>
          <td><span></span><span class="day-time">14</span><span></span></td>
        </tr>
        <tr class="date-day">
          <td><span></span><span class="day-time">15</span><span></span></td>
          <td><span></span><span class="day-time">16</span><span></span></td>
          <td><span></span><span class="day-time">17</span><span></span></td>
          <td><span class="have-rest">休</span><span class="day-time">18</span><span></span></td>
          <td><span></span><span class="day-time">19</span><span></span></td>
          <td><span></span><span class="day-time">20</span><span></span></td>
          <td><span></span><span class="day-time">21</span><span></span></td>
        </tr>
        <tr class="date-day">
          <td><span></span><span class="day-time">22</span><span></span></td>
          <td><span></span><span class="day-time">23</span><span></span></td>
          <td><span class="have-rest">休</span><span class="day-time">24</span><span></span></td>
          <td><span></span><span class="day-time">25</span><span></span></td>
          <td><span></span><span class="day-time"><span class="today-date">26</span></span><span class="lessons-number">4</span></td>
          <td><span></span><span class="day-time ">27</span><span></span></td>
          <td><span></span><span class="day-time active">今天</span><span class="today-lesson">5</span></td>
        </tr>
        <tr class="date-day">
          <td><span></span><span class="day-time future-time">29</span><span class="today-lesson">5</span></td>
          <td><span></span><span class="day-time future-time">30</span><span class="today-lesson">3</span></td>
          <td><span></span><span class="day-time future-time">31</span><span></span></td>
          <td><span></span><span class="day-time"></span><span></span></td>
          <td><span></span><span class="day-time"></span><span></span></td>
          <td><span></span><span class="day-time"></span><span></span></td>
          <td><span></span><span class="day-time"></span><span></span></td>
        </tr>

      </table>
    </div>
    <div class="date-lesson">
      <div><span>10</span>月<span>26</span>日</div>
      <div>共<span>4</span>节课</div>
    </div>
    <div class="lesson-message">
      <div class="lesson-content">
        <div class="lesson-content-date">
          <span class="iconfont icon-shijian"></span>
          <span>10月12日   18:00-19:00</span>
          <span class="lesson-evaluate">未评价</span>
        </div>
        <div class="lesson-content-coach">
          <span class="iconfont icon-huiyuan"></span>
          <span>教练: 何清</span>
        </div>
        <div class="lesson-content-number">
          <span class="iconfont icon-jiaoshikeshitongji"></span>
          <span>课时: 第21节课</span>
        </div>
      </div>
      <div class="lesson-content">
        <div class="lesson-content-date">
          <span class="iconfont icon-shijian"></span>
          <span>10月12日   18:00-19:00</span>
          <span class="lesson-evaluate-sure">已评价</span>
        </div>
        <div class="lesson-content-coach">
          <span class="iconfont icon-huiyuan"></span>
          <span>教练: 何清</span>
        </div>
        <div class="lesson-content-number">
          <span class="iconfont icon-jiaoshikeshitongji"></span>
          <span>课时: 第21节课</span>
        </div>
      </div>
      <div class="lesson-content">
        <div class="lesson-content-date">
          <span class="iconfont icon-shijian"></span>
          <span>10月12日   18:00-19:00</span>
          <span class="lesson-evaluate">未评价</span>
        </div>
        <div class="lesson-content-coach">
          <span class="iconfont icon-huiyuan"></span>
          <span>教练: 何清</span>
        </div>
        <div class="lesson-content-number">
          <span class="iconfont icon-jiaoshikeshitongji"></span>
          <span>课时: 第21节课</span>
        </div>
      </div>
      <div class="lesson-content">
        <div class="lesson-content-date">
          <span class="iconfont icon-shijian"></span>
          <span>10月12日   18:00-19:00</span>
          <span class="lesson-evaluate-sure">已评价</span>
        </div>
        <div class="lesson-content-coach">
          <span class="iconfont icon-huiyuan"></span>
          <span>教练: 何清</span>
        </div>
        <div class="lesson-content-number">
          <span class="iconfont icon-jiaoshikeshitongji"></span>
          <span>课时: 第21节课</span>
        </div>
      </div>
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

    },
    computed: {

    },
    watch: {

    }
  }

</script>

<style scoped lang="sass">
  @import "../../assets/scss/coach/CourseCalendar"
</style>
