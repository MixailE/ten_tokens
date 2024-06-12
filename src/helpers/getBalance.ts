import { web3Provider } from './getProvider'

export default async function fetchNativeBalance(address: string) {
  const provider = web3Provider()

  return provider.eth.getBalance(address)
}
