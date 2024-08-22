export default {
  state () {
    return {
      categories: null,
      getAllParents: null,
      product: null,
      productAllDetail: null,
      productDetail: null,
      recomendations: null,
      bestSellers: null,
      offers: null,
      childCategoryProduct: null,
      collections: null,
      collection: null,
      total: null
    }
  },
  mutations: {
    GET_CATEGORIES (state, arr) {
      state.categories = arr
    },
    GET_ALL_PARENTS (state, arr) {
      state.getAllParents = arr
    },
    GET_PRODUCT (state, arr) {
      state.product = arr
    },
    GET_BEST_SELLERS (state, arr) {
      state.bestSellers = arr
    },
    GET_OFFERS (state, arr) {
      state.offers = arr
    },
    GET_PRODUCT_DETAIL (state, arr) {
      state.productAllDetail = arr
    },
    PRODUCT_DETAIL (state, arr) {
      state.productDetail = arr
    },
    RECOMENDATIONS (state, arr) {
      state.recomendations = arr
    },
    GET_CHILD_CATEGORY_PRODUCT (state, arr) {
      state.childCategoryProduct = arr
    },
    GET_COLLECTIONS (state, arr) {
      state.collections = arr
    },
    GET_COLLECTION_BY_ID (state, arr) {
      state.collection = arr
    },
    SET_TOTAL (state, number) {
      state.total = number
    }
  },
  actions: {
    async categories ({ commit }) {
      return await this.$axios.get('/categories/get-all-parents')
        .then((res) => {
          if (res.status === 200) {
            commit('GET_CATEGORIES', res.data)
          }
          return res.data
        })
    },
    async allCategories ({ commit, state }, id) {
      return await this.$axios.get(`/categories/children/${id}`)
        .then((res) => {
          if (res.status === 200) {
            commit('GET_ALL_PARENTS', res.data)
          }
          return res.data
        })
    },
    async productId ({ commit, state }, id) {
      return await this.$axios.get(`/products/${id}`)
        .then((res) => {
          if (res.status === 200) {
            commit('GET_PRODUCT', res.data)
          }
          return res.data
        })
    },
    async productDetailId ({ commit, state }, id) {
      return await this.$axios.get(`/products/detail/${id}`)
        .then((res) => {
          if (res.status === 200) {
            commit('GET_PRODUCT_DETAIL', res.data)
            commit('PRODUCT_DETAIL', res.data.product)
            commit('RECOMENDATIONS', res.data.recomendations)
          }
          return res.data
        })
    },
    async productBestSeller ({ commit }) {
      return await this.$axios.get('/products?sortBy=OFFERS&page=1&limit=10')
        .then((res) => {
          if (res.status === 200) {
            commit('GET_BEST_SELLERS', res.data.data)
          }
          return res.data.data
        })
    },
    async productOffers ({ commit }) {
      return await this.$axios.get('/products?sortBy=BESTSELLERS&page=1&limit=10')
        .then((res) => {
          if (res.status === 200) {
            commit('GET_OFFERS', res.data.data)
          }
          return res.data.data
        })
    },
    async childCategoryProduct ({ commit, state }, params) {
      return await this.$axios.get(`/products/child-category/${params.id}?page=${params.page}&limit=${params.limit}`)
        .then((res) => {
          if (res.status === 200) {
            commit('GET_CHILD_CATEGORY_PRODUCT', res.data.data)
            commit('SET_TOTAL', res.data.total)
          }
          return res.data
        })
    },
    async getCollections ({ commit }) {
      return await this.$axios.get('/collections')
        .then((res) => {
          if (res.status === 200) {
            commit('GET_COLLECTIONS', res.data)
          }
          return res.data
        })
    },
    async getCollectionById ({ commit, state }, id) {
      return await this.$axios.get(`/products/get-by-collection/${id}`)
        .then((res) => {
          if (res.status === 200) {
            commit('GET_COLLECTION_BY_ID', res.data.data)
          }
          return res.data
        })
    }
  },
  getters: {}
}
