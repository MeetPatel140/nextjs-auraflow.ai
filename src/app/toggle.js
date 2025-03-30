"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="inline-flex items-center rounded-md border bg-muted p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme("light")}
        className={`px-2.5 ${theme === "light" ? "bg-background shadow-sm" : ""}`}
      >
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme("dark")}
        className={`px-2.5 ${theme === "dark" ? "bg-background shadow-sm" : ""}`}
      >
        <Moon className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme("system")}
        className={`px-2.5 ${theme === "system" ? "bg-background shadow-sm" : ""}`}
      >
        <Monitor className="h-4 w-4" />
      </Button>
    </div>
  )
}
