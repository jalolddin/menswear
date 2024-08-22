<template>
  <div class="carousel">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <section
            ref="section"
            :style="{
              backgroundImage: `url(${require('@/static/img/banner_image-1.jpg')})`,
            }"
            class="banner"
          >
            <div class="banner__text">
              <h1>Experience Premium Menswear with ELBE</h1>
              <p>
                Indulge in the epitome of luxury with ELBEMENSWEAR. Crafted with
                meticulous attention to detail, our premium garments offer unparalleled
                comfort and style. Elevate your everyday look and make a statement with
                every outfit.
              </p>
              <button class="dark-button">
                SHOP NOW
              </button>
            </div>
          </section>
        </div>
        <div class="swiper-slide">
          <section
            ref="section"
            :style="{
              backgroundImage: `url(${require('@/static/img/banner_image-2.jpg')})`,
            }"
            class="banner"
          >
            <div class="banner__text">
              <h1>Define Your Masculine Style WITH ELBEMENSWEAR</h1>
              <p>
                Unleash your inner gentleman with ELBEMENSWEAR. Our curated collection
                empowers you to express your unique personality through impeccable style.
                Find the perfect pieces to craft a wardrobe that reflects your confidence
                and sophistication.
              </p>
              <button class="dark-button">
                SHOP NOW
              </button>
            </div>
          </section>
        </div>
        <div class="swiper-slide">
          <section
            ref="section"
            :style="{
              backgroundImage: `url(${require('@/static/img/banner_image-3.jpg')})`,
            }"
            class="banner"
          >
            <div class="banner__text">
              <h1>Discover Your Perfect Fit with ELBEMENSWEAR</h1>
              <p>
                Finding the ideal fit shouldn't be a challenge. ELBEMENSWEAR offers a
                diverse range of sizes and styles to ensure you look and feel your best.
                Our commitment to quality and comfort guarantees a perfect match for every
                man.
              </p>
              <button class="dark-button">
                SHOP NOW
              </button>
            </div>
          </section>
        </div>
      </div>
      <div class="swiper-pagination" />
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

export default {
  name: 'CarouselSection',
  data () {
    return {
      swiper: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.swiper = new Swiper('.swiper-container', {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    })
  }
}
</script>

<style>
.carousel {
  max-width: 100%;
  overflow: hidden;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
}
</style>
