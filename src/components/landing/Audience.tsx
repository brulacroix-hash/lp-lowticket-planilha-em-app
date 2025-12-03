import { AlertCircle } from 'lucide-react'
import { TextLoop } from '@/components/ui/text-loop'

export function Audience() {
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
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 md:pl-12 self-start">
              O que você vai conquistar:
            </h3>
            <div className="w-full flex justify-center md:justify-start md:pl-12">
              <TextLoop className="text-2xl md:text-4xl font-bold text-primary text-center md:text-left leading-tight">
                <span>Seu primeiro app rodando</span>
                <span>Domínio do vocabulário</span>
                <span>Possibilidade de prestar serviço e faturar</span>
              </TextLoop>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
