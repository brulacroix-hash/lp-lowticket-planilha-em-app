import { ReactNode } from 'react'
import { TextLoop } from '@/components/ui/text-loop'
import { cn } from '@/lib/utils'

interface AudienceProps {
  title?: ReactNode
  description?: ReactNode
  loopItems?: string[]
}

export function Audience({ title, description, loopItems }: AudienceProps) {
  const defaultLoopItems = [
    'Seu primeiro app rodando',
    'Vocabulário atualizado',
    'Possibilidade de faturar',
  ]

  const items = loopItems || defaultLoopItems

  const getGradientClass = (index: number) => {
    const gradients = [
      'bg-gradient-to-r from-white to-white/70',
      'bg-gradient-to-r from-primary to-orange-300',
      'bg-gradient-to-r from-blue-400 to-cyan-300',
    ]
    return gradients[index % gradients.length]
  }

  return (
    <section className="py-24 bg-secondary/20 border-y border-white/5 relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {title || (
                  <>
                    Pra quem é essa{' '}
                    <span className="text-primary">Masterclass?</span>
                  </>
                )}
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {description ||
                'Se você sente que o mundo da tecnologia está avançando rápido demais e você está ficando para trás, ou se tem ideias incríveis travadas em planilhas complexas...'}
            </p>
          </div>

          <div className="flex flex-col justify-center items-start w-full p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-background border border-white/5 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6">
              Você vai sair daqui com:
            </h3>
            <div className="w-full">
              <TextLoop
                className="text-3xl md:text-5xl font-bold text-white leading-tight"
                interval={2500}
              >
                {items.map((text, index) => (
                  <span
                    key={index}
                    className={cn(
                      'bg-clip-text text-transparent',
                      getGradientClass(index),
                    )}
                  >
                    {text}
                  </span>
                ))}
              </TextLoop>
            </div>
            <div className="mt-8 w-full h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
            <p className="mt-4 text-sm text-muted-foreground">
              Resultados reais, aplicáveis imediatamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
