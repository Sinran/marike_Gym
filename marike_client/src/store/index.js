/**
 * Created by zhu on 2017/12/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //登录状态
    loginStatus: false
  },
  mutations: {
    //改变登录状态
    changeLoginStatus(state, status) {
      state.loginStatus = status;
    }
  }
});

export default store
