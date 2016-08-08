import Vue from 'vue'
// import App from './App'
import VueRouter from 'vue-router'
import com1 from './components/com1'
import com2 from './components/com2'
import homepage from './components/homepage'
Vue.use(VueRouter)
var router = new VueRouter()

router.map({
  '/': {
    component: homepage
  },
  '/com1': {
    component: com1
  },
  '/com2': {
    component: com2
  }
})
// var App = Vue.extend({})
// if progrom start from index.html
router.start(homepage, '#app')
