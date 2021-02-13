import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import app from './modules/app'

Vue.use(Vuex)

let modules = {}
modules.user = user
modules.app = app
// require
//   .context('./modules', false, /.js$/)
//   .keys()
//   .forEach(i => {
//     modules[i.substring(2, i.length - 3)] = require(`./modules/${i.substring(
//       2,
//       i.length
//     )}`).default
//   })

export default new Vuex.Store({
  modules,
})
