<template>
  <div class="product">
    <div class="main-container">
      <div class="product__select">
        <h1>BESTSELLER</h1>
      </div>
      <div v-if="productBestSellers?.length" class="product__container">
        <div v-for="item in productBestSellers" :key="item._id" :style="{ backgroundImage: `url(${item.image?.url})` }" class="product__card">
          <div class="product__items">
            <!-- <div class="product__items__image">
              <img :src="item.image?.url" alt="productBestSellers">
            </div> -->
            <div class="product__items__title">
              <p>{{ item.name }}</p>
              <span>{{ item.price }} £</span>
            </div>
            <div class="product__items__btn">
              <i @click.prevent="isLike = !isLike">
                <svg
                  class="d-none"
                  :class="{'d-block' : !isLike}"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.0048 15L2.791 8.55129C-1.12955 4.68258 4.63333 -2.74663 10.0048 3.26384C15.3763 -2.74663 21.1141 4.70729 17.22 8.55129L10.0048 15Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg
                  class="d-none"
                  :class="{'d-block' : isLike}"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.0048 15L2.791 8.55129C-1.12955 4.68258 4.63333 -2.74663 10.0048 3.26384C15.3763 -2.74663 21.1141 4.70729 17.22 8.55129L10.0048 15Z" stroke="red" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </i>
            </div>
          </div>
        </div>
        <!-- <div v-for="(_, index) in 4 - productBestSellers?.length" :key="index">
          <b-skeleton-img class="product__items" />
        </div> -->
      </div>
      <!-- <product-skeleton v-else /> -->
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
// import ProductSkeleton from '~/components/skeletons/productSkeleton.vue'

export default {
  name: 'ProductBestsellerSection',
  // components: { ProductSkeleton },
  data () {
    return {
      isLike: false
    }
  },
  computed: {
    ...mapState({
      productBestSellers: state => state.products.bestSellers
    })
  },
  async mounted () {
    await this.$store.dispatch('products/productBestSeller')
  }
}
</script>
<style scoped>
.b-aspect {
  height: 100%;
}
</style>
