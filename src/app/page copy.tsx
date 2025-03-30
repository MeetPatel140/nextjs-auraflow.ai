import Link from "next/link"
import { LoginForm } from "@/components/login-form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="container flex h-[calc(100vh-8rem)] items-center justify-center">
      <div className="w-full max-w-md">
        <Card className="border-none bg-background/60 shadow-lg backdrop-blur-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>Enter your email and password to login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-muted-foreground">
              <Link href="/forgot-password" className="underline underline-offset-4 hover:text-primary">
                Forgot your password?
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline underline-offset-4 hover:text-primary">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}