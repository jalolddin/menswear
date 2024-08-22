<template>
  <div v-if="$fetchState.pending">
    <product-slug-skeleton />
  </div>
  <p v-else-if="$fetchState.error">
    An error occurred :(
  </p>
  <div v-else class="page product-page">
    <b-tabs v-model="activeName" no-fade lazy>
      <b-tab
        v-for="item in collections"
        :key="item._id"
        :title="item.name"
        @click="navigateToProduct(item)"
      >
        <div class="products">
          <div v-if="collection?.length" class="row">
            <div v-for="i in collection" :key="i._id" class="col-3">
              <nuxt-link :to="`/product/${i._id}`" class="product__items">
                <div class="product__items__image">
                  <img :src="item.image?.url" alt="">
                </div>
                <div class="product__items__title">
                  <p>{{ i.name }}</p>
                  <span>${{ i.price }}</span>
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
  </div>
</template>
<script>
import { mapState } from 'vuex'
import ProductSkeleton from '~/components/skeletons/productSkeleton.vue'
import ProductSlugSkeleton from '~/components/skeletons/productSlugSkeleton.vue'
export default {
  name: 'CollectionsPage',
  components: { ProductSlugSkeleton, ProductSkeleton },
  data () {
    return {
      activeName: null
    }
  },
  async fetch () {
    await this.$store.dispatch('products/getCollections')
  },
  computed: {
    ...mapState({
      collections: state => state.products.collections,
      collection: state => state.products.collection
    })
  },
  async mounted () {
    if (this.$route.query?.id) {
      this.activeName = this.collections?.findIndex(e => e._id === this.$route.query.id)
      await this.$store.dispatch('products/getCollectionById', this.$route.query?.id)
    } else {
      await this.$router.push({ path: '/collections', query: { id: this.collections[0]._id } })
      await this.$store.dispatch('products/getCollectionById', this.collections[0]._id)
    }
  },
  methods: {
    async navigateToProduct (item) {
      await this.$router.push({ path: '/collections', query: { id: item._id } })
      await this.$store.dispatch('products/getCollectionById', item._id)
    },
    scroll_left () {
      if (this.activeName > 0) {
        this.activeName--
        const content = document.querySelector('.nav-tabs')
        content.scrollLeft -= 200
        this.navigateToProduct()
      }
    },
    scroll_right () {
      if (this.activeName < this.categories?.length - 1) {
        this.activeName++
        const content = document.querySelector('.nav-tabs')
        content.scrollLeft += 200
        this.navigateToProduct()
      }
    }
  }
}
</script>
