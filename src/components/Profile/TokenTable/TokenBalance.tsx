import { ethers } from 'ethers'
import { formatNumber } from 'helpers/formatNumber'

interface TokenBalanceProps {
  symbol: string
  decimals: number
  balance: bigint | undefined
}

export function TokenBalance({ symbol, decimals, balance }: TokenBalanceProps) {
  if (balance === undefined) {
    return <>- {symbol}</>
  }

  if (balance === 0n) {
    return <>0 {symbol}</>
  }

  const formattedBalance = parseFloat(
    ethers.utils.formatUnits(balance, decimals)
  )
  return (
    <>
      {formatNumber(formattedBalance)} {symbol}
    </>
  )
}
