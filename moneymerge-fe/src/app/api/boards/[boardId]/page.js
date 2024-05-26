/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yd9zYS4V4tR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="bg-[#fffbeb] text-[#333] min-h-screen flex flex-col">
      <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">새로운 기능 업데이트</h2>
              <p className="text-sm text-gray-500">공지사항 | 작성자: 관리자 | 2023-05-26</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <HeartIcon className="h-5 w-5 mr-2" />
                <span className="ml-2">10</span>
              </Button>
            </div>
          </div>
          <div className="prose prose-gray">
            <p>새로운 기능이 추가되었습니다. 사용자 경험이 향상되었습니다.</p>
            <p>이번 업데이트를 통해 다음과 같은 기능이 추가되었습니다:</p>
            <ul>
              <li>기능 A</li>
              <li>기능 B</li>
              <li>기능 C</li>
            </ul>
            <p>앞으로도 지속적인 업데이트를 통해 더 나은 서비스를 제공하겠습니다.</p>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">수정</Button>
            <Button variant="outline">삭제</Button>
          </div>
          <div className="border-t pt-6">
            <h3 className="text-lg font-bold mb-4">댓글</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">John Doe</div>
                    <div className="flex items-center">
                        <div className="text-sm text-gray-500  mr-4">2023-05-26</div>
                        <Button size="sm" variant="outline">
                            <HeartIcon className="h-4 w-4" />
                            <span className="ml-2">10</span>
                        </Button>
                    </div>
                  </div>
                  <p className="mt-2">Great update! I'm excited to try out the new features.</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Button size="sm" variant="outline">
                      <DeleteIcon className="h-4 w-4 mr-2" />
                      수정
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2Icon className="h-4 w-4 mr-2" />
                      삭제
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Jane Doe</div>
                    <div className="flex items-center">
                        <div className="text-sm text-gray-500 mr-4">2023-05-27</div>
                        <Button size="sm" variant="outline">
                            <HeartIcon className="h-4 w-4" />
                            <span className="ml-2">10</span>
                        </Button>
                    </div>
                  </div>
                  <p className="mt-2">Awesome, can't wait to see what else is in store!</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Button size="sm" variant="outline">
                      <DeleteIcon className="h-4 w-4 mr-2" />
                      수정
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2Icon className="h-4 w-4 mr-2" />
                      삭제
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Textarea
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#333] focus:border-transparent"
                placeholder="Write your comment..."
              />
              <div className="flex justify-end mt-2">
                <Button variant="outline">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
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
  )
}


function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function Trash2Icon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  )
}