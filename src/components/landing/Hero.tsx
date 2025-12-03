import { MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Hero() {
  const handleBuyClick = () => {
    window.open('https://checkout.codandosemcoder.com.br/product-id', '_blank')
  }

  return (
    <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <div className="flex flex-col items-start space-y-6">
          <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
            Oferta por tempo limitado.
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-tight">
            Transforme sua planilha em app funcional — mesmo que nunca tenha
            programado antes
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
            Domine o vocabulário essencial de vibe coding e crie seu primeiro
            app em horas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
            <Button
              variant="default"
              size="lg"
              onClick={handleBuyClick}
              className="gap-2 w-full sm:w-auto h-12 px-6 text-base bg-primary hover:bg-primary/90"
            >
              Quero meu acesso agora por R$37
              <MoveRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end w-full">
          <div className="bg-muted rounded-md aspect-square w-full max-w-md lg:max-w-full relative overflow-hidden border border-border shadow-xl">
            {/* Visual placeholder as requested */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background flex items-center justify-center">
              <span className="text-muted-foreground/20 font-bold text-4xl">
                Preview
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
