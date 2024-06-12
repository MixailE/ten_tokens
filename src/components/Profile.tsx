import { tokensData } from 'helpers/tokens'
import { Token as TokenEntry } from 'store/Token'
import SkeletonTokenListLoading from './SkeletonTokenListLoading'
import { AsyncBoundary } from '@rest-hooks/react'
import TokenList from './TokenList'
import ErrorList from './ErrorList'
import ProfileInfo from './ProfileInfo'

export default function ({ address }: { address: string }) {
  if (!address) return null

  const tokens = tokensData.map((token) => TokenEntry.fromJS(token))

  return (
    <>
      <div className="bg-white rounded-lg p-6 flex flex-row md:w-2/5 lg:w-1/4 justify-between items-center">
        <ProfileInfo address={address} title="Wallet Overview" />
      </div>

      <div className="bg-white rounded-lg flex flex-col items-center">
        <AsyncBoundary
          fallback={<SkeletonTokenListLoading tokens={tokens} />}
          errorComponent={ErrorList}
        >
          <TokenList
            address={address.toLowerCase()}
            tokens={tokensData.map((token) => TokenEntry.fromJS(token))}
          />
        </AsyncBoundary>
      </div>
    </>
  )
}
