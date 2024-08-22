<template>
  <div>
    <HeaderSide />
    <Nuxt />
  </div>
</template>

<script>
import HeaderSide from '~/components/HeaderSide.vue'

export default {
  name: 'EmptyLayout',
  components: { HeaderSide }
}
</script>
