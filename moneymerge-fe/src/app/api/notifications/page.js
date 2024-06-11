"use client";
import RootLayout from "../../../components/layout.js";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Component() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/notifications", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((result) => result.json())
      .then((result) => {
        console.log("Received notification data:", result.data);
        setNotifications(result.data);
      })
      .catch((error) => console.error("Error fetching character data:", error));
  }, [notifications]);

  return (
    <RootLayout>
      <div className="bg-[#ffffff] text-[#333] w-full h-full flex flex-col overflow-auto">
        <div className="px-4 flex items-center justify-between">
          <div
            className="flex items-center gap-4"
            style={{ position: "absolute", top: "-45px" }}
          >
            <Link className="flex items-center gap-2" href="/">
              <ArrowLeftIcon className="h-5 w-5" />
              <h1 className="text-2xl font-bold w-[100px]">알림</h1>
            </Link>
          </div>
        </div>
        <main
          style={{
            height: "432px",
            width: "100%",
          }}
        ></main>
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