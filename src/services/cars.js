import axios from 'axios'
const baseUrl = 'http://localhost:3002/api/cars'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then((response) => response.data)
}

export default {
  getAll: getAll,
  create: create,
  update: update,
}
