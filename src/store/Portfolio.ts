import { Entity, Index, Query, schema } from '@rest-hooks/rest'
import { MAX_INT, NATIVE_ADDRESS } from 'helpers/constants'

export class Portfolio extends Entity {
  address: string = ''
  ensName: string | null = null
  balances: { [chainAndAddress: string]: bigint } = {}
  tokenAllowance: { [chainAndAddress: string]: bigint } = {}

  getAllowance(address: string) {
    // If the address is the native token (e.g., ETH), return the maximum integer value.
    // This is because native tokens do not have allowances like ERC-20 tokens.
    if (address === NATIVE_ADDRESS) {
      return MAX_INT
    }

    const key = address.toLowerCase()
    return this.tokenAllowance[key] ?? 0n
  }

  getBalance(address: string) {
    const key = address.toLowerCase()
    return this.balances[key] ?? 0n
  }

  pk() {
    return this.address
  }

  static override merge(existing: Portfolio, incoming: Portfolio) {
    return {
      ...existing,
      ...incoming,
      balances: {
        ...existing.balances,
        ...incoming.balances,
      },
      tokenAllowance: {
        ...existing.tokenAllowance,
        ...incoming.tokenAllowance,
      },
    }
  }

  static override indexes = ['address'] as const
  static override key = 'Portfolio'
}

export const PortfolioIndex = new Index(Portfolio)
export const allPortfolios = new Query(new schema.All(Portfolio))
