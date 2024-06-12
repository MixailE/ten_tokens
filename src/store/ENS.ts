import { Entity, Index } from '@rest-hooks/rest'

export class ENS extends Entity {
  address: string | null = ''
  ensName: string | null = null

  pk() {
    return this.address || '0x'
  }

  static override indexes = ['address', 'ensName'] as const
  static override key = 'ENS'
}

export const ENSIndex = new Index(ENS)
