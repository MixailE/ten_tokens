import { ImgHTMLAttributes } from 'react'

export default function ({
  address,
  ...props
}: { address: string } & ImgHTMLAttributes<HTMLImageElement>) {
  return <img src={`/images/${address.toLowerCase()}.webp`} {...props} />
}
