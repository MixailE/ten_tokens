import { Endpoint } from '@rest-hooks/rest'
import { publicMainnetProvider } from 'helpers/getProvider'
import { ENS } from './ENS'

export const ensRegex =
  /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/

export const getAddressByENS = new Endpoint(
  async (search: string) => {
    const address = await publicMainnetProvider.resolveName(search)

    return {
      address,
      ensName: search,
    }
  },
  {
    name: 'getAddressByENS',
    schema: ENS,
  }
)

export const getENSByAddress = new Endpoint(
  async (address: string) => {
    const ensName = await publicMainnetProvider.lookupAddress(address)

    return {
      address,
      ensName,
    }
  },
  {
    name: 'getENSByAddress',
    schema: ENS,
  }
)
