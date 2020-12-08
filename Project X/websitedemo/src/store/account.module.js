import { userService } from 'service'

const password = localStorage.getItem('password');
console.log(password, 'aasd')
const state = password === 'asdasdasd'
    ? { status: { isLoggedIn: true }, password }
    : { status: {}, user: {} };

const actions = {
  signIn ({ commit }, {email, password}) {
    return new Promise((resolve, reject) => {
      if (password === 'asdasdasd') {
        localStorage.setItem('password', password)
        commit('set_user', 'user')
        resolve(true)
      } else {
        localStorage.removeItem('password')
        reject('wrong password')
      }
      // userService.signIn(email, password).then(res => {
      //   localStorage.setItem('user', JSON.stringify(res.data))
      //   localStorage.token = res.data.data.token
      //   commit('set_user', res.data)
      //   resolve(res)
      // }).catch(err => {
      //   localStorage.removeItem('user')
      //   delete localStorage.token
      //   reject(err)
      // })
    })
  },

  signUp ({ commit }, {user}) {
    return new Promise((resolve, reject) => {
      userService.signUp(user).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },

  signOut ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('sign_out')
      localStorage.removeItem('password')
      resolve(true)
      // userService.signOut().then(res => {
      //   commit('sign_out')
      //   localStorage.removeItem('password')
      //   resolve(res)
      // }).catch(err => {
      //   reject(err)
      // })
    })
  },

  forgotPassword ({ commit }, {email}) {
    return new Promise((resolve, reject) => {
      userService.forgotPassword(email).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },

  resetPassword ({ commit }, {token, password}) {
    return new Promise((resolve, reject) => {
      userService.resetPassword(token, password).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },

  verifyToken({ commit }, {token}) {
    return new Promise((resolve, reject) => {
      userService.verifyToken(token).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },

  verifyEmail({ commit }, {token}) {
    return new Promise((resolve, reject) => {
      userService.verifyEmail(token).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

};

const mutations = {
  set_user (state, user) {
    state.user = user
    state.status = { isLoggedIn: true }
  },
  sign_out (state) {
    state.user = {}
    state.status = {}
  }
};

export const account = {
  namespaced: true,
  state,
  actions,
  mutations,
};
