import Vue from 'vue';
import Router from 'vue-router';
//client
import ClientHome from '../components/client/ClientHome.vue';
import Evaluate from '../components/client/Evaluate.vue';
import HistoryLesson from '../components/client/HistoryLesson.vue';
import ClientLogin from '../components/client/ClientLogin.vue';
import LessonRecord from '../components/client/LessonRecord.vue';
import MemberInfo from '../components/client/MemberInfo.vue';
import MyLeave from '../components/client/MyLeave.vue';
import MyMember from '../components/client/MyMember.vue';
import RegisteredMember from '../components/client/RegisteredMember.vue';
import CancelRecord from '../components/client/CancelRecord.vue';
import ReservationImmediate from '../components/client/ReservationImmediate.vue';
//coach
import CourseCalendar from '../components/coach/CourseCalendar.vue';
import CoachHome from '../components/coach/CoachHome.vue';
import IncreaseMember from '../components/coach/IncreaseMember.vue';
import ContributionStatistics from '../components/coach/ContributionStatistics.vue';
import CoachMember from '../components/coach/CoachMember.vue';
import ExperienceReservation from '../components/coach/ExperienceReservation.vue';


Vue.use(Router);

const routes = [
  //client
  {path: '/ClientHome', component: ClientHome},
  {path: '/Evaluate', component: Evaluate},
  {path: '/HistoryLesson', component: HistoryLesson},
  {path: '/ClientLogin', component: ClientLogin},
  {path: '/LessonRecord', component: LessonRecord},
  {path: '/MemberInfo', component: MemberInfo},
  {path: '/MyLeave', component: MyLeave},
  {path: '/MyMember', component: MyMember},
  {path: '/RegisteredMember', component: RegisteredMember},
  {path: '/ReservationImmediate', component: ReservationImmediate},
  {path: '/CancelRecord', component: CancelRecord},
  //coach
  {path: '/CoachHome', component: CoachHome},
  {path: '/CoachMember', component: CoachMember},
  {path: '/CourseCalendar', component: CourseCalendar},
  {path: '/IncreaseMember', component: IncreaseMember},
  {path: '/ContributionStatistics', component: ContributionStatistics},
  {path: '/ExperienceReservation', component: ExperienceReservation}
];

const router = new Router({
  mode: 'history',
  routes
});

export default router

