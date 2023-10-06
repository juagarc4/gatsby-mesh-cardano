import { generateNonce } from '@meshsdk/core'

export async function handler(event, context) {
  const nonce = generateNonce('Sign to login in to Mesh: ')
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://example.com"
    },
    body: JSON.stringify({ nonce }),
  }
}
