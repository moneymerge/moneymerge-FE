"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ulCNHlKx825
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
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
import "../../books/book.css";

import { useState, useEffect } from "react";

export default function Component() {
  // const [records, setRecords] = useState([]);
  // const [currentDate, setCurrentDate] = useState({
  //   year: new Date().getFullYear(),
  //   month: new Date().getMonth() + 1,
  // });

  // const fetchEvents = async (year, month) => {
  //   const url = `http://localhost:8080/api/books/1/records/${year}/${month}`;
  //   const result = await fetch(url);
  //   const data = await result.json();
  //   setRecords(data.data);
  // };

  // useEffect(() => {
  //   fetchEvents(currentDate.year, currentDate.month);
  // }, [currentDate]);

  // const handleDatesSet = (dateInfo) => {
  //   const year = dateInfo.start.getFullYear();
  //   const month = dateInfo.start.getMonth() + 1; // 월은 0부터 시작하므로 +1
  //   setCurrentDate({ year, month });
  // };

  return (
    <RootLayout>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]} // 플러그인 설정
        locales={[koLocale]}
        locale="ko"
        // dayHeaderFormat={{ weekday: "short" }} // 요일 형식 지정
        dayCellContent={(e) => e.dayNumberText.replace("일", "")} // 날짜 형식 변경
        events={[
          {
            id: 1,
            title: "방청소",
            start: "2024-03-10T09:00:00",
            end: "2024-03-10T12:00:00",
            allDay: false,
          },
          {
            id: 2,
            title: "저녁 약속",
            start: "2024-03-12T18:00:00",
            end: "2024-03-12T21:00:00",
            allDay: false,
          },
        ]} // 캘린더에 표시할 이벤트 데이터를 정의합니다.
        // dateClick={handleDateClick} // 날짜를 클릭했을 때 실행할 콜백 함수를 정의합니다.
        // eventClick={handleEventClick} // 이벤트를 클릭했을 때 실행할 콜백 함수를 정의합니다.
        editable={true} // 이벤트의 드래그 앤 드롭, 리사이징, 이동을 허용합니다.
        droppable={true} // 캘린더에 요소를 드롭하여 이벤트를 생성할 수 있도록 허용합니다.
        selectable={true} // 사용자가 일정 범위를 선택하여 이벤트를 추가할 수 있도록 허용합니다.
        selectMirror={true} // 이벤트를 추가할 때 선택한 영역을 표시합니다.
        nowIndicator={true} // 현재 시간을 표시하는 인디케이터를 활성화합니다.
        eventBackgroundColor="#ff0000" // 이벤트의 배경색을 설정합니다.
        eventBorderColor="#0000ff" // 이벤트의 테두리 색을 설정합니다.
        allDay={true} // 이벤트가 하루 종일인지 여부를 지정합니다.
        timeZone="UTC" // 캘린더의 시간대를 UTC로 설정합니다.
        headerToolbar={{
          left: "",
          center: "prevYear,prev,title,next,nextYear",
          right: "today",
        }}
      />
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
