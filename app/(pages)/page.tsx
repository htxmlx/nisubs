import Link from 'next/link'
import {
  CalendarIcon,
  FlameIcon,
  HomeIcon,
  LibraryIcon,
  UsersIcon,
} from 'lucide-react'
import Section from '@/components/common/section'

export default function Component() {
  return (
    <Section>
      <div className="flex-col sm:flex-row flex flex-1 overflow-hidden">
        <aside className="sm:border-r  sm:block">
          <nav
            className="grid grid-cols-3 sm:grid-cols-1
           gap-2 py-4 text-sm font-medium"
          >
            <Link
              href="#newest"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <FlameIcon className="h-4 w-4" />
              Newest
            </Link>
            <Link
              href="#rating"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <CalendarIcon className="h-4 w-4" />
              Rating
            </Link>
            <Link
              href="#all"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <HomeIcon className="h-4 w-4" />
              All
            </Link>
            <Link
              href="#west-campus"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <LibraryIcon className="h-4 w-4" />
              West Campus
            </Link>
            <Link
              href="#main-campus"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              prefetch={false}
            >
              <UsersIcon className="h-4 w-4" />
              Main Campus
            </Link>
          </nav>
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="grid gap-4 p-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {/* Placeholder content, replace with dynamic content as needed */}
            {Array.from({ length: 6 }).map((_, index) => (
              <Link
                href="#"
                className="relative group"
                key={index}
                prefetch={false}
              >
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Video thumbnail"
                    width={320}
                    height={180}
                    className="h-full w-full object-cover transition-all group-hover:scale-105"
                    style={{ aspectRatio: '320/180', objectFit: 'cover' }}
                  />
                </div>
                <div className="mt-2 space-y-1">
                  <h3 className="line-clamp-2 text-sm font-medium">
                    Example Title {index + 1}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        alt="Channel avatar"
                        width={24}
                        height={24}
                        className="h-6 w-6 rounded-full object-cover"
                        style={{ aspectRatio: '24/24', objectFit: 'cover' }}
                      />
                      <span>Channel Name</span>
                    </div>
                    <span>Placeholder Info</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </Section>
  )
}
