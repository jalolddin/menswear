<template>
  <div class="row">
    <div v-for="(_, index) in colNum" :key="index" class="col-3">
      <b-skeleton-img class="catalog__items" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'CatalogSectionSkeleton',
  props: {
    colNum: {
      type: Number,
      default: 0
    }
  }
}
</script>
