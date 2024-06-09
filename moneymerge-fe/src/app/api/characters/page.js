"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5Tknzmll2fc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RootLayout from "../../../components/layout.js";

export default function Component() {
  return (
    <RootLayout>
      <header className="bg-[#f9f5e7] py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2" href="/api/boards">
            <ArrowLeftIcon className="h-5 w-5" />
            <h1 className="text-2xl font-bold">내 캐릭터</h1>
          </Link>
        </div>
      </header>
      <div className="bg-[#fffbeb] dark:bg-[#1f1f1f]">
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-6 py-12 md:py-20">
          <div className="flex flex-col items-center">
            <img
              alt="Product Image"
              className="aspect-[2/3] object-cover rounded-xl"
              height="600"
              src="/placeholder.svg"
              width="400"
            />
            <p style={{ marginTop: 5 }}>현재 캐릭터: 곰돌쓰</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img
                alt="Product 1"
                className="aspect-[3/4] object-cover w-full"
                height="400"
                src="/placeholder.svg"
                width="300"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-lg">흥청망청 토끼</h3>
                <Button
                  className="mt-2 bg-[#fde047] hover:bg-[#facc15] text-[#1f1f1f] dark:bg-[#fde047] dark:hover:bg-[#facc15] dark:text-[#1f1f1f]"
                  size="sm"
                >
                  선택
                </Button>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img
                alt="Product 2"
                className="aspect-[3/4] object-cover w-full"
                height="400"
                src="/placeholder.svg"
                width="300"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-lg">알뜰한 오리</h3>
                <Button
                  className="mt-2 bg-[#fde047] hover:bg-[#facc15] text-[#1f1f1f] dark:bg-[#fde047] dark:hover:bg-[#facc15] dark:text-[#1f1f1f]"
                  size="sm"
                >
                  선택
                </Button>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img
                alt="Product 3"
                className="aspect-[3/4] object-cover w-full"
                height="400"
                src="/placeholder.svg"
                width="300"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-lg">Product 3</h3>
                <Button
                  className="mt-2 bg-[#fde047] hover:bg-[#facc15] text-[#1f1f1f] dark:bg-[#fde047] dark:hover:bg-[#facc15] dark:text-[#1f1f1f]"
                  size="sm"
                >
                  선택
                </Button>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img
                alt="Product 4"
                className="aspect-[3/4] object-cover w-full"
                height="400"
                src="/placeholder.svg"
                width="300"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-lg">Product 4</h3>
                <Button
                  className="mt-2 bg-[#fde047] hover:bg-[#facc15] text-[#1f1f1f] dark:bg-[#fde047] dark:hover:bg-[#facc15] dark:text-[#1f1f1f]"
                  size="sm"
                >
                  선택
                </Button>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <img
                alt="Product 5"
                className="aspect-[3/4] object-cover w-full"
                height="400"
                src="/placeholder.svg"
                width="300"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-lg">Product 5</h3>
                <Button
                  className="mt-2 bg-[#fde047] hover:bg-[#facc15] text-[#1f1f1f] dark:bg-[#fde047] dark:hover:bg-[#facc15] dark:text-[#1f1f1f]"
                  size="sm"
                >
                  선택
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-12 right-16">
          <Link href="/api/characters/shop/1">
            <Button
              className="bg-[#fde047] hover:bg-[#fde047] text-[#1f1f1f] dark:bg-[#1f1f1f] dark:hover:bg-[#fde047] dark:text-[#fffbeb]"
              variant="outline"
            >
              상점 가기
            </Button>
          </Link>
        </div>
      </div>
    </RootLayout>
  );
}

function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}
