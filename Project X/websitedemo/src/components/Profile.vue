<template>
  <b-modal id="modal-profile" title="Profile" :footer-class="my_footer">
    <div>
      <div class="tx-address">
        <label class="tx-label">Name: </label>
        <span class="tx-span">{{ infos[index].name }}</span>
      </div>
      <div class="tx-address">
        <label class="tx-label">Location: </label>
        <span class="tx-span">{{ infos[index].location }}</span>
      </div>
      <div class="tx-address">
        <label class="tx-label">Type: </label>
        <span class="tx-span">{{ infos[index].type }}</span>
      </div>
      <div>
        <label class="tx-label">Info: </label>
        <p class="tx-info">{{ infos[index].info }}</p>
      </div>
      <div v-if="hasRequests" class="tx-address">
        <label class="tx-label">Requests: </label>
        <span class="tx-span">{{ infos[index].requests }}</span>
      </div>
    </div>
    <template #modal-footer="{}" style="text-align: center !important;display:table !important;">
      <b-button style="align-self: center" size="lg" variant="warning" @click="donate">
        Donate
      </b-button>
    </template>
    <Donate :account-type="this.infos[this.index].accountType"
            :account="this.infos[this.index].account"></Donate>
  </b-modal>
</template>

<script>
import Donate from "@/components/Donate";
  export default {
    components: {
      Donate
    },
    data() {
      return {
        my_footer: 'my_footer',
        sliding: null,
        selected: 'A',
        options: [
          { item: 'A', name: 'Npo' },
          { item: 'B', name: 'Person' },
          { item: 'D', name: 'System pool'}
        ]
      }
    },
    props: {
      infos: {
        type: Array,
        default: function() {
        },
        require: true
      },
      index: {
        type: Number,
        default: 0,
        require: true
      }
    },
    computed: {
      hasRequests() {
        return this.infos[this.index].hasOwnProperty('requests')
      }
    },
    methods: {
      donate() {
        this.$root.$emit('bv::show::modal', 'modal-donate', '#btnShow')
      }
    }
  }

</script>
<style scoped>
.tx-address {
  text-align: left;
  border-bottom: 1px solid #E8E9ED;
  height: 48px;
  padding-top: 15px;
}
>>>.my_footer {
  display: table !important;
  text-align: center !important;
}
.tx-info {
  color: #4F515E;
  letter-spacing: 0;
}
.tx-span {
  color: #4F515E;
  letter-spacing: 0;
  text-align: right;
}
.tx-label {
  margin-right: 10px;
  color: #9091A3;
  letter-spacing: 0;
}
</style>
