<template>
  <div class="verify-email-expired">
    <div class="title">{{ $t("verify-email-expired.title") }}</div>
    <div class="solid-line mb2x"></div>
    <span>{{ $t("verify-email-expired.text.description") }}</span>
    <br><br>
    <b-button variant="outline-success" @click.prevent="signin">
      <strong>{{ $t("verify-email-expired.buttons.signin") }}</strong>
    </b-button>
  </div>
</template>

<script>

export default {
  metaInfo: {
    title: 'Email vefirication',
    titleTemplate: '%s - Decentralized Charity!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  methods: {
    signin() {
      this.$router.push({name: "SignIn"})
    }
  }
}
</script>

<style scoped>

.verify-email-expired {
  background-color: #ffffff;
  padding: 4rem 2rem;
  margin-left: 380px;
  margin-right: 380px;
}

</style>
