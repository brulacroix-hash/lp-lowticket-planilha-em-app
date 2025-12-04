import { Hero } from '@/components/landing/Hero'
import { Audience } from '@/components/landing/Audience'
import { Offer } from '@/components/landing/Offer'
import { Instructor } from '@/components/landing/Instructor'
import { FinalCTA } from '@/components/landing/FinalCTA'
import { DisplayCards } from '@/components/landing/DisplayCards'
import { Activity, TrendingUp } from 'lucide-react'

const Index = () => {
  const cards = [
    {
      icon: <TrendingUp className="size-4 text-green-400" />,
      title: 'Vendas Mensais',
      description: 'R$ 14.250,00',
      date: 'Atualizado agora',
    },
    {
      icon: <Activity className="size-4 text-blue-400" />,
      title: 'Novos Usuários',
      description: '+1.240',
      date: 'Hoje',
    },
  ]

  return (
    <div className="flex flex-col w-full min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <DisplayCards cards={cards} />
      <Audience />
      <Offer />
      <Instructor />
      <FinalCTA />
    </div>
  )
}

export default Index
