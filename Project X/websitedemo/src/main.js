import Vue from 'vue'
import VueMeta from 'vue-meta'
import VeeValidate from 'vee-validate';
import BootstrapVue from 'bootstrap-vue'
import VueLogger from 'vuejs-logger';
import router from '@/router'
import { store } from '@/store'
import i18n from '@/lang'
import App from '@/app/App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const options = {
  isEnabled: true,
  logLevel : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : false,
  separator: '|',
  showConsoleColors: true
};

Vue.use(VueLogger, options);

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

Vue.use(VeeValidate, {
  // This is the default
  inject: true,
  // Important to name this something other than 'fields'
  fieldsBagName: 'veeFields'
})

Vue.use(BootstrapVue)
Vue.config.productionTip = false

export const app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
