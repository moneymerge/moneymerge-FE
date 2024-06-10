"use client";
import Link from "next/link";
import RootLayout from "../../../../../components/layout.js";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function Component() {
    const params = useParams();
    const bookId = params.bookId;

    return (
        <RootLayout>
          <div className="bg-[#ffffff] text-[#333] w-full h-full flex flex-col overflow-auto">
            <div className="px-2 flex items-center justify-between">
              <div
                className="flex items-center gap-4"
                style={{ position: "absolute", top: "-50px" }}
              >
                <Link className="flex items-center bg-[#ffffff] pl-2 pr-2 pt-2 rounded-t-xl" href={`/api/books/${bookId}`}>
                  <h1 className="text-xl font-bold w-[100px]">달력</h1>
                </Link>
                <Link className="flex items-center bg-[#ffffff] pl-2 pr-2 pt-2 rounded-t-xl" href={`/api/books/${bookId}/table`}>
                  <h1 className="text-xl font-bold w-[100px]">표</h1>
                </Link>
                <Link className="flex items-center bg-[#f1ff9c] pl-2 pr-2 pt-2 rounded-t-xl" href={`/api/books/${bookId}/analysis`}>
                  <h1 className="text-xl font-bold w-[100px]">소비 분석</h1>
                </Link>
              </div>
            </div>
            <main
              className="bg-white"
              style={{
                marginTop: "13px",
                height: "432px",
                overflow: "auto",
              }}
            >
              
            </main>
          </div>
        </RootLayout>
      );
}