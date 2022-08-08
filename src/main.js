import Vue from 'vue'
import App from './App.vue'
import store from './store'

// Bootstrap & BootstrapVue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

// Animate On Scroll
import AOS from 'aos'
import 'aos/dist/aos.css'

// VueScrollTo
var VueScrollTo = require('vue-scrollto');

// Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 2000,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.config.productionTip = false

new Vue({
  store,
  mounted() {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
