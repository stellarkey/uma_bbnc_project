import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/components/Projects')
    },
    {
      path: '/npos',
      name: 'Npos',
      component: () => import('@/components/Npos')
    },
    {
      path: '/donations',
      name: 'Donations',
      component: () => import('@/components/Transactions')
    },
    {
      path: '/recipients',
      name: 'Recipients',
      component: () => import('@/components/Recipients')
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: () => import(/* webpackChunkName: "signin" */ '@/views/SignIn.vue')
    },
    {
      path: '/sign-up',
      name: "SignUp",
      component: () => import(/* webpackChunkName: "signup" */ '@/views/Register.vue')
    },
    {
      path: '/forgot-password',
      name: "ForgotPassword",
      component: () => import(/* webpackChunkName: "forgot-password" */ '@/views/ForgotPassword.vue')
    },
    {
      path: '/reset-password',
      name: "ResetPassword",
      component: () => import(/* webpackChunkName: "reset-password" */ '@/views/ResetPassword.vue')
    },
    {
      path: '/reset/expired',
      name: "ResetPasswordExpired",
      component: () => import(/* webpackChunkName: "reset-password-expired" */ '@/views/ResetPasswordExpired.vue')
    },
    {
      path: '/verify-email',
      component: () => import(/* webpackChunkName: "verify-email" */ '@/views/VerifyEmail.vue')
    },
    {
      path: '/verify-email/expired',
      name: "VerifyEmailExpired",
      component: () => import(/* webpackChunkName: "verify-email-expired" */ '@/views/VerifyEmailExpired.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (this.$store.getters.isLoggedIn) {
      next()
      return
    }
    next('/sign-in')
  } else {
    next()
  }
})

export default router
