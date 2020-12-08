<template>
  <div>
    <b-card-group deck style="display: flex;justify-content: center; padding: 100px">
      <b-card
          title="China Green Carbon Foundation"
          img-src="./npo1.png"
          img-alt="Image"
          img-top
          img-height="250"
          tag="article"
          @click="profile(0)"
          style="max-width: 20rem;cursor:pointer;"
          class="mb-2"
      >
        <b-card-text>
          First nation-wide non-profit public funding foundation dedicated to combating climate change by increasing carbon sink in China
        </b-card-text>
      </b-card>
      <b-card
          title="China Primary Health Care Foundation"
          img-src="./npo2.png"
          img-alt="Image"
          img-top
          @click="profile(1)"
          img-height="250"
          tag="article"
          style="max-width: 20rem;cursor:pointer;"
          class="mb-2"
      >
        <b-card-text>
          Developing Primary Health Care in China
        </b-card-text>
      </b-card>
      <b-card
          title="China Red Cross Society"
          img-src="./npo3.png"
          img-alt="Image"
          img-top
          img-height="250"
          @click="profile(2)"
          tag="article"
          style="max-width: 20rem;cursor:pointer;"
          class="mb-2"
      >
        <b-card-text>
          National Red Cross Society in the People's Republic of China
        </b-card-text>
      </b-card>
      <b-card
          title="China Children and Teenagers' Fund "
          img-src="./npo4.png"
          img-alt="Image"
          img-top
          tag="article"
          img-height="250"
          @click="profile(3)"
          style="max-width: 20rem;cursor:pointer;"
          class="mb-2"
      >
        <b-card-text>
          We provide education and assistance to our friends diagnosed with autism.
        </b-card-text>
      </b-card>
      <b-card
          title="Blue Sky Rescue Group"
          img-src="./npo5.png"
          img-alt="Image"
          img-top
          tag="article"
          img-height="250"
          @click="profile(4)"
          style="max-width: 20rem;cursor:pointer;"
          class="mb-2"
      >
        <b-card-text>
          Rescue group focused on disaster relief efforts
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
name: "Npos",
  components: {
    Profile
  },
  data() {
    return {
      infos: [
        {'name': 'China Green Carbon Foundation','location': 'Beijing', 'type': 'Foundation', 'info': 'First nation-wide non-profit public funding foundation dedicated to combating climate change by increasing carbon sink in China', 'accountType': 2, 'account': '0x1084232c04628c147c9e5c6ddef2b1ce4d81d8d8' },
        {'name': 'China Primary Health Care Foundation','location': 'Beijing', 'type': 'Foundation', 'info': 'Developing Primary Health Care in China', 'accountType': 2, 'account': '0x16e32b711652088863a1de3863458663c901a664' },
        {'name': 'China Red Cross Society','location': 'Beijing', 'type': 'Social Services Group', 'info': 'National Red Cross Society in the People\'s Republic of China', 'accountType': 2, 'account': '0x1d60ed961bcc7f842a77381934d1756502085fcd' },
        {'name': 'China Children and Teenagers\' Fund ','location': 'Guilin', 'type': 'Social Services Group', 'info': 'We provide education and assistance to our friends diagnosed with autism.', 'accountType': 2, 'account': '0x1d60ed961bcc7f842a77381934d1756502085fcd' },
        {'name': 'Blue Sky Rescue Group','location': 'Beijing', 'type': 'Social Services Group', 'info': 'Rescue group focused on disaster relief efforts', 'accountType': 2, 'account': '0x1084232c04628c147c9e5c6ddef2b1ce4d81d8d8' }
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
