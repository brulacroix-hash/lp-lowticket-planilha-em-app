import { Hero } from '@/components/landing/Hero'
import { Audience } from '@/components/landing/Audience'
import { Offer } from '@/components/landing/Offer'
import { Instructor } from '@/components/landing/Instructor'
import { FinalCTA } from '@/components/landing/FinalCTA'
import { Feature1 } from '@/components/landing/Feature1'

const Index = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <Audience />
      <Feature1
        title="O Poder do Vibe Coding"
        description="Esqueça os meses de desenvolvimento. Com o Vibe Coding, você traduz suas ideias diretamente para o software, usando IA para gerar código limpo, funcional e escalável em questão de minutos."
        imageSrc="https://img.usecurling.com/p/1200/1000?q=coding%20interface%20dark&color=orange"
        imageAlt="Vibe Coding Interface Mockup"
        buttonPrimary={{
          label: 'Garantir minha vaga',
          href: 'https://checkout.codandosemcoder.com.br/product-id',
        }}
        reverse={false}
      />
      <Offer />
      <Instructor />
      <FinalCTA />
    </div>
  )
}

export default Index
