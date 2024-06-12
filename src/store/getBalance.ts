import { Endpoint } from "@rest-hooks/rest";
import { Token } from "./Token";
import { Portfolio } from "./Portfolio";
import fetchERC20Balance from "helpers/fetchERC20Balance";
import getBalance from "helpers/getBalance";
import fetchERC20BalanceAndAllowance from "helpers/fetchERC20BalanceAndAllowance";

export const getTokenBalancesAndAllowances = new Endpoint(
  async ({ address, tokens }: { address: string; tokens: Token[] }) => {
    const nonNative = tokens
      .filter((token) => !token.isNative)
      .map((token) => token.address);
    const { balance: balances, allowance: tokenAllowance } =
      await fetchERC20BalanceAndAllowance(address, nonNative);

    const nativeToken = tokens.find((token) => token.isNative);
    if (nativeToken) {
      const nativeBalance = await getBalance(address);
      balances[nativeToken.address] = nativeBalance;
    }

    return {
      address: address.toLowerCase(),
      balances,
      tokenAllowance,
    };
  },
  {
    name: "getTokenBalancesAndAllowances",
    schema: Portfolio,
  }
);

export const getTokenBalances = new Endpoint(
  async ({ address, tokens }: { address: string; tokens: Token[] }) => {
    const nonNative = tokens
      .filter((token) => !token.isNative)
      .map((token) => token.address);
    const balances = await fetchERC20Balance(address, nonNative);
    const nativeToken = tokens.find((token) => token.isNative);
    if (nativeToken) {
      const nativeBalance = await getBalance(address);
      balances[nativeToken.pk()] = nativeBalance;
    }

    return {
      address: address.toLowerCase(),
      balances,
    };
  },
  {
    name: "getTokenBalances",
    schema: Portfolio,
    pollFrequency: 5000,
  }
);
