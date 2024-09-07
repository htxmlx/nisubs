import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-2">
      {/* Sign In Button */}
      <Link
        href="/signin"
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'lg:h-10 rounded-md md:px-8 '
        )}
      >
        Sign In
      </Link>
      or
      {/* Sign Up Button */}
      <Link
        href="/signup"
        className={cn(buttonVariants(), 'lg:h-10 rounded-md md:px-8 ')}
      >
        Get Started
      </Link>
    </div>
  )
}
