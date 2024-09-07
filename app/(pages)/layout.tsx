import DesktopNav from '@/components/navbar/desktop-nav'
import MobileNav from '@/components/navbar/mobile-nav'
import React, { type PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      {children}
      <MobileNav />
      <DesktopNav />
    </div>
  )
}
