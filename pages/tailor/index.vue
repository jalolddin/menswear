<template>
  <div class="tailor__page">
    <div
      :style="{ backgroundImage: `url(${require('@/static/img/tailor-back.png')})` }"
      class="tailor__page-banner mini-banner"
    >
      <h1>Tailor Made Suits</h1>
      <p>Crafting Excellence in Every Stitch</p>
    </div>
    <div class="tailor__page-form" />
  </div>
</template>

<script>
export default {}
</script>

<style>
.tailor__page {
  margin-top: 138px;
}
</style>
