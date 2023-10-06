import React, { useState } from 'react'
import { MeshProvider, CardanoWallet, MeshBadge, useWallet } from '@meshsdk/react'

export default function Page() {
  return (
    <MeshProvider>
      <Home />
    </MeshProvider>
  )
}
