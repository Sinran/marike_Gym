<template>
  <div id="app">
    <clientLogin v-if="!loginStatus"></clientLogin>
    <div class="page-router" v-if="loginStatus">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import ClientLogin from './components/client/ClientLogin.vue'
  import {mapState} from 'vuex'
  export default {
    name: 'app',
    components: {
      clientLogin: ClientLogin

    },
    data: function() {
      return{

      }
    },
    mounted: function() {

    },
    methods: {

    },
    computed: {
      ...mapState({
        loginStatus: state => state.loginStatus
      })
    }
  }
</script>

<style scoped lang="sass">
  @import "./assets/scss/client/APP"
</style>
