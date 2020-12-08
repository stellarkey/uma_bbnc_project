<template>
  <div>
    <b-carousel
      id="key_marketing"
      :interval="4000"
      fade
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="Fundraising for the people and causes you care about"
        img-src="https://d25oniaj7o2jcw.cloudfront.net/hero-george-large-20190213.jpg">
        <b-button variant="success" size="lg" @click="getCFX"><strong>Get CFX</strong></b-button>
      </b-carousel-slide>

      <b-carousel-slide
        caption="Fundraising for the people and causes you care about"
        img-src="https://d25oniaj7o2jcw.cloudfront.net/hero-jenesis-large-20190213.jpg">
        <b-button variant="success" size="lg" @click="getCFX"><strong>Get CFX</strong></b-button>
      </b-carousel-slide>

      <b-carousel-slide
        caption="Fundraising for the people and causes you care about"
        img-src="https://d25oniaj7o2jcw.cloudfront.net/hero-emergency-large-20190213.jpg">
        <b-button variant="success" size="lg" @click="getCFX"><strong>Get CFX</strong></b-button>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sliding: null
      }
    },
    methods: {
      getCFX() {
        window.open('https://www.hotbit.pro/exchange?symbol=CFX_USDT')
      },
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
