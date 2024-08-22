<template>
  <div class="banner">
    <!-- <section class="banner__anim__first"> -->
    <CatalogSection :offset-top="catalogOffsetTop" />
    <!-- </section> -->
    <!-- <section class="banner__anim__second"> -->
    <!-- <ProductSection /> -->
    <!-- </section> -->
    <!-- <section v-for="item in collections" :key="item._id" class="banner__section">
      <div ref="revers" class="row">
        <div class="col-md-6 p-0">
          <div class="banner__desc">
            <p>
              {{ item.description }}
            </p>
            <h2>{{ item.name }}</h2>
            <div class="banner__desc__info">
              <img :src="item.image?.url" alt="banner_image">
              <nuxt-link :to="`/collections?id=${item._id}`">
                OPEN CARD
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 p-0">
          <div class="banner__image">
            <img :src="item.image?.url" alt="banner_image">
          </div>
        </div>
      </div>
    </section> -->
    <ProductBestsellerSection />
    <AboutSection />
    <GiftSection />
    <OffersSection />
    <UpdatesSection />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import ProductBestsellerSection from '~/components/sections/productBestsellerSection.vue'
import CatalogSection from '~/components/sections/catalogSection.vue'
import AboutSection from '~/components/sections/aboutSection.vue'
import GiftSection from '~/components/sections/giftSection.vue'
import OffersSection from '~/components/sections/offersSection.vue'
import UpdatesSection from '~/components/sections/updatesSection.vue'

export default {
  name: 'BannerSection',
  components: { CatalogSection, ProductBestsellerSection, AboutSection, GiftSection, OffersSection, UpdatesSection },
  data () {
    return {
      catalogOffsetTop: 990,
      animBanner: null
    }
  },
  computed: {
    ...mapState({
      collections: state => state.products.collections
    })
  },
  async mounted () {
    await this.$store.dispatch('products/getCollections')
    // this.initScrollTrigger()
    this.addEvenRowClass()
  },
  beforeDestroy () {
    this.animBanner?.kill()
  },
  methods: {
    initScrollTrigger () {
      const panels = this.$gsap.utils.toArray('.banner__section')
      const tops = panels.map(panel => this.$ScrollTrigger.create({ trigger: panel, start: 'top top' }))

      // first animation
      const animTops = this.$ScrollTrigger.create({ trigger: '.banner__anim', start: 'top top' })
      const tl = this.$gsap.timeline({ defaults: { ease: 'none' } })
      tl.to('.banner__anim__first', { y: (i, t) => -t.scrollHeight })

      this.$ScrollTrigger.create({
        trigger: '.banner__anim',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: 1,
        animation: tl
      })
      this.catalogOffsetTop = animTops.start

      this.animBanner = this.$ScrollTrigger.create({
        snap: {
          snapTo: (progress, self) => {
            const panelStarts = animTops.start
            const snapScroll = this.$gsap.utils.snap(panelStarts, self.scroll())
            if (progress > 0.37 && progress < 0.47) {
              return this.$gsap.utils.normalize(0, this.$ScrollTrigger.maxScroll(window), snapScroll)
            } else {
              return this.$gsap.utils.normalize(0, snapScroll)
            }
          },
          ease: 'power1.inOut',
          duration: 1.3
        }
      })

      // second animation
      panels.forEach((panel, i) => {
        this.$ScrollTrigger.create({
          trigger: panel,
          start: panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom',
          end: () => i === this.collections?.length ?? 'bottom bottom',
          pin: true,
          pinSpacing: false,
          scrub: 1
        })
      })

      this.$ScrollTrigger.create({
        snap: {
          snapTo: (progress, self) => {
            const panelStarts = tops.map(st => st.start)
            const snapScroll = this.$gsap.utils.snap(panelStarts, self.scroll())
            if (self.scroll() > panelStarts[panels.length - 1]) {
              return false
            }
            if (progress >= 0.53) {
              return this.$gsap.utils.normalize(0, this.$ScrollTrigger.maxScroll(window), snapScroll)
            } else {
              return this.$gsap.utils.normalize(0, snapScroll)
            }
          },
          ease: 'power1.inOut',
          duration: 1.3
        }
      })
    },
    addEvenRowClass () {
      const rows = this.$refs.revers
      rows?.forEach((row, index) => {
        if ((index + 1) % 2 === 0) {
          row.classList.add('even-row')
        }
      })
    }
  }
}
</script>
<style>
.revers:nth-child(even) {
  flex-direction: row-reverse;
}
</style>
