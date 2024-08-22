<template>
  <div v-if="$fetchState.pending">
    <product-slug-skeleton />
  </div>
  <p v-else-if="$fetchState.error">
    An error occurred :(
  </p>
  <div v-else class="product-slug">
    <div class="row">
      <div class="col-md-6 p-0">
        <div class="product-slug__image">
          <img :src="product.image?.url" alt="">
        </div>
      </div>
      <div class="col-md-6 p-0">
        <div class="product-slug__item">
          <h2>
            {{ product?.name }}
          </h2>
          <p>
            {{ product?.description }}
          </p>
          <h4>{{ activePrice ? product.price + activePrice : product.price }}</h4>
          <span>SIZE</span>
          <div class="btn-group">
            <button
              v-for="(item,index) in currentSize"
              :key="index"
              :class="{ active : activeSize === item.size}"
              @click="setSize(item.size)"
            >
              {{ item.size }}
            </button>
          </div>
          <span>choose color</span>
          <div class="btn-color-group">
            <button
              v-for="(item,index) in currentColor"
              :key="index"
              :class="{ active : activeColor === item.color}"
              :style="{ backgroundColor: item.color }"
              @click="setColor(item)"
            >
              <i>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.67062 10.4153L12.9881 2.99458C13.2768 2.70184 13.7448 2.70184 14.0335 2.99458C14.3222 3.28732 14.3222 3.76194 14.0335 4.05468L6.1933 12.0055C5.90463 12.2982 5.43661 12.2982 5.14794 12.0055L0.966501 7.76505C0.677833 7.47231 0.677833 6.99769 0.966501 6.70495C1.25517 6.41221 1.72319 6.41221 2.01186 6.70495L5.67062 10.4153Z" fill="#BCBFC2" />
                </svg>
              </i>
            </button>
          </div>
          <button class="btn btn-get d-none">
            GET MEASURED
          </button>
          <button class="btn btn-add" :disabled="loading" @click="setCart">
            <b-spinner v-if="loading" class="text-light" small />
            <span v-else class="text-light">ADD TO BAG</span>
          </button>

          <div class="accordion" role="tablist">
            <b-card-header v-b-toggle.accordion-1 header-tag="header" role="tab" @click="toggleIcon(1)">
              <p>
                Accordion 2
              </p>
              <i :class="{ rotate: activeCollapse === 1 }">
                <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5856 5.46849C11.3269 5.79194 10.8549 5.84438 10.5315 5.58562L5.99997 1.96044L1.46849 5.58562C1.14505 5.84438 0.673077 5.79194 0.41432 5.46849C0.155562 5.14505 0.208004 4.67308 0.53145 4.41432L5.53145 0.414321C5.80536 0.195189 6.19458 0.195189 6.46849 0.414321L11.4685 4.41432C11.7919 4.67308 11.8444 5.14505 11.5856 5.46849Z" fill="#333333" />
                </svg>
              </i>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>

            <b-card-header v-b-toggle.accordion-2 header-tag="header" role="tab" @click="toggleIcon(2)">
              <p>
                Accordion 2
              </p>
              <i :class="{ rotate: activeCollapse === 2 }">
                <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5856 5.46849C11.3269 5.79194 10.8549 5.84438 10.5315 5.58562L5.99997 1.96044L1.46849 5.58562C1.14505 5.84438 0.673077 5.79194 0.41432 5.46849C0.155562 5.14505 0.208004 4.67308 0.53145 4.41432L5.53145 0.414321C5.80536 0.195189 6.19458 0.195189 6.46849 0.414321L11.4685 4.41432C11.7919 4.67308 11.8444 5.14505 11.5856 5.46849Z" fill="#333333" />
                </svg>
              </i>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>

            <b-card-header v-b-toggle.accordion-3 header-tag="header" role="tab" @click="toggleIcon(3)">
              <p>
                Accordion 2
              </p>
              <i :class="{ rotate: activeCollapse === 3 }">
                <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5856 5.46849C11.3269 5.79194 10.8549 5.84438 10.5315 5.58562L5.99997 1.96044L1.46849 5.58562C1.14505 5.84438 0.673077 5.79194 0.41432 5.46849C0.155562 5.14505 0.208004 4.67308 0.53145 4.41432L5.53145 0.414321C5.80536 0.195189 6.19458 0.195189 6.46849 0.414321L11.4685 4.41432C11.7919 4.67308 11.8444 5.14505 11.5856 5.46849Z" fill="#333333" />
                </svg>
              </i>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </div>

          <div class="klarna" role="tablist">
            <b-card-header header-tag="header" role="tab">
              <img src="@/static/img/klarna.svg" alt="">
              <p>
                Buy now, pay in 3 installments .No fees.
              </p>
              <u v-b-toggle.klarna>
                Read more
              </u>
            </b-card-header>
            <b-collapse id="klarna">
              <b-card-body>
                <b-card-text>
                  Klarna Pay in 3 allows you to spread the cost of your purchase over 3 equal payments.
                  Your first installment will be collected when you place your order and installments 2 and 3
                  are then scheduled to be taken 30 and 60 days later. Don't worry about keeping track of
                  time - each installment is automatically collected from the debit or credit card you used at checkout.
                  And the best bit - you don't pay any interest or additional fees.<br> <br>

                  <b>How to pay with Klarna:</b> <br> <br>
                  Shop as normal and select Checkout with Klarna from the bag page. You can choose to
                  Pay in 3 or try before you buy and pay the whole amount 30 days later. <br> <br>

                  Klarna's Pay in 3/ Pay in 30 days are unregulated credit agreements.
                  Borrowing more than you can afford or paying late may negatively impact your financial status and ability to obtain credit.
                  18+, UK residents only. Subject to status. Late fees may apply. Ts&Cs apply.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
    <div v-if="recomendations?.length" class="product-slug__recommended">
      <h3>
        RECOMMENDED STYLE
      </h3>
      <div class="row">
        <div v-for="recommendation in recomendations" :key="recommendation.id" class="col-sm-12 col-md-6 col-lg-6 col-xl-3 ">
          <nuxt-link :to="`/product/${recommendation._id}`" class="product-slug__recommended__items">
            <div class="product__items__image">
              <img :src="recommendation.image?.url" alt="">
            </div>
            <div class="product__items__title">
              <p>{{ recommendation.name }}</p>
              <span>${{ recommendation.price }}</span>
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
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import ProductSlugSkeleton from '~/components/skeletons/productSlugSkeleton.vue'
export default {
  name: 'SingleProduct',
  components: { ProductSlugSkeleton },
  data () {
    return {
      activeSize: null,
      activeColor: null,
      activePrice: null,
      activeCollapse: 1,
      variantId: 0,
      loading: false,
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
    }
  },
  async fetch () {
    await this.$store.dispatch('products/productDetailId', this.$route.params.id)
    this.activeColor = this.product?.variants[0]?.color
    this.activeSize = this.product?.variants[0]?.size
    this.variantId = this.product?.variants[0]?._id
    this.activePrice = this.product?.variants[0]?.price
  },

  computed: {
    ...mapState({
      product: state => state.products.productDetail,
      recomendations: state => state.products.recomendations
    }),
    currentSize () {
      return this.product?.variants.filter(e => e.color === this.activeColor)
    },
    currentColor () {
      const uniqueVariants = []

      this.product?.variants.forEach((variant) => {
        const isDuplicate = uniqueVariants.some(uniqueVariant => uniqueVariant.color === variant.color)

        if (!isDuplicate) {
          uniqueVariants.push(variant)
        }
      })

      return uniqueVariants
    }
  },
  methods: {
    setSize (size) {
      this.activeSize = size
    },
    setColor (item) {
      this.activeColor = item.color
      this.activeSize = null
      this.variantId = item._id
      this.activePrice = item.price
    },
    toggleIcon (id) {
      this.activeCollapse = this.activeCollapse === id ? null : id
    },
    async setCart () {
      this.loading = true
      if (this.$auth.user) {
        await this.$store.dispatch('cart/fetchCart', {
          variantId: this.variantId,
          quantity: 1
        })
        await this.$store.dispatch('cart/getCart')
        await this.$store.dispatch('cart/getCartRecomended')
      }
      this.loading = false
    }
  }
}
</script>
