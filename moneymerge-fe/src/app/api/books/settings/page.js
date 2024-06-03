/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0c9vh5jQgPE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import RootLayout from "../../../../components/layout.js";

export default function Component() {
  return (
    <RootLayout>
      <div className="flex flex-col w-full min-h-screen">
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
          <div className="max-w-6xl w-full mx-auto grid gap-2">
            <h1 className="font-semibold text-3xl">가계부 환경설정</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Manage your household budgets and track your spending.
            </p>
          </div>
          <div className="grid gap-6 max-w-6xl w-full mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Personal Budget</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Track your personal expenses
                    </p>
                  </div>
                  <Link className="text-primary" href="#">
                    <PencilIcon className="w-5 h-5" />
                    <span className="sr-only">Edit Personal Budget</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Household Budget</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Track your household expenses
                    </p>
                  </div>
                  <Link className="text-primary" href="#">
                    <PencilIcon className="w-5 h-5" />
                    <span className="sr-only">Edit Household Budget</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Travel Budget</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Track your travel expenses
                    </p>
                  </div>
                  <Link className="text-primary" href="#">
                    <PencilIcon className="w-5 h-5" />
                    <span className="sr-only">Edit Travel Budget</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Business Budget</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Track your business expenses
                    </p>
                  </div>
                  <Link className="text-primary" href="#">
                    <PencilIcon className="w-5 h-5" />
                    <span className="sr-only">Edit Business Budget</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </RootLayout>
  );
}

function FrameIcon(props) {
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
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
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
