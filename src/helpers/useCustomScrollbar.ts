import { useOverlayScrollbars } from 'overlayscrollbars-react'
import { useEffect, useRef } from 'react'

export default function () {
  const ref = useRef<HTMLDivElement>(null)
  const [initialize] = useOverlayScrollbars({ defer: true })

  useEffect(() => {
    if (ref.current) initialize(ref.current)
  }, [initialize, ref.current])

  return ref
}
