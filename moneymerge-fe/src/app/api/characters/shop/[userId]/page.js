/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fxAJad4S0X2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import RootLayout from "../../../../../components/layout.js";

export default function Component() {
  return (
    <RootLayout>
      <header className="bg-[#f9f5e7] py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2" href="/api/point/1">
            <ArrowLeftIcon className="h-5 w-5" />
          </Link>
        </div>
      </header>
      <section className="bg-[#fffaed] dark:bg-gray-950 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              캐릭터 상점
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              나의 포인트: 100p
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                alt="Product Image"
                className="w-full h-60 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Fluffy Bunny</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  $19.99
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                alt="Product Image"
                className="w-full h-60 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Curious Kitten</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  $14.99
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                alt="Product Image"
                className="w-full h-60 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Playful Panda</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  $24.99
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                alt="Product Image"
                className="w-full h-60 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Sleepy Sloth</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  $16.99
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                alt="Product Image"
                className="w-full h-60 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Friendly Fox</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  $21.99
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                alt="Product Image"
                className="w-full h-60 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Mischievous Monkey</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  $18.99
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                alt="Product Image"
                className="w-full h-60 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Cozy Koala</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  $22.99
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                alt="Product Image"
                className="w-full h-60 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Adventurous Alpaca</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  $27.99
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
