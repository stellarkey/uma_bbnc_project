import user from './data/user'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export const userService = {
  signIn () {
    return fetch(user, 1000)
  }
}
