import { useState } from 'react'
import Profile from 'components/Profile'
import SelectAddress from 'components/SelectAddress'
import Header from './Header'
import BackButton from './BackButton'

export default function () {
  const [search, setInput] = useState<string | undefined>('')

  function onReset() {
    setInput('')
  }

  return (
    <div className="sm:p-1 container mx-auto max-w-full sm:max-w-[1060px]">
      <div className="flex justify-center mt-5">
        <div className="w-full flex flex-col justify-center">
          <Header search={search} onChangeSearch={setInput} />

          <div className="mt-5 mx-3 md:mx-0 flex flex-col gap-4">
            {search ? (
              <>
                <BackButton onBack={onReset} />
                <Profile address={search} />
              </>
            ) : (
              <SelectAddress onClick={setInput} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
