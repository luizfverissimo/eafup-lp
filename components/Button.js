
export function Button({href, children, isPrimary = true}) {
  return (
    <a className={`font-bold text-lg text-theme-white cursor-pointer px-2 py-1 rounded-lg transition-all hover:brightness-110 ${isPrimary ? "bg-theme-green" : "bg-theme-black"}`} href={href}>{children}</a>
  )
}
