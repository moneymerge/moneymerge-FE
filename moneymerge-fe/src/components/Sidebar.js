"use client";
import Link from "next/link";
import React from "react";
import "./style/sidebar.css";
import {
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [userData, setUserData] = useState(null);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // 쿠키를 포함하여 요청
    })
      .then((result) => result.json())
      .then((result) => {
        console.log("Received user data:", result.data);
        console.log("Received book data:", result.data.bookList);
        setUserData(result.data);
        setBookList(result.data.bookList);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <div className="overlap">
            <div className="rectangle" />
            <div className="div" />
            <div className="moneymerge">
              <Link href="/">머니머지</Link>
            </div>
            {/* 프로필 */}
            <Link href="/api/profile/1">
              <div
                className="ellipse"
                style={{
                  backgroundImage: `url(${
                    userData
                      ? userData.profileUrl
                      : "s3://moneymerge/profile/default_profile_image.jpg"
                  })`,
                  backgroundSize: "cover",
                }}
              />
              <div className="text-wrapper-5">
                {userData ? userData.username : "Loading..."}
              </div>
            </Link>
            <div className="text-wrapper-1">내 가계부</div>
            <div className="book-list">
              {/* 서버에서 받은 bookList 데이터를 사용하여 가계부 목록 생성 */}
              {bookList &&
                bookList.map((book, index) => (
                  <div key={index} className="book-wrapper">
                    <Link href={`/api/books/${book.bookId}`}>
                      <div className="book-check" />
                    </Link>
                    <div className="text-wrapper">{book.bookTitle}</div>
                  </div>
                ))}
              <div className="book-wrapper">
                {/* 가계부 추가 Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="add-button">+ 가계부 추가</div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px]">
                    <DialogHeader>
                      <DialogTitle>새 가계부 만들기</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-6 py-4">
                      <div className="flex items-center justify-between gap-4 flex-nowrap">
                        <Label
                          htmlFor="ledgerName"
                          className="whitespace-nowrap"
                        >
                          가계부 이름
                        </Label>
                        <Input
                          className="w-full"
                          id="ledgerName"
                          placeholder="Enter ledger name"
                          type="text"
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm font-medium">가계부 색상</div>
                        <div className="h-8 w-8 rounded-full bg-[#5c6ac4]" />
                        <Button size="sm" variant="outline">
                          Change Color
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm font-medium">나의 색상</div>
                        <div className="h-8 w-8 rounded-full bg-[#5ccac4]" />
                        <Button size="sm" variant="outline">
                          Change Color
                        </Button>
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Team Colors</div>
                          <Button size="sm" variant="outline">
                            Invite
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-[#de3618]" />
                            <div className="text-sm">John</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-[#f1c40f]" />
                            <div className="text-sm">Sarah</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-[#2ecc71]" />
                            <div className="text-sm">Alex</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-[#9b59b6]" />
                            <div className="text-sm">Emily</div>
                          </div>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="monthlyGoal">Monthly Goal</Label>
                          <Input
                            className="w-24"
                            id="monthlyGoal"
                            type="number"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="annualGoal">Annual Goal</Label>
                          <Input
                            className="w-24"
                            id="annualGoal"
                            type="number"
                          />
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="ghost">Cancel</Button>
                      <Button type="submit">Save</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <Link href="/api/boards">
            <div className="overlap-1">
              <div className="text-wrapper-6">커뮤니티</div>
            </div>
          </Link>
          <Link href="/api/point/1">
            <div className="overlap-2">
              <div className="text-wrapper-6">내 포인트</div>
            </div>
          </Link>
          <Link href="#">
            <div className="overlap-3">
              <div className="text-wrapper-6">하루 영수증</div>
            </div>
          </Link>
          <Link href="/api/login">
            <div className="overlap-4">
              <div className="text-wrapper-7">로그아웃</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
