import { checkSignature, generateNonce } from '@meshsdk/core'

async function backendGetNonce(userAddress) {
  const nonce = generateNonce('Sign to login in to Mesh: ')
  return nonce
}

async function backendVerifySignature(userAddress, signature) {
  // do: get 'nonce' from database

  const result = checkSignature(nonce, userAddress, signature)
  if (result) {
    // create JWT or approve certain process
  } else {
    // prompt user that signature is not correct
  }
}
