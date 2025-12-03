import { CheckCircle2, AlertCircle } from 'lucide-react'

export function Audience() {
  return (
    <section className="py-20 bg-secondary/20 border-y border-border/50">
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

          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-8">
              O que você vai conquistar:
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-lg shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white text-lg">
                    Seu primeiro app rodando
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Modelo pronto para copiar, testar e iterar hoje mesmo.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-lg shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white text-lg">
                    Domínio do vocabulário
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Entender termos que realmente importam no desenvolvimento
                    low-code.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
