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

  const handleDeleteNotification = (notificationId) => {
    fetch(`http://localhost:8080/api/notifications/${notificationId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((result) => result.json())
      .catch((error) => console.error("Error fetching character data:", error));
  };

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
        >
          <div className="mt-8 w-full">
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="px-4 py-3 text-left font-medium text-xs">
                      날짜
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-xs">
                      종류
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-xs">
                      내역
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-xs"/>
                  </tr>
                </thead>
                <tbody>
                  {notifications &&
                    notifications.map((row) => (
                      <tr className="border-b">
                        <td className="px-4 py-3 text-xs">{row.createdAt}</td>
                        <td className="px-4 py-3 text-xs">{row.type}</td>
                        <td className="px-4 py-3 text-xs flex"><p className="text-[#B8547D]">{row.detail}</p> &nbsp;{row.message}</td>
                        <td onClick={() => handleDeleteNotification(row.notificationId)}><XIcon/></td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
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

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}