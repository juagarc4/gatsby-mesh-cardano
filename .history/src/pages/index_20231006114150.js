import * as React from 'react'
import { MeshProvider, CardanoWallet } from '@meshsdk/react'
import ConnectWallet from '../components/ConnectWallet'

import styles from '@/styles/global.css'

const IndexPage = () => {
  return (
    <MeshProvider>
      <main className={`${styles.main} ${inter.className}`}></main>
        <ConnectWallet />
      </main>
    </MeshProvider>
  )
}

export const Head = () => <title>Home Page</title>
export default IndexPage
