import { useAddress } from '@thirdweb-dev/react'

export default function () {
  const address = useAddress()

  return address?.toLowerCase()
}
