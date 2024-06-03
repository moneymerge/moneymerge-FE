"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/99Qgkbq6jqE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import RootLayout from "../../../components/layout.js";

export default function Component() {
  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="relative w-[300px] h-[450px] rounded-full overflow-hidden">
          <img
            alt="Business Icon"
            className="object-cover w-full h-full"
            height={450}
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/500",
              objectFit: "cover",
            }}
            width={300}
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <RocketIcon className="text-white w-20 h-20" />
          </div>
        </div>

        <div
          className="flex w-full justify-center gap-4"
          style={{ marginTop: 40 }}
        >
          <p style={{ marginTop: 5 }}>내 캐릭터: 곰돌쓰</p>
          <Link className="flex items-center gap-2" href="/api/characters/1">
            <Button size="sm" variant="outline">
              변경
            </Button>
          </Link>
          <Link
            className="flex items-center gap-2"
            href="/api/characters/shop/1"
          >
            <Button size="sm" variant="outline">
              구매
            </Button>
          </Link>
        </div>
        <div>내 포인트: 100 P</div>

        <div className="mt-8 w-full max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Point Usage History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <PlusIcon className="text-green-500 w-5 h-5" />
                  <div className="font-medium">Point Earned</div>
                  <div className="text-sm text-gray-500">2023-04-15</div>
                </div>
                <div className="font-medium text-green-500">+500 pts</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MinusIcon className="text-red-500 w-5 h-5" />
                  <div className="font-medium">Point Used</div>
                  <div className="text-sm text-gray-500">2023-05-01</div>
                </div>
                <div className="font-medium text-red-500">-200 pts</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ClockIcon className="text-gray-500 w-5 h-5" />
                  <div className="font-medium">Point Expired</div>
                  <div className="text-sm text-gray-500">2023-06-30</div>
                </div>
                <div className="font-medium text-gray-500">-50 pts</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <PlusIcon className="text-green-500 w-5 h-5" />
                  <div className="font-medium">Point Earned</div>
                  <div className="text-sm text-gray-500">2023-07-15</div>
                </div>
                <div className="font-medium text-green-500">+300 pts</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </RootLayout>
  );
}

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MinusIcon(props) {
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
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function RocketIcon(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
