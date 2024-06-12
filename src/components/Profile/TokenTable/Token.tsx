import { TokenAllowance } from 'components/Profile/TokenTable/TokenAllowance'
import { TokenBalance } from 'components/Profile/TokenTable/TokenBalance'
import TokenImage from 'components/Profile/TokenTable/TokenImage'
import RowTemplate from 'components/Profile/TokenTable/RowTemplate'

interface TokenProps {
  address: string
  name: string
  symbol: string
  decimals: number
  balance: bigint | undefined
  allowance: bigint | undefined
}

export default function ({
  name,
  symbol,
  decimals,
  allowance,
  balance,
  address,
}: TokenProps) {
  return (
    <RowTemplate
      image={
        <TokenImage className="md:w-6 w-10 h-10 md:h-6" address={address} />
      }
      balance={
        <TokenBalance balance={balance} symbol={symbol} decimals={decimals} />
      }
      allowance={<TokenAllowance allowance={allowance} decimals={decimals} />}
      name={name}
    />
  )
}
