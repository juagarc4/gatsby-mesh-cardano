import * as React from 'react'
import { MeshProvider, CardanoWallet } from '@meshsdk/react'
import ConnectWallet from '../components/ConnectWallet'

const IndexPage = () => {
  return (
    <MeshProvider>
      <main>
        <CardanoWallet />
      </main>
    </MeshProvider>
  )
}

export const Head = () => <title>Home Page</title>
export default IndexPage
