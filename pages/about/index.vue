<template>
  <div class="about">
    <div class="about-banner">
      <div class="about-banner__title">
        <h2>Discover the Essence of Timeless Elegance</h2>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="26"
        viewBox="0 0 50 26"
        fill="none"
      >
        <path
          d="M50 1.6853C50.0004 1.89328 49.959 2.09919 49.8783 2.2906C49.7977 2.48201 49.6795 2.65497 49.5308 2.79905L26.1311 25.5659C25.8462 25.8443 25.4652 26 25.0686 26C24.672 26 24.2909 25.8443 24.0061 25.5659L0.511295 2.70005C0.357659 2.56147 0.233293 2.39305 0.145628 2.20488C0.0579634 2.0167 0.00880127 1.81263 0.00107728 1.60485C-0.00664671 1.39707 0.0272274 1.18986 0.100675 0.995586C0.174122 0.801314 0.285635 0.623976 0.42855 0.474169C0.571465 0.324362 0.742846 0.205158 0.932454 0.123688C1.12206 0.0422182 1.32601 0.000150909 1.53209 4.0525e-07C1.73818 -0.000150098 1.94218 0.0416219 2.13191 0.122815C2.32163 0.204008 2.49318 0.322954 2.63631 0.472552L25.0671 22.302L47.4027 0.571557C47.6193 0.360909 47.8926 0.219204 48.1884 0.164097C48.4843 0.108991 48.7896 0.142916 49.0665 0.261644C49.3434 0.380373 49.5795 0.57866 49.7455 0.831808C49.9115 1.08496 50 1.38177 50 1.6853Z"
          fill="white"
        />
      </svg>
      <!-- <button>shop</button> -->
    </div>
    <div class="about-story">
      <h4>OUR STORY</h4>
      <div class="about-story__right">
        <p>
          Elbe was born from ambition, passion, and a love for timeless elegance. Our
          founder, Elbek, pursued a business degree in London, supporting himself with a
          part-time job at a tailoring business in Addlestone, Surrey. Here, he discovered
          his true calling in the art of bespoke tailoring.
        </p>
        <img src="@/static/img/our-story-right.png" alt="">
      </div>
      <div class="about-story__left">
        <img src="@/static/img/our-story-left.png" alt="">
        <p>
          Balancing education and his newfound passion, Elbek's dedication ignited a
          journey that shaped Elbe's future. He envisioned a brand that merges traditional
          craftsmanship with modern sophistication. Elbe offers tailor-made suits, expert
          alterations, and premium dress shoes, all crafted to the highest standards.
        </p>
      </div>
    </div>
    <div class="about-mission">
      <div class="about-mission__container">
        <div class="about-mission__container-text">
          <p>
            At Elbe, our mission is to redefine men's fashion by combining traditional
            craftsmanship with modern sophistication.
          </p>
          <span>We believe in the power of bespoke tailoring to transform not only the way
            men look but also how they feel. Each piece we create is a testament to our
            dedication to excellence, designed to meet the unique needs and preferences of
            our clients.</span>
        </div>
        <div class="about-mission__container-image">
          <h4>OUR MISSION</h4>
          <img src="@/static/img/our-mission.png" alt="">
        </div>
      </div>
    </div>
    <div class="about-company">
      <h4>
        Our path to creating timeless and elegant fashion with sustainable practices is
        ongoing, and we’re just beginning. Here are a few of our proudest achievements so
        far:
      </h4>
      <div class="row">
        <div v-for="item in companyInfo" :key="item.id" class="col-12 col-md-4 mb-3">
          <div class="about-company__info">
            <div class="about-company__info--title">
              <img :src="require(`/static/img/icons/${item.icon}`)" alt="">
              <p>
                {{ item.title }}
              </p>
            </div>
            <span>
              {{ item.desc }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutPage',
  data () {
    return {
      companyInfo: [
        {
          id: 1,
          title: 'High-Quality Service',
          desc:
            'Elbe Menswear’s high-quality service is defined by its personalized approach, expert craftsmanship, comprehensive measurement techniques, premium fabric selection, and exceptional customer care. These elements come together to provide clients with an unparalleled bespoke tailoring experience, ensuring that every suit is a perfect blend of style, comfort, and individuality.',
          icon: 'sewing-machine.svg'
        },
        {
          id: 2,
          title: 'The Elbe Menswear Experience',
          desc:
            'An Elbe Menswear suit is more than just a piece of clothing; it is a lifetime investment. With superior quality fabrics, expert tailoring, timeless design, personalized fit, and comprehensive care, Elbe ensures that their suits provide lasting elegance, comfort, and durability. When you choose an Elbe suit, you’re choosing a garment that will accompany you through the many milestones and moments of your life, always looking as impeccable as the day you first wore it.',
          icon: 'empty-box.svg'
        },
        {
          id: 3,
          title: 'Trusted by Thousands',
          desc:
            'Trusted by thousands, Elbe Menswear is a name synonymous with quality, craftsmanship, and exceptional service. Their bespoke tailoring process, use of premium materials, personalized approach, and global reach make them a preferred choice for clients seeking the very best in custom menswear. Choose Elbe Menswear and join the thousands who trust and appreciate the unmatched elegance and durability of their bespoke garments.',
          icon: 'global.svg'
        }
      ],
      header: null
    }
  },
  mounted () {
    this.header = document.querySelector('.header')
    window.addEventListener('scroll', this.aboutHandleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.aboutHandleScroll)
    this.header.classList.remove('active-catalog')
  },
  methods: {
    aboutHandleScroll () {
      const about = document.querySelector('.about-banner')

      const windowScrollY = window.scrollY
      const aboutHeight = about?.offsetHeight
      const offsetAbout = about?.offsetTop

      if (offsetAbout + aboutHeight - 80 < windowScrollY) {
        this.header.classList.remove('active-catalog')
      }
    }
  }
}
</script>
