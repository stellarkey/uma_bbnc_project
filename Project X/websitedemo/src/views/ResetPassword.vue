<template>
  <div class="reset-password">
    <div class="title">{{ $t("reset-password.title") }}</div>
    <div class="solid-line mb2x"></div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      {{ $t("reset-password.text.alert") }}
    </b-alert>
    <b-form @submit.prevent="reset">
      <b-form-group label-cols="0" label-for="password">
        <b-form-input
          id="password"
          name="password"
          type="password"
          v-model="password"
          v-validate="{ required: true, min: 8 }"
          :state="validateState('password')"
          aria-describedby="password-feedback"
          :placeholder="$t('reset-password.input_text.password')"
          ref="password"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="password-feedback">
          {{ errors.first('password') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label-cols="0" label-for="confirmPassword">
        <b-form-input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          v-model="confirmPassword"
          v-validate="'required|min:8|confirmed:password'"
          :state="validateState('confirmPassword')"
          aria-describedby="confirmPassword-feedback"
          :placeholder="$t('reset-password.input_text.confirm_password')"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="confirmPassword-feedback">
          {{ errors.first('confirmPassword') }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button variant="outline-success" type="submit" :disabled="errors.any()">
        <strong>{{ $t("reset-password.buttons.reset") }}</strong>
      </b-button>
    </b-form>

    <b-button @click.prevent="showModal" ref="btnShow" hidden></b-button>
    <b-modal id="errorModal" hide-footer :title="$t('reset-password.error.title')">
      <div class="d-block">
        <span>{{ $t("reset-password.error.message") }}</span>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click.prevent="hideModal">{{ $t("reset-password.error.close") }}</b-button>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { modal, validation } from '@/mixins'

export default {
  metaInfo: {
    title: 'Reset password',
    titleTemplate: '%s - Decentralized Charity!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  mixins: [modal, validation],
  data() {
    return {
      token: "",
      password: "",
      confirmPassword: "",
      dismissSecs: 15,
      dismissCountDown: 0
    }
  },
  mounted() {
    let urlParams = new URLSearchParams(window.location.search)
    let token = urlParams.get('token')
    this.verifyToken({token}).then(() => {
      this.token = token
      this.showAlert()
    }).catch(() => {
      this.$router.push({name: "ResetPasswordExpired"})
    })
  },
  methods: {
    ...mapActions('account', ['verifyToken', 'resetPassword']),
    reset() {
      this.$validator.validate().then(valid => {
        if (valid) {
          const {token, password} = this
          this.resetPassword({token, password}).then(() => {
            this.$router.push({name: "SignIn"})
          }).catch(error => {
            this.$log.debug(error)
            this.showModal()
          })
        }
      })
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<style scoped>

.reset-password {
  background-color: #ffffff;
  padding: 4rem 2rem;
  margin-left: 380px;
  margin-right: 380px;
}

</style>
