import ArrowBack from 'icons/ArrowBack'
import { KeyboardEvent } from 'react'

export default function ({ onBack }: { onBack: () => void }) {
  function onReset() {
    onBack()
  }

  function onPressKey(event: KeyboardEvent<HTMLAnchorElement>) {
    if (event.key !== 'Enter') return
    onBack()
  }

  return (
    <a
      className="inline-flex gap-2 text-blue-400 items-center cursor-pointer"
      onClick={onReset}
      onKeyDown={onPressKey}
      tabIndex={0}
    >
      <ArrowBack className="w-3 h-6" /> Back
    </a>
  )
}
