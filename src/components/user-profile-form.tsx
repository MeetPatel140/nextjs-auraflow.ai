"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Camera, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function UserProfileForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate saving profile
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <div className="relative h-24 w-24">
          <Image
            src="/placeholder.svg?height=96&width=96"
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full object-cover"
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-background shadow"
          >
            <Camera className="h-4 w-4" />
            <span className="sr-only">Upload profile picture</span>
          </Button>
        </div>
        <div className="w-full space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" defaultValue="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" defaultValue="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john.doe@example.com" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          placeholder="Tell us about yourself"
          className="min-h-[100px]"
          defaultValue="I'm a software developer with a passion for building beautiful user interfaces."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" defaultValue="San Francisco, CA" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input id="website" type="url" defaultValue="https://example.com" />
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Saving...
          </>
        ) : (
          "Save changes"
        )}
      </Button>
    </form>
  )
}

