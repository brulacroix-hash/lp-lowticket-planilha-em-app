export function Instructor() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Image Column */}
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Animated borders/shapes */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-orange-600 rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-700 ease-out"></div>
              <div className="absolute inset-0 bg-secondary rounded-[2rem] -rotate-6 opacity-60 border border-white/5 group-hover:-rotate-3 transition-transform duration-700 ease-out"></div>

              <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src="https://img.usecurling.com/ppl/large?gender=male"
                  alt="Giampaolo Lepore"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
              </div>

              {/* Name Tag floating */}
              <div className="absolute -bottom-6 -right-4 bg-card border border-white/10 px-4 py-2 rounded-lg shadow-xl animate-float">
                <p className="font-bold text-white text-sm">Giampaolo Lepore</p>
                <p className="text-xs text-primary">CTO & Founder</p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-7/12 text-center md:text-left space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Giampaolo Lepore
              </h2>
              <div className="h-1 w-12 bg-primary rounded-full mx-auto md:mx-0"></div>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
              <p>
                Giampaolo Lepore é co-fundador da Curling AI e um dos pioneiros
                na metodologia de Vibe Coding no Brasil.
              </p>
              <p>
                Com anos de experiência liderando produtos em grandes
                corporações, ele percebeu que o futuro do desenvolvimento não
                pertence apenas aos programadores, mas a quem sabe fazer as
                perguntas certas para a IA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
