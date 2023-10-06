import { useState } from "react";
import { CardanoWallet, MeshBadge, useWallet } from "@meshsdk/react";
import { backendGetNonce, backendVerifySignature } from "../backend";

export default function Page() {
  const { wallet, connected } = useWallet();

  async function frontendStartLoginProcess() {
    if (connected) {
      const userAddress = (await wallet.getRewardAddresses())[0];
      const nonce = await backendGetNonce(userAddress);
      await frontendSignMessage(nonce);
    }
  }

  async function frontendSignMessage(nonce) {
    try {
      const userAddress = (await wallet.getRewardAddresses())[0];
      const signature = await wallet.signData(userAddress, nonce);
      await backendVerifySignature(userAddress, signature);
    } catch (error) {
      setState(0);
    }
  }

  return (
    <>
      <CardanoWallet
        label="Sign In with Cardano"
        onConnected={() => frontendStartLoginProcess()}
      />
    </>
  );
}
