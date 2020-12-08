<template>
  <div class="signin">
    <div class="title">{{ $t("signin.title") }}</div>
    <div class="solid-line mb2x"></div>
    <b-form @submit.prevent="signin">
      <b-form-group label-cols="0" label-for="password">
        <b-form-input
          id="password"
          name="password"
          type="password"
          v-model="password"
          v-validate="{ required: true, min: 8 }"
          :state="validateState('password')"
          aria-describedby="password-feedback"
          :placeholder="$t('signin.input_text.password')"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="password-feedback">
          {{ errors.first('password') }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button variant="outline-success" type="submit" :disabled="errors.any()">
        <strong>{{ $t("signin.buttons.signin") }}</strong>
      </b-button>
    </b-form>
    <br>
    {{ $t("signin.text.new") }}<b-link @click.prevent="signup">{{ $t("signin.links.signup") }}</b-link>

    <b-button @click="showModal" ref="btnShow" hidden></b-button>
    <b-modal id="errorModal" hide-footer :title="$t('signin.error.title')">
      <div class="d-block">
        <span>{{ $t("signin.error.message") }}</span>
        <b-link @click.prevent="signup">{{ $t("signin.links.signup") }}</b-link>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click.prevent="hideModal">{{ $t("signin.error.close") }}</b-button>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { modal, validation } from '@/mixins'

export default {
  metaInfo: {
    title: 'Sign In',
    titleTemplate: '%s - Decentralized Charity!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  mixins: [modal, validation],
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions('account', ['signIn']),
    signin() {
      this.$validator.validate().then(valid => {
        if (valid) {
          const {email, password} = this
          this.signIn({email, password}).then(() => {
            this.$router.push({name: "Home"})
          }).catch(error => {
            this.$log.debug(error)
            this.showModal()
          })
        }
      })
    },
    signup() {
      this.$router.push({name: "SignUp"})
    },
    forgotPassword() {
      this.$router.push({name: "ForgotPassword"})
    }
  }
}
</script>

<style scoped>

.signin {
  background-color: #ffffff;
  padding: 2rem 1rem;
  margin-left: 400px;
  margin-right: 400px;
}

</style>
