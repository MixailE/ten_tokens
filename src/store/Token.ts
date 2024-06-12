import { Entity } from '@rest-hooks/rest'
import { NATIVE_ADDRESS } from 'helpers/constants'

export class Token extends Entity {
  name: string = ''
  symbol: string = ''
  address: string = ''
  decimals: number = 0
  image: string = ''

  get isNative() {
    return this.address === NATIVE_ADDRESS
  }

  pk() {
    return this.address
  }

  static override key = 'Token'
}
