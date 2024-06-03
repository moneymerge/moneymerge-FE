/**
 * v0 by Vercel.
 * @see https://v0.dev/t/N596hGnohOQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import RootLayout from "../../../components/layout.js";

export default function Component() {
  return (
    <RootLayout>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 bg-[#fffaeb]">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Avatar className="h-48 w-48">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className="flex items-center space-x-4">
            <Button className="rounded-full" size="icon" variant="outline">
              <PencilIcon className="h-5 w-5" />
              <span className="sr-only">Edit profile picture</span>
            </Button>
          </div>
        </div>
        <div className="mt-8 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <UserIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium">Username</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    johndoe
                  </p>
                </div>
                <Button className="rounded-full" size="icon" variant="outline">
                  <PencilIcon className="h-5 w-5" />
                  <span className="sr-only">Edit username</span>
                </Button>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                <CoinsIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium">Points</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    1,234
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                <BellIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium">Notification Settings</p>
                  <div className="flex items-center space-x-2">
                    <Switch id="notification-settings" />
                    <Label htmlFor="notification-settings">
                      Receive notifications
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <PowerIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium">Log Out</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Sign out of your account
                  </p>
                </div>
                <Button className="rounded-full" size="icon" variant="outline">
                  <LogOutIcon className="h-5 w-5" />
                  <span className="sr-only">Log out</span>
                </Button>
              </div>
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <TrashIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium">Delete Account</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Permanently delete your account
                  </p>
                </div>
                <Button className="rounded-full" size="icon" variant="outline">
                  <TrashIcon className="h-5 w-5" />
                  <span className="sr-only">Delete account</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </RootLayout>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CoinsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function PowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
