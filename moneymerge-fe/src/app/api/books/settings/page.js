"use client";
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
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">가계부1 환경 설정</h1>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
              <div className="flex flex-col gap-4 pt-4 pb-4">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-bold mb-2">제목</h2>
                  <div className="text-sm font-medium">가계부1</div>
                  <Link
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    href="#"
                  >
                    <PencilIcon className="h-5 w-5" />
                    <span className="sr-only">Edit</span>
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-bold mb-2">가계부 색상</h2>
                  <div className="h-8 w-8 rounded-full bg-[#5c6ac4]" />
                  <Link
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    href="#"
                  >
                    <PencilIcon className="h-5 w-5" />
                    <span className="sr-only">Edit</span>
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-bold mb-2">나의 색상</h2>
                  <div className="h-8 w-8 rounded-full bg-[#5ccac4]" />
                  <Link
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    href="#"
                  >
                    <PencilIcon className="h-5 w-5" />
                    <span className="sr-only">Edit</span>
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-bold mb-2">나의 닉네임</h2>
                  <div className="text-sm font-medium">John</div>
                  <Link
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    href="#"
                  >
                    <PencilIcon className="h-5 w-5" />
                    <span className="sr-only">Edit</span>
                  </Link>
                </div>
              </div>
              <div className="grid gap-2">
                <h2 className="text-lg font-bold mb-2">멤버</h2>
                <div className="flex items-center gap-4">
                  <div className="text-sm font-medium">Team Colors</div>
                  <Button size="sm" variant="outline">
                    Invite
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#de3618]" />
                    <div className="text-sm">John</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#f1c40f]" />
                    <div className="text-sm">Sarah</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#2ecc71]" />
                    <div className="text-sm">Alex</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#9b59b6]" />
                    <div className="text-sm">Emily</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
              <h2 className="text-lg font-bold mb-2">목표</h2>
              <div className="items-center justify-between">
                <div className="text-gray-500 dark:text-gray-400 mb-1">
                  이번 달
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-2xl font-bold">$1,500</div>
                  <Link
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    href="#"
                  >
                    <PencilIcon className="h-5 w-5" />
                    <span className="sr-only">Edit</span>
                  </Link>
                </div>
                <div className="text-gray-500 dark:text-gray-400 mb-1">
                  연간
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-2xl font-bold">$18,000</div>
                  <Link
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    href="#"
                  >
                    <PencilIcon className="h-5 w-5" />
                    <span className="sr-only">Edit</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <h2 className="text-lg font-bold mb-2">가계부 삭제</h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500 dark:text-gray-400">
                    삭제 동의
                  </span>
                  <p>2/3</p>
                  <Switch />
                </div>
                <Button variant="destructive">삭제</Button>
              </div>
            </div>
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
