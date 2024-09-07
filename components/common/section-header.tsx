import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface SectionHeaderProps {
  className?: string
  title: ReactNode
  description?: ReactNode
}

export default function SectionHeader({
  className,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className={cn('py-6', className)}>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  )
}
