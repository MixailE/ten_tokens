import Arrow from 'icons/Arrow'
import { useState } from 'react'
import { ethers } from 'ethers'
import { ensRegex, getENSNameByName } from 'store/getENSName'
import { useController } from '@rest-hooks/react'

export default ({
  value,
  onChange,
}: {
  value: string | undefined
  onChange: (value?: string) => void
}) => {
  const [error, setError] = useState('')
  const [input, setSearch] = useState<string | undefined>(value)
  const handleChangeInput = (event: { target: { value: string } }) => {
    setSearch(event.target.value || '')
    setError('')
  }
  const ctrl = useController()

  async function onSubmit() {
    if (!input) return
    if (ensRegex.test(input)) {
      try {
        const { address } = await ctrl.fetch(getENSNameByName, input)

        if (address) {
          setSearch('')
          onChange(address)
          return
        } else {
          setError('ENS name not found')
          return
        }
      } catch (err) {
        setError('Error resolving ENS name')
        return
      }
    } else if (!ethers.utils.isAddress(input)) {
      setError('Invalid address!')
      return
    }
    setSearch('')
    onChange(input.toLowerCase())
  }

  return (
    <form className="flex flex-col items-start w-full">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          value={input}
          onChange={handleChangeInput}
          type="search"
          id="default-search"
          className="block w-full p-3 px-10 text-base focus:outline-none text-gray-900 rounded-xl bg-slate-200"
          placeholder="Search address"
          required
        />
        {input && input.length > 0 && (
          <button
            type="button"
            onClick={onSubmit}
            className="absolute end-2.5 bottom-2 focus:backdrop-brightness-90 focus:outline-none font-medium rounded-full text-sm px-2 py-2"
          >
            <Arrow className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </button>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-gray-900">
          <span className="font-medium">Oops!</span> {error}
        </p>
      )}
    </form>
  )
}
