import { useCache } from '@rest-hooks/react'
import { allPortfolios } from 'store/Portfolio'
import { WalletCard } from './WalletCard'
import LoadExample from './LoadExample'
import { EXAMPLE_ADDRESS } from 'helpers/constants'
import useLowerCasedAddress from 'helpers/useLowercasedAddress'

export default function ({ onClick }: { onClick: (address: string) => void }) {
  const address = useLowerCasedAddress()
  const portfolios = useCache(allPortfolios)

  if (!address && (!portfolios || portfolios?.length === 0))
    return <LoadExample example={EXAMPLE_ADDRESS} onClick={onClick} />

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {address && <WalletCard address={address} onClick={onClick} />}
      {portfolios &&
        portfolios
          ?.filter((portfolio) => portfolio.address !== address)
          ?.map((portfolio) => (
            <WalletCard
              key={portfolio.address}
              address={portfolio.address}
              onClick={onClick}
            />
          ))}
    </div>
  )
}
