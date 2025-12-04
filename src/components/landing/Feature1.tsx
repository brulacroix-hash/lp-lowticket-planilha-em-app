import { DisplayCards } from '@/components/landing/DisplayCards'
import { Database, LayoutTemplate, Smartphone } from 'lucide-react'

export function Feature1() {
  const cards = [
    {
      title: 'Database',
      description: 'Dados Estruturados',
      date: 'Backend',
      icon: <Database className="size-4 text-blue-400" />,
      className:
        '[grid-area:stack] translate-x-0 translate-y-0 hover:translate-y-[-10px] transition-transform bg-card/95 shadow-xl z-10',
    },
    {
      title: 'Interface',
      description: 'Drag & Drop',
      date: 'Frontend',
      icon: <LayoutTemplate className="size-4 text-orange-400" />,
      className:
        '[grid-area:stack] translate-x-8 translate-y-8 hover:translate-y-6 transition-transform bg-card/95 shadow-xl z-20',
    },
    {
      title: 'Mobile',
      description: 'App Nativo',
      date: 'Deploy',
      icon: <Smartphone className="size-4 text-green-400" />,
      className:
        '[grid-area:stack] translate-x-16 translate-y-16 hover:translate-y-14 transition-transform bg-card/95 shadow-xl z-30',
    },
  ]

  return (
    <section className="py-24 bg-background/50 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex justify-center items-center min-h-[400px]">
            <div className="scale-75 md:scale-100 transform transition-transform">
              <DisplayCards cards={cards} />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                O poder do <span className="text-primary">Vibe Coding</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Não é apenas sobre copiar e colar código. É sobre entender a
              arquitetura e usar a IA para construir peças complexas de software
              em minutos, não meses.
            </p>

            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                <span>Construa interfaces complexas rapidamente</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                <span>Integre banco de dados sem complicações</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                <span>Implante seus projetos com um clique</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
