import { Hero } from '@/components/landing/Hero'
import { Audience } from '@/components/landing/Audience'
import { Offer } from '@/components/landing/Offer'
import { Instructor } from '@/components/landing/Instructor'
import { FinalCTA } from '@/components/landing/FinalCTA'

const Index = () => {
  const checkoutUrl = 'https://pay.kiwify.com.br/No6feAQ'

  return (
    <div className="flex flex-col w-full min-h-screen bg-background overflow-x-hidden">
      <Hero checkoutUrl={checkoutUrl} />
      <Audience />
      <Offer checkoutUrl={checkoutUrl} />
      <Instructor />
      <FinalCTA checkoutUrl={checkoutUrl} />
    </div>
  )
}

export default Index
