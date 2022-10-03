import axios from 'axios'
const baseUrl = 'http://localhost:3002/api/workers'

const getAll = () => {
  return axios.get(baseUrl)
}

export default { getAll }
