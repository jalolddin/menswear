<template>
  <div class="wear__page">
    <div
      :style="{ backgroundImage: `url(${require('@/static/img/wear-back.png')})` }"
      class="wear__page-banner mini-banner"
    >
      <h1>Menswear Hire</h1>
      <p>
        From the Epsom or Ascot horse races to a wedding, we've got you covered. We stock
        a large range of suit styles, fabrics and sizes so you can be sure to find
        something you like.
      </p>
    </div>
    <div class="wear__page-form" />
  </div>
</template>

<script>
export default {}
</script>

<style>
.wear__page {
  margin-top: 138px;
}
</style>
