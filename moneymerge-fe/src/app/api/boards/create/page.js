/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LAY6IKpKV4v
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="bg-[#fffbeb] text-[#333] min-h-screen flex flex-col">
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
                <Input className="flex-grow" id="title" placeholder="제목을 입력하세요" />
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
  )
}