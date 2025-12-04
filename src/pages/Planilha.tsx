import { Hero } from '@/components/landing/Hero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, FileSpreadsheet, X } from 'lucide-react'

export default function Planilha() {
  const handleAccessClick = () => {
    window.open('https://checkout.codandosemcoder.com.br/product-id', '_blank')
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <Hero
        title={
          <>
            Domine o <span className="text-primary">Vocabulário da IA</span>
          </>
        }
        description="Pare de perder tempo com prompts que não funcionam. Descubra a estrutura exata e os termos essenciais para obter os melhores resultados das IAs."
        imageSrc="https://img.usecurling.com/p/800/800?q=futuristic%20data%20vocabulary&color=blue"
      />

      {/* Problem Identification Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-1 text-sm">
              O Desafio Real
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Por que a maioria dos prompts falha?
            </h2>

            {/* Updated Text as requested */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
              Você já escreveu um prompt, a IA respondeu errado, e você tentou
              várias vezes gastando créditos sem saber onde errou. O problema
              não é a IA, mas sim não saber o que e como pedir corretamente.
            </p>
          </div>
        </div>
      </section>

      {/* Solution / Features Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">
                  Sua Planilha de Comandos
                </h2>
                <p className="text-lg text-muted-foreground">
                  Transformamos anos de testes e engenharia de prompt em um
                  material prático. Não é apenas teoria, é um vocabulário
                  funcional.
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium">
                    Estruturas de comando validadas
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    <FileSpreadsheet className="w-4 h-4" />
                  </div>
                  <span className="font-medium">
                    Glossário técnico explicado
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium">
                    Biblioteca de parâmetros de ajuste
                  </span>
                </li>
              </ul>

              <Button
                size="lg"
                className="h-12 px-8 text-base rounded-full"
                onClick={handleAccessClick}
              >
                Acessar Vocabulário Agora
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 animate-fade-in-up animation-delay-200">
              <Card className="bg-background border-destructive/20 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base text-destructive">
                    <X className="w-4 h-4" /> Modo Comum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">
                    "Crie um texto bom sobre vendas para o meu site."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20 shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base text-primary">
                    <Check className="w-4 h-4" /> Modo Expert
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">
                    "Atue como um copywriter sênior. Escreva uma VSL usando o
                    framework AIDA, focada em conversão..."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
