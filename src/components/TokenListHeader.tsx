export default function () {
  return (
    <li className="py-3 px-4 grid gap-x-2 grid-cols-custom-layout grid-rows-1 h-14 font-semibold border-b border-stone-200">
      <span className="sm:w-6 w-10 mr-2 col-start-1 col-end-2 row-start-1 row-end-3 flex items-center justify-center"></span>
      <span className="flex items-center max-w-32 truncate col-start-2 col-end-4 row-start-1 row-end-2 md:row-start-1 md:row-end-3 leading-normal">
        Name
      </span>
      <span className="flex justify-end items-center md:hidden col-start-2 col-end-4 row-start-2 row-end-3"></span>
      <span className="flex justify-end items-center text-right col-start-7 col-end-8 row-start-1 row-end-2 md:col-start-6 md:col-end-7">
        Allowance
      </span>
      <span className="justify-end items-center hidden text-right md:flex col-start-6 col-end-8 md:col-start-7 row-start-2 row-end-3 md:row-start-1 md:row-end-3">
        Balance
      </span>
    </li>
  )
}
