import { ReactNode } from 'react'
import { MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface HeroProps {
  title?: ReactNode
  description?: ReactNode
  imageSrc?: string
}

export function Hero({ title, description, imageSrc }: HeroProps) {
  const handleBuyClick = () => {
    window.open('https://pay.kiwify.com.br/No6feAQ', '_blank')
  }

  const defaultImage = 'https://files.catbox.moe/pq17vq.png'

  return (
    <section className="relative overflow-hidden pt-20 md:pt-32 pb-20 lg:pb-32 min-h-[80vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-[100%] blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start space-y-8 max-w-2xl animate-fade-in-up">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm font-medium bg-secondary/50 hover:bg-secondary/60 border-primary/20 border text-primary gap-2 rounded-full"
            >
              +7.500 pessoas confiam no ecossistema Codando
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              {title || (
                <>
                  Transforme sua{' '}
                  <span className="text-primary">planilha em app</span>
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance max-w-xl">
              {description || (
                <>
                  Grande parte dos serviços prestados de vibe coding o objetivo
                  é transformar planilhas em aplicações, por isso, esse material
                  será muito útil para você atacar esse nicho em alta.
                </>
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleBuyClick}
                className="group h-14 px-8 text-base font-bold bg-primary hover:bg-primary/90 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.6)] transition-all duration-300 rounded-full"
              >
                Quero meu acesso por R$37
                <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end animate-fade-in-up animation-delay-200">
            <img
              src={imageSrc || defaultImage}
              alt="Transforme sua planilha em app"
              className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
