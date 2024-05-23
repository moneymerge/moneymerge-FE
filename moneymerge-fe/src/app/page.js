/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hZF4gcuMFNa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";

import {
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";


export default function Component() {
  return (
    <div className="min-h-screen w-full">
      {/* 상단 메뉴 */}
      <div className="flex flex-col w-full">
        <div className="flex-1 m-5">
          <p>올해 목표 : </p>
          <p>이번달 목표 : </p>
          <Tabs className="h-full" defaultValue="transactions">
            <TabsList className="border-b border-[#e5e7eb] bg-[#fffbeb] px-6 dark:border-[#2a2a2a] dark:bg-[#1f1f1f]">
              <TabsTrigger value="transactions">표</TabsTrigger>
              <TabsTrigger value="calendar">달력</TabsTrigger>
              <TabsTrigger value="reports">소비 패턴 분석</TabsTrigger>
            </TabsList>
            <TabsContent className="flex-1 p-6 border" value="transactions">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-bold text-[#333333] dark:text-[#f5f5f5]">
                  Transactions
                </h2>
                <Button
                  className="bg-[#ffd700] text-[#5c5c5c] hover:bg-[#ffcc00] dark:bg-[#ffd700] dark:text-[#1f1f1f] dark:hover:bg-[#ffcc00]"
                  variant="primary"
                >
                  Add Transaction
                </Button>
              </div>
              <div className="mb-6 font-semibold">2024 3</div>
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <div className="ml-auto flex items-center gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          className="w-[280px] justify-start text-left font-normal"
                          id="date"
                          variant="outline"
                        >
                          <CalendarClockIcon className="mr-2 h-4 w-4" />
                          20__년 _월 _일 - 20__년 _월 __일
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent align="end" className="w-auto p-0">
                        <Calendar
                          initialFocus
                          mode="range"
                          numberOfMonths={2}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-green-500">수입 : </div>
                  <div className="text-green-500 font-semibold">+$2,500.00</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-red-500">지출 : </div>
                  <div className="text-red-500 font-semibold">-$225.00</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="">합계 : </div>
                  <div className="font-semibold">+$2,275.00</div>
                </div>
              </div>

              <div className="rounded-lg border border-[#e5e7eb] bg-white p-4 shadow-sm dark:border-[#2a2a2a] dark:bg-[#2a2a2a]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>날짜</TableHead>
                      <TableHead>금액</TableHead>
                      <TableHead>자산</TableHead>
                      <TableHead>카테고리</TableHead>
                      <TableHead>내용</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2023-05-01</TableCell>
                      <TableCell>$50.00</TableCell>
                      <TableCell>Groceries</TableCell>
                      <TableCell>Groceries</TableCell>
                      <TableCell>Weekly grocery shopping</TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                          <DeleteIcon className="h-4 w-4 text-[#666666] dark:text-[#b3b3b3]" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <TrashIcon className="h-4 w-4 text-[#666666] dark:text-[#b3b3b3]" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-04-25</TableCell>
                      <TableCell>$75.00</TableCell>
                      <TableCell>Bills</TableCell>
                      <TableCell>Groceries</TableCell>
                      <TableCell>Electricity bill</TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                          <DeleteIcon className="h-4 w-4 text-[#666666] dark:text-[#b3b3b3]" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <TrashIcon className="h-4 w-4 text-[#666666] dark:text-[#b3b3b3]" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-04-15</TableCell>
                      <TableCell>$30.00</TableCell>
                      <TableCell>Transportation</TableCell>
                      <TableCell>Gas for the car</TableCell>
                      <TableCell>Groceries</TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                          <DeleteIcon className="h-4 w-4 text-[#666666] dark:text-[#b3b3b3]" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <TrashIcon className="h-4 w-4 text-[#666666] dark:text-[#b3b3b3]" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2023-04-10</TableCell>
                      <TableCell>$20.00</TableCell>
                      <TableCell>Entertainment</TableCell>
                      <TableCell>Groceries</TableCell>
                      <TableCell>Movie tickets</TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                          <DeleteIcon className="h-4 w-4 text-[#666666] dark:text-[#b3b3b3]" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <TrashIcon className="h-4 w-4 text-[#666666] dark:text-[#b3b3b3]" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {/*  */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="bg-[#ffd700] text-[#5c5c5c] hover:bg-[#ffcc00] dark:bg-[#ffd700] dark:text-[#1f1f1f] dark:hover:bg-[#ffcc00] fixed bottom-6 right-6"
                    variant="primary"
                  >
                    {/* className="fixed bottom-6 right-6" variant="fab" */}
                    <PlusIcon className="w-6 h-6" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white dark:bg-[#555555] rounded-lg p-6 w-[400px]">
                  <DialogHeader>
                    <DialogTitle>Add Expense</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="category">Category</Label>
                      <Select id="category">
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="food">Food</SelectItem>
                          <SelectItem value="transportation">
                            Transportation
                          </SelectItem>
                          <SelectItem value="housing">Housing</SelectItem>
                          <SelectItem value="entertainment">
                            Entertainment
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="amount">Amount</Label>
                      <Input id="amount" type="number" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea id="description" rows={3} />
                    </div>
                  </div>
                  <DialogFooter>
                    <div>
                      <Button variant="outline">Cancel</Button>
                    </div>
                    <Button>Save</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </TabsContent>
            <TabsContent className="flex-1 p-6" value="calendar">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-bold text-[#333333] dark:text-[#f5f5f5]">
                  Calendar
                </h2>
                <Button
                  className="bg-[#ffd700] text-[#5c5c5c] hover:bg-[#ffcc00] dark:bg-[#ffd700] dark:text-[#1f1f1f] dark:hover:bg-[#ffcc00]"
                  variant="primary"
                >
                  Add Calendar
                </Button>
              </div>
              <div className="mb-6 font-semibold">2024 3</div>
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <div>_월 _일 ~ _월 _일</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-green-500">수입 : </div>
                  <div className="text-green-500 font-semibold">+$2,500.00</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-red-500">지출 : </div>
                  <div className="text-red-500 font-semibold">-$225.00</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="">합계 : </div>
                  <div className="font-semibold">+$2,275.00</div>
                </div>
              </div>

              <div className="rounded-lg border border-[#e5e7eb] bg-white p-4 shadow-sm dark:border-[#2a2a2a] dark:bg-[#2a2a2a]"></div>
            </TabsContent>
            <TabsContent className="flex-1 p-6" value="reports">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-bold text-[#333333] dark:text-[#f5f5f5]">
                  Reports
                </h2>
              </div>
              <div className="flex flex-col">
                <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-[#fffbeb] px-6 dark:bg-[#1f1f1f]">
                  <Link className="lg:hidden" href="#">
                    <Package2Icon className="h-6 w-6" />
                    <span className="sr-only">Home</span>
                  </Link>
                  <div className="w-full flex-1">
                    <form>
                      <div className="relative">
                        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-[#6b7280] dark:text-[#9ca3af]" />
                        <Input
                          className="w-full bg-[#fffbeb] shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-[#1f1f1f]"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </form>
                  </div>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                  <div className="flex items-center gap-4">
                    <Button size="icon" variant="outline">
                      <ArrowLeftIcon className="h-4 w-4" />
                      <span className="sr-only">Back</span>
                    </Button>
                    <h1 className="font-semibold text-lg md:text-xl">가계부</h1>
                    <div className="ml-auto flex items-center gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            className="w-[280px] justify-start text-left font-normal"
                            id="date"
                            variant="outline"
                          >
                            <CalendarClockIcon className="mr-2 h-4 w-4" />
                            2023년 6월 1일 - 2023년 6월 30일
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent align="end" className="w-auto p-0">
                          <Calendar
                            initialFocus
                            mode="range"
                            numberOfMonths={2}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="grid gap-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card>
                        <CardHeader>
                          <CardDescription>수입</CardDescription>
                          <CardTitle>$2389.00</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <StackedbarChart className="aspect-[4/3]" />
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardDescription>지출</CardDescription>
                          <CardTitle>$1454.00</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <FilledtimeseriesChart className="aspect-[4/3]" />
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardDescription>잔고</CardDescription>
                          <CardTitle>$986.00</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <PieChart className="aspect-[4/3]" />
                        </CardContent>
                      </Card>
                    </div>
                    <div className="border shadow-sm rounded-lg">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>날짜</TableHead>
                            <TableHead>내용</TableHead>
                            <TableHead>금액</TableHead>
                            <TableHead>유형</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>2023-06-01</TableCell>
                            <TableCell>월급</TableCell>
                            <TableCell>$2,000.00</TableCell>
                            <TableCell>수입</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>2023-06-05</TableCell>
                            <TableCell>식비</TableCell>
                            <TableCell>$300.00</TableCell>
                            <TableCell>지출</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>2023-06-10</TableCell>
                            <TableCell>월세</TableCell>
                            <TableCell>$500.00</TableCell>
                            <TableCell>지출</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>2023-06-15</TableCell>
                            <TableCell>용돈</TableCell>
                            <TableCell>$100.00</TableCell>
                            <TableCell>지출</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>2023-06-20</TableCell>
                            <TableCell>이자 수익</TableCell>
                            <TableCell>$89.00</TableCell>
                            <TableCell>수입</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card>
                        <CardHeader>
                          <CardDescription>총 수입</CardDescription>
                          <CardTitle>$2,089.00</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardDescription>총 지출</CardDescription>
                          <CardTitle>$900.00</CardTitle>
                        </CardHeader>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardDescription>순 잔액</CardDescription>
                          <CardTitle>$1,189.00</CardTitle>
                        </CardHeader>
                      </Card>
                    </div>
                  </div>
                </main>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
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

function CalendarClockIcon(props) {
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
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <path d="M17.5 17.5 16 16.3V14" />
      <circle cx="16" cy="16" r="6" />
    </svg>
  );
}

function FilledtimeseriesChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        curve="monotoneX"
        enableArea={true}
        gridYValues={6}
        defs={[
          {
            id: "line-chart-gradient",
            type: "linearGradient",
            colors: [
              { offset: 0, color: "inherit" },
              { offset: 200, color: "inherit", opacity: 0 },
            ],
          },
        ]}
        fill={[{ match: "*", id: "line-chart-gradient" }]}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function PieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function StackedbarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", desktop: 111, mobile: 99 },
          { name: "Feb", desktop: 157, mobile: 87 },
          { name: "Mar", desktop: 129, mobile: 89 },
          { name: "Apr", desktop: 187, mobile: 151 },
          { name: "May", desktop: 119, mobile: 127 },
          { name: "Jun", desktop: 20, mobile: 121 },
        ]}
        keys={["desktop", "mobile"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb", "#e11d48"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A stacked bar chart"
      />
    </div>
  );
}
