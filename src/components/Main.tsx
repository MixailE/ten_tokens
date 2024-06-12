import { useState } from 'react'
import { ConnectWallet, WalletInstance } from '@thirdweb-dev/react'
import Search from 'components/Search'
import Profile from 'components/Profile'
import SelectAddress from 'components/SelectAddress'
import ConnectedAddress from 'components/ConnectedAddress'
import ArrowBack from 'icons/ArrowBack'
import { AsyncBoundary } from '@rest-hooks/react'
import ErrorList from './ErrorList'

export default function () {
  const [input, setInput] = useState<string | undefined>('')

  async function onConnect(wallet: WalletInstance) {
    setInput(await wallet.getAddress())
  }

  function onReset() {
    setInput('')
  }

  return (
    <div className="sm:p-1 container mx-auto max-w-full sm:max-w-[1060px]">
      <div className="flex justify-center mt-5">
        <div className="w-full flex flex-col justify-center">
          <div className="flex gap-4 flex-col-reverse mx-3 md:mx-0 sm:flex-row">
            <div className="flex-grow flex">
              <AsyncBoundary fallback={null} errorComponent={ErrorList}>
                <Search value={input} onChange={setInput} />
              </AsyncBoundary>
            </div>
            <div>
              <ConnectWallet
                className="w-full"
                onConnect={onConnect}
                detailsBtn={ConnectedAddress}
              />
            </div>
          </div>

          {input ? (
            <>
              <div className="mt-3 mx-3 md:mx-0 mb-3">
                <a
                  className="flex gap-1 text-blue-400 items-center cursor-pointer"
                  onClick={onReset}
                >
                  <ArrowBack className="w-6 h-6" /> Back
                </a>
              </div>
              <Profile address={input} />
            </>
          ) : (
            <div className="mx-3 md:mx-0 mt-5">
              <SelectAddress onClick={setInput} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
