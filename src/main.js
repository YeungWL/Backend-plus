import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/index'
import './api/index'
// mock后端返回数据
import './mock/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
