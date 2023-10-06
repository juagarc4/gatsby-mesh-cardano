import React from 'react';
import ReactDOM from 'react-dom';
import { MeshProvider, CardanoWallet, MeshBadge, useWallet } from '@meshsdk/react'

import Home from './components/Home';

const rootElement = document.getElementById('root');
ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>,
   rootElement
);
