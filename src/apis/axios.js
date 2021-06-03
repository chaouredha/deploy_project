import axios from 'axios'
import { API_BASE_URL } from 'config/config'

let instance = null

const getInstance = () => {
  if (instance) return instance
  instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000
  })

  return instance
}

export default getInstance
