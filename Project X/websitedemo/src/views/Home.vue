<template>
<div>
  <div id="main_section">
    <KeyMarketing />
  </div>
  <div id="content_section">
    <b-container>
      <FundRaise />
    </b-container>
  </div>
</div>
</template>

<script>
import FundRaise from '@/components/FundRaise.vue'
import KeyMarketing from '@/components/KeyMarketing.vue'

export default {
  name: 'home',
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s - Decentralized Charity!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  components: {
    FundRaise, KeyMarketing
  }
}
</script>

<style scoped>

#content_section {
  padding: 4rem 1rem;
}

</style>
