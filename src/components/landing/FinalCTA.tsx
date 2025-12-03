import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FinalCTA() {
  const handleBuyClick = () => {
    window.open('https://checkout.codandosemcoder.com.br/product-id', '_blank')
  }

  return (
    <section className="py-24 md:py-32 px-4 text-center relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-4xl space-y-10">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Por que deixar para amanhã o app <br className="hidden md:block" />
            que você pode criar hoje?
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Este é o passo mais seguro e acessível para você entrar no mundo do
            vibe coding. Sem riscos, apenas aprendizado prático.
          </p>
        </div>

        <div className="pt-4">
          <Button
            size="lg"
            onClick={handleBuyClick}
            className="w-full sm:w-auto text-lg px-6 sm:px-10 py-8 h-auto rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.5)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_hsl(var(--primary)/0.6)] whitespace-normal"
          >
            <span className="flex flex-col items-center sm:flex-row gap-3 text-center sm:text-left">
              <span className="font-bold">Quero meu acesso agora por R$37</span>
              <ArrowRight className="h-6 w-6 shrink-0" />
            </span>
          </Button>
          <p className="mt-6 text-sm text-muted-foreground/60 flex items-center justify-center gap-2">
            <span>🔒 Compra 100% segura</span>
            <span>•</span>
            <span>📧 Acesso enviado por e-mail</span>
          </p>
        </div>
      </div>
    </section>
  )
}
