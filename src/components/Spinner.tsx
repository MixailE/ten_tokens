import SpinIcon from 'icons/SpinIcon'

export default function (props: React.SVGProps<SVGSVGElement>) {
  return (
    <div role="status">
      <SpinIcon {...props} />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
