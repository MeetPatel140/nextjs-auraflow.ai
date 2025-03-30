import Link from "next/link"
import { ForgotPasswordForm } from "@/components/forgot-password-form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ForgotPasswordPage() {
  return (
    <div className="container flex h-[calc(100vh-8rem)] items-center justify-center">
      <div className="w-full max-w-md">
        <Card className="border-none bg-background/60 shadow-lg backdrop-blur-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Forgot password</CardTitle>
            <CardDescription>
              Enter your email address and we&apos;ll send you a link to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ForgotPasswordForm />
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground">
              Remember your password?{" "}
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

