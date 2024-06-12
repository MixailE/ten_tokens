import { ethers } from 'ethers'

interface TokenAllowanceProps {
  decimals: number
  allowance: bigint | undefined
}

export function TokenAllowance({ allowance, decimals }: TokenAllowanceProps) {
  if (allowance === undefined) {
    return <>-</>
  }

  if (allowance <= 0n) {
    return <></>
  }

  const formattedAllowance = parseFloat(
    ethers.utils.formatUnits(allowance, decimals)
  )

  return <>{formattedAllowance.toPrecision(4)}</>
}
