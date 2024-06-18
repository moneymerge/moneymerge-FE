"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ulCNHlKx825
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import "./book.css";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import RootLayout from "../../../components/layout.js";
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
import { useRouter } from "next/navigation";
import { BASE_URL } from "../../../../url.js";

export default function Component() {
  const router = useRouter();
  const [checkedbooks, setCheckedbooks] = useState([]);
  const [events, setEvents] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  // 중복
  const [multiEventList, setMultiEventList] = useState([]);

  if (typeof window !== "undefined") {
    // 현재 URL에서 쿼리 스트링을 추출
    const queryString = window.location.search;
    // URLSearchParams를 사용하여 쿼리 스트링을 파싱
    const urlParams = new URLSearchParams(queryString);

    useEffect(() => {
      const bookIds = [];
      for (const [key, value] of urlParams.entries()) {
        if (key === "bookId") {
          bookIds.push(value);
        }
      }
      setCheckedbooks(bookIds);
    }, [queryString]);

    console.log(checkedbooks);
  }

  // 각 bookId에 대해 요청을 보내는 함수를 정의합니다.
  const fetchBookData = async (bookId) => {
    const url = `${BASE_URL}/books/${bookId}/records/${year}/${month + 1}`;
    try {
      const response = await fetch(url, { credentials: "include" });
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      if (data.data) {
        const eventList = data.data.map((record) => ({
          id: record.recordId,
          title:
            record.recordType === "수입"
              ? `+${record.amount}`
              : `-${record.amount}`,
          start: `${record.date}T00:00:00`,
          color: `${record.userColor}`,
        }));

        // 중복 찾기

        const newMultiEvents = [];
        const existingEventIds = new Set(events.map((event) => event.id));

        eventList.forEach((event) => {
          if (existingEventIds.has(event.id)) {
            newMultiEvents.push(event);
          }
        });

        setEvents((prevEvents) => [...prevEvents, ...eventList]);
        console.log("최종 중복");
        console.log(newMultiEvents);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect(() => {
  //   setEvents([]); // 새로운 bookIds로 변경 시 기존 events 초기화
  //   setMultiEventList([]);
  //   checkedbooks.forEach(fetchBookData);
  // }, [checkedbooks, year, month]);

  useEffect(() => {
    setEvents([]); // 새로운 bookIds로 변경 시 기존 events 초기화
    setMultiEventList([]);
    console.log("setEve");
    console.log(events);

    // 비동기적으로 처리될 fetchBookData 함수
    const fetchDataSequentially = async () => {
      for (const bookId of checkedbooks) {
        await fetchBookData(bookId); // 각 bookId에 대해 순차적으로 fetchBookData 호출
      }
    };

    fetchDataSequentially();
  }, [checkedbooks, year, month]);

  const handleApplyFilter = () => {
    if (typeof window !== "undefined") {
      // 현재 URL에서 쿼리 스트링을 추출
      const queryString = window.location.search;
      // URLSearchParams를 사용하여 쿼리 스트링을 파싱
      const urlParams = new URLSearchParams(queryString);

      const bookIds = [];
      for (const [key, value] of urlParams.entries()) {
        if (key === "bookId") {
          bookIds.push(value);
        }
      }
      setCheckedbooks(bookIds);
    }
  };

  const handleEventClick = (clickInfo) => {
    const recordId = clickInfo.event.id;
    router.push(`/api/books/1/records/${recordId}`);
  };
  const handleDateClick = () => {
    // 모달
  };
  console.log(events);
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
              href={`/api/books/1`}
            >
              <h1 className="text-xl font-bold w-[100px]">달력</h1>
            </Link>
          </div>
        </div>
        <main
          className="bg-white"
          style={{
            marginTop: "13px",
            height: "432px",
            overflow: "auto",
          }}
        >
          <span>
            <Button className="w-[100px] h-[20px]" onClick={handleApplyFilter}>
              Apply Filter
            </Button>
          </span>

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
              href={`/api/books/1/records/create`}
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
