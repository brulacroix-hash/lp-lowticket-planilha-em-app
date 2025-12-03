import { MoveRight, Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Hero() {
  const handleBuyClick = () => {
    window.open('https://checkout.codandosemcoder.com.br/product-id', '_blank')
  }

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
              <Sparkles className="w-3.5 h-3.5 fill-primary" />
              Revolução No-Code & AI
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Transforme sua{' '}
              <span className="text-primary">planilha em app</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance max-w-xl">
              Grande parte dos serviços prestados de vibe coding o objetivo é
              transformar planilhas em aplicações, por isso, esse material será
              muito útil para você atacar esse nicho em alta.
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
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base bg-transparent border-white/10 hover:bg-white/5 hover:text-white rounded-full"
              >
                <Play className="mr-2 h-4 w-4" />
                Assista ao vídeo
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end animate-fade-in-up animation-delay-200">
            {/* Floating Elements */}
            <div className="absolute top-10 left-0 lg:-left-10 z-20 bg-card/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-500 font-bold text-xs">XLSX</span>
                </div>
                <MoveRight className="text-muted-foreground w-4 h-4" />
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">APP</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 right-0 lg:-right-4 z-20 bg-card/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl animate-float animation-delay-400">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-white">
                  App Deployado com Sucesso
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
