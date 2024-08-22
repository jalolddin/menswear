export default {
  state () { return {} },
  mutations: {},
  actions: {
    async register ({ commit, state }, data) {
      return await this.$axios.post('auth/register', data)
        .then((res) => {
          if (res.data?.success) {
            this._vm.$bvToast.toast(res.data?.message, {
              title: 'Success',
              variant: 'success'
            })
          }
          return res.data
        })
    },
    verify ({ commit }, data) {
      return this.$axios.post('auth/verify', data)
        .then(async (res) => {
          if (res.data?.status === 'ACTIVE') {
            this.$auth.options.redirect.home = this.localePath('/')
            this.$auth.token = `Bearer ${res.data?.accessToken}`
            this.$auth.setUser(res.data.data)
            this._vm.ExpiredAuthSessionError = false
            await this.$auth.setUserToken(res.data?.accessToken)
          }
          return res
        })
    },
    login ({ commit }, data) {
      return this.$axios.post('auth/login', data)
        .then(async (res) => {
          if (res.data?.data?.status === 'ACTIVE') {
            this.$auth.options.redirect.home = this.localePath('/')
            this.$auth.token = `Bearer ${res.data?.accessToken}`
            this.$auth.setUser(res.data.data)
            this._vm.ExpiredAuthSessionError = false
            await this.$auth.setUserToken(res.data?.accessToken)
          }
          return res
        })
    },
    async verifyEmail ({ commit, state }, data) {
      return await this.$axios.post('auth/forgot-password', data)
        .then((res) => {
          return res.data
        })
    },
    async forgot ({ commit, state }, data) {
      return await this.$axios.post('auth/forgot-password-verification', data)
        .then((res) => {
          if (res.data.success) {
            this._vm.$bvToast.toast(res.data?.message, {
              title: 'Success',
              variant: 'success'
            })
            this.$router.push('/')
          }
          return res.data
        })
    },
    async logout () {
      try {
        await this.$auth.logout()
        await this.$router.push('/')
      } catch (err) {
        this._vm.$bvToast.toast(err, {
          title: 'Error',
          variant: 'danger'
        })
      }
    }
  },
  getters: {}
}
