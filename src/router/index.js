import Vue from 'vue'
import VueRouter from 'vue-router'
import BioView from '../views/BioView.vue'
import PrincipalView from '../views/PrincipalView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContatoView from '../views/ContatoView.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("@/views/HomeView.vue"),
      children: [
        {
          path: '/',
          name: 'PrincipalView',
          component: PrincipalView,
        },
        {
          path: '/bio',
          name: 'BioView',
          component: BioView,
        },
        {
          path: '/portfolio',
          name: 'Portfolio.view',
          component: PortfolioView,
        },
        {
          path: '/contato',
          name: 'ContatoView',
          component: ContatoView,
        },
      ],
},
],
});

export default router;