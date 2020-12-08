<template>
  <div class="verify-email">
    <div class="title">{{ $t("verify-email.title") }}</div>
    <div class="solid-line mb2x"></div>
    <b-alert
      :show="dismissCountDown"
      fade
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      {{ $t("verify-email.text.alert") }}
    </b-alert>
    {{ $t("verify-email.text.goto") }}
    <b-link @click.prevent="signin">{{ $t("verify-email.links.signin") }}</b-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  metaInfo: {
    title: 'Email verification',
    titleTemplate: '%s - Decentralized Charity!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  data() {
    return {
      dismissSecs: 15,
      dismissCountDown: 0
    }
  },
  mounted() {
    let urlParams = new URLSearchParams(window.location.search)
    let token = urlParams.get('token')
    this.verifyEmail({token}).then(() => {
      this.showAlert()
    }).catch(error => {
      this.$log.debug(error)
      this.$router.push({name: "VerifyEmailExpired"})
    })
  },
  methods: {
    ...mapActions('account', ['verifyEmail']),
    signin() {
      this.$router.push({name: "SignIn"})
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

.verify-email {
  background-color: #ffffff;
  padding: 4rem 2rem;
  margin-left: 380px;
  margin-right: 380px;
}

</style>
