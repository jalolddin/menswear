export default {
  state () {
    return {
      carts: null,
      cartCounts: 0,
      recomended: null
    }
  },
  mutations: {
    SET_CART_COUNTS (state, num) {
      state.cartCounts = num
    },
    GET_CART (state, arr) {
      state.carts = arr
    },
    GET_CART_RECOMENDED (state, arr) {
      state.recomended = arr
    },
    INCREASE_COUNT (state, index) {
      state.carts[index].quantity++
    },
    DECREASE_COUNT (state, index) {
      if (state.carts[index].quantity > 1) {
        state.carts[index].quantity--
      }
    }
  },
  actions: {
    async fetchCart ({ commit, state }, data) {
      return await this.$axios.post('/cart/upsert-item', data)
        .then((res) => {
          if (res.status === 201) {
            this._vm.$bvToast.toast('Product added successfully', {
              title: 'Success',
              variant: 'success'
            })
            commit('SET_CART_COUNTS', res.data.items.length)
          }
          return res.data.items
        })
    },
    async getCart ({ commit }) {
      return await this.$axios.get('/cart')
        .then((res) => {
          if (res.status === 200) {
            commit('GET_CART', res.data.items)
            commit('SET_CART_COUNTS', res.data.items.length)
          }
          return res.data.items
        })
    },
    async getCartRecomended ({ commit }) {
      return await this.$axios.get('/cart/get-recomended')
        .then((res) => {
          if (res.status === 200) {
            commit('GET_CART_RECOMENDED', res.data)
          }
          return res.data
        })
    },
    async removeCart ({ commit, state }, id) {
      return await this.$axios.delete(`/cart/cart-items/${id}`)
        .then(() => {
          this._vm.$bvToast.toast('Product canceled successfully', {
            title: 'Success',
            variant: 'success'
          })
        })
    }
  }
}
