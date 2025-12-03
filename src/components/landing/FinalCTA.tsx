import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FinalCTA() {
  const handleBuyClick = () => {
    window.open('https://checkout.codandosemcoder.com.br/product-id', '_blank')
  }

  return (
    <section className="py-24 md:py-32 px-4 text-center">
      <div className="container mx-auto max-w-3xl space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Por que esse é seu próximo passo:
        </h2>

        <p className="text-xl text-muted-foreground">
          Este é o básico perfeito para você começar no mundo vibe coding e
          acelerar seu aprendizado de forma prática e direta.
        </p>

        <div className="pt-8">
          <Button
            size="lg"
            onClick={handleBuyClick}
            className="w-full sm:w-auto text-lg px-8 py-8 h-auto rounded-xl bg-primary hover:bg-primary/90 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.4)] transition-all hover:scale-105"
          >
            <span className="flex flex-col items-center sm:flex-row gap-2">
              <span>Quero meu acesso agora por R$37</span>
              <ArrowRight className="h-5 w-5" />
            </span>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground/60">
            Compra 100% segura • Acesso enviado por e-mail
          </p>
        </div>
      </div>
    </section>
  )
}
