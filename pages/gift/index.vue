<template>
  <div class="gift__page">
    <div
      :style="{ backgroundImage: `url(${require('@/static/img/gift-back.png')})` }"
      class="gift__page-banner mini-banner"
    >
      <h1>E-Gift card</h1>
      <p>The Perfect Gift for Every Occasion</p>
    </div>
    <div class="gift__page-form" />
  </div>
</template>
<script>
export default {
  name: 'GiftPage',
  data () {
    return {
      form: {
        name: null,
        phone: null,
        theme: null
      },
      contactInfo: [
        {
          id: 1,
          title: 'INFO@ELBEMENSWER@MAIL.RU',
          icon: 'mail.svg'
        },
        {
          id: 2,
          title: '+47 654 65 788 98 09',
          icon: 'call.svg'
        },
        {
          id: 3,
          title: 'LONDON STREET 12, 45HOME LOREM IPSUM',
          icon: 'home.svg'
        }
      ],
      header: null
    }
  },
  mounted () {
    // this.header = document.querySelector('.header')
    // window.addEventListener('scroll', this.gift__pageHandleScroll)
  },
  // beforeDestroy () {
  //   window.removeEventListener('scroll', this.gift__pageHandleScroll)
  //   this.header.classList.remove('active-catalog')
  // },
  methods: {
    // gift__pageHandleScroll () {
    //   const banner = document.querySelector('.gift__page-banner')
    //   const windowScrollY = window.scrollY
    //   const bannerHeight = banner?.offsetHeight
    //   const offsetBanner = banner?.offsetTop
    //   if (offsetBanner + bannerHeight < windowScrollY) {
    //     this.header.classList.remove('active-catalog')
    //   }
    // }
  }
}
</script>
