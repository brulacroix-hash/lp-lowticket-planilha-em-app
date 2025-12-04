import { Hero } from '@/components/landing/Hero'
import { Audience } from '@/components/landing/Audience'
import { Offer } from '@/components/landing/Offer'
import { Instructor } from '@/components/landing/Instructor'
import { FinalCTA } from '@/components/landing/FinalCTA'

const Planilha = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background overflow-x-hidden">
      <Hero
        title={
          <>
            Aprenda vocabulário <span className="text-primary">para IA</span>
          </>
        }
        description="Você provavelmente já passou por isso: escreve um prompt, a IA responde algo nada a ver, você tenta de novo, gasta crédito atrás de crédito… e ainda não sabe onde está errando. Analisamos centenas de prompts que deram errado, e ficou claro um padrão: o problema não é a IA, é não saber exatamente o que pedir e como pedir."
        imageSrc="https://files.catbox.moe/q5gg02.png"
      />
      <Audience
        description="Para quem não sabe o que pedir para a IA e quer parar de queimar créditos em prompts que não funcionam."
        loopItems={[
          'Prompts que funcionam',
          'Vocabulário atualizado',
          'Confiança para criar sozinho',
        ]}
      />
      <Offer />
      <Instructor />
      <FinalCTA />
    </div>
  )
}

export default Planilha
