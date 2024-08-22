<template>
  <div class="brand__page">
    <div
      :style="{ backgroundImage: `url(${require('@/static/img/brand-back.png')})` }"
      class="brand__page-banner mini-banner"
    >
      <h1>Explore Our Brand Collaborations</h1>
    </div>
    <div class="brand__page-container">
      <div v-for="brand in brands" :key="brand.id" class="brand-card">
        <img
          v-if="brand.image"
          :src="require(`@/static/img/${brand.image}`)"
          alt="Brand Image"
          class="brand-image"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      brands: [
        { id: 1, image: '' },
        { id: 2, image: '' },
        { id: 3, image: '' }
        // Add more brands as needed
      ]
    }
  }
}
</script>

<style scoped>
.brand__page-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Adjust gap between cards */
  justify-content: space-between;
  margin-bottom: 4rem;
}

.brand-card {
  width: 440px;
  height: 350px;
  background: rgba(0, 0, 0, 0.79);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.brand-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
