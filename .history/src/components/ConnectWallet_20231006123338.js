import React, { useState, useEffect } from 'react'
import { useWallet, useWalletList } from '@meshsdk/react'

const ConnectWallet = () => {
  const [selectedWallet, setSelectedWallet] = useState(null)

  const { connect, disconnect, connecting } = useWallet()
  const wallets = useWalletList()

  useEffect(() => {
    const storedWallet = localStorage.getItem('selectedWallet')
    if (storedWallet) {
      setSelectedWallet(JSON.parse(storedWallet))
      connect(JSON.parse(storedWallet).name)
    }
  }, [connect])

  const handleWalletSelection = (wallet) => {
    localStorage.setItem('selectedWallet', JSON.stringify(wallet))
    setSelectedWallet(wallet)
    connect(wallet.name)
  }

  const handleDisconnect = () => {
    localStorage.removeItem('selectedWallet')
    disconnect()
    setSelectedWallet(null)
  }

  return (
    <>
      <div>
        {selectedWallet ? (
          <div className='selected'>
            <img alt={selectedWallet.name} src={selectedWallet.icon} style={{ width: '48px' }} />
            <span>{selectedWallet.name}</span>
          </div>
        ) : (
          <div>Connect wallet</div>
        )}
      </div>
      <div>
        {!selectedWallet && !connecting && (
          <ul className='wallets'>
            {wallets.map((wallet) => (
              <li key={wallet.name} onClick={handleWalletSelection(wallet)}>
                <img alt={wallet.name} src={wallet.icon} style={{ width: '48px' }} />
                <span>{wallet.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>{selectedWallet && <button onClick={() => handleDisconnect}>disconnect</button>}</div>
    </>
  )
}

export default ConnectWallet
