import ProfileInfo from './ProfileInfo'
import ArrowBack from 'icons/ArrowBack'

export function WalletCard({
  address,
  onClick,
}: {
  address: string
  onClick: (address: string) => void
}) {
  return (
    <div
      onClick={() => onClick(address)}
      className="bg-white rounded-lg p-6 flex flex-row justify-between items-center cursor-pointer"
    >
      <ProfileInfo address={address} title="Wallet" />

      <button
        type="button"
        className="text-slate-500 focus:backdrop-brightness-90 focus:outline-none font-medium text-sm"
      >
        <ArrowBack className="w-6 h-6 rotate-180" />
      </button>
    </div>
  )
}