import { MoveRight, Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

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
              Do <span className="text-primary">Zero</span> ao{' '}
              <span className="text-primary">App</span> com IA.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance max-w-xl">
              Transforme suas planilhas em aplicações reais em minutos. Domine o
              Vibe Coding e crie software sem escrever uma única linha de código
              complexo manualmente.
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

            <div className="pt-4 flex items-center gap-4 text-sm text-muted-foreground/60">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden"
                  >
                    <img
                      src={`https://img.usecurling.com/ppl/thumbnail?gender=${i % 2 === 0 ? 'female' : 'male'}&seed=${i}`}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p>+1.200 alunos já transformaram suas carreiras</p>
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

            {/* Main Card Mockup */}
            <div className="relative w-full max-w-md lg:max-w-full aspect-[4/3] bg-[#1e1e1e] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Mockup Header */}
              <div className="h-10 bg-[#252526] border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 h-5 w-40 bg-white/5 rounded text-[10px] flex items-center px-2 text-muted-foreground font-mono">
                  vibe-coding-project
                </div>
              </div>
              {/* Mockup Content */}
              <div className="p-6 font-mono text-sm space-y-4">
                <div className="flex gap-2">
                  <span className="text-blue-400">prompt</span>
                  <span className="text-white">
                    Create a CRM dashboard from my sales spreadsheet
                  </span>
                </div>
                <div className="pl-4 border-l-2 border-white/10 space-y-2 text-muted-foreground">
                  <p className="typing-effect">Analyzing data structure...</p>
                  <p className="text-green-400">✓ Customer schema detected</p>
                  <p className="text-green-400">✓ Sales pipeline detected</p>
                  <p className="text-white">Generating React components...</p>
                </div>
                <div className="mt-8 p-4 bg-black/30 rounded-lg border border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-muted-foreground">
                      Dashboard Preview
                    </span>
                    <Badge variant="outline" className="text-[10px] h-5">
                      Live
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-20 bg-primary/10 rounded border border-primary/20 flex items-center justify-center flex-col">
                      <span className="text-2xl font-bold text-primary">
                        R$ 45k
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        Receita Mensal
                      </span>
                    </div>
                    <div className="h-20 bg-blue-500/10 rounded border border-blue-500/20 flex items-center justify-center flex-col">
                      <span className="text-2xl font-bold text-blue-400">
                        128
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        Novos Leads
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
