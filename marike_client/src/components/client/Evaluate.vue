<template>
    <div class="evaluate-bodys">
 
      <div class="evaluate">
          <div class="coaching-information">
            <img src="../../assets/img/user.png">
            <div class="content-coach">
              <div class="names">
                <span>教练：</span><span>阿杜</span><span class="iconfont icon-mm"></span><span>4.9分</span>
              </div>
              <div class="lessons">
                <span>课时：</span><span>2017年10月28日&nbsp;17:00-18:00</span>
              </div>
            </div>
          </div>
          <div class="course-completed ">本次课程已经顺利完成啦！</div>
          <div class="life">生命不息！运动不止！</div>
          <div class="come-on">come on!</div>
          <div class="icon-img">
            <span class="iconfont icon-mm"></span>
            <span class="iconfont icon-mm"></span>
            <span class="iconfont icon-mm"></span>
            <span class="iconfont icon-mm"></span>
            <span class="iconfont icon-mm"></span>
          </div>
          <div class="quick-evaluation">快快给我评价吧！</div>
          <div class="message-board">
            <textarea placeholder="其他想说的（比如环境,卫生整洁度,或者对我们教练有什么更高的期望要求！尽管不客气的提吧！）"></textarea>
          </div>
          
      </div>
      <div class="submit-evaluate">提交</div>
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
            $(".evaluate .icon-img span").click(function() {
        
        if ($(this).hasClass("active")) {
          $(this).siblings().removeClass('active');
         
          $(this).removeClass('active');
        }else{
          $(this).prevAll().addClass('active');
          $(this).addClass('active');
        }
        
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
  @import "../../assets/scss/client/Evaluate.scss"
</style>
