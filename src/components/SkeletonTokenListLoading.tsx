import TokenImage from './TokenImage'
import TokenListHeader from './TokenListHeader'
import { Token } from 'store/Token'

export default function ({ tokens }: { tokens: Token[] }) {
  return (
    <ul role="status" className="w-full flex flex-col animate-pulse">
      <TokenListHeader />
      {tokens.map((token) => (
        <li
          key={token.address}
          className="py-3 px-4 grid gap-x-2 grid-cols-custom-layout grid-rows-custom-layout md:grid-rows-1 h-[72px] md:h-14"
        >
          <span className="flex items-center justify-center md:w-6 w-10 mr-2 col-start-1 col-end-2 row-start-1 row-end-3">
            <TokenImage
              className="md:w-6 w-10 h-10 md:h-6"
              address={token.address}
            />
          </span>
          <span className="flex items-center max-w-32 truncate col-start-2 col-end-4 row-start-1 row-end-2 md:row-start-1 md:row-end-3 leading-normal">
            {token.name}
          </span>
          <span className="flex justify-start items-center md:hidden col-start-2 col-end-7 row-start-2 row-end-3">
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </span>
          <span className="flex justify-end items-center text-right col-start-7 col-end-8 row-start-1 row-end-3 md:row-end-2 md:col-start-6 md:col-end-7">
            <div className="w-20 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </span>
          <span className="justify-end items-center hidden text-right md:flex col-start-6 col-end-8 row-start-2 row-end-3 md:row-start-1 md:row-end-3">
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </span>
        </li>
      ))}
    </ul>
  )
}
