import { TokenAllowance } from 'components/Profile/TokenTable/TokenAllowance'
import { TokenBalance } from 'components/Profile/TokenTable/TokenBalance'
import TokenImage from 'components/Profile/TokenTable/TokenImage'

interface TokenProps {
  address: string
  name: string
  symbol: string
  wallet: string
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
    <li className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 py-3 px-4 grid gap-x-2 grid-cols-custom-layout grid-rows-custom-layout md:grid-rows-1 h-[72px] md:h-14">
      <span className="flex items-center justify-center md:w-6 w-10 mr-2 col-start-1 col-end-2 row-start-1 row-end-3">
        <TokenImage className="md:w-6 w-10 h-10 md:h-6" address={address} />
      </span>
      <span className="flex items-center max-w-32 truncate col-start-2 col-end-5 row-start-1 row-end-2 md:row-start-1 md:row-end-3 leading-normal">
        {name}
      </span>
      <span className="flex justify-start items-center md:hidden col-start-2 col-end-5 row-start-2 row-end-3">
        <TokenBalance decimals={decimals} symbol={symbol} balance={balance} />
      </span>
      <span className="flex justify-end items-center text-right col-start-5 col-end-6 row-start-1 row-end-3 md:row-end-2 md:col-start-4 md:col-end-5">
        <TokenAllowance allowance={allowance} decimals={decimals} />
      </span>
      <span className="justify-end items-center hidden text-right md:flex col-start-5 col-end-6 row-start-2 row-end-3 md:row-start-1 md:row-end-3">
        <TokenBalance balance={balance} symbol={symbol} decimals={decimals} />
      </span>
    </li>
  )
}
