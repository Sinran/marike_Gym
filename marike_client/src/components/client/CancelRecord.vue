<template>
  <div class="cancel-record">
    <div class="navs">
      <span>取消记录</span>
      <span>爽约记录</span>
    </div>

    <div class="ones">
      <div class="cancel-content">
        <div class="cancel-times">
          <span>时间:</span>
          <span>2017年10月8日&nbsp;&nbsp;17:00-16:00</span>
        </div>
        <div class="cancel-times">
          <span>时间:</span>
          <span>2017年10月8日&nbsp;&nbsp;17:00-16:00</span>
        </div>
        <div class="cancel-times">
          <span>时间:</span>
          <span>2017年10月8日&nbsp;&nbsp;17:00-16:00</span>
        </div>


      </div>

      <div class="totals">
        <span>总计:</span>
        <span>3次</span>
      </div>
    </div>

    <div class="twos">
      <div class="cancel-content">
        <div class="cancel-times">
          <span>时间:</span>
          <span>2017年10月8日&nbsp;&nbsp;17:00-16:00</span>
        </div>
        <div class="cancel-times">
          <span>时间:</span>
          <span>2017年10月8日&nbsp;&nbsp;17:00-16:00</span>
        </div>
        <div class="cancel-times">
          <span>时间:</span>
          <span>2017年10月8日&nbsp;&nbsp;17:00-16:00</span>
        </div>
        <div class="cancel-times">
          <span>时间:</span>
          <span>2017年10月8日&nbsp;&nbsp;17:00-16:00</span>
        </div>
        <div class="cancel-times">
          <span>时间:</span>
          <span>2017年10月8日&nbsp;&nbsp;17:00-16:00</span>
        </div>
      </div>
      <div class="totals">
        <span>总计:</span>
        <span>5次</span>
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
      this.$nextTick(function() {
        $(".navs span:first").click(function() {
          $(".navs span:first").css({
            borderBottom: '2px solid #f6ab00'
          });
          $(".navs span:last").css({
            borderBottom: 'none'
          });
          $(".ones").show();
          $(".twos").hide();
        });
        $(".navs span:last").click(function() {
          $(".navs span:last").css({
            borderBottom: '2px solid #f6ab00'
          });
          $(".navs span:first").css({
            borderBottom: 'none'

          });
          $(".twos").show();
          $(".ones").hide();
        });
      })
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
  @import "../../assets/scss/client/CancelRecord"
</style>
