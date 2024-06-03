/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iLCVnsGv0vz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleKakaoLogin = () => {
    router.push(
      "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=6ae799c21398028744a91ebd1035fc7a&redirect_uri=http://localhost:8080/auth/kakao/callback"
    );
  };

  const handleNaverLogin = () => {
    router.push(
      "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=h9r5xd35tpbGhFazlIvP&redirect_uri=http://localhost:8080/auth/naver/callback&state=test"
    );
  };


  return (
    <div>
      <div>
        <button onClick={handleKakaoLogin}>Login with Kakao</button>
      </div>
      <div>
        <button onClick={handleNaverLogin}>Login with Naver</button>
      </div>
    </div>
  );
}
