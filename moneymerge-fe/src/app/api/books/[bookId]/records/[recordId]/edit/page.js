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
// 달력
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// npx shadcn-ui@latest add popover
// npx shadcn-ui@latest add calendar

import Link from "next/link";
import RootLayout from "../../../../../../../components/layout";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function RecordEdit() {
  const params = useParams();
  const [record, setRecord] = useState({});
  const [categories, setCategories] = useState([]);
  const [date, setDate] = useState(null);
  // const [date, setDate] = React.useState<Date>()
  const [userData, setUserData] = useState(null);
  const [checkItems, setCheckItems] = useState(new Set());

  // 해당 게시글 데이터 가져오기
  useEffect(() => {
    fetch(
      `http://localhost:8080/api/books/${params.bookId}/records/${params.recordId}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((result) => result.json())
      .then((result) => {
        setRecord(result.data);
        setCheckItems(() => {
          const initialCheckedItems = new Set();
          result.data.bookList.forEach((book) => {
            initialCheckedItems.add(String(book.bookId));
          });
          return initialCheckedItems;
        });
      });
  }, []);

  const checkItemHandler = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setCheckItems((prevCheckItems) => new Set([...prevCheckItems, id]));
    } else {
      setCheckItems((prevCheckItems) => {
        const newCheckItems = new Set(prevCheckItems);
        newCheckItems.delete(id);
        return newCheckItems;
      });
    }
  };
  useEffect(() => {
    const selectedBooks = [...checkItems];
    setRecord((prevRecord) => ({ ...prevRecord, bookList: selectedBooks }));
  }, [checkItems]);

  useEffect(() => {
    if (date instanceof Date && !isNaN(date)) {
      setRecord((prevRecord) => ({
        ...prevRecord,
        date: format(date, "yyyy-MM-dd"),
      }));
    }
  }, [date]);

  useEffect(() => {
    fetch("http://localhost:8080/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((result) => result.json())
      .then((result) => {
        console.log("Received user data:", result.data);
        setUserData(result.data);
        console.log(result.data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);
  console.log(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecord((prevRecord) => ({ ...prevRecord, [name]: value }));
    console.log(record);
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/books/${params.bookId}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error("Failed to fetch categories");
        }
        return result.json();
      })
      .then((result) => {
        if (result.data && result.data.length >= 0) {
          setCategories(result.data);
        } else {
          console.error("No data returned from the server");
        }
      });
  }, []);
  console.log(categories);

  const mapRecordType = (originalType) => {
    switch (originalType) {
      case "수입":
        return "INCOME";
      case "지출":
        return "EXPENSE";
      default:
        return originalType;
    }
  };
  const mapAssetType = (originalType) => {
    switch (originalType) {
      case "현금":
        return "CASH";
      case "카드":
        return "CARD";
      case "계좌":
        return "ACCOUNT";
      default:
        return originalType;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (record.date === "" || /^\s+$/.test(record.date)) {
      alert("날짜를 입력해주세요.");
      return;
    }

    if (record.recordType === "" || /^\s+$/.test(record.recordType)) {
      alert("수입/지출을 입력해주세요.");
      return;
    }

    if (
      record.amount === "" ||
      /^\s+$/.test(record.amount) ||
      isNaN(record.amount)
    ) {
      alert("숫자를 입력해주세요.");
      return;
    }

    if (record.assetType === "" || /^\s+$/.test(record.assetType)) {
      alert("자산을 입력해주세요.");
      return;
    }
    if (record.content === "" || /^\s+$/.test(record.content)) {
      alert("내용을 입력해주세요.");
      return;
    }
    if (record.bookList === "" || /^\s+$/.test(record.bookList)) {
      alert("가계부를 선택해주세요.");
      return;
    }
    if (record.categoryId === "" || /^\s+$/.test(record.categoryId)) {
      alert("카테고리를 선택해주세요.");
      return;
    }

    let formData = new FormData();
    formData.append("date", record.date);
    formData.append("recordType", mapRecordType(record.recordType));
    formData.append("amount", record.amount);
    formData.append("assetType", mapAssetType(record.assetType));
    formData.append("content", record.content);
    formData.append("memo", record.memo);
    formData.append("bookList", record.bookList);
    formData.append("categoryId", record.categoryId);

    console.log("formData");
    for (var value of formData.values()) {
      console.log(value);
    }

    fetch(
      `http://localhost:8080/api/books/${params.bookId}/records/${params.recordId}`,
      {
        method: "PUT",
        credentials: "include",
        body: formData,
      }
    )
      .then((response) => {
        console.log(response);
        if (response.ok) {
          window.location.href = `/api/books/${params.bookId}/records/${params.recordId}`;
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

  return (
    <RootLayout>
      <div className="w-full h-full bg-[#fffbeb] text-[#333] w-full h-full flex flex-col overflow-auto">
        <div className="px-4 flex items-center justify-between">
          <div
            className="flex items-center gap-4"
            style={{ position: "absolute", top: "-45px" }}
          >
            <Link
              className="flex items-center gap-2"
              href={`/api/books/${params.bookId}`}
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <h1 className="text-2xl font-bold w-[120px]">레코드 수정</h1>
            </Link>
          </div>
        </div>
        <main className="w-full h-full flex-1">
          <form
            className="max-w-3xl mx-auto bg-white shadow-lg p-4 space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center flex-grow">
              <Label className="flex-none mr-2" htmlFor="date">
                날짜
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !record.date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {record.date ? (
                      format(record.date, "yyyy-MM-dd") // ?
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex items-center flex-grow">
              <select
                name="recordType"
                value={mapRecordType(record.recordType)}
                onChange={(e) => handleChange(e)}
              >
                <option value="">수입/지출</option>
                <option value="INCOME">수입</option>
                <option value="EXPENSE">지출</option>
              </select>
              <Label className="flex-none mr-2 ml-5" htmlFor="amount">
                금액
              </Label>
              <Input
                className="flex-grow"
                id="amount"
                placeholder="금액을 입력하세요"
                name="amount"
                value={record.amount}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center gap-4">
              <select
                name="assetType"
                value={mapAssetType(record.assetType)}
                onChange={(e) => handleChange(e)}
              >
                <option value="">자산 종류</option>
                <option value="CARD">카드</option>
                <option value="CASH">현금</option>
                <option value="ACCOUNT">계좌</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <select
                name="categoryId"
                value={record.categoryId}
                onChange={(e) => handleChange(e)}
              >
                <option value="">카테고리</option>
                {categories &&
                  categories.map((category) => (
                    <option
                      key={category.categoryId}
                      value={category.categoryId}
                    >
                      {category.category}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <Label htmlFor="content">내용</Label>
              <Textarea
                id="content"
                placeholder="내용을 입력하세요"
                rows={1}
                name="content"
                value={record.content}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="memo">메모</Label>
              <Textarea
                id="memo"
                placeholder="메모"
                rows={1}
                name="memo"
                value={record.memo}
                onChange={handleChange}
              />
            </div>

            <div className="flex mt-3">
              <div>가계부</div>

              {userData &&
                userData.bookList &&
                userData.bookList.map((book) => (
                  <div key={book.bookId} className="ml-3">
                    <input
                      type="checkbox"
                      id={book.bookId}
                      value={book.bookId}
                      name="bookList"
                      checked={checkItems.has(String(book.bookId))}
                      onChange={checkItemHandler}
                    ></input>
                    <Label className="font-medium" htmlFor={book.bookId}>
                      {book.bookTitle}
                    </Label>
                  </div>
                ))}
            </div>

            <div className="flex justify-center gap-4">
              <Link
                href={`/api/books/${params.bookId}/records/${params.recordId}`}
              >
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