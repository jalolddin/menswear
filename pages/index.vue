<template>
  <div class="index-page">
    <CarouselSection />
    <BannerSection />
  </div>
</template>

<script>
import CarouselSection from '~/components/sections/carouselSection'
import BannerSection from '~/components/sections/bannerSection'

export default {
  name: 'IndexPage',
  components: {
    BannerSection,
    CarouselSection
  }
}
</script>
