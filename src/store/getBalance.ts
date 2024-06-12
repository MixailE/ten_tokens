import { Endpoint } from '@rest-hooks/rest'
import { Token } from './Token'
import { Portfolio } from './Portfolio'
import fetchERC20Balance from 'helpers/fetchERC20Balance'
import getBalance from 'helpers/getBalance'
import fetchERC20BalanceAndAllowance from 'helpers/fetchERC20BalanceAndAllowance'

export const getTokenBalancesAndAllowances = new Endpoint(
  async ({ address, tokens }: { address: string; tokens: Token[] }) => {
    try {
      const nonNative = tokens
        .filter((token) => !token.isNative)
        .map((token) => token.address)
      const { balance: balances, allowance: tokenAllowance } =
        await fetchERC20BalanceAndAllowance(address, nonNative)

      const nativeToken = tokens.find((token) => token.isNative)
      if (nativeToken) {
        const nativeBalance = await getBalance(address)
        balances[nativeToken.address] = nativeBalance
      }
      return {
        address,
        balances,
        tokenAllowance,
      }
    } catch (e) {
      console.error(e)
      return {
        address,
      }
    }
  },
  {
    name: 'getTokenBalancesAndAllowances',
    schema: Portfolio,
  }
)

export const getTokenBalances = new Endpoint(
  async ({ address, tokens }: { address: string; tokens: Token[] }) => {
    try {
      const nonNative = tokens
        .filter((token) => !token.isNative)
        .map((token) => token.address)
      const balances = await fetchERC20Balance(address, nonNative)
      const nativeToken = tokens.find((token) => token.isNative)
      if (nativeToken) {
        const nativeBalance = await getBalance(address)
        balances[nativeToken.pk()] = nativeBalance
      }
      return {
        address,
        balances,
      }
    } catch (e) {
      console.error(e)
      return {
        address,
      }
    }
  },
  {
    name: 'getTokenBalances',
    schema: Portfolio,
    pollFrequency: 5000,
  }
)
