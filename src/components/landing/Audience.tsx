import { CheckCircle2 } from 'lucide-react'
import { TextLoop } from '@/components/ui/text-loop'

export function Audience() {
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
                Pra quem é essa{' '}
                <span className="text-primary">Masterclass?</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Se você sente que o mundo da tecnologia está avançando rápido
              demais e você está ficando para trás, ou se tem ideias incríveis
              travadas em planilhas complexas...
            </p>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-primary/20 p-1.5 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground/90">
                  Ideal para empreendedores, gestores e entusiastas que querem
                  criar soluções de software sem a curva de aprendizado de anos
                  de programação.
                </p>
              </div>
            </div>
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  Seu primeiro app rodando
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-300">
                  Entendendo termos essenciais vibe-coding
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  Possibilidade de faturar
                </span>
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
