import * as React from 'react'
import { MeshProvider } from '@meshsdk/react'

const IndexPage = () => {
  return (
    <MeshProvider>
      <Component {...pageProps} />
    </MeshProvider>
  )
}

export default IndexPage
