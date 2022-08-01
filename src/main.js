import Vue from 'vue'
import App from './App.vue'
import store from './store'

// Animate On Scroll
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  store,
  mounted() {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
