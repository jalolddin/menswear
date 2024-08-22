<template>
  <div class="default-layout">
    <HeaderSide />
    <Nuxt />
    <FooterSide />
  </div>
</template>

<script>
import HeaderSide from '~/components/HeaderSide.vue'
import FooterSide from '~/components/FooterSide.vue'
export default {
  name: 'DefaultLayout',
  components: {
    HeaderSide,
    FooterSide
  },
  mounted () {
    // window.addEventListener('wheel', this.handleScroll, { passive: false })
  },
  methods: {
    handleScroll (event) {
      const isTouchPad = Math.abs(event.deltaY) < 100
      const scrollSpeed = isTouchPad ? 4 : 1.5
      const showMenu = document.querySelector('.header .active')
      if (!showMenu) {
        event.preventDefault()
        window.scrollBy({
          top: event.deltaY * scrollSpeed,
          left: 0,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>
