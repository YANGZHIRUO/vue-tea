import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"
import List from "../views/List"
import Cart from "../views/Cart"
import My from "../views/List"
import Search from "../views/Search"
import searchlist from "../views/Search-list"
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:'/home'
  },
  {
    //主页
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    //购物车
    path: '/cart',
    name: 'Cart',
    component:Cart
  },
  {
    //我的
    path: '/my',
    name: 'My',
    component:My
  },
  {
    //我的
    path: '/search',
    name: 'Search',
    component:Search,
    children:[
      {
        path:"searchlist",
        name:"searchlist",
        component:searchlist
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
