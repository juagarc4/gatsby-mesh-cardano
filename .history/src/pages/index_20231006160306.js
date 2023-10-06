import React, { useState } from 'react'
import { MeshProvider, CardanoWallet, MeshBadge, useWallet } from '@meshsdk/react'
import { backendGetNonce, backendVerifySignature } from '../backend'

export default function Page() {
  return (
    <MeshProvider>
      <Home />
    </MeshProvider>
  )
}
