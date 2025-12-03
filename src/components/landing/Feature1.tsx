import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface Feature1Props {
  title?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  buttonPrimary?: {
    label: string
    href: string
  }
  reverse?: boolean
}

export function Feature1({
  title = 'Título da Feature',
  description = 'Descrição da feature aqui.',
  imageSrc = 'https://img.usecurling.com/p/800/600?q=abstract&color=black',
  imageAlt = 'Feature Image',
  buttonPrimary,
  reverse = false,
}: Feature1Props) {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            'grid items-center gap-12 lg:gap-20 lg:grid-cols-2',
            reverse && 'lg:grid-flow-dense',
          )}
        >
          {/* Text Content */}
          <div
            className={cn(
              'flex flex-col items-start space-y-6',
              reverse ? 'lg:col-start-2' : 'lg:col-start-1',
            )}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              Tecnologia Exclusiva
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {description}
            </p>

            {buttonPrimary && (
              <Button
                asChild
                className="mt-2 group"
                size="lg"
                variant="outline"
              >
                <a
                  href={buttonPrimary.href}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  {buttonPrimary.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            )}
          </div>

          {/* Image Content */}
          <div
            className={cn(
              'relative w-full',
              reverse ? 'lg:col-start-1' : 'lg:col-start-2',
            )}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative blur behind */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  )
}
