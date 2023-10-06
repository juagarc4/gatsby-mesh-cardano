import React from 'react'
import { MeshProvider } from '@meshsdk/react'
import {Home}

export default function Page() {
  return (
    <MeshProvider>
      <Home />
    </MeshProvider>
  )
}
