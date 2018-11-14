import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
