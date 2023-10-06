import { generateNonce } from '@meshsdk/core'

exports.handler = async function backendGetNonce(userAddress) {
  const nonce = generateNonce('Sign to login in to Mesh: ')
  return nonce
}
