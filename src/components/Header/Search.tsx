import Arrow from 'icons/Arrow'
import { SyntheticEvent, useState } from 'react'
import { ethers } from 'ethers'
import { ensRegex, getENSNameByName } from 'store/getENSName'
import { useController } from '@rest-hooks/react'
import Spinner from '../shared/Spinner'
import SearchIcon from 'icons/SearchIcon'

export default ({
  value,
  onChange,
}: {
  value: string | undefined
  onChange: (value?: string) => void
}) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [search, setSearch] = useState<string | undefined>(value)
  const handleChangeInput = (event: { target: { value: string } }) => {
    setSearch(event.target.value || '')
    setError('')
  }
  const ctrl = useController()

  async function onSubmit() {
    if (!search) return false
    setSearch('')
    if (ensRegex.test(search)) {
      try {
        setLoading(true)
        const { address } = await ctrl.fetch(getENSNameByName, search)
        setLoading(false)

        if (address) {
          setSearch('')
          onChange(address)
          return
        } else {
          setError('ENS name not found')
          return false
        }
      } catch (err) {
        setLoading(false)
        setError('Error resolving ENS name')
        return false
      }
    } else if (!ethers.utils.isAddress(search)) {
      setError('Invalid address!')
      return false
    }
    setSearch('')
    onChange(search)
    return false
  }

  function onSubmitForm(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form className="flex flex-col items-start w-full" onSubmit={onSubmitForm}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          value={search}
          onChange={handleChangeInput}
          type="search"
          id="default-search"
          className="block w-full p-3 px-10 text-base focus:outline-none text-gray-900 rounded-xl bg-slate-200"
          placeholder="Search address"
          required
        />
        {loading && (
          <div className="absolute end-2.5 bottom-2 font-medium rounded-full text-sm px-2 py-2">
            <Spinner className="inline w-4 h-4 text-slate-400 animate-spin fill-gray-800" />
          </div>
        )}
        {search && search.length > 0 && !loading && (
          <button
            type="button"
            onClick={onSubmit}
            className="absolute end-2.5 bottom-2 focus:backdrop-brightness-90 focus:outline-none font-medium rounded-full text-sm px-2 py-2"
          >
            <Arrow className="w-4 h-4" />
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
