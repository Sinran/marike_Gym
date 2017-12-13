<template>
  <div class="my-leave">
    <div class="nav">
      <span>我要请假</span>
      <span>请假记录</span>
    </div>
    <div class="ones">
      <div class="ask-leave">
        <div class="time-off">
          <div class="begin-time">
            <span>开始时间</span>
            <span>请选择<span class="iconfont icon-qianjin"></span></span>
          </div>
          <div class="finish-time">
            <span>结束时间</span>
            <span>请选择<span class="iconfont icon-qianjin"></span></span>
          </div>
          <div class="leave-reason">
            <span>请假原因</span>
            <textarea placeholder="请填写申请请假原因说明"></textarea>
          </div>
        </div>

        <div class="apply">申请</div>
      </div>
    </div>
    <div class="twos">
      <div class="leave-record">
        <div class="record-content">
          <div class="times">
            <span>时间:</span>
            <span>2017年10月8日&nbsp;至&nbsp;2017年10月9日</span>
          </div>
          <div class="total">
            <span>合计:</span>
            <span><span>3</span>天</span>
          </div>
          <div class="cause">
            <span>原因:</span>
            <span>例假</span>
          </div>
        </div>

        <div class="record-content">
          <div class="times">
            <span>时间:</span>
            <span>2017年10月8日&nbsp;至&nbsp;2017年10月9日</span>
          </div>
          <div class="total">
            <span>合计:</span>
            <span><span>3</span>天</span>
          </div>
          <div class="cause">
            <span>原因:</span>
            <span>例假</span>
          </div>
        </div>

        <div class="record-content">
          <div class="times">
            <span>时间:</span>
            <span>2017年10月8日&nbsp;至&nbsp;2017年10月9日</span>
          </div>
          <div class="total">
            <span>合计:</span>
            <span><span>3</span>天</span>
          </div>
          <div class="cause">
            <span>原因:</span>
            <span>例假</span>
          </div>
        </div>
        <div class="record-content">
          <div class="times">
            <span>时间:</span>
            <span>2017年10月8日&nbsp;至&nbsp;2017年10月9日</span>
          </div>
          <div class="total">
            <span>合计:</span>
            <span><span>3</span>天</span>
          </div>
          <div class="cause">
            <span>原因:</span>
            <span>例假</span>
          </div>
        </div>
        <div class="record-content">
          <div class="times">
            <span>时间:</span>
            <span>2017年10月8日&nbsp;至&nbsp;2017年10月9日</span>
          </div>
          <div class="total">
            <span>合计:</span>
            <span><span>3</span>天</span>
          </div>
          <div class="cause">
            <span>原因:</span>
            <span>例假</span>
          </div>
        </div>
        <div class="record-content">
          <div class="times">
            <span>时间:</span>
            <span>2017年10月8日&nbsp;至&nbsp;2017年10月9日</span>
          </div>
          <div class="total">
            <span>合计:</span>
            <span><span>3</span>天</span>
          </div>
          <div class="cause">
            <span>原因:</span>
            <span>例假</span>
          </div>
        </div>
        <div class="record-content">
          <div class="times">
            <span>时间:</span>
            <span>2017年10月8日&nbsp;至&nbsp;2017年10月9日</span>
          </div>
          <div class="total">
            <span>合计:</span>
            <span><span>3</span>天</span>
          </div>
          <div class="cause">
            <span>原因:</span>
            <span>例假11111111</span>
          </div>
        </div>

      </div>
      <div class="all-total">
        <span>总计:</span>
        <span><span>13</span>天</span>
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
       this.$nextTick(() => {
          $(".nav span:first").click(function() {
          $(".nav span:first").css({
            borderBottom: '2px solid #f6ab00'
          });
          $(".nav span:last").css({
            borderBottom: 'none'
          });
          $(".ones").show();
          $(".twos").hide();
        });
        $(".nav span:last").click(function() {
          $(".nav span:last").css({
            borderBottom: '2px solid #f6ab00'
          });
          $(".nav span:first").css({
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
  @import "../../assets/scss/client/MyLeave"
</style>
