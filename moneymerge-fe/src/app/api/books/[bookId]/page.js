"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ulCNHlKx825
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import "../../books/book.css";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import RootLayout from "../../../../components/layout.js";
// FullCalendar 관련
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import koLocale from "@fullcalendar/core/locales/ko";
// npm install @fullcalendar/core @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/interaction

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { BASE_URL } from "../../../../../url.js";

export default function Component() {
  const router = useRouter();
  const params = useParams();
  console.log(params);
  const [events, setEvents] = useState([]);
  const bookId = params.bookId;
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [monthGoal, setMonthGoal] = useState(null);
  const [yearGoal, setYearGoal] = useState(null);
  const [income, setIncome] = useState(null);
  const [outcome, setOutcome] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    // let url = "http://localhost:8080/api/books/1/records/2024/5";
    let url = `${BASE_URL}/books/${bookId}/records/${year}/${month + 1}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // 쿠키를 포함하여 요청
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error("Failed to fetch events");
        }
        return result.json();
      })
      .then((result) => {
        if (result.data && result.data.length > 0) {
          const eventList = result.data.map((record) => ({
            id: record.recordId,
            title:
              record.recordType === "수입"
                ? `+${record.amount}`
                : `-${record.amount}`,
            start: `${record.date}T00:00:00`, //'2024-03-12T21:00:00',
            extendedProps: {
              color: `${record.userColor}`,
            },
            textColor: record.recordType === "수입" ? "#3D73DB" : "#DB7292",
          }));
          setEvents(eventList);
        } else {
          console.error("No data returned from the server");
        }
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });

    // 목표, 수입지출
    fetch(`${BASE_URL}/books/${bookId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error("Failed to fetch user data");
        }
        return result.json();
      })
      .then((result) => {
        console.log("결과");
        console.log("Received user data:", result);
        setMonthGoal(result.data.monthGoal);
        setYearGoal(result.data.yearGoal);
        setIncome(result.data.income);
        setOutcome(result.data.outcome);
        setTotal(result.data.total);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, [year, month]);

  const handleEventClick = (clickInfo) => {
    const recordId = clickInfo.event.id;
    router.push(`/api/books/${bookId}/records/${recordId}`);
  };
  const handleDateClick = (arg) => {
    const clickedDate = arg.dateStr;
    window.location.href = `/api/books/${bookId}/records/create?date=${clickedDate}`;
  };

  // 이벤트 컨텐츠를 커스터마이즈하는 함수
  const renderEventContent = (eventInfo) => {
    return (
      <div className="flex">
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: `${eventInfo.event.extendedProps.color}`,
            borderRadius: "50%",
            marginRight: "5px",
          }}
        ></div>
        <div style={{ color: eventInfo.event.textColor }}>
          {eventInfo.event.title}
        </div>
      </div>
    );
  };
  return (
    <RootLayout>
      <div className="bg-[#ffffff] text-[#333] w-full h-full flex flex-col overflow-auto">
        <div className="px-2 flex items-center justify-between">
          <div
            className="flex items-center gap-4"
            style={{ position: "absolute", top: "-50px" }}
          >
            <Link
              className="flex items-center bg-[#f1ff9c] pl-2 pr-2 pt-2 rounded-t-xl"
              href={`/api/books/${bookId}`}
            >
              <h1 className="text-xl font-bold w-[100px]">달력</h1>
            </Link>
            <Link
              className="flex items-center bg-[#ffffff] pl-2 pr-2 pt-2 rounded-t-xl"
              href={`/api/books/${bookId}/table`}
            >
              <h1 className="text-xl font-bold w-[100px]">표</h1>
            </Link>
            <Link
              className="flex items-center bg-[#ffffff] pl-2 pr-2 pt-2 rounded-t-xl"
              href={`/api/books/${bookId}/analysis`}
            >
              <h1 className="text-xl font-bold w-[100px]">소비 분석</h1>
            </Link>
          </div>
        </div>
        {/* 목표, 총수입지출 */}
        <div
          className="absolute p-2 flex flex-col left-2"
          style={{ fontSize: "12px" }}
        >
          <div>월 목표: {monthGoal}</div>
          <div>연 목표: {yearGoal}</div>
        </div>
        <div
          className=" absolute flex flex-col right-10"
          style={{ fontSize: "12px" }}
        >
          <div className="text-[#3D73DB]">수입: {income}</div>
          <div className="text-[#DB7292]">지출: {outcome}</div>
          <div>합계: {total}</div>
        </div>
        {/* </div> */}
        <main
          className="bg-white"
          style={{
            marginTop: "13px",
            height: "432px",
            overflow: "auto",
          }}
        >
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]} // 플러그인 설정
            locales={[koLocale]}
            locale="ko"
            // dayHeaderFormat={{ weekday: "short" }} // 요일 형식 지정
            dayCellContent={(e) => e.dayNumberText.replace("일", "")} // 날짜 형식 변경
            timeFormat=""
            events={events} // 캘린더에 표시할 이벤트 데이터를 정의합니다.
            dateClick={handleDateClick} // 날짜를 클릭했을 때 실행할 콜백 함수를 정의합니다.
            eventClick={handleEventClick} // 이벤트를 클릭했을 때 실행할 콜백 함수를 정의합니다.
            editable={true} // 이벤트의 드래그 앤 드롭, 리사이징, 이동을 허용합니다.
            droppable={true} // 캘린더에 요소를 드롭하여 이벤트를 생성할 수 있도록 허용합니다.
            selectable={true} // 사용자가 일정 범위를 선택하여 이벤트를 추가할 수 있도록 허용합니다.
            selectMirror={true} // 이벤트를 추가할 때 선택한 영역을 표시합니다.
            nowIndicator={true} // 현재 시간을 표시하는 인디케이터를 활성화합니다.
            // eventBackgroundColor={record.userColor} // 이벤트의 배경색을 설정합니다.
            // eventBorderColor="#0000ff" // 이벤트의 테두리 색을 설정합니다.
            allDay={false} // 이벤트가 하루 종일인지 여부를 지정합니다.
            timeZone="UTC" // 캘린더의 시간대를 UTC로 설정합니다.
            headerToolbar={{
              left: "",
              center: "prevYear,prev,title,next,nextYear",
              right: "today",
            }}
            datesSet={(arg) => {
              // 표시된 년도와 월을 useState로 설정합니다.
              setYear(arg.start.getFullYear());
              setMonth(arg.start.getMonth() + 1);
            }}
            eventContent={renderEventContent}
          />
          <div
            className="absolute"
            style={{
              bottom: "-40px",
              right: "-40px",
            }}
          >
            <Link
              className="inline-flex h-12 items-center justify-center rounded-full bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href={`/api/books/${params.bookId}/records/create`}
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              레코드 작성
            </Link>
          </div>
        </main>
      </div>
    </RootLayout>
  );
}

function PencilIcon(props) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
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
