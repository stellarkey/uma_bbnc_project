import axios from 'axios'

const API_URL = process.env.API_URL || 'http://localhost:8080'

const api = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

api.interceptors.request.use(
  (config) => {
    let token = localStorage.token
    if (token) {
      config.headers['Authorization'] = `Bearer ${ token }`
    }

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

export default api