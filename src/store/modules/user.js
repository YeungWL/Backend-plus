/*
 * @Date: 2021-02-13 00:27:46
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-17 00:16:29
 * @Description: 用户模块的vuex
 */
import userApi from '@/api/user'
import { Tool } from '@/utils/tool'

const tool = new Tool()

export default {
  namespaced: true, // 分配命名空间 -- user/xxx   ==>  意思是user模块下的方法
  state: {
    userInfo: localStorage.getItem('userInfo') || `{
      id: null,
      nickName: '',
    }`,
    userMenu: []
  },
  getters: {
    userInfo: state => JSON.parse(state.userInfo),
    getToken: () => () => { return localStorage.getItem('token') },
    isLogin: () => () => { return !!localStorage.getItem('token') },
    getUserMenu: state => {
      let list = tool.listToGroup(state.userMenu, { rootId: '0' })
      console.log(list);
      return list
    }
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload
    },
    SET_USER_MENU(state, payload) {
      state.userMenu = payload
    }
  },
  actions: {
    /**
     * @description: 登录
     * @param {*} context
     * @param {*} payload
     * @return {*}
     */
    login(context, payload) {
      return new Promise((resolve, reject) => {
        if (payload) {
          userApi.loginByUser(payload).then(res => {
            localStorage.setItem('userInfo', JSON.stringify({
              id: res.id,
              nickName: res.userName
            }))
            localStorage.setItem('token', res.token)
            resolve(res)
          }).catch(err => {
            reject(err)
          })
        }
      })
    },
    /**
     * @description: 退出登录
     * @param {*} context
     * @return {*}
     */
    logout() {
      return new Promise((resolve) => {
        localStorage.clear()
        resolve()
      })
    },
    /**
     * @description: 获取用户导航
     * @param {*} commit
     * @return {*}
     */
    async getUserMenu({ commit }) {
      try {
        const res = await userApi.getUserMenu()
        let list = res.map(item => (
          {
            ...item,
            id: item.id.toString(),
            parentId: item.parentId.toString()
          }
        ))
        commit('SET_USER_MENU', list)
      } catch (error) {
        console.log(error);
      }
    }
  }
}
