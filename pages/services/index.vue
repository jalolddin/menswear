<template>
  <div class="services">
    <div
      :style="{ backgroundImage: `url(${require('@/static/img/services-banner.png')})` }"
      class="services-banner mini-banner"
    >
      <h1>
        The Perfect Fit, <br>
        Every Time
      </h1>
      <p>
        Allow 2-3 days for repair of clean items and 7 days for clean and repair. Same day
        tailoring and alteration services available.
      </p>
    </div>
    <div class="services-info">
      <div class="row">
        <div class="col-lg-7 order-image">
          <div class="services-info__image">
            <img class="big-image" src="@/static/img/services-info1.png" alt="">
            <img
              class="small-image left"
              src="@/static/img/services-info1-2.png"
              alt=""
            >
          </div>
        </div>
        <div class="col-lg-5 order-title">
          <div class="services-info__title">
            <h3>ALTERATIONS</h3>
            <p>
              Our men's alteration service is designed to help men find the perfect fit.
              From adjusting the length of blazer sleeves and trousers, to taking in a
              jacket that doesn't quite fit. Please enquire for more information or a free
              quote. We are also do official men`s tailoring for big companies like Lodge
              Brothers, London Irish players and many more Tuxedo companie
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="services-info">
      <div class="row">
        <div class="col-lg-5 order-title">
          <div class="services-info__title">
            <h3>REPAIRS</h3>
            <p>
              We able to fix items of clothing that are a perhaps a bit worse for wear
              such as moth or cigarette burns. We can do most of repair job including
              shoes, from replacing zips or replacing linings. We can also rebind cuffs
              and fronts, and fix pockets. For more information or a quote, please
              enquire.
            </p>
          </div>
        </div>
        <div class="col-lg-7 order-image">
          <div class="services-info__image">
            <img class="big-image" src="@/static/img/services-info2.png" alt="">
            <img
              class="small-image right"
              src="@/static/img/services-info2-2.png"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
    <div class="services-info">
      <div class="row">
        <div class="col-lg-7 order-image">
          <div class="services-info__image">
            <img class="big-image" src="@/static/img/services-info3.png" alt="">
            <img
              class="small-image left"
              src="@/static/img/services-info3-2.png"
              alt=""
            >
          </div>
        </div>
        <div class="col-lg-5 order-title">
          <div class="services-info__title">
            <h3>SHIRT IRONING</h3>
            <p>
              Our ironing service will remove creases and breathe new life into neglected
              items of clothing. Whether it's a formal shirt, or just your favorite
              t-shirt, drop by with your items of clothing. <br>
              The greatest care is given in hand ironing all garments to produce the
              immaculate finish upon which our reputation is built. Our staff will
              patiently and with expert care check and pack the garments to preserve their
              impeccable finish.e.
            </p>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="services-info">
      <div class="row">
        <div class="col-lg-7 order-image">
          <div class="services-info__image">
            <img class="big-image" src="@/static/img/service-info4.png" alt="">
          </div>
        </div>
        <div class="col-lg-5 order-title">
          <div class="services-info__title">
            <h3>LEATHER & SUEDE</h3>
            <p>
              Shoes, belts and other leather or suede items often start to show wear after
              heavy use. Our expert staff have the tools and knowledge to restore your
              worn leather and suede.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="services-contact">
      <h4>
        Feedback form <br />
        communications
      </h4>
      <div v-for="item in contactInfo" :key="item.id" class="services-contact__info">
        <img :src="require(`/static/img/icons/${item?.icon}`)" alt="" />
        <p>{{ item.title }}</p>
      </div>
      <div class="services-contact__form">
        <h5>do you have question ?</h5>
        <b-form-group label="name" label-for="name">
          <b-form-input
            id="name"
            v-model="form.name"
            placeholder="YOUR NAME"
            type="text"
            required
          />
        </b-form-group>
        <b-form-group label="phone" label-for="phone">
          <b-form-input
            id="phone"
            v-model="form.phone"
            v-mask="{ mask: '+\\9\\98 (99) 999-99-99', showMaskOnHover: false }"
            placeholder="YOUR PHONE"
            type="text"
            required
          />
        </b-form-group>
        <b-form-group label="theme" label-for="theme">
          <b-form-textarea id="theme" v-model="form.theme" placeholder="THEME" rows="3" />
        </b-form-group>
        <b-button type="submit"> SEND to </b-button>
      </div>
    </div>
    <div class="services-location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988669526!2d-0.2664033999507405!3d51.52873980503859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2s!4v1719499011484!5m2!1sru!2s"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'ServicesPage',
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
    // window.addEventListener('scroll', this.servicesHandleScroll)
  },
  // beforeDestroy () {
  //   window.removeEventListener('scroll', this.servicesHandleScroll)
  //   this.header.classList.remove('active-catalog')
  // },
  methods: {
    // servicesHandleScroll () {
    //   const banner = document.querySelector('.services-banner')
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
