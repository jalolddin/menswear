<template>
  <div class="auth">
    <div class="forgot">
      <div class="row">
        <div class="col-md-6 p-0">
          <div class="forgot__image">
            <img src="@/static/img/login-background.png" alt="">
          </div>
        </div>
        <div class="col-md-6 p-0">
          <div class="forgot__form">
            <div class="forgot__form_group">
              <h3>
                RESET YOUR PASSWORD
              </h3>
              <h5>
                Enter your email address and we'll send you a link <br>
                to reset your password
              </h5>
              <input
                v-model="form.email"
                type="email"
                placeholder="EMAIL ADRESS"
                :class="{'is-invalid': [$v.form.email.$anyError].some(e => e)}"
              >
              <button class="btn" :disabled="loading" @click.prevent="submit">
                <b-spinner v-if="loading" small />
                <span v-else>LOG IN</span>
              </button>
              <nuxt-link class="btn cancel" to="/auth/login">
                CANCEL
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal v-model="statusVerification" centered hide-footer title="Email Verification">
      <p>A link has been sent to your e-mail. You can change your password by visiting the link</p>
      <a href="https://mail.google.com/" class="btn">
        Switch to e-mail
      </a>
      <nuxt-link to="/auth/login" class="btn btn-back">
        CANCEL
      </nuxt-link>
    </b-modal>
  </div>
</template>
<script>
import { email, required } from 'vuelidate/lib/validators'

export default {
  name: 'EmailVerificationPage',
  beforeRouteEnter (from, to, next) {
    next((vm) => {
      if (vm.$auth.user) {
        vm.$router.push('/')
      }
    })
  },
  layout: 'empty',
  data () {
    return {
      loading: false,
      statusVerification: false,
      form: {
        email: null
      }
    }
  },
  validations: {
    form: {
      email: { required, email }
    }
  },
  methods: {
    async submit () {
      if (this.$v.form.$invalid) {
        this.$v.form.$touch()
        this.$bvToast.toast('Fill in all fields and', {
          title: 'Error',
          variant: 'danger'
        })
      } else {
        this.loading = true
        const status = await this.$store.dispatch('verifyEmail', this.form)
        status?.success ? this.statusVerification = true : this.statusVerification = false
        this.loading = false
      }
    }
  }
}
</script>
