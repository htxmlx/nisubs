import { siteConfig } from '@/config/site'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="text-2xl font-semibold">
      {siteConfig.name}
    </Link>
  )
}
