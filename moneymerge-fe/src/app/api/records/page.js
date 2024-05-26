/**
 * v0 by Vercel.
 * @see https://v0.dev/t/h9gCZf21D09
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Transaction Details</h1>
        </div>
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Groceries</CardTitle>
              <CardDescription>2023-04-15</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium">Amount</div>
                    <div className="text-gray-500">$50.00</div>
                  </div>
                  <div>
                    <div className="font-medium">Account Type</div>
                    <div className="text-gray-500">Checking</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium">Categories</div>
                  <div className="text-gray-500">Groceries</div>
                </div>
                <div className="border rounded-md p-4">
                  <div className="font-medium">Content</div>
                  <div className="text-gray-500">Grocery shopping for the week</div>
                </div>
                <div className="border rounded-md p-4">
                  <div className="font-medium">Memo</div>
                  <div className="text-gray-500">Grocery shopping for the week</div>
                </div>
                <div>
                  <div className="font-medium">Photo</div>
                  <img
                    alt="Transaction Photo"
                    className="rounded-md"
                    height={200}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width={200}
                  />
                </div>
                <div>
                  <div className="font-medium">가계부</div>
                  <div className="text-gray-500">
                    <div>가계부 1</div>
                    <div>가계부 2</div>
                    <div>가계부 3</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium">Author</div>
                  <div className="text-gray-500">작성자</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4">
                <Button size="icon" variant="ghost">
                  <DeleteIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <TrashIcon className="w-4 h-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost">
                  <ThumbsUpIcon className="w-4 h-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <div className="text-gray-500">12</div>
                <Button size="icon" variant="ghost">
                  <ThumbsDownIcon className="w-4 h-4" />
                  <span className="sr-only">Dislike</span>
                </Button>
                <div className="text-gray-500">3</div>
              </div>
            </CardFooter>
          </Card>
        </div>
        {/* 댓글 */}
        <div className="grid gap-4">
          <div className="font-medium">Comments</div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4">
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage alt="User Avatar" src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-2">
                  <div className="font-medium">John Doe</div>
                  <div className="text-gray-500">
                    Great job tracking your expenses! This will really help you stay on top of your finances.
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
                  <AvatarImage alt="User Avatar" src="/placeholder-user.jpg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="grid gap-2">
                  <div className="font-medium">Sarah Anderson</div>
                  <div className="text-gray-500">
                    Awesome, this is really helpful for keeping track of our household expenses. Let me know if you need
                    any help with categorizing or budgeting.
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
                <Textarea className="w-full resize-none" placeholder="Write a comment..." />
                <div className="flex justify-end mt-2">
                  <Button type="submit">Post Comment</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  )
}


function TrashIcon(props) {
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
    </svg>
  )
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
  )
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
  )
}