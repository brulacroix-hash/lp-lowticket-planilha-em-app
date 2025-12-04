import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'
import { ReactNode } from 'react'

export interface DisplayCardProps {
  className?: string
  icon?: ReactNode
  title?: string
  description?: string
  date?: string
}

export function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = 'Featured',
  description,
  date = 'Just now',
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-[16rem] w-[22rem] -skew-y-8 select-none flex-col justify-between rounded-xl border bg-muted/50 backdrop-blur-sm px-4 py-10 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className,
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-primary/20 p-1">
          {icon}
        </span>
        <p className="text-lg font-medium text-foreground">{title}</p>
      </div>
      <p className="whitespace-nowrap text-3xl font-semibold text-foreground">
        {description}
      </p>
      <p className="text-muted-foreground">{date}</p>
    </div>
  )
}

export function DisplayCards({ cards }: { cards?: DisplayCardProps[] }) {
  const displayCards = cards || []

  return (
    <div className="flex items-center justify-center w-full py-10">
      <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
        {displayCards.map((card, index) => (
          <DisplayCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}
