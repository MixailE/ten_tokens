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

  static override process(value: Token) {
    return { ...value, address: value.address.toLowerCase() }
  }

  pk() {
    return this.address.toLowerCase()
  }

  static override key = 'Token'
}
