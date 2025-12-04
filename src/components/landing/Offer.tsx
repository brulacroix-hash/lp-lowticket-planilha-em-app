import { Check, Clock, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface OfferProps {
  checkoutUrl?: string
}

export function Offer({ checkoutUrl }: OfferProps) {
  const inclusions = [
    'Masterclass de 2 horas em vídeo',
    'Glossário "Vibe Coding" (PDF Exclusivo)',
    'Acesso Vitalício',
  ]

  const handleBuyClick = () => {
    window.open(checkoutUrl || 'https://pay.kiwify.com.br/No6feAQ', '_blank')
  }

  return (
    <section className="py-24 md:py-32 px-4 relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Glow effect wrapper */}
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-primary via-primary/20 to-transparent shadow-[0_0_50px_-10px_hsl(var(--primary)/0.3)]">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent blur-xl -z-10"></div>

          <Card className="border-0 bg-[#0a0a0a] rounded-[23px] overflow-hidden relative h-full flex flex-col md:flex-row">
            {/* Left Side: Value Prop */}
            <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Background subtle noise/gradient */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              <div>
                <Badge
                  variant="outline"
                  className="mb-6 border-primary/50 text-primary px-3 py-1"
                >
                  Oferta por tempo indeterminado
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Tudo o que você precisa para começar hoje.
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

              <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white/5 w-fit px-3 py-1.5 rounded-full">
                <Clock className="w-3 h-3" />
                <span>Oferta por tempo limitado</span>
              </div>
            </div>

            {/* Right Side: Price & Action */}
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
                Acesso imediato enviado para seu e-mail após confirmação.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
