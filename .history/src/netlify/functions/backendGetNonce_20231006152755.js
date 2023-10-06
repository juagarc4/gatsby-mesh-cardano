
exports.handler = async function (userAddress) {
  const nonce = generateNonce('Sign to login in to Mesh: ')
  return nonce
}
