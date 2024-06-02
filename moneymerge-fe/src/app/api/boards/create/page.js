/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LAY6IKpKV4v
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-[#fffbeb] text-[#333] min-h-screen flex flex-col">
      <header className="bg-[#f9f5e7] py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2" href="/api/boards">
            <ArrowLeftIcon className="h-5 w-5" />
            <h1 className="text-2xl font-bold">게시글 작성</h1>
          </Link>
        </div>
      </header>
      <main className="flex-1 p-8">
        <form className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="게시판 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="notice">공지사항</SelectItem>
                <SelectItem value="community">커뮤니티</SelectItem>
                <SelectItem value="qna">Q&A</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center flex-grow">
              <Label className="flex-none mr-2" htmlFor="title">
                제목
              </Label>
              <Input
                className="flex-grow"
                id="title"
                placeholder="제목을 입력하세요"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="content">내용</Label>
            <Textarea id="content" placeholder="내용을 입력하세요" rows={10} />
          </div>
          <div>
            <Label htmlFor="image">사진 첨부</Label>
            <Input id="image" type="file" />
          </div>
          <div className="flex justify-center gap-4">
            <Button variant="outline">취소</Button>
            <Button>저장</Button>
          </div>
        </form>
      </main>
    </div>
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
