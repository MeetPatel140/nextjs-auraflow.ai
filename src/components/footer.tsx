import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
        <div className="text-center text-sm text-muted-foreground md:text-left">
          © {new Date().getFullYear()} AuthApp. All rights reserved.
        </div>
        <nav className="flex gap-4 text-sm font-medium">
          <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Terms
          </Link>
          <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}

