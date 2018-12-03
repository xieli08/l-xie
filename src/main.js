// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vueresource from 'vue-resource'


import request from './request'
// import axios from 'axios'
// Vue.prototype.$http = axios

Vue.use(Vueresource)
import {
  Slide,
  button,
  TabBar,
  Swipe,
  Toast,
  DatePicker,
  Form,
  Dialog,
  Style,
  Tip,
  Toolbar
} from 'cube-ui'
Vue.use(Slide)
.use(button)
.use(TabBar)
.use(Swipe)
.use(Toast)
.use(DatePicker)
.use(Form)
.use(Dialog)
.use(Style)
.use(Tip)
.use(Toolbar)
Vue.config.productionTip = false
Vue.use(request)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  
})
