import { UserProfileForm } from "@/components/user-profile-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="bg-background/60 backdrop-blur-lg">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="bg-background/60 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your account profile information and email address.</CardDescription>
            </CardHeader>
            <CardContent>
              <UserProfileForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="password">
          <Card className="bg-background/60 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password to keep your account secure.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="current-password" className="text-sm font-medium">
                    Current Password
                  </label>
                  <input
                    id="current-password"
                    type="password"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="new-password" className="text-sm font-medium">
                    New Password
                  </label>
                  <input
                    id="new-password"
                    type="password"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirm-password" className="text-sm font-medium">
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                >
                  Update Password
                </button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="bg-background/60 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive emails about account activity.</p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" defaultChecked />
                    <div className="peer h-6 w-11 rounded-full bg-muted after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive text messages for important updates.</p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="peer h-6 w-11 rounded-full bg-muted after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing Emails</p>
                    <p className="text-sm text-muted-foreground">Receive emails about new features and offers.</p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="peer h-6 w-11 rounded-full bg-muted after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card className="bg-background/60 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>Manage your billing information and view your subscription.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium">Current Plan</h3>
                  <div className="mt-2 rounded-md bg-primary/10 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Pro Plan</p>
                        <p className="text-sm text-muted-foreground">$29/month</p>
                      </div>
                      <button className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        Upgrade
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Payment Method</h3>
                  <div className="mt-2 flex items-center space-x-4">
                    <div className="h-10 w-16 rounded-md bg-muted"></div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/25</p>
                    </div>
                    <button className="ml-auto text-sm text-primary underline">Edit</button>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Billing History</h3>
                  <div className="mt-2 space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between rounded-md border p-3">
                        <div>
                          <p className="font-medium">Invoice #{1000 + i}</p>
                          <p className="text-sm text-muted-foreground">{new Date(2023, i, 1).toLocaleDateString()}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                            Paid
                          </span>
                          <button className="text-sm text-primary underline">Download</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

