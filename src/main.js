import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/common.css"
import LyTab from "ly-tab"
//引入css字体
import "@/assets/css/iconfont.css"
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
// import swiper from "vue-awesome-swiper"
Vue.use(LyTab)
Vue.use(MintUI)
// Vue.use(vue-awesome-swiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
