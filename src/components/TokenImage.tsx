import { ImgHTMLAttributes } from 'react'

export default function ({
  address,
  ...props
}: { address: string } & ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={`${import.meta.env['BASE_URL']}images/${address.toLowerCase()}.webp`}
      {...props}
    />
  )
}
