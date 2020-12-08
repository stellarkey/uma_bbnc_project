const state ={
  'donations': [
    { donor_name: 'Dickerson', Amount: 100, Date: '2020-11-16 22:37:35', TxId: '7E875BC96056A16C051BE55E67717D7A9CA40281B999F2257FBF', 'Recipient':'0x1d60ed961bcc7f842a77381934d1756502085fcd', 'Type': 'NPO'},
    { donor_name: 'anonymous', Amount: 30, Date: '2020-11-11 05:09:10', TxId: '80DC4542EDDD1FDBB157C49A31D3AEC73FF086ED2F825D84E6AC26', 'Recipient':'0x1084232c04628c147c9e5c6ddef2b1ce4d81d8d8', 'Type': 'Recipient'},
    { donor_name: 'Geneva', Amount: 22, Date: '2020-11-09 02:39:52', TxId: 'E8091EA72BA0E5D0150128B2A4AA059D1F2B55497AA27F3279C2', 'Recipient':'0x1084232c04628c147c9e5c6ddef2b1ce4d81d8d8', 'Type': 'Recipient'},
    { donor_name: 'Jami', Amount: 13, Date: '2020-10-26 12:14:55', TxId: 'd768deaa8b7acd43ea1122155140d33604cef1fa22a9f22548cd2872a7654b84', 'Recipient':'0x16e32b711652088863a1de3863458663c901a664', 'Type': 'CrowdFund'},
    { donor_name: 'Larsen', Amount: 11, Date: '2020-10-04 00:36:01', TxId: '138A4C381D792DA6C908E94BFF62E970369F138C77A60D8AEEA42', 'Recipient':'0x16e32b711652088863a1de3863458663c901a664', 'Type': 'CrowdFund'},
    { donor_name: 'anonymous', Amount: 2, Date: '2020-09-25 09:00:57', TxId: '9EA08DC1193A8497D50820D0BFE11B178F43928A8F5EA0432D6D4', 'Recipient':'0x16e32b711652088863a1de3863458663c901a664', 'Type': 'CrowdFund'},
    { donor_name: 'anonymous', Amount: 3, Date: '2020-09-23 23:22:45', TxId: '7F7A5B0C26CEE075FB105FB06484BBDC48683E8F608CEAD957B3', 'Recipient':'0x1d60ed961bcc7f842a77381934d1756502085fcd', 'Type': 'NPO'},
    { donor_name: 'Leonid Korobov', Amount: 6, Date: '2020-08-28 09:06:05', TxId: '0x1afc5c7f3d53569f6c4eee1cbc481d92fc1f2a1b33d3740ea953c519', 'Recipient':'0x1d60ed961bcc7f842a77381934d1756502085fcd', 'Type': 'NPO'},
    { donor_name: 'CryptoVoin', Amount: 999, Date: '2020-08-27 02:09:29', TxId: '95BABABCCC2CF8C07E7111807A9158ABF510212BD3F2A83281FD', 'Recipient':'0x1d60ed961bcc7f842a77381934d1756502085fcd', 'Type': 'NPO'},
    { donor_name: 'anonymous', Amount: 88, Date: '2020-08-22 21:41:41', TxId: '4c3b6fa2587bdd6db16486c980cb21a09a3f073c4df15bac9e0ce0eca629c7f3', 'Recipient':'0x1d60ed961bcc7f842a77381934d1756502085fcd', 'Type': 'NPO'},
    { donor_name: 'John', Amount: 100, Date: '2020-11-16 22:37:35', TxId: '7E875BC96056A16C051BE55E67717D7A9CA40281B999F2257FBF', 'Recipient':'0x1d60ed961bcc7f842a77381934d1756502085fcd', 'Type': 'NPO'},
    { donor_name: 'John', Amount: 30, Date: '2020-11-11 05:09:10', TxId: '80DC4542EDDD1FDBB157C49A31D3AEC73FF086ED2F825D84E6AC26', 'Recipient':'0x1084232c04628c147c9e5c6ddef2b1ce4d81d8d8', 'Type': 'Recipient'},
    { donor_name: 'John', Amount: 22, Date: '2020-11-09 02:39:52', TxId: 'E8091EA72BA0E5D0150128B2A4AA059D1F2B55497AA27F3279C2', 'Recipient':'0x1084232c04628c147c9e5c6ddef2b1ce4d81d8d8', 'Type': 'Recipient'},
    { donor_name: 'John', Amount: 13, Date: '2020-10-26 12:14:55', TxId: 'd768deaa8b7acd43ea1122155140d33604cef1fa22a9f22548cd2872a7654b84', 'Recipient':'0x1d60ed961bcc7f842a77381934d1756502085fcd', 'Type': 'NPO'},
    { donor_name: 'John', Amount: 11, Date: '2020-10-04 00:36:01', TxId: '138A4C381D792DA6C908E94BFF62E970369F138C77A60D8AEEA42', 'Recipient':'0x1d60ed961bcc7f842a77381934d1756502085fcd', 'Type': 'NPO'},
    { donor_name: 'John', Amount: 200, Date: '2020-09-25 09:00:57', TxId: '9EA08DC1193A8497D50820D0BFE11B178F43928A8F5EA0432D6D4', 'Recipient':'0x16e32b711652088863a1de3863458663c901a664', 'Type': 'CrowdFund'},
    { donor_name: 'John', Amount: 300, Date: '2020-09-23 23:22:45', TxId: '7F7A5B0C26CEE075FB105FB06484BBDC48683E8F608CEAD957B3', 'Recipient':'0x16e32b711652088863a1de3863458663c901a664', 'Type': 'CrowdFund'},

  ],
  'balance': 88888,
  'mydonations': [
    { donor_name: 'John', Amount: 100, Date: '2020-11-16 22:37:35', TxId: '7E875BC96056A16C051BE55E67717D7A9CA40281B999F2257FBF', 'Recipient':'0x1d60ed961bcc7f842a77381934d1756502085fcd', 'Type': 'NPO'},
    { donor_name: 'John', Amount: 30, Date: '2020-11-11 05:09:10', TxId: '80DC4542EDDD1FDBB157C49A31D3AEC73FF086ED2F825D84E6AC26', 'Recipient':'0x1084232c04628c147c9e5c6ddef2b1ce4d81d8d8', 'Type': 'Recipient'},
    { donor_name: 'John', Amount: 22, Date: '2020-11-09 02:39:52', TxId: 'E8091EA72BA0E5D0150128B2A4AA059D1F2B55497AA27F3279C2', 'Recipient':'0x1084232c04628c147c9e5c6ddef2b1ce4d81d8d8', 'Type': 'Recipient'},
    { donor_name: 'John', Amount: 13, Date: '2020-10-26 12:14:55', TxId: 'd768deaa8b7acd43ea1122155140d33604cef1fa22a9f22548cd2872a7654b84', 'Recipient':'0x1d60ed961bcc7f842a77381934d1756502085fcd', 'Type': 'NPO'},
    { donor_name: 'John', Amount: 11, Date: '2020-10-04 00:36:01', TxId: '138A4C381D792DA6C908E94BFF62E970369F138C77A60D8AEEA42', 'Recipient':'0x1d60ed961bcc7f842a77381934d1756502085fcd', 'Type': 'NPO'},
    { donor_name: 'John', Amount: 200, Date: '2020-09-25 09:00:57', TxId: '9EA08DC1193A8497D50820D0BFE11B178F43928A8F5EA0432D6D4', 'Recipient':'0x16e32b711652088863a1de3863458663c901a664', 'Type': 'CrowdFund'},
    { donor_name: 'John', Amount: 300, Date: '2020-09-23 23:22:45', TxId: '7F7A5B0C26CEE075FB105FB06484BBDC48683E8F608CEAD957B3', 'Recipient':'0x16e32b711652088863a1de3863458663c901a664', 'Type': 'CrowdFund'},
  ]
}

const actions = {
  makeDonation ({ commit }, { data }) {
    commit('set_donations', data )
  },
  updateBalance ({ commit }, { tmpAmount } ) {
    commit('update_balance', tmpAmount)
  }
};

const mutations = {
  set_donations (state, data) {
    state.donations = [data].concat(state.donations)
    state.mydonations = [data].concat(state.mydonations)
  },
  update_balance (state, amount) {
    state.balance -= amount
  }
};

export const donations = {
  namespaced: true,
  state,
  actions,
  mutations,
};
