import { NetworkError } from '@rest-hooks/react'

export default function ({ error }: { error: NetworkError }) {
  return (
    <div role="status" className="w-full flex flex-col">
      <div className="p-4">
        <p className="font-bold">Something went wrong while fetching data:</p>
        <p>
          {error.status} {error.response && error.response.statusText}
        </p>
      </div>
    </div>
  )
}
