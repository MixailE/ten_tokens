import { NetworkError } from '@rest-hooks/react'

export default function ({ error }: { error: NetworkError }) {
  return (
    <div>
      {error.status} {error.response && error.response.statusText}
    </div>
  )
}
