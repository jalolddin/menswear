<template>
  <div class="bespoke__page">
    <div
      :style="{ backgroundImage: `url(${require('@/static/img/bespoke-back.png')})` }"
      class="bespoke__page-banner mini-banner"
    >
      <h1>Bespoke Suits</h1>
      <p>Crafted to Perfection, Tailored for You</p>
    </div>
    <div class="bespoke__page-form" />
  </div>
</template>

<script>
export default {}
</script>

<style>
.bespoke__page {
  margin-top: 138px;
}
</style>
