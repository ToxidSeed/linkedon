import Vue from 'vue'
import App from './App.vue'
import './quasar'

import router from '@/routes.js';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
