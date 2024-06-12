import { tokensData } from 'helpers/tokens'
import { Token as TokenEntry } from 'store/Token'
import { AsyncBoundary } from '@rest-hooks/react'
import TokenList from 'components/Profile/TokenTable/TokenList'
import ErrorList from 'components/Profile/TokenTable/ErrorList'
import ProfileInfo from 'components/shared/ProfileInfo'
import SkeletonTokenListLoading from 'components/Profile/TokenTable/SkeletonTokenListLoading'

const tokens = tokensData.map((token) => TokenEntry.fromJS(token))

export default function ({ address }: { address: string }) {
  if (!address) return null

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
            address={address}
            tokens={tokensData.map((token) => TokenEntry.fromJS(token))}
          />
        </AsyncBoundary>
      </div>
    </>
  )
}
