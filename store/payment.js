export default {
  state () {
    return {
      payment: null,
      publicKey: null,
      addressId: null
    }
  },
  mutations: {
    SET_PAYMENT (state, payment) {
      state.payment = payment
    },
    GET_PUBLIC_KEY (state, key) {
      state.publicKey = key
    },
    SET_ADDRESS (state, addressId) {
      state.addressId = addressId
    }
  },
  actions: {
    async payments ({ commit, state }, data) {
      return await this.$axios.post('/payments', data)
        .then((res) => {
          if (res.status === 201) {
            commit('SET_PAYMENT', res.data)
          }
          return res.data.metadata
        })
    },
    async getStripeKey ({ commit }) {
      return await this.$axios.get('/stripe/config')
        .then((res) => {
          if (res.status === 200) {
            commit('GET_PUBLIC_KEY', res.data.publishableKey)
          }
          return res.data
        })
    },
    async fetchAddress ({ commit, state }, data) {
      return await this.$axios.post('/addresses', data)
        .then((res) => {
          if (res.status === 201) {
            commit('SET_ADDRESS', res.data)
          }
          return res.data
        })
    }
  }
}
