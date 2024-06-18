/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LAY6IKpKV4v
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// 달력
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";
import RootLayout from "../../../../components/layout";
import { useState, useEffect } from "react";
import { BASE_URL } from '../../../../../url.js';

export default function Component() {
  const [receipt, setReceipt] = useState({
    date: "",
    content: "",
    shared: false,
    positive: null,
    negative: null,
  });
  const [date, setDate] = useState(null);

  useEffect(() => {
    if (date instanceof Date && !isNaN(date)) {
      setReceipt((prevReceipt) => ({
        ...prevReceipt,
        date: format(date, "yyyy-MM-dd"),
      }));
    }
  }, [date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReceipt((prevReceipt) => ({ ...prevReceipt, [name]: value }));
    console.log(receipt);
  };

  const handleEmotionChange = (e) => {
    const { name, value } = e.target;
    if(value > 1000000000000) {
      alert("기분은 1,000,000,000,000 이내로 작성해주세요!");
      return;
    }
    setReceipt((prevReceipt) => ({ ...prevReceipt, [name]: value }));
    console.log(receipt);
  };

  const handleSharedChange = (e) => {
    const value = e.target.checked; // 체크 박스의 체크 상태를 가져옴
    setReceipt({
      ...receipt,
      shared: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (receipt.date === "" || /^\s+$/.test(receipt.date)) {
      alert("날짜를 입력해주세요.");
      return;
    }

    if (receipt.content === "" || /^\s+$/.test(receipt.content)) {
      alert("내용을 입력해주세요.");
      return;
    }

    if (
      receipt.positive === null ||
      /^\s+$/.test(receipt.positive) ||
      isNaN(receipt.positive)
    ) {
      alert("긍정적 기분을 입력해주세요.");
      return;
    }

    if (
      receipt.negative === null ||
      /^\s+$/.test(receipt.negative) ||
      isNaN(receipt.negative)
    ) {
      alert("부정적 기분을 입력해주세요.");
      return;
    }

    fetch(`${BASE_URL}/receipts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(receipt),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          window.location.href = `/api/receipts`;
        } else if (response.status === 403) {
          alert("올바르게 입력해주세요.");
        } else {
          alert("Error:" + response.status);
        }
      })
      .catch((error) => {
        alert("Fetch error:" + error);
      });
  };

  return (
    <RootLayout>
      <div className="w-full h-full bg-[#fffbeb] text-[#333] w-full h-full flex flex-col overflow-auto">
        <div className="px-4 flex items-center justify-between">
          <div
            className="flex items-center gap-4"
            style={{ position: "absolute", top: "-45px" }}
          >
            <Link className="flex items-center gap-2" href={`/api/receipts`}>
              <ArrowLeftIcon className="h-5 w-5" />
              <h1 className="text-2xl font-bold">하루 영수증 작성</h1>
            </Link>
          </div>
        </div>
        <main className="w-full h-full flex-1">
          <form
            className="max-w-3xl mx-auto bg-white shadow-lg p-4 space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center flex-grow">
              <Label className="flex-none mr-2" htmlFor="date">
                날짜
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "yyyy-MM-dd") // ?
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="content">내용</Label>
              <Textarea
                id="content"
                placeholder="내용을 입력하세요"
                rows={5}
                name="content"
                onChange={handleChange}
                className="whitespace-pre-wrap"
              />
            </div>
            <div className="flex items-center gap-4">
              <Label className="flex-none mr-2 ml-5" htmlFor="positive">
                긍정적 기분
              </Label>
              <Input
                className="flex-grow"
                id="positive"
                placeholder="긍정적 기분을 입력하세요"
                name="positive"
                onChange={handleEmotionChange}
              />
            </div>
            <div className="flex items-center gap-4">
              <Label className="flex-none mr-2 ml-5" htmlFor="negative">
                부정적 기분
              </Label>
              <Input
                className="flex-grow"
                id="negative"
                placeholder="부정적 기분을 입력하세요"
                name="negative"
                onChange={handleEmotionChange}
              />
            </div>
            <div className="flex items-center flex-grow gap-4">
              <label htmlFor="shared">공유하기</label>
              <input
                type="checkbox"
                name="shared"
                checked={receipt.shared} // 체크 박스의 체크 상태를 설정
                onChange={handleSharedChange} // 체크 박스의 상태 변경을 처리
              />
            </div>
            <div className="flex justify-center gap-4">
              <Link href={`/api/receipts`}>
                <Button variant="outline">취소</Button>
              </Link>
              <Button type="submit">저장</Button>
            </div>
          </form>
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
