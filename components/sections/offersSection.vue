<template>
  <div class="offers">
    <div class="main-container">
      <div class="offers__select">
        <h1>SPECIAL OFFERS</h1>
      </div>
      <div v-if="productOffers?.length" class="offers__container">
        <div v-for="item in productOffers" :key="item._id" class="offers__card">
          <div class="offers__items">
            <div class="offers__items__image">
              <img :src="item.image?.url" alt="productOffers">
            </div>
            <div class="offers__items__title">
              <p>{{ item.name }}</p>
              <span>{{ item.price }} £</span>
            </div>
            <div class="offers__items__btn">
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
        <!-- <div v-for="(_, index) in 4 - productOffers?.length" :key="index">
          <b-skeleton-img class="offers__items" />
        </div> -->
      </div>
      <!-- <offers-skeleton v-else /> -->
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
// import offersSkeleton from '~/components/skeletons/offersSkeleton.vue'

export default {
  name: 'ProductOffersSection',
  // components: { offersSkeleton },
  data () {
    return {
      isLike: false
    }
  },
  computed: {
    ...mapState({
      productOffers: state => state.products.offers
    })
  },
  async mounted () {
    await this.$store.dispatch('products/productOffers')
  }
}
</script>
<style scoped>
.b-aspect {
  height: 100%;
}
</style>
