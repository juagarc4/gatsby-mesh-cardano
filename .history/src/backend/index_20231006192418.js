// import axios from 'axios'

// const instance = axios.create({
//   baseURL: 'http://localhost:9999/.netlify/functions/',
//   withCredentials: true,
// })

// export async function post(route, body = {}) {
//   return await instance
//     .post(`${route}`, body)
//     .then(({ data }) => {
//       return data
//     })
//     .catch((error) => {
//       throw error
//     })
// }

export async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  console.log(response.json())
  return response.json() // parses JSON response into native JavaScript objects
}
export async function backendGetNonce(userAddress) {
  const data = postData('http://localhost:9999/.netlify/functions/get-nonce', { userAddress })
  console.log(data)
  return data
}

export async function backendVerifySignature(userAddress) {
  const data = postData('http://localhost:9999/.netlify/functions/verify-signature', { userAddress })
  console.log(data)
  return data
}
// export async function backendGetNonce(userAddress) {
//   return await post('get-nonce', { userAddress })
// }

// export async function backendVerifySignature(nonce, userAddress, signature) {
//   return await post('verify-signature', { nonce, userAddress, signature })
// }
