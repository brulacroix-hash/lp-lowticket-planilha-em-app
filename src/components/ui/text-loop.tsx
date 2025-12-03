import * as React from 'react'
import { cn } from '@/lib/utils'

export function TextLoop({
  children,
  className,
  interval = 3000,
}: {
  children: React.ReactNode
  className?: string
  interval?: number
}) {
  const [index, setIndex] = React.useState(0)
  const items = React.Children.toArray(children)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % items.length)
    }, interval)
    return () => clearInterval(timer)
  }, [items.length, interval])

  return (
    <div className={cn('relative inline-block w-full', className)}>
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            'transition-all duration-500 ease-in-out w-full',
            index === i
              ? 'opacity-100 translate-y-0 relative blur-0'
              : 'opacity-0 translate-y-2 absolute top-0 left-0 blur-sm pointer-events-none',
          )}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
