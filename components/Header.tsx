import Link from 'next/link'

import dynamic from 'next/dynamic'

const DarkModeToggle = dynamic(
  () => import('./DarkModeToggle').then((mod) => mod.DarkModeToggle),
  {
    ssr: false,
  }
)

export function Header() {
  return (
    <nav className="w-full max-w-screen-lg mx-auto flex flex-row justify-center space-x-16">
      <MenuItem label="Home" href="/" />
      <MenuItem label="Experience" href="/" />
      <MenuItem label="Contact" href="/" />
      <DarkModeToggle />
    </nav>
  )
}

interface MenuItemProps {
  label: string
  href: string
}
function MenuItem({ label, href }: MenuItemProps) {
  return (
    <Link href={href}>
      <a className="text-primary dark:text-tertiary dark:hover:text-black text-xl m-2 items-center flex h-16 hover:text-black duration-300 transition hover:-translate-y-0.5">
        {label}
      </a>
    </Link>
  )
}
