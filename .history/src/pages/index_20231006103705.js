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

export const Head = () => <title>Home Page</title>
