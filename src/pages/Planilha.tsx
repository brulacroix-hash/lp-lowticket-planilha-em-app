import { Check, Zap } from 'lucide-react'
import { Hero } from '@/components/landing/Hero'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Planilha() {
  const handleBuyClick = () => {
    window.open('https://checkout.codandosemcoder.com.br/product-id', '_blank')
  }

  const inclusions = [
    'Glossário "Vibe Coding"',
    'Exemplos de prompts reais',
    'Atualizações de termos',
  ]

  return (
    <div className="flex flex-col w-full min-h-screen bg-background overflow-x-hidden">
      <Hero
        title={
          <>
            Domine o <span className="text-primary">Vocabulário</span> da IA
          </>
        }
        description={
          <>
            Pare de lutar contra o chat. Aprenda as palavras certas para obter o
            código que você precisa.
          </>
        }
        imageSrc="https://img.usecurling.com/p/600/600?q=code%20dictionary&color=blue"
      />

      <section className="py-16 md:py-24 bg-secondary/5 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center animate-fade-in-up">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              O segredo está na comunicação
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-balance">
              Você já escreveu um prompt, a IA respondeu errado, e você tentou
              várias vezes gastando créditos sem saber onde errou. O problema
              não é a IA, mas sim não saber o que e como pedir corretamente.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 relative">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-primary via-primary/20 to-transparent shadow-[0_0_50px_-10px_hsl(var(--primary)/0.3)] animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent blur-xl -z-10"></div>

            <Card className="border-0 bg-[#0a0a0a] rounded-[23px] overflow-hidden relative h-full flex flex-col md:flex-row">
              <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                <div>
                  <Badge
                    variant="outline"
                    className="mb-6 border-primary/50 text-primary px-3 py-1"
                  >
                    Conteúdo Exclusivo
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    O Vocabulário Vibe Coding
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {inclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 rounded-full bg-primary/20 p-0.5 shrink-0">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm md:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-2/5 bg-white/[0.02] border-l border-white/5 p-8 md:p-10 flex flex-col justify-center items-center text-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50 pointer-events-none" />

                <p className="text-sm text-muted-foreground mb-2 line-through decoration-white/30">
                  De R$ 97,00
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-2xl font-medium text-white">R$</span>
                  <span className="text-6xl font-extrabold tracking-tighter text-white drop-shadow-lg">
                    37
                  </span>
                </div>
                <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-8">
                  Pagamento Único
                </p>

                <Button
                  onClick={handleBuyClick}
                  size="lg"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold shadow-[0_0_20px_-5px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.8)] transition-all duration-300 rounded-xl"
                >
                  Comprar Agora
                  <Zap className="w-4 h-4 ml-2 fill-white" />
                </Button>

                <p className="mt-4 text-[10px] text-muted-foreground/60 text-center px-4">
                  Acesso imediato.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
