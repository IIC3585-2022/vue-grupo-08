import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProfileView from '@/views/ProfileView.vue';
import MatchesView from '@/views/MatchesView.vue';
import MatchView from '@/views/MatchView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/matches',
    name: 'matches',
    component: MatchesView,
  },
  {
    path: '/match/:idx',
    name: 'match',
    component: MatchView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
