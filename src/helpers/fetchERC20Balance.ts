import { ERC20Abi } from 'helpers/ERC20Abi'
import { ethers } from 'ethers'
import { MultiCallParams } from '@1inch/multicall'
import getMultiCallService from './getMultiCallService'
import getProvider from './getProvider'

const params: MultiCallParams = {
  chunkSize: 100,
  retriesLimit: 3,
  blockNumber: 'latest',
}

export default async function fetchERC20Balance(
  address: string,
  tokens: string[]
) {
  const provider = getProvider()

  const callData = tokens.map((token) => {
    return {
      to: token,
      data: provider.contractEncodeABI(ERC20Abi, token, 'balanceOf', [address]),
    }
  })

  const multiCallService = getMultiCallService(provider)
  const result = await multiCallService.callByChunks(callData, params)

  const balances = result.map((x) =>
    ethers.utils.defaultAbiCoder.decode(['uint256'], x)[0].toString()
  )

  const balance = tokens.reduce(
    (result, token, index) => ({
      ...result,
      [token]: BigInt(balances[index]),
    }),
    {} as { [key: string]: bigint }
  )

  return balance
}
