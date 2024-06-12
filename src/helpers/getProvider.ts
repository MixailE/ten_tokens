import { Web3ProviderConnector } from '@1inch/multicall'
import { Chain } from './constants'
import Web3 from 'web3'
import { ethers } from 'ethers'

const chainProviderUrl = {
  [Chain.Ethereum]: 'https://cloudflare-eth.com',
}

export const publicMainnetProvider = new ethers.providers.JsonRpcProvider(
  chainProviderUrl[Chain.Ethereum]
)

export function web3Provider() {
  return new Web3(
    new Web3.providers.HttpProvider(chainProviderUrl[Chain.Ethereum])
  )
}

export default function () {
  return new Web3ProviderConnector(web3Provider())
}
