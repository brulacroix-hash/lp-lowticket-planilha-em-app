export function Footer() {
  return (
    <footer className="w-full py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
        <p>
          &copy; {new Date().getFullYear()} Codando sem Codar. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
