import { useState } from 'react'
import Profile from 'components/Profile/Profile'
import SelectAddress from 'components/Dashboard/SelectAddress'
import Header from 'components/Header/Header'
import BackButton from 'components/shared/BackButton'

export default function () {
  const [selectedAddress, setAddress] = useState<string | undefined>('')

  function onSetAddress(input?: string) {
    setAddress(input?.toLowerCase())
  }

  function onReset() {
    onSetAddress('')
  }

  return (
    <div className="sm:p-1 container mx-auto max-w-full sm:max-w-[1060px]">
      <div className="flex justify-center pt-5">
        <div className="w-full flex flex-col justify-center">
          <Header search={selectedAddress} onChangeSearch={onSetAddress} />

          <div className="mt-5 mx-3 md:mx-0 flex flex-col gap-4">
            {selectedAddress ? (
              <>
                <BackButton onBack={onReset} />
                <Profile address={selectedAddress} />
              </>
            ) : (
              <SelectAddress onClick={onSetAddress} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
