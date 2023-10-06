exports.handler = async function (event, context) {

  mport { checkSignature, generateNonce } from '@meshsdk/core';

async function backendGetNonce(userAddress) {
  const nonce = generateNonce('Sign to login in to Mesh: ');
  return nonce;
}
};
