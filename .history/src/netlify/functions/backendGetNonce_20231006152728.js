exports.handler = async function (userAddress) {

  mport { checkSignature, generateNonce } from '@meshsdk/core';

async function backendGetNonce(userAddress) {
  const nonce = generateNonce('Sign to login in to Mesh: ');
  return nonce;
}
};
