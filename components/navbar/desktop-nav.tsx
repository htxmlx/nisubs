import { cn } from '@/lib/utils'
import {
  HomeIcon,
  MapPin,
  MenuIcon,
  PlusCircle,
  SearchIcon,
  SettingsIcon,
  UserIcon,
} from 'lucide-react'
import Link from 'next/link'
import AuthButtons from '../auth-buttons'
import { Button, buttonVariants } from '../ui/button'
import { Logo } from './logo'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const NavItemLink: React.FC<{
  href: string
  icon: React.ReactNode
  label: string
}> = ({ href, icon, label }) => (
  <Link
    href={href}
    className={cn(
      buttonVariants({
        variant: label === 'Create' ? 'secondary' : 'ghost',
      }),
      'gap-2 lg:h-10 rounded-md md:px-2 flex justify-start'
    )}
    prefetch={false}
  >
    {icon}
    <span className="hidden md:block lg:text-lg font-semibold">{label}</span>
  </Link>
)

export default function DesktopNav() {
  return (
    <nav className="hidden md:flex gap-10 fixed top-0 left-0 w-full bg-background border-b border-gray-200 dark:border-gray-700 shadow-lg px-6 py-4 items-center z-50">
      <div className="flex items-center flex-grow lg:flex-grow-0">
        <Logo />
      </div>
      <div className="hidden lg:flex items-center space-x-2 flex-grow">
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
        <NavItemLink
          href="/create"
          icon={<PlusCircle className="size-6" />}
          label="Create"
        />
      </div>

      <AuthButtons />
      <Sheet>
        <SheetTrigger className="flex lg:hidden" asChild>
          <Button size="icon" variant="ghost">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Select an option to navigate</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col space-y-2 mt-4">
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
            <NavItemLink
              href="/create"
              icon={<PlusCircle className="size-6" />}
              label="Create"
            />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
