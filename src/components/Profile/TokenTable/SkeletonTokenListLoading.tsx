import TokenImage from 'components/Profile/TokenTable/TokenImage'
import TokenListHeader from 'components/Profile/TokenTable/TokenListHeader'
import { Token } from 'store/Token'
import RowTemplate from 'components/Profile/TokenTable/RowTemplate'

export default function ({ tokens }: { tokens: Token[] }) {
  return (
    <ul role="status" className="w-full flex flex-col animate-pulse">
      <TokenListHeader />
      {tokens.map((token) => (
        <RowTemplate
          image={
            <TokenImage
              className="md:w-6 w-10 h-10 md:h-6"
              address={token.address}
            />
          }
          balance={
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          }
          allowance={
            <div className="w-20 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          }
          name={token.name}
          key={token.address}
        />
      ))}
    </ul>
  )
}
