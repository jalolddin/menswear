<template>
  <div class="catalog">
    <div class="main-container">
      <h1>SHOP BY CATEGORY</h1>
      <CatalogSectionSkeleton v-if="!categories?.length" :col-num="3" />
      <div v-else class="catalog__container">
        <div
          v-for="item in categories"
          :key="item._id"
          class="catalog__card"
          :style="{ backgroundImage: `url(${item.image?.url})` }"
        >
          <div class="catalog__items">
            <div class="catalog__items__title">
              <p>{{ item.name }}</p>
            </div>
            <div class="catalog__items__image">
              <div class="openBtn">
                <nuxt-link :to="`/product?id=${item._id}`">
                  OPEN ALL
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import CatalogSectionSkeleton from '~/components/skeletons/catalogSectionSkeleton.vue'
export default {
  name: 'CatalogSection',
  components: { CatalogSectionSkeleton },
  props: {
    offsetTop: {
      type: Number,
      default: 990
    }
  },
  data () {
    return {
      header: null
    }
  },
  computed: {
    ...mapState({
      categories: state => state.products.categories
    })
  },
  mounted () {
    this.header = document.querySelector('.header')
  },
  methods: {
    // catalogHandleScroll () {
    //   const catalog = document.querySelector('.catalog')

    //   const windowScrollY = window.scrollY
    //   const catalogHeight = catalog?.offsetHeight
    //   const offsetCatalog = this.offsetTop - 70

    //   if (windowScrollY > offsetCatalog) {

    //   } else {
    //     this.header.classList.remove('active-catalog')
    //   }
    //   if (offsetCatalog + catalogHeight < windowScrollY) {
    //     this.header.classList.remove('active-catalog')
    //   }
    // }
  }
}
</script>
