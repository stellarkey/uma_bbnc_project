<template>
  <div class="forgot-password">
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      {{ $t("forgot-password.text.alert") }} {{ email }}
    </b-alert>

    <b-form @submit.prevent="forgot">
      <div class="title">{{ $t("forgot-password.title") }}</div>
      <div class="solid-line mb2x"></div>
      <span>{{ $t("forgot-password.text.description") }}</span>
      <br>
      <b-form-group label-cols="0" label-for="email">
        <b-form-input
          id="email"
          name="email"
          v-model="email"
          v-validate="'required|email'"
          :state="validateState('email')"
          aria-describedby="email-feedback"
          :placeholder="$t('forgot-password.input_text.email')"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="email-feedback">
          {{ errors.first('email') }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button variant="outline-success" type="submit" :disabled="errors.any()">
        <strong>{{ $t("forgot-password.buttons.forgot") }}</strong>
      </b-button>
    </b-form>

    <b-button @click.prevent="showModal" ref="btnShow" hidden></b-button>
    <b-modal id="errorModal" hide-footer :title="$t('forgot-password.error.title')">
      <div class="d-block">
        <span>{{ $t("forgot-password.error.message") }}</span>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click.prevent="hideModal">{{ $t("forgot-password.error.close") }}</b-button>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { modal, validation } from '@/mixins'

export default {
  metaInfo: {
    title: 'Forgot your password',
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
      dismissSecs: 15,
      dismissCountDown: 0
    }
  },
  methods: {
    ...mapActions('account', ['forgotPassword']),
    forgot() {
      this.$validator.validate().then(valid => {
        if (valid) {
          const {email} = this
          this.forgotPassword({email}).then(() => {
            this.showAlert()
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

.forgot-password {
  background-color: #ffffff;
  padding: 4rem 2rem;
  margin-left: 380px;
  margin-right: 380px;
}

</style>
