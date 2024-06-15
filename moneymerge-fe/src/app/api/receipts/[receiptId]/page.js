/**
 * v0 by Vercel.
 * @see https://v0.dev/t/h9gCZf21D09
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RootLayout from "../../../../components/layout.js";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { BASE_URL } from '../../../../../url.js';

export default function Component() {
  const params = useParams();
  const router = useRouter();
  console.log(params);
  const receiptId = params.receiptId;
  const [receipt, setReceipt] = useState({});
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetch(`${BASE_URL}/receipts/${receiptId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((result) => result.json())
      .then((result) => {
        setReceipt(result.data);
        setLikes(result.data.likeCount);
        console.log(result.data);
      })
      .catch((error) => console.error("Error fetching receipt data:", error));
  }, []);

  const handleDeleteClick = (receiptId) => {
    const confirmDelete = window.confirm("영수증을 삭제하시겠습니까?");

    if (confirmDelete) {
      fetch(`${BASE_URL}receipts/${receiptId}`, {
        method: "DELETE",
        credentials: "include",
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            window.location.href = `/api/receipts`;
          } else {
            alert("Error:" + response.status + "\n" + response.message);
          }
        })
        .catch((error) => {
          alert("Fetch error:" + error);
        });
    }
  };

  return (
    <RootLayout>
      <div className="w-full h-full max-w-6xl mx-auto pb-8 overflow-auto bg-[#ffffff]">
        <div className="px-4 flex items-center justify-between">
          <div
            className="flex items-center gap-4"
            style={{ position: "absolute", top: "-45px" }}
          >
            <Link className="flex items-center gap-2" href={`/api/receipts`}>
              <ArrowLeftIcon className="h-5 w-5" />
              <h1 className="text-2xl font-bold">하루 영수증</h1>
            </Link>
          </div>
        </div>
        <main>
          <div className="w-full h-full max-w-3xl mx-auto bg-white p-3 space-y-6">
            <div className="grid gap-8">
              <Card className="shadow-none">
                <CardHeader>
                  <CardTitle>{receipt.date}</CardTitle>
                  <CardDescription>
                    공유 여부: {receipt.shared ? "공유함" : "공유안함"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="grid gap-4">
                      <div className="">
                        <div className="font-medium">내용</div>
                        <div className="border rounded-md p-4 min-h-[100px]">
                          <div className="text-gray-500">{receipt.content}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="font-medium">
                        긍정적 기분: {receipt.positive} 원
                      </div>
                      <div className="font-medium">
                        부정적 기분: {receipt.negative} 원
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex justify-between w-full">
                    <div className="flex items-center gap-2">
                      <div className="text-gray-500">
                        받은 좋아요 개수: {likes}
                      </div>
                    </div>
                      <div className="flex items-center gap-4">
                        <Link href={`/api/receipts/${receiptId}/edit`}>
                          <Button size="icon" variant="ghost">
                            <span className="">수정</span>
                            <PencilIcon className="w-5 h-5" />
                            <span className="sr-only ">Edit</span>
                          </Button>
                        </Link>

                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleDeleteClick(receipt.receiptId)}
                        >
                          삭제
                          <TrashIcon className="w-5 h-5"/>
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </RootLayout>
  );
}

function DeleteIcon(props) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function ReplyIcon(props) {
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
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function ThumbsUpIcon(props) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function ThumbsDownIcon(props) {
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
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
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
