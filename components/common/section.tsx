import { cn } from '@/lib/utils'
import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string // For additional custom styling if needed
}

const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
  return (
    <div className={cn('relative min-h-screen px-6 py-20 md:pt-30', className)}>
      {children}
    </div>
  )
}

export default Section
