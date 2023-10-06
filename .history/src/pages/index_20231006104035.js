import * as React from 'react'
import { MeshProvider } from '@meshsdk/react'

const IndexPage = () => {
  return (
    <MeshProvider>
      <Component {...pageProps} />
    </MeshProvider>
  )
}

export const Head = () => <title>Home Page</title>
export default IndexPage
