import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Offer() {
  const inclusions = [
    '1 aula de 2 horas em vídeo focado na prática',
    'Glossário PDF com vocabulário vibe coding (design, Supabase, integrações)',
    'Modelo de app pronto para clonar e usar',
    'Acesso vitalício ao conteúdo',
    'Garantia de satisfação de 7 dias',
  ]

  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-3xl">
        <Card className="border-primary/20 bg-gradient-to-br from-card to-background overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
            Oferta Limitada
          </div>

          <CardHeader className="text-center pb-2 pt-10">
            <Badge
              variant="outline"
              className="w-fit mx-auto mb-4 border-primary/50 text-primary"
            >
              A oportunidade de ouro
            </Badge>
            <CardTitle className="text-3xl md:text-4xl font-bold text-white">
              O que você recebe
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 md:p-10 space-y-8">
            <ul className="space-y-4">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-primary/20 p-1 shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-base md:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border pt-8 mt-8 text-center">
              <p className="text-muted-foreground text-sm mb-2">
                De R$97,00 por apenas
              </p>
              <div className="flex items-center justify-center gap-1 text-white">
                <span className="text-2xl font-medium">R$</span>
                <span className="text-6xl font-extrabold tracking-tighter text-primary">
                  37
                </span>
                <span className="text-xl font-medium self-end mb-2">,00</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Pagamento único • Acesso imediato
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
