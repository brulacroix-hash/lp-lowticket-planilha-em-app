import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBuyClick = () => {
    window.open('https://checkout.codandosemcoder.com.br/product-id', '_blank')
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8 lg:px-16 h-16 md:h-20 flex items-center justify-between',
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-sm border-b border-border/40'
          : 'bg-transparent',
      )}
    >
      <div
        onClick={scrollToTop}
        className="cursor-pointer font-bold text-lg md:text-xl tracking-tight hover:opacity-90 transition-opacity text-white"
      >
        Codando sem Codar
      </div>

      <div
        className={cn(
          'transition-all duration-500 transform',
          isScrolled
            ? 'translate-y-0 opacity-100'
            : 'translate-y-[-20px] opacity-0 pointer-events-none',
        )}
      >
        <Button
          size="sm"
          onClick={handleBuyClick}
          className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg"
        >
          Quero Acessar
        </Button>
      </div>
    </header>
  )
}
