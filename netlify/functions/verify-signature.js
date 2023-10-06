import { checkSignature } from '@meshsdk/core'

export async function handler(event, context) {
  const nonce = event.body.nonce // this is only for demo purposes
  const userAddress = event.body.userAddress
  const signature = event.body.signature

  // do: get 'nonce' from user (database) using 'userAddress'

  // do: check signature
  const result = checkSignature(nonce, userAddress, signature)

  // do: update 'nonce' in the database with another random string

  // do: do what you need after user proof ownership
  // it could be creating a valid JSON Web Token (JWT) or session
  // it could be doing something offchain
  // it could just be updating something in the database
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ result }),
  }
}
