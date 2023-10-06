import React, { useState } from 'react'
import { CardanoWallet, MeshBadge, useWallet } from '@meshsdk/react'
import { backendGetNonce, backendVerifySignature } from '../backend'

export default function Home() {
  const { wallet, connected } = useWallet()
  const [state, setState] = useState(0)

  async function frontendStartLoginProcess() {
    if (connected) {
      setState(1)
      const userAddress = (await wallet.getRewardAddresses())[0]
      const res = await backendGetNonce(userAddress)
      await frontendSignMessage(res.nonce)
    }
  }

  async function frontendSignMessage(nonce) {
    try {
      const userAddress = (await wallet.getRewardAddresses())[0]
      const signature = await wallet.signData(userAddress, nonce)
      const res = await backendVerifySignature(nonce, userAddress, signature)
      if (res.result === true) {
        setState(2)
      } else {
        setState(3)
      }
    } catch (error) {
      setState(0)
    }
  }
console.log(first)
  return (
    <div className='container'>
      <main className='main'>
        <h1 className='title'>
          <a href='https://meshjs.dev/'>Mesh</a> Sign in with Wallet
        </h1>

        <div className='demo'>
          {state === 0 && <CardanoWallet label='Sign In' onConnected={() => frontendStartLoginProcess()} />}
          {state === 1 && <div>Signing in...</div>}
          {state === 2 && <div style={{ color: '#3D9970' }}>Signed in successful</div>}
          {state === 3 && <div style={{ color: '#FF4136' }}>Signed in failed</div>}
        </div>
      </main>

      <footer className='footer'>
        <MeshBadge dark={true} />
      </footer>
    </div>
  )
}

export function Head() {
  return (
    <>
      <title>Mesh App on Cardano</title>
      <meta name='description' content='A Cardano dApp powered my Mesh' />
      <link rel='icon' href='https://meshjs.dev/favicon/favicon-32x32.png' />
      <link href='https://meshjs.dev/css/template.css' rel='stylesheet' key='mesh-demo' />
    </>
  )
}
