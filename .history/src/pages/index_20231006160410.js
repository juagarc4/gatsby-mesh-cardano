import React from 'react'
import { MeshProvider } from '@meshsdk/react'
import { Home } from '../components'

export default function Page() {
  return (
    <MeshProvider>
      <Home />
    </MeshProvider>
  )
}
