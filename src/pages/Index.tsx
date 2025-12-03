import { Hero } from '@/components/landing/Hero'
import { Audience } from '@/components/landing/Audience'
import { Offer } from '@/components/landing/Offer'
import { Instructor } from '@/components/landing/Instructor'
import { FinalCTA } from '@/components/landing/FinalCTA'

const Index = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <Hero />
      <Audience />
      <Offer />
      <Instructor />
      <FinalCTA />
    </div>
  )
}

export default Index
