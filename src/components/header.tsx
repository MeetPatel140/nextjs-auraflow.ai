"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/app/toggle"

export default function Header() {
  const pathname = usePathname()
  const isLoggedIn =
    pathname !== "/" && pathname !== "/signup" && pathname !== "/forgot-password" && pathname !== "/reset-password"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileNav isLoggedIn={isLoggedIn} />
            </SheetContent>
          </Sheet>
          <Link href={isLoggedIn ? "/dashboard" : "/"} className="flex items-center space-x-2">
            <span className="font-bold text-xl">AuthApp</span>
          </Link>
          <nav className="hidden md:flex md:gap-5 md:text-sm md:font-medium">
            {isLoggedIn && (
              <>
                <Link
                  href="/dashboard"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === "/dashboard" ? "text-foreground" : "text-foreground/60",
                  )}
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === "/profile" ? "text-foreground" : "text-foreground/60",
                  )}
                >
                  Profile
                </Link>
              </>
            )}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="default" size="sm">
              <Link href="/">Log in</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

function MobileNav({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <div className="flex flex-col gap-4 px-4 py-6">
      <Link href={isLoggedIn ? "/dashboard" : "/"} className="flex items-center gap-2 font-bold text-xl">
        AuthApp
      </Link>
      <nav className="flex flex-col gap-3 text-sm font-medium">
        {isLoggedIn ? (
          <>
            <Link href="/dashboard" className="hover:text-foreground/80">
              Dashboard
            </Link>
            <Link href="/profile" className="hover:text-foreground/80">
              Profile
            </Link>
            <Link href="/" className="flex items-center gap-2 hover:text-foreground/80">
              <LogOut className="h-4 w-4" />
              <span>Log out</span>
            </Link>
          </>
        ) : (
          <>
            <Link href="/" className="hover:text-foreground/80">
              Log in
            </Link>
            <Link href="/signup" className="hover:text-foreground/80">
              Sign up
            </Link>
          </>
        )}
      </nav>
    </div>
  )
}

