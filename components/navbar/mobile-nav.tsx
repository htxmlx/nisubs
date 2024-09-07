import {
  HomeIcon,
  MapPin,
  PlusCircle,
  SearchIcon,
  UserIcon,
} from 'lucide-react'
import Link from 'next/link'
import { ModeToggle } from '../mode-toggle'
import { Logo } from './logo'
import { Protect } from '@clerk/nextjs'

type NavItem = {
  href: string
  icon: React.ReactNode
  label: string
}

const NavItemLink: React.FC<NavItem> = ({ href, icon, label }) => (
  <Link
    href={href}
    className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
    prefetch={false}
  >
    {icon}
    <span className="text-xs">{label}</span>
  </Link>
)

export default function MobileNav() {
  return (
    <>
      <header className="bg-background text-foreground flex justify-between md:hidden gap-10 fixed top-0 left-0 w-full  border-b border-gray-200 dark:border-gray-700 shadow-md px-6 py-4 items-center z-50">
        <Logo />
        <ModeToggle />
      </header>
      <nav className="fixed bottom-0 left-0 w-full bg-background border-t border-gray-200  dark:border-gray-800 px-4 py-2 flex justify-between items-center z-50 md:hidden">
        <NavItemLink
          href="/"
          icon={<HomeIcon className="size-6" />}
          label="Home"
        />
        <NavItemLink
          href="/search"
          icon={<SearchIcon className="size-6" />}
          label="Search"
        />
        <Protect permission="org:listing:create">
          <NavItemLink
            href="/create"
            icon={<PlusCircle className="size-10" />}
            label="Create"
          />
        </Protect>
        <NavItemLink
          href="/map"
          icon={<MapPin className="size-6" />}
          label="Map"
        />

        <NavItemLink
          href="/profile"
          icon={<UserIcon className="size-6" />}
          label="Profile"
        />
      </nav>
    </>
  )
}
