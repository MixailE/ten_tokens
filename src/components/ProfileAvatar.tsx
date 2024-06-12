import Avatar, { AvatarProps } from 'boring-avatars'

export default function ({
  address,
  ...props
}: { address: string } & AvatarProps) {
  return (
    <Avatar
      name={address.toLowerCase()}
      variant="marble"
      colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
      {...props}
    />
  )
}
