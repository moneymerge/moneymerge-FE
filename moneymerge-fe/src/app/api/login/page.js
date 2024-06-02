/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iLCVnsGv0vz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

export default function Component() {

  const router = useRouter();

  const handleKakaoLogin = () => {
    router.push('https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=6ae799c21398028744a91ebd1035fc7a&redirect_uri=http://43.203.66.36:8080/auth/kakao/callback');
  };

  const handleNaverLogin = () => {
    router.push('https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=h9r5xd35tpbGhFazlIvP&redirect_uri=http://43.203.66.36:8080/auth/naver/callback&state=test');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFFBEB]">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">Sign in to your account using your preferred method.</p>
      </div>
      <div className="mt-8 space-y-4 w-full max-w-sm">
        <Button className="w-full" variant="outline" onClick={handleKakaoLogin}>
          <CoffeeIcon className="mr-2 h-5 w-5" />
          Login with Kakao
        </Button>
        <Button className="w-full" variant="outline" onClick={handleNaverLogin}>
          <NavigationIcon className="mr-2 h-5 w-5" />
          Login with Naver
        </Button>
      </div>
    </div>
  )
}

function CoffeeIcon(props) {
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
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      <path d="M6 2v2" />
    </svg>
  )
}


function NavigationIcon(props) {
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
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  )
}