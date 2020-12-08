<template>
  <div class="rank" v-show="rank">
    <span :class="getRankCls(index)">{{getRankText(index)}}</span>
  </div>
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
      getRankCls(index) {
        if (index <= 2) {
          return `icon icon${index}`
        } else {
          return 'text'
        }
      },
      getRankText(index) {
        if (index > 2) {
          return index + 1
        }
      }
    }
  }

</script>
<style scoped>
</style>
