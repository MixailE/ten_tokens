import { Endpoint, NetworkError } from '@rest-hooks/rest'
import { publicMainnetProvider } from 'helpers/getProvider'
import { ENS } from './ENS'

export const ensRegex =
  /^(?=.{1,255}$)(?:(?!-)[a-z0-9-]{1,63}(?<!-)\.)+[a-z]{2,63}$/

export const getENSNameByName = new Endpoint(
  async (search: string) => {
    const address = await publicMainnetProvider.resolveName(search)

    return {
      address: address?.toLowerCase(),
      ensName: search,
    }
  },
  {
    name: 'getENSNameByName',
    schema: ENS,
  }
)

export const getENSNameByAddress = new Endpoint(
  async (address: string) => {
    const ensName = await publicMainnetProvider.lookupAddress(address)

    return {
      address: address?.toLowerCase(),
      ensName,
    }
  },
  {
    name: 'getENSNameByName',
    schema: ENS,
  }
)
