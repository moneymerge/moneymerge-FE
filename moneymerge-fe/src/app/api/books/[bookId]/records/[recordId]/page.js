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
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import RootLayout from "../../../../../../components/layout.js";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Records() {
  const params = useParams();
  console.log(params);
  const bookId = params.bookId;
  const recordId = params.recordId;
  const [records, setRecords] = useState([]);

  useEffect(() => {
    if (recordId) {
      fetch(`http://localhost:8080/api/books/${bookId}/records/${recordId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((result) => result.json())
        .then((result) => setRecords(result.data))
        .catch((error) => {
          console.error("Error fetching record:", error);
        });
    }
  }, [bookId, recordId]);
  console.log(records);

  const handleEditClick = (recordId) => {};

  const handleDeleteClick = (recordId) => {
    const confirmDelete = window.confirm("레코드를 삭제하시겠습니까?");

    if (confirmDelete) {
      // fetch(`http://localhost:8080/api/books/1/records/15`, {
      fetch(`http://localhost:8080/api/books/${bookId}/records/${recordId}`, {
        method: "DELETE",
        credentials: "include",
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            window.location.href = `/api/books/${bookId}`;
          } else {
            alert("Error:" + response.status + "\n" + response.message);
          }
        })
        .catch((error) => {
          alert("Fetch error:" + error);
        });
    }
  };

  // const HandleRecordLikeClick = () => {
  //   if (records !== null) {
  //     fetch(
  //       `http://localhost:8080/api/books/${bookId}/records/${records.recordId}/likes`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //       }
  //     )
  //       .then((result) => result.json())
  //       .then((result) => {
  //         if (result.data) {
  //           console.log(likes);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error clicking records like button:", error);
  //       });
  //   }
  // };

  // const HandleRecordDislikeClick = () => {
  //   if (records !== null) {
  //     fetch(
  //       `http://localhost:8080/api/books/${bookId}/records/${records.recordId}/dislikes`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //       }
  //     )
  //       .then((result) => result.json())
  //       .then((result) => {
  //         if (result.data) {
  //           console.log(likes);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error clicking records like button:", error);
  //       });
  //   }
  // };

  return (
    <RootLayout>
      <div className="w-full h-full max-w-6xl mx-auto overflow-auto">
        <div className="px-4 flex items-center justify-between">
          <div
            className="flex items-center gap-4"
            style={{ position: "absolute", top: "-45px" }}
          >
            <Link
              className="flex items-center gap-2"
              href={`/api/books/${params.bookId}`}
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <h1 className="text-2xl font-bold w-[100px]">레코드</h1>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>{records.date}</CardTitle>
                <CardDescription>
                  {records.recordType} : {records.amount} 원
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {/* <div>
                      <div className="font-medium">Amount</div>
                      <div className="text-gray-500">$50.00</div>
                    </div>
                    <div>
                      <div className="font-medium">Account Type</div>
                      <div className="text-gray-500">Checking</div>
                    </div> */}
                  <div className="flex gap-8">
                    <div className="font-medium">자산</div>
                    <div className="text-gray-500">{records.assetType}</div>
                  </div>
                  <div className="flex gap-8">
                    <div className="font-medium">카테고리</div>
                    <div className="text-gray-500">{records.categoryName}</div>
                  </div>
                  <div className="">
                    <div className="font-medium">내용</div>
                    <div className="border rounded-md p-4">
                      <div className="text-gray-500">{records.content}</div>
                    </div>
                  </div>
                  <div className="">
                    <div className="font-medium">메모</div>
                    <div className="border rounded-md p-4">
                      <div className="text-gray-500">{records.memo}</div>
                    </div>
                  </div>

                  <div>
                    <div className="mt-3 font-medium">사진</div>
                    <img
                      alt="Transaction Photo"
                      className="rounded-md"
                      src={records.image}
                      style={{
                        width: "200px",
                        height: "200px",
                        backgroundImage: `url(${records.image})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>
                  <div className="flex mt-3">
                    <div>가계부</div>

                    {records.bookList &&
                      records.bookList.map((book) => (
                        <div
                          key={book.bookId}
                          className="ml-3 flex items-center justify-between"
                        >
                          {/* <input type="checkbox"></input> */}
                          <div
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "5px",
                              backgroundColor: book.bookColor,
                            }}
                          ></div>
                          <span className="font-medium">{book.bookTitle}</span>
                        </div>
                      ))}
                  </div>
                  <div className="mt-3 flex gap-8">
                    <div className="font-medium">기록한 사람</div>
                    <div className="text-gray-500">{records.username}</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="p-[0px]"
                      // onClick={HandleRecordLikeClick}
                    >
                      <ThumbsUpIcon className="w-4 h-4" />
                      <span className="sr-only">Like</span>
                    </Button>
                    <div className="text-gray-500">{records.likes}</div>
                    <Button
                      size="icon"
                      variant="ghost"
                      // onClick={HandleRecordDislikeClick}
                    >
                      <ThumbsDownIcon className="w-4 h-4" />
                      <span className="sr-only">Dislike</span>
                    </Button>
                    <div className="text-gray-500">{records.dislikes}</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleEditClick(records.recordId)}
                    >
                      <span className="">수정</span>
                      <PencilIcon className="w-5 h-5" />
                      <span className="sr-only ">Edit</span>
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleDeleteClick(records.recordId)}
                    >
                      삭제
                      <TrashIcon className="w-5 h-5" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          {/* 댓글 */}
          {/* <div className="grid gap-4">
            <div className="font-medium">Comments</div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4">
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage
                      alt="User Avatar"
                      src="/placeholder-user.jpg"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-2">
                    <div className="font-medium">John Doe</div>
                    <div className="text-gray-500">
                      Great job tracking your expenses! This will really help
                      you stay on top of your finances.
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <div>2 hours ago</div>
                      <div className="flex items-center gap-2">
                        <Button size="icon" variant="ghost">
                          <DeleteIcon className="w-4 h-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button size="icon" variant="ghost">
                          <TrashIcon className="w-4 h-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage
                      alt="User Avatar"
                      src="/placeholder-user.jpg"
                    />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-2">
                    <div className="font-medium">Sarah Anderson</div>
                    <div className="text-gray-500">
                      Awesome, this is really helpful for keeping track of our
                      household expenses. Let me know if you need any help with
                      categorizing or budgeting.
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <div>1 day ago</div>
                      <div className="flex items-center gap-2">
                        <Button size="icon" variant="ghost">
                          <DeleteIcon className="w-4 h-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button size="icon" variant="ghost">
                          <TrashIcon className="w-4 h-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t pt-4">
                <form>
                  <Textarea
                    className="w-full resize-none"
                    placeholder="Write a comment..."
                  />
                  <div className="flex justify-end mt-2">
                    <Button type="submit">Post Comment</Button>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
        </div>
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
