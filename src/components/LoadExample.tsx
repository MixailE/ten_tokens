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
    <div className="flex justify-start sm:justify-center">
      <p
        className="flex gap-1 flex-col sm:flex-row font-medium sm:p-3 cursor-pointer text-stone-500 hover:text-blue-400 items-start sm:items-center"
        onClick={() => onClick(example)}
      >
        <span className="flex gap-1">
          <Question className="w-6 h-6 hidden sm:block text-stone-500" />
          <span className="text-stone-500">Don't have an account?</span>
        </span>
        <span className="flex gap-1 items-center">
          <strong>Load an example</strong>
          <Arrow className="w-4 h-4" />
        </span>
      </p>
    </div>
  )
}
