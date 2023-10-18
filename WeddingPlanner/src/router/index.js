import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Plans from "../views/Plans.vue";
import Service from "../views/Service.vue";
import Contact from "../views/Contact.vue";
import Blog from "../views/BLog.vue";
import Feature from "../views/Feature.vue";
import About from "../views/About.vue";

import AOS from "aos";
import 'aos/dist/aos.css';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/plans',
      name: 'plans',
      component: Plans
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/feature',
      name: 'feature',
      component: Feature
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})
router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
 next();
});
export default router
