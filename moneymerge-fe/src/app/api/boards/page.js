/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ybBhE9BgaOZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu, DropdownMenuRadioItem, DropdownMenuRadioGroup } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { PaginationPrevious, PaginationItem, PaginationLink, PaginationContent, Pagination } from "@/components/ui/pagination"

export default function Component() {
  return (
    <div className="bg-[#fffbeb] text-[#333] min-h-screen flex flex-col">
      <header className="bg-[#f9f5e7] py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">게시판</h1>
        </div>
      </header>
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <ListIcon className="h-5 w-5 mr-2" />
                전체
              </Button>
              <Button variant="outline">
                <SignpostIcon className="h-5 w-5 mr-2" />
                공지사항
              </Button>
              <Button variant="outline">
                <ContactIcon className="h-5 w-5 mr-2" />
                자유게시판
              </Button>
              <Button variant="outline">
                <FileQuestionIcon className="h-5 w-5 mr-2" />
                Q&A
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Input className="w-[200px]" placeholder="검색어를 입력하세요" type="text" />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <FilterIcon className="h-5 w-5 mr-2" />
                      검색 범위
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuRadioGroup value="all">
                      <DropdownMenuRadioItem value="all">전체</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="title">제목</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="content">내용</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="author">작성자</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <ArrowUpIcon className="h-5 w-5 mr-2" />
                      정렬
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuRadioGroup value="latest">
                      <DropdownMenuRadioItem value="latest">최신순</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="oldest">오래된순</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="popular">좋아요순</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="views">댓글순</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm">검색</Button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-4 py-3 text-left font-medium">제목</th>
                  <th className="px-4 py-3 text-left font-medium">종류</th>
                  <th className="px-4 py-3 text-left font-medium">작성자</th>
                  <th className="px-4 py-3 text-left font-medium">작성일</th>
                  <th className="px-4 py-3 text-left font-medium">좋아요</th>
                  <th className="px-4 py-3 text-left font-medium">댓글 수</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3">
                    <Link className="font-medium hover:text-[#333]" href="#">
                      새로운 기능 업데이트
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <Badge className="bg-[#f9f5e7] text-[#333]" variant="secondary">
                      공지사항
                    </Badge>
                  </td>
                  <td className="px-4 py-3">관리자</td>
                  <td className="px-4 py-3">2023-05-26</td>
                  <td className="px-4 py-3">100</td>
                  <td className="px-4 py-3">10</td>
                  <td className="px-4 py-3">5</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">
                    <Link className="font-medium hover:text-[#333]" href="#">
                      이벤트 안내
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <Badge className="bg-[#f9f5e7] text-[#333]" variant="secondary">
                      공지사항
                    </Badge>
                  </td>
                  <td className="px-4 py-3">관리자</td>
                  <td className="px-4 py-3">2023-05-25</td>
                  <td className="px-4 py-3">5</td>
                  <td className="px-4 py-3">2</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">
                    <Link className="font-medium hover:text-[#333]" href="#">
                      자유게시판 - 안녕하세요
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <Badge className="bg-[#f9f5e7] text-[#333]" variant="secondary">
                      자유게시판
                    </Badge>
                  </td>
                  <td className="px-4 py-3">user1</td>
                  <td className="px-4 py-3">2023-05-24</td>
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">10</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">
                    <Link className="font-medium hover:text-[#333]" href="#">
                      Q&A - 질문드립니다
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <Badge className="bg-[#f9f5e7] text-[#333]" variant="secondary">
                      Q&A
                    </Badge>
                  </td>
                  <td className="px-4 py-3">user2</td>
                  <td className="px-4 py-3">2023-05-23</td>
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
      <div className="fixed bottom-8 right-8">
        <Link
          className="inline-flex h-12 items-center justify-center rounded-full bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/api/boards/create">
          <PlusIcon className="h-5 w-5 mr-2" />
          글 작성
        </Link>
      </div>
    </div>
  )
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
  )
}


function ArrowUpIcon(props) {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}


function ContactIcon(props) {
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
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
}


function FileQuestionIcon(props) {
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
      <path d="M12 17h.01" />
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
      <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
    </svg>
  )
}


function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function ListIcon(props) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}


function SignpostIcon(props) {
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
      <path d="M12 3v3" />
      <path d="M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z" />
      <path d="M12 13v8" />
    </svg>
  )
}

function PlusIcon(props) {
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
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    )
  }