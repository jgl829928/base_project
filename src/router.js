// route配置按模块划分


import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'

// 登录
const Login = () => import('./views/login/index');
//  懒加载
// ------------admin---------------------
const admin_url = "./views/admin/"
const admin = {
  admin: () => import("./views/admin/index"),
  add: () => import(`${admin_url}add`),
}

// ----------user---------------
const user_url = "./views/user/"
const user = {
  user: () => import(`${user_url}index`),
  add: () => import(`${user_url}add`),
}


Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { title: 'login' }
    },
    {
      path: '/admin',
      component: Home,
      name: 'mainAdmin',
      redirect: "/",
      children: [
        { path: '/', component: admin.admin, name: 'admin', meta: { name: "admin" }, },
        { path: 'add', component: admin.add, name: 'adminAdd',  meta: { name: "adminAdd" } },
      ]
    },
    {
      path: '/user',
      component: Home,
      name: 'mainUser',
      redirect: "/",
      children: [
        { path: '/', component: user.admin, name: 'user', meta: { name: "user" }, },
        { path: 'add', component: user.add, name: 'userAdd', meta: { name: "userAdd" } },
      ]
    },
  ]
})

export default router
