import { Hero } from '@/components/landing/Hero'
import { Audience } from '@/components/landing/Audience'
import { Offer } from '@/components/landing/Offer'
import { Instructor } from '@/components/landing/Instructor'
import { FinalCTA } from '@/components/landing/FinalCTA'
import { Feature1 } from '@/components/landing/Feature1'

const Index = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <Hero />
      <Audience />
      <Feature1
        title="O Poder do Vibe Coding"
        description="Esqueça os meses de desenvolvimento. Com o Vibe Coding, você traduz suas ideias diretamente para o software, usando IA para gerar código limpo, funcional e escalável em questão de minutos."
        imageSrc="https://img.usecurling.com/p/800/600?q=coding%20ai&color=blue"
        imageAlt="Vibe Coding Interface"
        buttonPrimary={{
          label: 'Garantir Vaga',
          href: 'https://checkout.codandosemcoder.com.br/product-id',
        }}
        buttonSecondary={{
          label: 'Ver Projetos',
          href: '#',
        }}
      />
      <Offer />
      <Instructor />
      <FinalCTA />
    </div>
  )
}

export default Index
