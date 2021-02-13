/*
 * @Date: 2021-02-13 00:27:46
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-13 01:29:18
 * @Description: 用户模块的vuex
 */
import userApi from '@/api/user'

export default {
  namespaced: true, // 分配命名空间 -- user/xxx   ==>  意思是user模块下的方法
  state: {
    userInfo: {
      id: null,
      nickName: '',
    }
  },
  getters: {
    userInfo: state => state.userInfo,
    getToken: () => () => { return localStorage.getItem('token') },
    isLogin: () => () => { return !!localStorage.getItem('token') }
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    login({ commit }, payload) {
      return new Promise((resolve, reject) => {
        if (payload) {
          userApi.loginByUser(payload).then(res => {
            commit('SET_USER_INFO', {
              id: res.id,
              nickName: res.userName
            })
            localStorage.setItem('token', res.token)
            resolve(res)
          }).catch(err => {
            reject(err)
          })
        }
      })
    }
  }
}
