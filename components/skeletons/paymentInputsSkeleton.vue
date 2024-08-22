<template>
  <div v-if="load">
    <div class="element-container">
      <div class="box">
        <div class="box-icon" />
        <div class="box-placeholder" />
      </div>
      <div class="box">
        <div class="box-icon" />
        <div class="box-placeholder" />
      </div>
    </div>
    <div style="margin: 15px 0">
      <div class="box">
        <div class="box-icon" />
        <div class="box-placeholder" />
      </div>
    </div>
    <div class="element-container">
      <div class="box">
        <div class="box-icon" />
        <div class="box-placeholder" />
      </div>
      <div class="box">
        <div class="box-icon" />
        <div class="box-placeholder" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PaymentInputsSkeleton',
  props: {
    load: {
      type: Boolean,
      default: true
    }
  }
}
</script>
