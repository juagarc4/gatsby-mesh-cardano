import * as React from 'react'
import { MeshProvider } from '@meshsdk/react'#
import { CardanoWallet } from '@meshsdk/react'


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
