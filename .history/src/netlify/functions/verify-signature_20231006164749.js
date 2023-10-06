import { checkSignature } from '@meshsdk/core'

exports.handler = async function (event, context) {
  const nonce = exports.handler = async function (event, context) {
.body.nonce // this is only for demo purposes
  const userAddress = req.body.userAddress
  const signature = req.body.signature

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
    body: JSON.stringify({ result }),
  }
}
