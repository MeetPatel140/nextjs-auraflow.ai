import Link from "next/link"
import { SignupForm } from "@/components/signup-form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignupPage() {
  return (
    <div className="container flex h-[calc(100vh-8rem)] items-center justify-center">
      <div className="w-full max-w-md">
        <Card className="border-none bg-background/60 shadow-lg backdrop-blur-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <CardDescription>Enter your information to create an account</CardDescription>
          </CardHeader>
          <CardContent>
            <SignupForm />
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/" className="underline underline-offset-4 hover:text-primary">
                Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

