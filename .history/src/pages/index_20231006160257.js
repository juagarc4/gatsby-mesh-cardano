import React, { useState } from 'react'
import { MeshProvider, CardanoWallet, MeshBadge, useWallet } from '@meshsdk/react'
import { backendGetNonce, backendVerifySignature } from '../backend'

export default function Page() {


  return (
    <MeshProvider>
      <Home
    </MeshProvider>
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
