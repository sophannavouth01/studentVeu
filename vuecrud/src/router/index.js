import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import StudentView from "../views/Sutdents/view.vue"
import StudentCreate from "../views/Sutdents/Create.vue"
import StudentAdd from "../views/Sutdents/Add.vue"
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: StudentView 
    },
    {
      path: '/students/create/:id',
      name: '/students/create',
      component: StudentCreate
    },
    {
      path: '/students/add',
      name: '/students/add',
      component: StudentAdd
    },
    {
      path: "/home",
      component: () => import('../components/WelcomeView.vue'),
    },
 ],
 
});

export default router
