import { Link } from 'react-scroll'

import dynamic from 'next/dynamic'

const DarkModeToggle = dynamic(
  () => import('./DarkModeToggle').then((mod) => mod.DarkModeToggle),
  {
    ssr: false,
  }
)

export function Header() {
  return (
    <nav className="w-full max-w-screen-lg mx-auto flex flex-row items-center justify-evenly">
      <MenuItem label="Home" linkTo="home" />
      <MenuItem label="Experience" linkTo="experience" />
      <MenuItem label="Contact" linkTo="contact" />
      <DarkModeToggle />
    </nav>
  )
}

interface MenuItemProps {
  label: string
  linkTo: string
}
function MenuItem({ label, linkTo }: MenuItemProps) {
  return (
    <Link to={linkTo} smooth={true} duration={500}>
      <a className="dark:hover:text-black cursor-pointer  font-light text-xl m-2 items-center flex h-16 hover:text-black duration-300 transition hover:-translate-y-0.5">
        {label}
      </a>
    </Link>
  )
}
