import { MultiCallService, ProviderConnector } from '@1inch/multicall'
import { Chain } from './constants'

const multiCallContractAddress = {
  [Chain.Ethereum]: '0x8d035edd8e09c3283463dade67cc0d49d6868063',
}

export default function (provider: ProviderConnector) {
  return new MultiCallService(
    provider,
    multiCallContractAddress[Chain.Ethereum]
  )
}
