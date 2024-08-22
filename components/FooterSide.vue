<template>
  <div class="footer">
    <div class="footer__link">
      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
        <ul>
          <li>
            <b>HELP</b>
          </li>
          <li>
            <nuxt-link to="/help?slug=delivery-information">
              DELIVERY INFORMATION
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/help?slug=returns-refunds">
              REFUND & RETURNS
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/help?slug=site-map">
              LOCATION
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/help?slug=contact-us">
              CONTACT US
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/help?slug=faqs">
              FAQ’S
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/help?slug=term-conditions">
              TERM’S & CONDITIONS
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/help?slug=privacy-policy">
              PRIVACY POLICY
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
        <ul>
          <li>
            <b>QUICK LINKS</b>
          </li>
          <li>
            <nuxt-link to="/services">
              REFER A FRIEND
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/gift">
              E-GIFT СARD
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/brands">
              BRANDS
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/menswear">
              MENSWEAR HIRE
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/tailor">
              TAILOR MADE SUITS
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/bespoke">
              BESPOKE SUITS
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
        <ul>
          <li>
            <b>SERVICES</b>
          </li>
          <li>
            <nuxt-link to="/about">
              ALTERATIONS
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              REPAIRS
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              SHIRT IRONING
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              LEATHER & SUEDE
            </nuxt-link>
          </li>
          <!--            <li>-->
          <!--              <nuxt-link to="/about">-->
          <!--                AFFILIATE-->
          <!--              </nuxt-link>-->
          <!--            </li>-->
        </ul>
      </div>
    </div>
    <hr>
    <div class="footer__info">
      <img src="@/static/img/footer-logo.svg" alt="footer-logo">
      <p>We want you to look good</p>
      <div class="partners">
        <img src="@/static/img/visa-logo.svg" alt="visa-logo">
        <img src="@/static/img/pay-logo.svg" alt="pay-logo">
        <img src="@/static/img/Paypal.svg" alt="paypal-logo">
        <img src="@/static/img/ApplePay.svg" alt="applePay-logo">
      </div>
      <span>
        © Copyright 2024. ELBE MENSWEAR. All rights reserved.
        <br class="bv-d-sm-down-none">
        Website credit <a href="https://thevia.uk/">VISION DIGITAL GROUP</a>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterSide',
  mounted () {
    window.addEventListener('scroll', this.footerHandleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.footerHandleScroll)
  },
  methods: {
    footerHandleScroll () {
      const header = document.querySelector('.header')
      const footer = document.querySelector('.footer')

      const windowScrollY = window.scrollY
      const footerHeight = footer?.offsetHeight
      const offsetFooter = footer?.offsetTop - 70

      if (windowScrollY > offsetFooter) {
        header.classList.add('active-footer')
      } else {
        header.classList.remove('active-footer')
      }
      if (offsetFooter + footerHeight < windowScrollY) {
        header.classList.remove('active-footer')
      }
    }
  }
}
</script>
