<template>
  <div class="experience-reservation">
    <div class="reservation-date">
      <div class="reservation-date-title">
        <span class="lesson-reservation">课程预约</span>
        <span class="reservation-today">2017-10-05</span>
        <span class="lesson-reservation-today">今天</span>
      </div>
      <div class="reservation-date-content">
        <div class="reservation-date-group reservation-date-active">
          <span class="reservation-date-weekend">三</span>
          <span class="reservation-date-number">25</span>
        </div>
        <div class="reservation-date-group">
          <span class="reservation-date-weekend">四</span>
          <span class="reservation-date-number">26</span>
        </div>
        <div class="reservation-date-group">
          <span class="reservation-date-weekend">五</span>
          <span class="reservation-date-number">27</span>
        </div>
        <div class="reservation-date-group date-range-out">
          <span class="reservation-date-weekend">六</span>
          <span class="reservation-date-number">28</span>
        </div>
        <div class="reservation-date-group date-range-out">
          <span class="reservation-date-weekend">日</span>
          <span class="reservation-date-number">29</span>
        </div>
        <div class="reservation-date-group date-range-out">
          <span class="reservation-date-weekend">一</span>
          <span class="reservation-date-number">30</span>
        </div>
        <div class="reservation-date-group date-range-out">
          <span class="reservation-date-weekend">二</span>
          <span class="reservation-date-number">31</span>
        </div>
      </div>
    </div>
    <div class="reservation-lesson">
      <table class="reservation-time-table">
        <tr>
          <td><span class="table-time">10:00-11:00</span></td>
          <td><span class="table-time">11:00-12:00</span></td>
          <td><span class="table-time">12:00-13:00</span></td>
        </tr>
        <tr>
          <td><span class="table-time table-time-reserved">13:00-14:00</span></td>
          <td><span class="table-time">14:00-15:00</span></td>
          <td><span class="table-time">15:00-16:00</span></td>
        </tr>
        <tr>
          <td><span class="table-time">16:00-17:00</span></td>
          <td><span class="table-time">17:00-18:00</span></td>
          <td><span class="table-time">18:30-19:30</span></td>
        </tr>
        <tr>
          <td><span class="table-time table-time-choose">19:30-20:30</span></td>
          <td><span class="table-time">20:30-21:30</span></td>
          <td><span class="table-time">21:30-22:30</span></td>
        </tr>
      </table>
    </div>
    <div class="reservation-client-info">
      <div class="client-info-name">
        <span>客户姓名:</span>
        <input type="text" placeholder="输入姓名" class="input-name">
      </div>
      <div class="client-info-telephone">
        <span>客户电话:</span>
        <input type="text" placeholder="输入手机号码" class="input-telephone">
      </div>
      <div class="client-info-source">
        <span>客户来源:</span>
        <select class="source-select">
          <option>选择来源</option>
          <option>大众点评</option>
          <option>微信</option>
          <option>美团</option>
        </select>
      </div>
    </div>
    <div class="reservation-submit">
      <span class="submit-btn">提交</span>
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
  @import "../../assets/scss/coach/ExperienceReservation"
</style>
