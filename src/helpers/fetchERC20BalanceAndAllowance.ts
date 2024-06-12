import getProvider from './getProvider'
import { ERC20Abi } from './ERC20Abi'
import { ROUTER_CONTRACT_ADDRESS } from './constants'
import { ethers } from 'ethers'
import getMultiCallService from './getMultiCallService'
import { MultiCallParams } from '@1inch/multicall'

const params: MultiCallParams = {
  chunkSize: 100,
  retriesLimit: 3,
  blockNumber: 'latest',
}

export default async function fetchERC20BalanceAndAllowance(
  address: string,
  tokens: string[]
) {
  const provider = getProvider()

  const callData = tokens.reduce(
    (payload, token) => {
      return payload.concat([
        {
          to: token,
          data: provider.contractEncodeABI(ERC20Abi, token, 'balanceOf', [
            address,
          ]),
        },
        {
          to: token,
          data: provider.contractEncodeABI(ERC20Abi, token, 'allowance', [
            address,
            ROUTER_CONTRACT_ADDRESS,
          ]),
        },
      ])
    },
    [] as { to: string; data: string }[]
  )

  const multiCallService = getMultiCallService(provider)
  const result = await multiCallService.callByChunks(callData, params)

  const balancesAndAllowances = result.map((x) =>
    ethers.utils.defaultAbiCoder.decode(['uint256'], x)[0].toString()
  )

  const balance = tokens.reduce(
    (result, token, index) => ({
      ...result,
      [token]: BigInt(balancesAndAllowances[2 * index]),
    }),
    {} as { [key: string]: bigint }
  )

  const allowance = tokens.reduce(
    (result, token, index) => ({
      ...result,
      [token]: BigInt(balancesAndAllowances[2 * index + 1]),
    }),
    {} as { [key: string]: bigint }
  )

  return {
    balance,
    allowance,
  }
}
