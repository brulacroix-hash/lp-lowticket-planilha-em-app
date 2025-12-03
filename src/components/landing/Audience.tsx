import { FileSpreadsheet, Zap, CheckCircle2 } from 'lucide-react'

export function Audience() {
  return (
    <section className="py-20 md:py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-primary">
              Para quem é?
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Você tem planilhas cheias de dados, mas elas não escalam?
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              E o mundo tech joga vários termos que você não conhece, deixando
              você perdido? Essa aula é pra você! Com nosso material, você sai
              do zero para a prática.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Zap className="text-primary h-6 w-6" />O que você vai conquistar:
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                  <FileSpreadsheet className="h-5 w-5 text-primary" />
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
                <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white text-lg">
                    Domínio do vocabulário
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Entenda termos que realmente importam no desenvolvimento
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
