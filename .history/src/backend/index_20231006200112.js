import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:9999/.netlify/functions/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  mode: 'no-cors',
})

export async function post(route, body = {}) {
  return await instance
    .post(`${route}`, body)
    .then(({ data }) => {
      return data
    })
    .catch((error) => {
      throw error
    })
}

export async function get(route) {
  return await instance
    .get(`${route}`)
    .then(({ data }) => {
      return data
    })
    .catch((error) => {
      throw error
    })
}

export async function backendGetNonce(userAddress) {
  return await get('get-nonce', { userAddress })
}

export async function backendVerifySignature(nonce, userAddress, signature) {
  console.log(nonce)
  return await post('verify-signature', { nonce, userAddress, signature })
}
