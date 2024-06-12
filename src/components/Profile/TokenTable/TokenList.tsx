import { useCache, useLive, useSuspense } from '@rest-hooks/react'
import {
  getTokenBalances,
  getTokenBalancesAndAllowances,
} from 'store/getBalance'
import { PortfolioIndex } from 'store/Portfolio'
import { Token as TokenEntry } from 'store/Token'
import TokenListHeader from 'components/Profile/TokenTable/TokenListHeader'
import Token from 'components/Profile/TokenTable/Token'

export default function List({
  address,
  tokens,
}: {
  address: string
  tokens: TokenEntry[]
}) {
  useSuspense(getTokenBalancesAndAllowances, {
    address,
    tokens,
  })

  useLive(getTokenBalances, {
    address,
    tokens,
  })

  const portfolio = useCache(PortfolioIndex, {
    address,
  })

  if (!tokens) return null

  return (
    <ul className="w-full flex flex-col">
      <TokenListHeader />
      {tokens.map((token) => (
        <Token
          key={token.pk()}
          {...token}
          balance={portfolio?.getBalance(token.address)}
          allowance={portfolio?.getAllowance(token.address)}
        />
      ))}
    </ul>
  )
}
