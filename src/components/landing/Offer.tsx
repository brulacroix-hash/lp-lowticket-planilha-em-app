import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function Offer() {
  const inclusions = [
    '1 aula de 2 horas em vídeo',
    'Glossário PDF com vocabulário vibe coding (geral, design, Supabase, integrações)',
    'Modelo de app pronto para clonar e usar',
    'Acesso vitalício ao conteúdo',
  ]

  const handleBuyClick = () => {
    window.open('https://checkout.codandosemcoder.com.br/product-id', '_blank')
  }

  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-3xl">
        <Card className="border-primary/30 bg-gradient-to-br from-card via-card/95 to-background overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
            Acesso Imediato
          </div>

          <CardHeader className="text-center pb-2 pt-12 space-y-4">
            <Badge
              variant="outline"
              className="w-fit mx-auto border-primary/50 text-primary px-4 py-1"
            >
              Oportunidade Exclusiva
            </Badge>
            <CardTitle className="text-3xl md:text-4xl font-bold text-white">
              O que você recebe:
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 md:p-10 space-y-10">
            <ul className="space-y-4">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-primary/20 p-1 shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-base md:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border pt-8">
              <div className="text-center space-y-2 mb-8">
                <p className="text-muted-foreground font-medium">
                  Oferta por tempo limitado. apenas
                </p>
                <div className="flex items-center justify-center gap-2 text-white">
                  <span className="text-2xl font-medium text-muted-foreground line-through opacity-50">
                    R$97
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-medium">R$</span>
                    <span className="text-6xl font-extrabold tracking-tighter text-primary">
                      37,00
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">
                  à vista
                </p>
              </div>

              <Button
                onClick={handleBuyClick}
                size="lg"
                className="w-full text-lg h-14 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all"
              >
                Garantir minha vaga agora
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
