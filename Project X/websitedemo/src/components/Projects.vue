<template>
  <div>
    <b-card-group deck style="display: flex;justify-content: center; padding: 100px; padding-bottom: 0px !important;">
      <b-card
          title="Qinghai Senior Care Project"
          img-src="./project1.png"
          img-alt="Image"
          img-top
          img-height="250"
          tag="article"
          @click="profile(0)"
          style="max-width: 20rem;cursor:pointer;"
          class="mb-2"
      >
        <b-card-text>
          Give our senior members better quality of their remaining life.
        </b-card-text>
      </b-card>
      <b-card
          title="Yangtze River Flooding Rescue"
          img-src="./project2.png"
          img-alt="Image"
          img-height="250"
          img-top
          tag="article"
          @click="profile(1)"
          style="max-width: 20rem;cursor:pointer;"
          class="mb-2"
      >
        <b-card-text>

          Let's contribute to help our friends who lost their homes, family, and jobs due to the recent Yangtze flooding.
        </b-card-text>
      </b-card>
      <b-card
          title="Reforestation in Dongjiang"
          img-src="./project3.png"
          img-alt="Image"
          img-top
          img-height="250"
          tag="article"
          @click="profile(2)"
          style="max-width: 20rem;cursor:pointer;"
          class="mb-2"
      >
        <b-card-text>
          Join us to restore a forest that has been harmed by farming and commercial activities.
        </b-card-text>
      </b-card>
    </b-card-group>
    <b-card-group deck style="display: flex;justify-content: center; padding: 20px">
      <b-card
          title="Clean Clothes by P&G"
          img-src="./project4.png"
          img-alt="Image"
          img-top
          img-height="250"
          tag="article"
          @click="profile(3)"
          style="max-width: 20rem;cursor:pointer;"
          class="mb-2"
      >
        <b-card-text>
          Give a detergent pack to rural families in China for every 1 yuan you donate.
        </b-card-text>
      </b-card>
      <b-card
          title="Breast Cancer Marathon"
          img-src="./project5.png"
          img-alt="Image"
          img-top
          img-height="250"
          tag="article"
          @click="profile(4)"
          style="max-width: 20rem;cursor:pointer;"
          class="mb-2"
      >
        <b-card-text>
          Join our marathon for Breast Cancer Awareness Day!
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
  name: "Projects",
  components: {
    Profile
  },
  data() {
    return {
      infos: [
        {'name': 'Qinghai Senior Care Project','location': 'Qinghai', 'type': 'Healthcare', 'info': 'Give our senior members better quality of their remaining life.', 'accountType': 4, 'account': '0x1084232c04628c147c9e5c6ddef2b1ce4d81d8d8' },
        {'name': 'Yangtze River Flooding Rescue','location': 'Jiangxi', 'type': 'Disaster Relief', 'info': 'Let\'s contribute to help our friends who lost their homes, family, and jobs due to the recent Yangtze flooding.', 'accountType': 4, 'account': '0x16e32b711652088863a1de3863458663c901a664' },
        {'name': 'Reforestation in Dongjiang','location': 'Inner Mongolia', 'type': 'Environmental Protection', 'info': 'Join us to restore a forest that has been harmed by farming and commercial activities.', 'accountType': 4, 'account': '0x1d60ed961bcc7f842a77381934d1756502085fcd' },
        {'name': 'Clean Clothes by P&G','location': 'Yunnan', 'type': 'Daily Needs', 'info': 'Give a detergent pack to rural families in China for every 1 yuan you donate.', 'accountType': 4, 'account': '0x1d60ed961bcc7f842a77381934d1756502085fcd' },
        {'name': 'Breast Cancer Marathon','location': 'Beijing', 'type': 'Healthcare', 'info': 'Join our marathon for Breast Cancer Awareness Day!', 'accountType': 4, 'account': '0x1084232c04628c147c9e5c6ddef2b1ce4d81d8d8' }
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
