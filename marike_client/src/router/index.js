import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/client/Home.vue'
import Evaluate from '../components/client/Evaluate.vue'
import HistoryLesson from '../components/client/HistoryLesson.vue'
import ClientLogin from '../components/client/ClientLogin.vue'
import LessonRecord from '../components/client/LessonRecord.vue'
import MemberInfo from '../components/client/MemberInfo.vue'
import MyLeave from '../components/client/MyLeave.vue'
import MyMember from '../components/client/MyMember.vue'
import RegisteredMember from '../components/client/RegisteredMember.vue'
import ReservationImmediate from '../components/client/ReservationImmediate.vue'
import CancelRecord from '../components/client/CancelRecord.vue'


Vue.use(Router);

const routes = [
  {path: '/Home', component: Home},
  {path: '/Evaluate', component: Evaluate},
  {path: '/HistoryLesson', component: HistoryLesson},
  {path: '/ClientLogin', component: ClientLogin},
  {path: '/LessonRecord', component: LessonRecord},
  {path: '/MemberInfo', component: MemberInfo},
  {path: '/MyLeave', component: MyLeave},
  {path: '/MyMember', component: MyMember},
  {path: '/RegisteredMember', component: RegisteredMember},
  {path: '/ReservationImmediate', component: ReservationImmediate},
  {path: '/CancelRecord', component: CancelRecord}
];

const router = new Router({
  mode: 'history',
  routes
});

export default router

