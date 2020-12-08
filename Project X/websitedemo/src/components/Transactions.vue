<template>
  <div id="donations">
    <b-table hover sticky-header="700px" :busy="isBusy" :items="donations" :fields="fields">
      <template #table-busy>
        <div class="text-center text-danger my-2" style="font-size: 1rem;">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "transactions",
  mounted() {
    this.timer = setTimeout(this.ready, 1000);
  },
  computed: {
    ...mapState('donations', ['balance', 'donations']),
  },
  methods: {
    ready() {
      this.isBusy = false
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      timer: '',
      isBusy: true,
      fields: [
        {
          key: 'donor_name',
          label: 'Donor Name',
          sortable: false
        },
        {
          key: 'Amount',
          sortable: true
        },
        {
          key: 'Type',
          label: 'Recipient Type',
          sortable: false
        },
        {
          key: 'Date',
          label: 'Date',
          sortable: true
          // Variant applies to the whole column, including the header and footer
          // variant: 'danger'
        },
        {
          key: 'Recipient',
          label: 'To',
          sortable: false
        },
        {
          key: 'TxId',
          sortable: false
        }
      ]
    }
  }
}
</script>

<style scoped>
#donations {
  padding: 4rem 2rem;
}
</style>
