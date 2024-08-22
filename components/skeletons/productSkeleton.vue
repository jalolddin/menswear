<template>
  <div class="product__container">
    <div v-for="(_, index) in 8" :key="index">
      <b-skeleton-img class="product__items" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductSkeleton'
}
</script>
