<template>
  <b-modal id="modal-donate" title="Make your donation">
    <b-container fluid>
      <b-row class="my-1">
        <b-col sm="3">
          <label :for="`type-number`">Amount:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input class="mb-3" :id="`type-number`" v-model="amount" type="number"></b-form-input>
        </b-col>
        <b-col sm="3">
          <label :for="`type-type`">Type:</label>
        </b-col>
        <b-col sm="9">
          <b-form-select
              v-model="selected"
              :options="options"
              class="mb-3"
              disabled
              value-field="item"
              text-field="name"
          ></b-form-select>
        </b-col>
        <b-col sm="3">
          <label :for="`type-text`">Recipient address:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input :id="`type-text`" type="text" v-model="account" disabled></b-form-input>
        </b-col>
      </b-row>
    </b-container>
    <template #modal-footer="{}" style="text-align: center">
      <b-button size="sm" variant="warning" @click="donate()">
        Donate
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel">
        Cancel
      </b-button>
    </template>
  </b-modal>
</template>

<script>
  export default {
    data() {
      return {
        amount: 0,
        my_footer: 'my_footer',
        selected: this.accountType,
        options: [
          { item: '2', name: 'NPO' },
          { item: '3', name: 'Recipient' },
          { item: '4', name: 'CrowdFund'}
        ]
      }
    },
    props: {
      account: {
        type: String,
        default: function() {
        },
        require: true
      },
      accountType: {
        type: Number,
        default: 2,
        require: true
      }
    },
    computed: {
    },
    methods: {
      donate() {
        this.$root.$emit('bv::hide::modal', 'modal-profile', '#btnShow')
        this.$root.$emit('bv::hide::modal', 'modal-donate', '#btnShow')
      },
      cancel() {
        this.$root.$emit('bv::hide::modal', 'modal-donate', '#btnShow')
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
