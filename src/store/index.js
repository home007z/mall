import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters

  // mutations: {
  //   // mutations唯一的目的就是修改state中的状态
  //   // mutations中的每个方法尽可能完成的事件比较单一一点
  //   addCounter (state, payload) {
  //     payload.count++
  //   },
  //   addToCart (state, payload) {
  //     state.cartList.push(payload)
  //   },
  //   loginon (state, payload) {
  //     state.hasLogin = true
  //     state.userInfo = payload
  //   }
  // },
  // actions: {
  //   addCart (context, payload) {
  //     return new Promise((resolve, reject) => {
  //       // payload 新添加的商品
  //       // 查找之前的数组中是否有该商品
  //       // let oldProduct = null
  //       // for (let item of state.cartList) {
  //       //   if (item.id === payload.id) {
  //       //     oldProduct = item
  //       //   }
  //       // }
  //       let oldProduct = context.state.cartList.find(item => item.id === payload.id)
  //       // 同一商品只添加一次
  //       if (oldProduct) {
  //         // oldProduct.count += 1 //不建议直接写数量加1
  //         context.commit('addCounter', oldProduct)
  //         resolve('当前的商品数量+1')
  //       } else {
  //         payload.count = 1
  //         payload.checked = true
  //         // context.state.cartList.push(payload)
  //         context.commit('addToCart', payload)
  //         resolve('添加了新的商品')
  //       }
  //     })
  //   },
  //   login (context, payloa) {
  //     context.commit('loginon', payloa)
  //   }
  // },
  // modules: {
  // }
})
