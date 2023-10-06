import React from 'react'
import { MeshProvider } from '@meshsdk/react'
import Home from '../components/Home'
import '../styles/g'
export default function Page() {
  return (
    <MeshProvider>
      <Home />
    </MeshProvider>
  )
}
