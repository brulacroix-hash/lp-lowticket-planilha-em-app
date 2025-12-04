import { Audience } from '@/components/landing/Audience'
import { DisplayCards } from '@/components/landing/DisplayCards'
import { Feature1 } from '@/components/landing/Feature1'
import { FinalCTA } from '@/components/landing/FinalCTA'
import { Hero } from '@/components/landing/Hero'
import { Instructor } from '@/components/landing/Instructor'
import { Offer } from '@/components/landing/Offer'
import { useEffect } from 'react'

export default function Planilha() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const checkoutUrl = 'https://pay.kiwify.com.br/vDZFiTk'

  return (
    <div className="flex flex-col min-h-screen">
      <Hero checkoutUrl={checkoutUrl} />
      <Audience description="Você provavelmente já passou por isso: escreve um prompt, a IA responde algo nada a ver, você tenta de novo, gasta crédito atrás de crédito… e ainda não sabe onde está errando. O problema não é a IA, é não saber exatamente o que pedir e como pedir." />
      <DisplayCards />
      <Feature1 />
      <Instructor />
      <Offer checkoutUrl={checkoutUrl} />
      <FinalCTA checkoutUrl={checkoutUrl} />
    </div>
  )
}
