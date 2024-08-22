<template>
  <div class="auth">
    <div class="login">
      <div class="row">
        <div class="col-md-6 p-0">
          <div class="login__image">
            <img src="@/static/img/login-background.png" alt="">
          </div>
        </div>
        <div class="col-md-6 p-0">
          <div class="login__form">
            <div class="login__form_group">
              <h3>
                RESET YOUR PASSWORD
              </h3>
              <h5>
                Sign in to view your personal information and check up on <br>
                your recent orders
              </h5>
              <input
                v-model="form.email"
                type="email"
                placeholder="EMAIL ADRESS"
                :class="{'is-invalid': [$v.form.email.$anyError].some(e => e)}"
              >
              <div class="form-group-ico">
                <input
                  v-model="form.password"
                  :type="seePassword1 ? 'text':'password'"
                  placeholder="NEW PASSWORD"
                  autofocus
                  :class="{'is-invalid': [$v.form.password.$anyError].some(e => e)}"
                >
                <i class="ico ico-pass " :class="seePassword1 ? '':'active'" @click="seePassword1=!seePassword1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L21 21" stroke="#C7CAD5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M10.584 10.587C10.2087 10.9621 9.99775 11.4708 9.99756 12.0013C9.99737 12.5319 10.2079 13.0408 10.583 13.416C10.958 13.7913 11.4667 14.0023 11.9973 14.0024C12.5278 14.0026 13.0367 13.7921 13.412 13.417"
                      stroke="#C7CAD5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.363 5.36506C10.2204 5.11978 11.1082 4.9969 12 5.00006C16 5.00006 19.333 7.33306 22 12.0001C21.222 13.3611 20.388 14.5241 19.497 15.4881M17.357 17.3491C15.726 18.4491 13.942 19.0001 12 19.0001C8 19.0001 4.667 16.6671 2 12.0001C3.369 9.60506 4.913 7.82506 6.632 6.65906"
                      stroke="#C7CAD5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>
              </div>
              <div class="form-group-ico">
                <input
                  v-model="form.confirmPassword"
                  :type="seePassword2 ? 'text':'password'"
                  placeholder="CONFIRM PASSWORD"
                  autofocus
                  :class="{'is-invalid': [$v.form.confirmPassword.$anyError].some(e => e)}"
                >
                <i class="ico ico-pass " :class="seePassword2 ? '':'active'" @click="seePassword2=!seePassword2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L21 21" stroke="#C7CAD5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M10.584 10.587C10.2087 10.9621 9.99775 11.4708 9.99756 12.0013C9.99737 12.5319 10.2079 13.0408 10.583 13.416C10.958 13.7913 11.4667 14.0023 11.9973 14.0024C12.5278 14.0026 13.0367 13.7921 13.412 13.417"
                      stroke="#C7CAD5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.363 5.36506C10.2204 5.11978 11.1082 4.9969 12 5.00006C16 5.00006 19.333 7.33306 22 12.0001C21.222 13.3611 20.388 14.5241 19.497 15.4881M17.357 17.3491C15.726 18.4491 13.942 19.0001 12 19.0001C8 19.0001 4.667 16.6671 2 12.0001C3.369 9.60506 4.913 7.82506 6.632 6.65906"
                      stroke="#C7CAD5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>
              </div>
              <button class="btn" @click.prevent="submit">
                RESET PASSWORD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { sameAs, minLength, required, email } from 'vuelidate/lib/validators'
export default {
  name: 'ForgotPasswordPage',
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
      form: {
        email: null,
        password: null,
        confirmPassword: null
      },
      seePassword1: false,
      seePassword2: false
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { sameAs: sameAs('password') }
    }
  },
  methods: {
    async submit () {
      if (this.$v.form.$invalid) {
        this.$v.form.$touch()
        this.$bvToast.toast('Passwords do not match', {
          title: 'Notification',
          variant: 'info'
        })
      } else {
        await this.$store.dispatch('forgot', {
          token: this.$route.query.token,
          ...this.form
        })
      }
    }
  }
}
</script>
