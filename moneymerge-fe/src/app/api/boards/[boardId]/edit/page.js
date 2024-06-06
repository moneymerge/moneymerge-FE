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
import Link from "next/link";
import RootLayout from "../../../../../components/layout.js";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function Component() {
  const params = useParams();
  const [ board, setBoard ] = useState({});
  const [ file, setFile ] = useState(null);

  // 해당 게시글 데이터 가져오기
  useEffect(() => {
    fetch(`http://localhost:8080/api/boards/${params.boardId}`)
      .then((result) => result.json())
      .then((result) => {
        setBoard(result.data);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoard((prevBoard) => ({ ...prevBoard, [name]: value }));
    console.log(board);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (board.title === "" || /^\s+$/.test(board.title)) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (board.content === "" || /^\s+$/.test(board.content)) {
      alert("내용을 입력해주세요.");
      return;
    }

    if (board.boardType === "" || /^\s+$/.test(board.boardType)) {
      alert("게시판을 선택해주세요.");
      return;
    }

    let formData = new FormData();
    formData.append("title", board.title);
    formData.append("content", board.content);
    console.log(board.boardType);
    formData.append("boardType", mapBoardType(board.boardType));
    if (file) {
      formData.append("multipartFile", file);
    }

    fetch(`http://localhost:8080/api/boards/${board.boardId}`, {
      method: "PUT",
      credentials: "include",
      body: formData,
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          window.location.href = "/api/boards";
        } else if (response.status === 403) {
          alert("모두 입력해주세요.");
        } else {
          alert("Error:" + response.status);
        }
      })
      .catch((error) => {
        alert("Fetch error:" + error);
      });
  };

  const mapBoardType = (originalType) => {
    switch (originalType) {
      case "자유":
        return "FREE";
      case "정보나눔":
        return "INFORMATION";
      case "인증":
        return "CERTIFICATION";

      default:
        return originalType;
    }
  };

  return (
    <RootLayout>
      <div className="bg-[#fffbeb] text-[#333] w-full h-full flex flex-col overflow-auto">
        <div
          className="fixed pt-4 px-4 flex items-center justify-between"
          style={{
            top: "200px",
          }}
        >
          <div className="fixed flex items-center gap-4">
            <Link className="flex items-center gap-2" href="/api/boards">
              <ArrowLeftIcon className="h-5 w-5" />
              <h1 className="text-2xl font-bold">게시글 수정</h1>
            </Link>
          </div>
        </div>
        <main className="flex-1 p-4">
          <form
            className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4 space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center gap-4">
              <select
                name="boardType"
                value={mapBoardType(board.boardType)} 
                onChange={(e) => handleChange(e)}
              >
                <option value="">게시판 종류</option>
                <option value="INFORMATION">정보 나눔</option>
                <option value="CERTIFICATION">인증</option>
                <option value="FREE">자유</option>
              </select>
              <div className="flex items-center flex-grow">
                <Label className="flex-none mr-2" htmlFor="title">
                  제목
                </Label>
                <Input
                  className="flex-grow"
                  id="title"
                  placeholder="제목을 입력하세요"
                  name="title"
                  value={board.title}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="content">내용</Label>
              <Textarea
                id="content"
                placeholder="내용을 입력하세요"
                rows={7}
                name="content"
                value={board.content}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="image">사진 첨부</Label>
              <Input
                id="image"
                type="file"
                name="multipartFile"
                onChange={handleFileChange}
                style={{
                  height: "35px",
                }}
              />
              {board.image && (
                <div>
                  <img src={board.image} alt="File Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                </div>
              )}
            </div>
            <div className="flex justify-center gap-4">
              <Link href={`/api/boards/${board.boardId}`}>
                <Button variant="outline">취소</Button>
              </Link>
              <Button>수정</Button>
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