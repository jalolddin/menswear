<template>
  <div class="profile">
    <div class="profile__sidebar">
      <div class="profile__sidebar-title">
        <h1>Hi John!</h1>
        <p>Manage your personal details, addresses and orders</p>
      </div>
      <div class="profile__sidebar-links">
        <span v-for="(link, index) in profileLinks" :key="index">
          {{ link.title }}
        </span>
      </div>
    </div>
    <div class="profile__content" />
  </div>
</template>
<script>
export default {
  name: 'ProfilePage',
  data () {
    return {
      profileLinks: [
        {
          title: 'Profile'
        },
        {
          title: 'Favourites'
        },
        {
          title: 'Order history'
        },
        {
          title: 'Sign out'
        }
      ]
    }
  },
  mounted () {}
}
</script>
