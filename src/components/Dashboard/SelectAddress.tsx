import { useMemo } from 'react'
import { useCache } from '@rest-hooks/react'
import { allPortfolios } from 'store/Portfolio'
import { EXAMPLE_ADDRESS } from 'helpers/constants'
import useLowerCasedAddress from 'helpers/useLowercasedAddress'
import { WalletCard } from 'components/Dashboard/WalletCard'
import LoadExample from 'components/Dashboard/LoadExample'

export default function ({ onClick }: { onClick: (address: string) => void }) {
  const address = useLowerCasedAddress()
  const portfolios = useCache(allPortfolios)

  const addresses = useMemo(() => {
    const addresses = new Set<string>()

    if (address) addresses.add(address)
    portfolios?.forEach((portfolio) => addresses.add(portfolio.address))

    return [...addresses.keys()]
  }, [address, portfolios])

  if (addresses.length === 0)
    return <LoadExample example={EXAMPLE_ADDRESS} onClick={onClick} />

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {addresses.map((address) => (
        <WalletCard key={address} address={address} onClick={onClick} />
      ))}
    </div>
  )
}
