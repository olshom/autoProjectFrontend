import axios from 'axios'
const baseUrl = 'http://localhost:3001/states'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = (newState) => {
  return axios.post(baseUrl, newState)
}

export default {
  getAll: getAll,
  create: create,
}
