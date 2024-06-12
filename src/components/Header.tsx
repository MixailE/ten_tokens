import { ConnectWallet, WalletInstance } from '@thirdweb-dev/react'
import useLowercasedAddress from 'helpers/useLowercasedAddress'
import Search from './Search'
import ConnectedAddress from './ConnectedAddress'

export default function ({
  search,
  onChangeSearch,
}: {
  search: string | undefined
  onChangeSearch: (search?: string) => void
}) {
  const address = useLowercasedAddress()

  async function onConnect(wallet: WalletInstance) {
    onChangeSearch(await wallet.getAddress())
  }

  return (
    <div
      className={`flex gap-4 mx-3 md:mx-0 ${address ? 'flex-col-reverse sm:flex-row' : ''}`}
    >
      <div className="flex-grow flex">
        <Search value={search} onChange={onChangeSearch} />
      </div>
      <div>
        <ConnectWallet
          btnTitle="Connect"
          className="w-full !min-w-20 md:!min-w-36"
          onConnect={onConnect}
          detailsBtn={ConnectedAddress}
        />
      </div>
    </div>
  )
}
