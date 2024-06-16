"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const KakaoCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    fetch(`http://3.39.225.191/auth/kakao/callback?code=${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((result) => {
        saveTokensToCookie(result.data.accessToken, result.data.refreshToken);
        router.push("/");
      })
      .catch((error) => console.error("Error fetching token data:", error));
  }, []);

  return <div>Loading...</div>;
};

export default KakaoCallback;

function saveTokensToCookie(accessToken, refreshToken) {
  // Access Token 쿠키 설정
  const accessTokenExpiresInSec = 2 * 60 * 60; // 2시간
  setCookie("AccessToken", accessToken, accessTokenExpiresInSec);

  // Refresh Token 쿠키 설정
  const refreshTokenExpiresInSec = 14 * 24 * 60 * 60; // 2주 (14일)
  setCookie("RefreshToken", refreshToken, refreshTokenExpiresInSec);

  console.log("토큰을 쿠키에 저장했습니다.");
}

function setCookie(name, value, maxAgeInSeconds) {
  const expires = new Date();
  expires.setTime(expires.getTime() + maxAgeInSeconds * 1000);
  const cookieOptions = {
    path: "/",
    secure: false, // HTTPS에서만 쿠키 전송
    sameSite: "None", // Cross-Site 접근 허용
    expires: expires.toUTCString(),
  };
  document.cookie = `${name}=${value}; ${Object.entries(cookieOptions)
    .map((entry) => entry.join("="))
    .join("; ")}`;
}
