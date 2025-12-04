import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

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
    const isVocabulario =
      location.pathname === '/vocabulário' ||
      location.pathname === '/vocabulario' ||
      location.pathname === '/vocabul%C3%A1rio'

    const checkoutUrl = isVocabulario
      ? 'https://pay.kiwify.com.br/vDZFiTk'
      : 'https://pay.kiwify.com.br/No6feAQ'

    window.open(checkoutUrl, '_blank')
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
        className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
      >
        <img
          src="https://www.codandosemcodar.com.br/logo-csc.png"
          alt="Codando sem Codar Logo"
          className="h-8 w-8 object-contain"
        />
        <span className="font-semibold text-sm md:text-base text-white tracking-tight flex items-center gap-2 whitespace-nowrap">
          Codando sem Codar
          {location.pathname === '/' && (
            <img
              src="https://files.catbox.moe/pq17vq.png"
              alt="Decoration"
              className="h-6 w-auto object-contain"
            />
          )}
        </span>
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
