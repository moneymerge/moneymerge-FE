"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import RootLayout from "../components/layout.js";
import { BASE_URL } from '../../url.js';

export default function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          window.location.href = "/api/login";
        }
        return response.json();
      })
      .then((result) => {
        console.log(result.data.bookList[0].bookId);
        window.location.href = `/api/books/${result.data.bookList[0].bookId}`;
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return <RootLayout />;
}
