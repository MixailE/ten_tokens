import ProfileAvatar from './ProfileAvatar'
import ENSOrAddress from './ENSOrAddress'
import useLowercasedAddress from 'helpers/useLowercasedAddress'

export default function () {
  const address = useLowercasedAddress()

  if (!address) return <></>

  return (
    <div className="sm:p-2 flex flex-row gap-2 justify-between items-center cursor-pointer">
      <ProfileAvatar size={20} address={address} />
      <span className="text-slate-500 font-bold">
        <ENSOrAddress address={address} />
      </span>
    </div>
  )
}
