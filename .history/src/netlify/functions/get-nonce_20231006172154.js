eexport async function handler(event, context) {
  const nonce = generateNonce('Sign to login in to Mesh: ')
  return {
    statusCode: 200,
    body: JSON.stringify({ nonce }),
  }
}
