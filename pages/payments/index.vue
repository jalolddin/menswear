<template>
  <div class="page payment-page">
    <div class="row">
      <div class="col-md-6 custom-border">
        <div class="consumer-info">
          <h4>
            EXPRESS CHECKOUT
          </h4>

          <div class="delivery">
            <h5>DELIVERY</h5>

            <b-form-group>
              <b-form-select
                v-model="delivery.country"
                :options="options"
                value-field="text"
                @change="checkDelivery"
              />
            </b-form-group>
            <div class="input-flex">
              <input v-model="delivery.first_name" type="text" placeholder="FIRST NAME" @change="checkDelivery">
              <input v-model="delivery.last_name" type="text" placeholder="LAST NAME" @change="checkDelivery">
            </div>
            <input v-model="delivery.address" type="text" placeholder="ADDRESS" @change="checkDelivery">
            <input v-model="delivery.name" type="text" placeholder="APARTMENT, SUITE, ETC. (OPTIONAL)" @change="checkDelivery">
            <div class="input-flex">
              <input v-model="delivery.city" type="text" placeholder="CITY" @change="checkDelivery">
              <input v-model="delivery.zip_code" type="text" placeholder="ZIP CODE" @change="checkDelivery">
            </div>
            <input v-model="delivery.state" type="text" placeholder="STATE" @change="checkDelivery">

            <h5>DELIVERY METHOD</h5>
            <b-form-group>
              <b-form-select
                v-model="selected"
                :options="deliveryMethod"
                value-field="text"
              />
            </b-form-group>

            <h5>PAYMENT</h5>
            <p>All transactions are secure and encrypted.</p>
            <div class="payment-card">
              <div class="payment-card-header">
                <div class="payment-card-header__title">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="7" stroke="#333333" stroke-width="6" />
                  </svg>
                  <h5>CREDIT CARD</h5>
                </div>
                <div class="payment-card-header__icons">
                  <svg
                    width="213"
                    height="29"
                    viewBox="0 0 213 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <rect width="213" height="29" fill="url(#pattern0_126_1243)" />
                    <defs>
                      <pattern id="pattern0_126_1243" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_126_1243" transform="matrix(0.00234742 0 0 0.0172414 -0.0187793 0)" />
                      </pattern>
                      <image id="image0_126_1243" width="434" height="58" xlink:href="data:image/png;base64,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" />
                    </defs>
                  </svg>
                </div>
              </div>
              <div class="payment-card-body">
                <div id="payment-element" />
                <payment-inputs-skeleton :load="loadingPayment" />
              </div>
            </div>
            <div class="separator">
              <span class="separator-text">OR</span>
            </div>

            <div ref="paymentRequestButton" />
          </div>
          <div class="btn-payments">
            <nuxt-link to="/product">
              return to bag
            </nuxt-link>
            <button
              class="btn btn-pay"
              :disabled="isLoading"
              @click.prevent="handleSubmit"
            >
              <b-spinner v-if="isLoading" small />
              <span v-else>pay now</span>
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-6 custom-border p-0">
        <div class="discount">
          <div
            v-for="item in carts"
            :key="item._id"
            class="cart-info"
          >
            <img :src="item?.variant_id?.images[0]?.url" alt="">

            <div class="cart-info__title">
              <p>{{ item?.variant_id?.productId?.name }}</p>
              <span>{{ item?.variant_id?.size }}/{{ item?.variant_id?.color }}</span>
            </div>
          </div>
          <div class="discount-input">
            <input type="text" placeholder="Discount">
            <button>
              apply
            </button>
          </div>
          <div class="discount-percent">
            <span :class="{'active': percent}">-10% discount</span>
            <input disabled type="text" placeholder="Note: Only one discount code may be applied per order.">
          </div>
          <div class="discount-subPrice">
            <p>Subtotal</p>
            <b>${{ allPrice }}</b>
          </div>
          <div class="discount-address">
            <p>Shipping</p>
            <p>{{ selected }}</p>
          </div>
          <div class="discount-total">
            <h5>TOTAL:</h5>
            <h5>${{ allPrice }}</h5>
          </div>
        </div>
      </div>
    </div>
    <b-modal v-model="success" centered hide-footer title="Successfully paid">
      <div class="d-flex align-items-center justify-content-center mb-4">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M75 12.5C40.5625 12.5 12.5 40.5625 12.5 75C12.5 109.438 40.5625 137.5 75 137.5C109.438 137.5 137.5 109.438 137.5 75C137.5 40.5625 109.438 12.5 75 12.5ZM104.875 60.625L69.4375 96.0625C68.5625 96.9375 67.375 97.4375 66.125 97.4375C64.875 97.4375 63.6875 96.9375 62.8125 96.0625L45.125 78.375C43.3125 76.5625 43.3125 73.5625 45.125 71.75C46.9375 69.9375 49.9375 69.9375 51.75 71.75L66.125 86.125L98.25 54C100.062 52.1875 103.063 52.1875 104.875 54C106.688 55.8125 106.688 58.75 104.875 60.625Z"
            fill="#16C098"
          />
        </svg>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { loadStripe } from '@stripe/stripe-js'
import PaymentInputsSkeleton from '~/components/skeletons/paymentInputsSkeleton.vue'

export default {
  name: 'PaymentPage',
  components: { PaymentInputsSkeleton },
  middleware: 'auth',
  data () {
    return {
      isLoading: false,
      loadingPayment: true,
      stripe: null,
      elements: null,
      success: false,
      response: {},
      delivery: {
        country: null,
        first_name: null,
        last_name: null,
        address: null,
        name: null,
        city: null,
        zip_code: null,
        state: null
      },

      selected: null,
      options: [
        { value: 1, text: 'India' },
        { value: 2, text: 'This is First option' },
        { value: 3, text: 'Selected Option' }
      ],
      deliveryMethod: [
        { value: 1, text: 'From store to house' },
        { value: 2, text: 'From store to destination' }
      ],
      percent: null,
      allPrice: 0,
      paymentRequest: null
    }
  },
  computed: {
    ...mapState({
      carts: state => state.cart.carts
    })
  },
  watch: {
    async success () {
      if (this.response?.paymentIntent?.status === 'succeeded' && !this.success) {
        await this.$router.push('/')
        await this.$store.dispatch('cart/getCart')
        await this.$store.dispatch('cart/getCartRecomended')
      }
    }
  },
  async created () {
    try {
      const { publishableKey } = await this.$store.dispatch('payment/getStripeKey')
      this.stripe = await loadStripe(publishableKey)
    } catch (error) {
      this.$bvToast.toast('An error occurred while fetching data.', {
        title: 'Error',
        variant: 'danger'
      })
    }
  },
  mounted () {
    this.delivery.country = this.options[0].text
    this.selected = this.deliveryMethod[0].text
    this.calculateAllPrice()
  },
  methods: {
    async checkDelivery () {
      const isComplete = Object.values(this.delivery).every(field => field !== null && field !== '')
      if (isComplete) {
        const { _id } = await this.$store.dispatch('payment/fetchAddress', {
          ...this.delivery,
          customerId: this.$auth.user._id
        })

        await this.stripePayment(_id)

        if (this.$isSafariOnMacOrIOS()) {
          await this.applePayPayment(_id)
        }
      }
    },

    parsePrice (price) {
      const priceStr = typeof price === 'string' ? price : price?.toString()
      return parseFloat(priceStr?.replace(/^\$/, '').replace(/,/g, ''))
    },
    calculateAllPrice () {
      this.allPrice = this.carts?.reduce((total, item) => {
        const variantPrice = this.parsePrice(item.variant_id.price)
        const productPrice = this.parsePrice(item.variant_id?.productId?.price)
        const quantity = item.quantity
        const itemTotalPrice = (variantPrice + productPrice) * quantity
        return total + itemTotalPrice
      }, 0)
    },
    async handleSubmit () {
      if (this.isLoading) {
        return
      }

      this.isLoading = true

      try {
        this.response = await this.stripe.confirmPayment({
          elements: this.elements,
          redirect: 'if_required',
          confirmParams: {
            return_url: `${window.location.origin}/`,
            payment_method_data: {
              billing_details: {
                name: this.$auth.user.firstname,
                email: this.$auth.user.email
              }
            }
          }
        })
        if (this.response?.paymentIntent?.status === 'succeeded') {
          this.success = true
        } else {
          this.success = false
          this.$bvToast.toast(this.response.error.message, {
            title: 'Error',
            variant: 'danger'
          })
        }
      } catch (error) {
        this.$bvToast.toast('An error occurred during payment confirmation.', {
          title: 'Error',
          variant: 'danger'
        })
      } finally {
        this.isLoading = false
      }
    },
    applePayPayment (id) {
      this.paymentRequest = this.stripe.paymentRequest({
        country: 'GB',
        currency: 'gbp',
        total: {
          label: 'Demo Total',
          amount: 20000 // this.allPrice
        },
        requestPayerName: true,
        requestPayerEmail: true
      })

      this.elements = this.stripe.elements()
      const prButton = this.elements.create('paymentRequestButton', {
        paymentRequest: this.paymentRequest
      })

      this.paymentRequest.canMakePayment().then((result) => {
        if (result) {
          prButton.mount(this.$refs.paymentRequestButton)
        } else {
          this.$bvToast.toast('Apple Pay is not available', {
            title: 'Error',
            variant: 'danger'
          })
        }
      })

      this.paymentRequest.on('paymentmethod', async () => {
        const { clientSecret } = await this.$store.dispatch('payment/payments', {
          address_id: id,
          payment_gateway: 'APPLE_PAY',
          payment_method: 'card'
        })

        const { error } = await this.stripe.confirmCardPayment(clientSecret)

        if (error) {
          this.$bvToast.toast(`${error}`, {
            title: 'Error',
            variant: 'danger'
          })
        } else {
          this.$bvToast.toast('Payment successful', {
            title: 'Success',
            variant: 'success'
          })
        }
      })
    },
    async stripePayment (id) {
      const { clientSecret, error: backendError } = await this.$store.dispatch('payment/payments', {
        address_id: id,
        payment_gateway: 'STRIPE',
        payment_method: 'card'
      })

      if (backendError) {
        this.$bvToast.toast(backendError.message, {
          title: 'Error',
          variant: 'danger'
        })
      }

      const appearance = {
        rules: {
          '.Input': {
            color: '#686868',
            fontSize: '16px',
            boxShadow: 'none',
            fontWeight: '400',
            borderRadius: '0px',
            padding: '15px 14px',
            lineHeight: '20px'
          },
          '.Input:focus': {
            boxShadow: 'none',
            borderColor: 'none'
          }
        }
      }

      this.elements = this.stripe.elements({ clientSecret, loader: 'auto', appearance })

      this.elements ? this.loadingPayment = false : this.loadingPayment = true

      const paymentElement = this.elements.create('payment')
      paymentElement.mount('#payment-element')
    }
  }
}
</script>
