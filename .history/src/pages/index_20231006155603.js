import React from 'react'
import ReactDOM from 'react-dom'
import { MeshProvider } from '@meshsdk/react'

import Home from '../components/Home'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <MeshProvider>
    <Home />
  </MeshProvider>,
  rootElement
)
