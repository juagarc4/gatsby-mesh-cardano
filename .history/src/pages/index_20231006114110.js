import * as React from 'react'
import { MeshProvider, CardanoWallet } from '@meshsdk/react'
import ConnectWallet from '../components/ConnectWallet'

import styles from '@/styles/Home.module.css'

const IndexPage = () => {
  return (
    <MeshProvider>
      <main>
        <ConnectWallet />
      </main>
    </MeshProvider>
  )
}

export const Head = () => <title>Home Page</title>
export default IndexPage
