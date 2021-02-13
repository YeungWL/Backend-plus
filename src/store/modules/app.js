/*
 * @Description: 系统内部需要全局使用的vuex
 * @Author: Yeung
 * @Date: 2021-02-13 23:14:13
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-13 23:35:21
 */
export default {
  namespaced: true,
  state: {
    opened: sessionStorage.getItem('opened') ? sessionStorage.getItem('opened') === '1' : false,
  },
  getters: {
    isOpened: state => state.opened
  },
  mutations: {
    TOGGLE_SIDEBAR(state) {
      state.opened = !state.opened
      if (state.opened) {
        sessionStorage.setItem('opened', '1')
      } else {
        sessionStorage.setItem('opened', '0')
      }
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    }
  }
}
