import { generateNonce } from '@meshsdk/core'

export default async function handler(req, res) {
  // do: if new user, create new user model in the database

  const nonce = generateNonce('Sign to login in to Mesh: ')

  // do: store 'nonce' in user model in the database

  // do: return 'nonce'
  res.status(200).json({ nonce })
}

exports.handler = async function (event, context) {
  const nonce = generateNonce('Sign to login in to Mesh: ')
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};
