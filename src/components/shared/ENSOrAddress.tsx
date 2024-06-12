import { Suspense } from 'react'
import { useCache, useSuspense } from '@rest-hooks/react'
import { ENSIndex } from 'store/ENS'
import { getENSNameByAddress } from 'store/getENSName'
import Address from 'components/shared/Address'

function TruncatedENSName({ name }: { name: string }) {
  return (
    <span className="block overflow-hidden whitespace-nowrap text-ellipsis truncate">
      {name}
    </span>
  )
}

function ENSResolver({ address }: { address: string }) {
  const ensRecord = useSuspense(getENSNameByAddress, address)
  if (ensRecord && ensRecord.ensName)
    return <TruncatedENSName name={ensRecord.ensName} />

  return <Address address={address} />
}

export default function ENSAddress({ address }: { address: string }) {
  const cache = useCache(ENSIndex, { address })
  if (cache && cache.ensName) return <TruncatedENSName name={cache.ensName} />

  return (
    <Suspense
      fallback={
        <span className="animate-pulse">
          <Address address={address} />
        </span>
      }
    >
      <ENSResolver address={address} />
    </Suspense>
  )
}
