import React from 'react'
import { MeshProvider } from '@meshsdk/react'

export default function Page() {
  return (
    <MeshProvider>
      <Home />
    </MeshProvider>
  )
}
