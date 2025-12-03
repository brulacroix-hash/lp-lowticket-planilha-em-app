export function Instructor() {
  return (
    <section className="py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-full md:aspect-square max-w-sm group">
              <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-secondary rounded-2xl -rotate-2 opacity-50 group-hover:-rotate-4 transition-transform duration-500"></div>
              <img
                src="https://img.usecurling.com/ppl/large?gender=male&seed=1"
                alt="Giampaolo Lepore"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl border border-border grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Conheça seu instrutor
              </h2>
              <h3 className="text-2xl text-primary font-semibold">
                Giampaolo Lepore
              </h3>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Co-fundador da <strong>Curling AI</strong> (empresa criadora do
                Skip e DBExpert) e pioneiro em Vibe Coding no Brasil.
              </p>
              <p>
                Com uma sólida carreira como executivo e diretor de produto em
                grandes empresas de tecnologia, Giampaolo traz a experiência do
                mundo corporativo aliada à agilidade das novas ferramentas de
                IA.
              </p>
              <p>
                Sua missão é desmistificar a tecnologia e empoderar
                profissionais a criarem suas próprias soluções, mesmo sem
                background técnico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
