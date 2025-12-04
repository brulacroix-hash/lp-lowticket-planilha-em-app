import { ArrowRight, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface FinalCTAProps {
  checkoutUrl?: string
}

export function FinalCTA({ checkoutUrl }: FinalCTAProps) {
  const handleBuyClick = () => {
    window.open(checkoutUrl || 'https://pay.kiwify.com.br/No6feAQ', '_blank')
  }

  return (
    <section className="py-24 md:py-32 px-4 text-center relative overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse-soft"></div>

      <div className="container mx-auto max-w-4xl space-y-10 relative z-10">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
            Tire sua ideia do papel
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Torne-se o criador da sua própria tecnologia hoje mesmo.
          </p>
        </div>

        <div className="pt-8 flex flex-col items-center gap-6">
          <div className="relative group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-glow"></div>
            <Button
              size="lg"
              onClick={handleBuyClick}
              className={cn(
                'relative w-full sm:w-auto text-lg px-8 py-8 h-auto rounded-full',
                'bg-background text-white border border-white/10',
                'hover:bg-white/5 hover:scale-105 transition-all duration-300',
                'flex items-center gap-4 justify-center sm:justify-start',
              )}
            >
              <span className="flex flex-col items-start text-left whitespace-normal">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Acesso Imediato
                </span>
                <span className="text-xl font-bold leading-tight">
                  Quero começar agora por R$37
                </span>
              </span>
              <div className="h-10 w-10 shrink-0 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground/60">
            <Lock className="w-3 h-3" />
            <span>Pagamento Seguro</span>
          </div>
        </div>
      </div>
    </section>
  )
}
