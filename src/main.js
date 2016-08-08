import Vue from 'vue'
import Vuex from 'vuex'
var VueResource = require('vue-resource')
// import App from './App'
import VueRouter from 'vue-router'
import com1 from './components/com1'
import com2 from './components/com2'
import homepage from './components/homepage'
import currency from './components/currency'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
var router = new VueRouter()

router.map({
  '/com1': {
    component: com1
  },
  '/com2': {
    component: com2
  },
  '/currency': {
    component: currency
  }
})
// var App = Vue.extend({})
// if progrom start from index.html
router.start(homepage, '#app')
