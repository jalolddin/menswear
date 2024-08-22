<template>
  <div class="about">
    <h1>ABOUT US</h1>
    <div class="about__container">
      <div class="about__container-left">
        <img src="@/static/img/about-us-left.png" alt="">
        <p>At ELBE, each collection is thoughtfully curated to offer an exceptional selection of men’s wear, from tailor-made suits to premium dress shoes. We source the finest fabrics and materials from around the world, ensuring that our partners adhere to ethical practices. Every piece we offer is crafted with attention to detail, combining traditional techniques with modern innovation to achieve a unique finish.</p>
      </div>
      <div class="about__container-right">
        <p>Every piece we offer is crafted with attention to detail, combining traditional techniques with modern innovation to achieve a unique and unparalleled finish. Discover the ELBE difference – where classic elegance meets responsible craftsmanship.</p>
        <img src="@/static/img/about-us-right.png" alt="">
      </div>
      <button class="detail-button" @click="handleRoute('about')">
        Learn more
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleRoute (route) {
      this.$router.push('/' + route)
    }
  }
}
</script>

<style>

</style>
