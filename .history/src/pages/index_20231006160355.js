import React from 'react'
import { MeshProvider } from '@meshsdk/react'
import 

export default function Page() {
  return (
    <MeshProvider>
      <Home />
    </MeshProvider>
  )
}
