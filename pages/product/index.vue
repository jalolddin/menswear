<template>
  <div v-if="$fetchState.pending">
    <product-slug-skeleton />
  </div>
  <p v-else-if="$fetchState.error">
    An error occurred :(
  </p>
  <div v-else class="page product-page">
    <b-tabs v-if="allParents?.length" v-model="activeName" no-fade lazy>
      <b-tab
        v-for="item in allParents"
        :key="item._id"
        :title="item.name"
        @click="tabsHandle(item)"
      >
        <div class="products">
          <div v-if="products?.length" class="row">
            <div v-for="product in products" :key="product._id" class="col-3">
              <nuxt-link :to="`/product/${product._id}`" class="product__items">
                <div class="product__items__image">
                  <img :src="product.image?.url" alt="">
                </div>
                <div class="product__items__title">
                  <p>{{ product.name }}</p>
                  <span>${{ product.price }}</span>
                </div>
                <div class="product__items__btn">
                  <i>
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.0048 15L2.791 8.55129C-1.12955 4.68258 4.63333 -2.74663 10.0048 3.26384C15.3763 -2.74663 21.1141 4.70729 17.22 8.55129L10.0048 15Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </i>
                </div>
              </nuxt-link>
            </div>
          </div>
          <product-skeleton v-else />

          <b-pagination
            v-if="total > limit"
            v-model="page"
            class="d-flex justify-content-center"
            :total-rows="total"
            :per-page="limit"
            pills
            first-number
            last-number
          />
        </div>
      </b-tab>
      <div class="tabs-btn">
        <button @click="scroll_left">
          <svg fill="none" height="28" viewBox="0 0 28 28" width="28">
            <path
              d="M14.5016 21.0819L21.5833 14.0002L14.5016 6.91854"
              stroke="#333333"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.00006 14.0002L21.385 14.0002"
              stroke="#333333"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button @click="scroll_right">
          <svg fill="none" height="28" viewBox="0 0 28 28" width="28">
            <path
              d="M14.5016 21.0819L21.5833 14.0002L14.5016 6.91854"
              stroke="#333333"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.00006 14.0002L21.385 14.0002"
              stroke="#333333"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </b-tabs>
    <product-slug-skeleton v-else />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import ProductSkeleton from '~/components/skeletons/productSkeleton.vue'
import ProductSlugSkeleton from '~/components/skeletons/productSlugSkeleton.vue'
export default {
  name: 'ProductPage',
  components: { ProductSlugSkeleton, ProductSkeleton },
  data () {
    return {
      activeName: null,
      page: 1,
      limit: 10
    }
  },
  async fetch () {
    await this.getAllCategories(this.$route.query.id)
  },
  computed: {
    ...mapState({
      categories: state => state.products.categories,
      allParents: state => state.products.getAllParents,
      products: state => state.products.childCategoryProduct,
      total: state => state.products.total
    })
  },
  watch: {
    $route (newValue) {
      this.getAllCategories(newValue.query.id)
    }
  },
  methods: {
    async getAllCategories (id) {
      await this.$store.dispatch('products/allCategories', id)
      await this.tabsHandle(this.allParents[0])
    },
    scroll_left () {
      if (this.activeName > 0) {
        this.activeName--
        const content = document.querySelector('.nav-tabs')
        content.scrollLeft -= 200
      }
    },
    scroll_right () {
      if (this.activeName < this.categories?.length - 1) {
        this.activeName++
        const content = document.querySelector('.nav-tabs')
        content.scrollLeft += 200
      }
    },
    slug (slug) {
      return slug.toLowerCase().replace(/ /g, '-')
    },
    async tabsHandle (item) {
      await this.$store.dispatch('products/childCategoryProduct', {
        id: item._id,
        total: this.total,
        page: this.page,
        limit: this.limit
      })
    }
  }
}
</script>
