
export function Button({href, target, children, isPrimary = true}) {
  return (
    <a className={`font-bold text-lg text-theme-white cursor-pointer px-3 py-1 rounded-lg transition-all hover:brightness-110 ${isPrimary ? "bg-theme-green" : "bg-theme-black"}`} rel="noreferrer noopener" href={href}>{children}</a>
  )
}
