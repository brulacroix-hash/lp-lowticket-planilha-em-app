import { AlertCircle } from 'lucide-react'
import { DisplayCards } from '@/components/landing/DisplayCards'

export function Audience() {
  const cards = [
    {
      description: 'Seu primeiro app rodando',
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      description: 'Domínio do vocabulário',
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      description: 'Possibilidade de prestar serviço e faturar',
      className:
        '[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10',
    },
  ]

  return (
    <section className="py-20 bg-secondary/20 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Para quem é?
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Você tem planilhas cheias de dados úteis, mas elas não escalam. E
              o mundo tech joga vários termos que você não conhece, deixando
              você perdido? Essa aula é pra você!
            </p>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <p className="text-foreground/90">
                  Chega de depender de planilhas que travam ou de
                  desenvolvedores que falam uma língua que você não entende.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start w-full relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:pl-12 self-start">
              O que você vai conquistar:
            </h3>
            <div className="w-full flex justify-center md:justify-start">
              <DisplayCards cards={cards} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
