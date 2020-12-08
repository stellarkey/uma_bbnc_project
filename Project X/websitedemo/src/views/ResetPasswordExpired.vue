<template>
  <div class="reset-password-expired">
    <div class="title">{{ $t("reset-password-expired.title") }}</div>
    <div class="solid-line mb2x"></div>
    <span>{{ $t("reset-password-expired.text.description") }}</span>
    <br><br>
    <b-button variant="outline-success" @click.prevent="signin">
      <strong>{{ $t("reset-password-expired.buttons.signin") }}</strong>
    </b-button>
  </div>
</template>

<script>

export default {
  metaInfo: {
    title: 'Reset password',
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

.reset-password-expired {
  background-color: #ffffff;
  padding: 4rem 2rem;
  margin-left: 380px;
  margin-right: 380px;
}

</style>
