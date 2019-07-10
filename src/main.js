import Vue from 'vue'


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './assets/mui/css/mui.min.css'
//import './scss/app.scss'

import App from './APP.vue'

//需要加载根主键
var vm = new Vue({
  el: '#app',
  render: c => c(App)
})