// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import httpPlugin from './utils/http';


import axios from 'axios'
import store from '@/vuex/store'

Vue.config.productionTip = false


Vue.use(ElementUI);
Vue.use(httpPlugin)
Vue.use(require('vue-moment'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})