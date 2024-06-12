import ENSOrAddress from 'components/shared/ENSOrAddress'
import ProfileAvatar from 'components/shared/ProfileAvatar'

export default function ({
  address,
  title,
}: {
  address: string
  title: string
}) {
  return (
    <span className="flex gap-4 items-center">
      <ProfileAvatar size={40} address={address} />
      <span className="flex flex-col font-semibold">
        <span>{title}</span>
        <span className="block text-slate-500 text-sm max-w-32">
          <ENSOrAddress address={address} />
        </span>
      </span>
    </span>
  )
}
