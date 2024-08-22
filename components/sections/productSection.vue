<template>
  <div class="product">
    <div class="main-container">
      <div class="product__select">
        <b-form-group>
          <label>STYLE</label>
          <b-form-select v-model="category">
            <b-form-select-option v-for="item in categories" :key="item.id" :value="item">
              {{ item.name }}
            </b-form-select-option>
          </b-form-select>
        </b-form-group>
        <nuxt-link :to="`/product?id=${category?._id}`">
          VIEW ALL
        </nuxt-link>
      </div>
      <div v-if="category?.childs?.length" class="row">
        <div v-for="child in category?.childs" :key="child._id" class="col-3">
          <nuxt-link :to="`/product?id=${category._id}`" class="product__items">
            <div class="product__items__image">
              <img :src="child.image?.url" alt="product image">
            </div>
            <div class="product__items__title">
              <p>{{ child.name }}</p>
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
          </nuxt-link>
        </div>
        <div v-for="(_, index) in 4 - category?.childs?.length" :key="index" class="col-3">
          <b-skeleton-img class="product__items" />
        </div>
      </div>
      <product-skeleton v-else />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import ProductSkeleton from '~/components/skeletons/productSkeleton.vue'

export default {
  name: 'ProductSection',
  components: { ProductSkeleton },
  data () {
    return {
      isLike: false,
      category: null
    }
  },
  computed: {
    ...mapState({
      categories: state => state.products.categories
    })
  },
  async mounted () {
    await this.$store.dispatch('products/categories')
    this.categories?.length ? this.category = this.categories[0] : this.category = []
  }
}
</script>
<style scoped>
.b-aspect {
  height: 100%;
}
</style>
