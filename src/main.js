// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueSimplemde from 'vue-simplemde'

// load vuetify style
require('./stylus/main.styl')
require('./stylus/global.less')

Vue.use(Vuetify)
Vue.use(VueSimplemde)

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

console.log(app)
