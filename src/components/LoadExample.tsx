import Arrow from 'icons/Arrow'
import Question from 'icons/Question'

export default function ({
  example,
  onClick,
}: {
  example: string
  onClick: (address: string) => void
}) {
  return (
    <div className="flex justify-center">
      <p
        className="flex gap-1 font-medium p-3 cursor-pointer text-stone-500 hover:text-blue-400 items-center"
        onClick={() => onClick(example)}
      >
        <Question className="w-6 h-6 text-stone-500" />
        <span className="text-stone-500">Don't have an account?</span>
        <strong>Load an example</strong>
        <Arrow className="w-4 h-4" />
      </p>
    </div>
  )
}
