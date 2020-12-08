<template>
  <div id="donations">
    <b-table hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: "transactions",
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
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
          key: 'Date',
          label: 'Date',
          sortable: true
          // Variant applies to the whole column, including the header and footer
          // variant: 'danger'
        },
        {
          key: 'TxId',
          sortable: false
        }
      ],
      items: [
        { donor_name: 'Dickerson', Amount: 100, Date: '2020-11-16 22:37:35', TxId: '7E875BC96056A16C051BE55E67717D7A9CA40281B999F2257FBF'},
        { donor_name: 'anonymous', Amount: 30, Date: '2020-11-11 05:09:10', TxId: '80DC4542EDDD1FDBB157C49A31D3AEC73FF086ED2F825D84E6AC26'},
        { donor_name: 'Geneva', Amount: 22, Date: '2020-11-09 02:39:52', TxId: 'E8091EA72BA0E5D0150128B2A4AA059D1F2B55497AA27F3279C2'},
        { donor_name: 'Jami', Amount: 13, Date: '2020-10-26 12:14:55', TxId: 'd768deaa8b7acd43ea1122155140d33604cef1fa22a9f22548cd2872a7654b84'},
        { donor_name: 'Larsen', Amount: 11, Date: '2020-10-04 00:36:01', TxId: '138A4C381D792DA6C908E94BFF62E970369F138C77A60D8AEEA42'},
        { donor_name: 'anonymous', Amount: 2, Date: '2020-09-25 09:00:57', TxId: '9EA08DC1193A8497D50820D0BFE11B178F43928A8F5EA0432D6D4'},
        { donor_name: 'anonymous', Amount: 3, Date: '2020-09-23 23:22:45', TxId: '7F7A5B0C26CEE075FB105FB06484BBDC48683E8F608CEAD957B3'},
        { donor_name: 'Leonid Korobov', Amount: 6, Date: '2020-08-28 09:06:05', TxId: '0x1afc5c7f3d53569f6c4eee1cbc481d92fc1f2a1b33d3740ea953c519'},
        { donor_name: 'CryptoVoin', Amount: 999, Date: '2020-08-27 02:09:29', TxId: '95BABABCCC2CF8C07E7111807A9158ABF510212BD3F2A83281FD'},
        { donor_name: 'anonymous', Amount: 88, Date: '2020-08-22 21:41:41', TxId: '4c3b6fa2587bdd6db16486c980cb21a09a3f073c4df15bac9e0ce0eca629c7f3'}
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
