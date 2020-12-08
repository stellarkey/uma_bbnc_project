<template>
  <div class="container content">
    <div class="sub-content">
      <label style="font-size: 1.5rem;font-weight: 3500;color: #ffc107;">PERSONAL INFORMATION</label>
      <p>My name: John</p>
      <p>My wallet address: 0x1084232c04628c147c9e5c6ddef2b1ce4d81d8d8</p>
      <p>My wallet balance: {{ balance }}</p>
    </div>
    <div class="sub-content">
      <label style="font-size: 1.5rem;font-weight: 3500;color: #ffc107;">MY DONATIONS</label>
    </div>
    <div style="margin-left: 180px;margin-right: 180px;">
      <b-table style="font-size: 0.7rem;margin-bottom: 20px" sticky-header="400px" :busy="isBusy" hover :items="mydonations" :fields="fields">
        <template #table-busy>
          <div class="text-center text-danger my-2" style="font-size: 1rem;">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data() {
      return {
        timer: '',
        isBusy: true,
        fields: [
          {
            key: 'Amount',
            sortable: true
          },
          {
            key: 'Date',
            label: 'Date',
            sortable: true
            // Variant applies to the whole column, including the header and footer
            // variant: 'danger'
          },
          {
            key: 'TxId',
            sortable: false
          },
          {
            key: 'Recipient',
            label: 'To',
            sortable: false
          },
          {
            key: 'Type',
            label: 'Recipient Type',
            sortable: false
          }
        ],
      }
    },
    mounted() {
      this.timer = setTimeout(this.ready, 1000);
    },
    computed: {
      ...mapState('donations', ['balance', 'mydonations']),
      username: function() {
        if (this.user) {
          return this.user.data.firstname + " " + this.user.data.lastname
        }
        return ''
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
    methods: {
      ready() {
        this.isBusy = false
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer);
    }
  }

</script>
<style scoped>
.content {
  margin-top: 100px;
  display: table;
  text-align: center;
}
.sub-content {
  color: #9091A3;
  font-size: 1.25rem;
  margin-left: 180px;
  margin-right: 180px;
  text-align: left;
}
</style>
