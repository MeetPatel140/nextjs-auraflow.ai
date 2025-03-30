import Link from "next/link"
import { ResetPasswordForm } from "@/components/reset-password-form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResetPasswordPage() {
  return (
    <div className="container flex h-[calc(100vh-8rem)] items-center justify-center">
      <div className="w-full max-w-md">
        <Card className="border-none bg-background/60 shadow-lg backdrop-blur-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Reset password</CardTitle>
            <CardDescription>Enter your new password below</CardDescription>
          </CardHeader>
          <CardContent>
            <ResetPasswordForm />
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

