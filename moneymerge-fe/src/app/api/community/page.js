/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4mFNznayvMw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { TabsTrigger, TabsList, Tabs } from "@/components/ui/tabs";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationContent,
  Pagination,
} from "@/components/ui/pagination";

export default function Component() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col">
        {/* <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-[#ffffff] px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
        </header> */}
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-6">
            <Card className="bg-[#fffbeb] dark:bg-gray-800/40">
              <CardHeader>
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Engage with the community and share information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <Tabs defaultValue="all">
                    <TabsList className="flex border-b">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="info">Info Sharing</TabsTrigger>
                      <TabsTrigger value="verify">Verification</TabsTrigger>
                      <TabsTrigger value="free">Free Talk</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                <div className="flex w-full flex-1 items-center gap-4">
                  <form className="relative flex-1">
                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input
                      className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                      placeholder="Search"
                      type="search"
                    />
                  </form>
                  <div className="flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="sm" variant="outline">
                          Sort by
                          <ChevronDownIcon className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuRadioGroup value="newest">
                          <DropdownMenuRadioItem value="newest">
                            Newest
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="oldest">
                            Oldest
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="popular">
                            Most Popular
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button size="sm" variant="primary">
                      <PlusIcon className="mr-2 h-4 w-4" />
                      Create Post
                    </Button>
                  </div>
                </div>
                <div className="grid gap-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">#</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">
                          isImage
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Author
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Date
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Likes
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Comments
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Info Sharing</TableCell>
                        <TableCell className="font-medium">
                          Introducing the New Expense Tracker Feature
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <img
                            alt="Post Image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          John Doe
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2 hours ago
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          25
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          10
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>Info Sharing</TableCell>
                        <TableCell className="font-medium">
                          Tips for Effective Budgeting
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <img
                            alt="Post Image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Jane Smith
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          1 day ago
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          18
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          6
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>Verification</TableCell>
                        <TableCell className="font-medium">
                          Verifying Your Account: What You Need to Know
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <img
                            alt="Post Image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Admin
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          3 days ago
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          32
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          15
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>Free Talk</TableCell>
                        <TableCell className="font-medium">
                          Casual Conversation: Weekend Plans
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <img
                            alt="Post Image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          John Doe
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          1 week ago
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          14
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          8
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell>Info Sharing</TableCell>
                        <TableCell className="font-medium">
                          Maximizing Your Expense Tracking Efficiency
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <img
                            alt="Post Image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Jane Smith
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          2 days ago
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          22
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          9
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>6</TableCell>
                        <TableCell>Info Sharing</TableCell>
                        <TableCell className="font-medium">
                          Understanding the New Reporting Features
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <img
                            alt="Post Image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/placeholder.svg"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          John Doe
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          4 days ago
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          19
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          7
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="flex justify-center mt-6">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CatIcon(props) {
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
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function Share2Icon(props) {
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
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
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

function WalletIcon(props) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}

function BarChartIcon(props) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
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
  );
}

// 추가
function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
