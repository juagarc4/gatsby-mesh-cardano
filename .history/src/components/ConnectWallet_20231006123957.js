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
          <>
            <p> You're connected to:</p>
            <div className='selected'>
              <img alt={selectedWallet.name} src={selectedWallet.icon} style={{ width: '48px' }} />
              <span>{selectedWallet.name}</span>
            </div>
          </>
        ) : (
          <p>Connect wallet</p>
        )}
      </div>
      <div>
        {!selectedWallet && !connecting && (
          <ul className='wallets'>
            {wallets.map((wallet) => (
              <li role="button"
              tabindex={0} key={wallet.name} onClick={() => handleWalletSelection(wallet)}>
                <img alt={wallet.name} src={wallet.icon} style={{ width: '48px' }} />
                <span>{wallet.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedWallet && <button onClick={handleDisconnect}>Disconnect</button>}
    </>
  )
}

export default ConnectWallet
