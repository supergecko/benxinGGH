import Vue from 'vue'
import App from './App'
import $ajax from "./common/ajax.js"
import service from './service.js'
import store from './store'
import md5 from './common/md5.js'
import lunarFun from 'lunar-fun'
// import wx from 'weixin-js-sdk'
// let  wx = require('weixin-js-sdk')
// Vue.prototype.$wx = wx
// import router from './router'
// import { RouterMount } from 'uni-simple-router'
// import jweixin from 'common/jweixin-1.6.0.js'
Vue.config.productionTip = false

Vue.prototype.$md5  = md5
Vue.prototype.$lunarFun  = lunarFun
Vue.prototype.$store = store
Vue.prototype.$ajax = $ajax
Vue.prototype.$service = service

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount();
