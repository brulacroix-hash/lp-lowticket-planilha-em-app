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
        imageSrc="https://files.catbox.moe/q5gg02.png"
      />
      <Audience />
      <Offer />
      <Instructor />
      <FinalCTA />
    </div>
  )
}

export default Planilha
