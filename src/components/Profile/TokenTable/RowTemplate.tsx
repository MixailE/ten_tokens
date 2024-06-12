import { ReactNode } from 'react'

interface RowProps {
  image?: ReactNode
  name: ReactNode
  balance: ReactNode
  allowance: ReactNode
}

export function RowItems({ image, name, balance, allowance }: RowProps) {
  return (
    <>
      <span className="flex items-center justify-center md:w-6 w-10 mr-2 col-start-1 col-end-2 row-start-1 row-end-3">
        {image}
      </span>
      <span className="flex items-center max-w-32 truncate col-start-2 col-end-5 row-start-1 row-end-2 md:row-start-1 md:row-end-3 leading-normal">
        {name}
      </span>
      <span className="flex justify-start items-center md:hidden col-start-2 col-end-5 row-start-2 row-end-3">
        {balance}
      </span>
      <span className="flex justify-end items-center text-right col-start-5 col-end-6 row-start-1 row-end-3 md:row-end-2 md:col-start-4 md:col-end-5">
        {allowance}
      </span>
      <span className="justify-end items-center hidden text-right md:flex col-start-5 col-end-6 row-start-2 row-end-3 md:row-start-1 md:row-end-3">
        {balance}
      </span>
    </>
  )
}

export default function (props: RowProps) {
  return (
    <li className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 py-3 px-4 grid gap-x-2 grid-cols-custom-layout grid-rows-custom-layout md:grid-rows-1 h-[72px] md:h-14">
      <RowItems {...props} />
    </li>
  )
}
