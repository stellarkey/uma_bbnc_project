<template>
  <div>
    <b-card-group deck style="display: flex;justify-content: center; padding: 100px">
      <b-card
          title="Da Wei"
          img-src="./recipient1.png"
          img-alt="Image"
          img-top
          img-height="250"
          tag="article"
          @click="profile(0)"
          style="max-width: 20rem;cursor:pointer;"
          class="mb-2"
      >
        <b-card-text>
          I was a paddy field worker in my home village my whole life, but was relocated to the suburbs with my son who have died. Today I have no income, no family,  only diabetes and failing eyesight.
        </b-card-text>
      </b-card>
      <b-card
          title="Xiao Hong"
          img-src="./recipient2.png"
          img-alt="Image"
          img-top
          img-height="250"
          tag="article"
          @click="profile(1)"
          style="max-width: 20rem;cursor:pointer;"
          class="mb-2"
      >
        <b-card-text>
          Hi! I'm a 9 year old diagnosed with scoliosis, autism, and polio.
        </b-card-text>
      </b-card>
      <b-card
          title="Mike"
          img-src="./recipient3.png"
          img-alt="Image"
          img-top
          img-height="250"
          tag="article"
          @click="profile(2)"
          style="max-width: 20rem;cursor:pointer;"
          class="mb-2"
      >
        <b-card-text>
          I have been eating chili packets with rice every day for five years, because I had to care for my little brother who has mental problems. I weigh 20 kilograms and am hospitalized now, yet I still worry about him everyday, he is the only family I have left.
        </b-card-text>
      </b-card>
      <b-card
          title="Mike"
          img-src="./recipient4.png"
          img-alt="Image"
          img-top
          tag="article"
          img-height="250"
          @click="profile(3)"
          style="max-width: 20rem;cursor:pointer;"
          class="mb-2"
      >
        <b-card-text>
          I was born in 3 December 2020, my parents left me at the orphanage because I am diagnosed with leukimia.
        </b-card-text>
      </b-card>
      <b-card
          title="Mike"
          img-src="./recipient5.png"
          img-alt="Image"
          img-top
          tag="article"
          @click="profile(4)"
          img-height="250"
          style="max-width: 20rem;cursor:pointer;"
          class="mb-2"
      >
        <b-card-text>
          I lost my family and home in a flood, now I am living with my uncle and aunt while rebuilding my house.
        </b-card-text>
      </b-card>
    </b-card-group>
    <Profile :infos="infos"
             :index=index></Profile>
  </div>
</template>

<script>
import Profile from "@/components/Profile";
export default {
  name: "Recipients",
  components: {
    Profile
  },
  data() {
    return {
      infos: [
        {'name': 'Da Wei','location': 'Qinghai', 'type': 'Healthcare', 'info': 'I was a paddy field worker in my home village my whole life, but was relocated to the suburbs with my son who have died. Today I have no income, no family,  only diabetes and failing eyesight.', 'accountType': 3, 'account': '0x1084232c04628c147c9e5c6ddef2b1ce4d81d8d8' },
        {'name': 'Xiao Hong','location': 'Guilin', 'type': 'Healthcare', 'info': 'Hi! I\'m a 9 year old diagnosed with scoliosis, autism, and polio.', 'accountType': 3, 'account': '0x16e32b711652088863a1de3863458663c901a664' },
        {'name': 'Xiao Hua','location': 'Guizhou', 'type': 'Healthcare', 'info': 'I have been eating chili packets with rice every day for five years, because I had to care for my little brother who has mental problems. I weigh 20 kilograms and am hospitalized now, yet I still worry about him everyday, he is the only family I have left.', 'accountType': 3, 'account': '0x1d60ed961bcc7f842a77381934d1756502085fcd' },
        {'name': 'Xiao Li','location': 'Qinghai', 'type': 'Healthcare', 'info': 'I was born in 3 December 2020, my parents left me at the orphanage because I am diagnosed with leukimia.', 'accountType': 3, 'account': '0x1d60ed961bcc7f842a77381934d1756502085fcd' },
        {'name': 'Xiao Liu','location': 'Jiangxi', 'type': 'Housing', 'info': 'I lost my family and home in a flood, now I am living with my uncle and aunt while rebuilding my house.', 'accountType': 3, 'account': '0x1084232c04628c147c9e5c6ddef2b1ce4d81d8d8' }
      ],
      index: 0
    }
  },
  methods: {
    profile(index) {
      this.index = index
      this.$root.$emit('bv::show::modal', 'modal-profile', '#btnShow')
    }
  }
}
</script>

<style scoped>

</style>
