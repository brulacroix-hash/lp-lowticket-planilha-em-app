export function Instructor() {
  return (
    <section className="py-20 md:py-24 bg-secondary/20 border-y border-border/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-full md:aspect-square max-w-sm">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-3"></div>
              <img
                src="https://img.usecurling.com/ppl/large?gender=male"
                alt="Giampaolo Lepore"
                className="relative w-full h-full object-cover rounded-2xl shadow-lg border border-border grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Quem é Giampaolo Lepore
              </h2>
              <p className="text-primary font-medium text-lg">
                Co-fundador da Curling AI | Pioneiro em Vibe Coding no Brasil
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Meu nome é Giampaolo Lepore, casado, e atualmente co-fundador da
                Curling AI (empresa que criou o Skip e o DBExpert).
              </p>
              <p>
                Antes disso, fui executivo, sendo diretor de produto em grandes
                empresas de tecnologia no Brasil.
              </p>
              <p>
                Tive a sorte de ser pioneiro em Vibe Coding no Brasil, e ter uma
                das maiores comunidades por aqui. Bora nessa?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
