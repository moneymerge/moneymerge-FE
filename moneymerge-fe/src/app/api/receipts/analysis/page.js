"use client";
import Link from "next/link";
import RootLayout from "../../../../components/layout.js";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
//npm install @emotion/react @emotion/styled
//npm i @mui/x-charts"
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { BASE_URL } from '../../../../../url.js';

export default function Component() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const [barData, setBarData] = useState([]);
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  //// 막대 ////
  useEffect(() => {
    fetch(
      `${BASE_URL}/receipts/analysis?year=${year}&month=${month}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const transformedBarData = transformBarData(data.data.months);
        setBarData(transformedBarData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [year, month]);

  // 데이터를 차트 형식으로 변환
  const transformBarData = (monthsData) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // 데이터셋 생성
    const dataset = monthsData.map((monthData) => {
      const { month, positiveSum, negativeSum } = monthData;
      return {
        month: months[month - 1], // 월 이름 설정
        positiveSum,
        negativeSum,
      };
    });

    return dataset;
  };

  // 연도, 월 변경 버튼
  const handleYearChange = (change) => {
    setYear((prevYear) => prevYear + change);
  };

  const handleMonthChange = (change) => {
    setMonth((prevMonth) => {
      let newMonth = prevMonth + change;
      let newYear = year;

      if (newMonth > 12) {
        newMonth = 1;
        newYear += 1; // 연도를 1 증가시킵니다.
      } else if (newMonth < 1) {
        newMonth = 12;
        newYear -= 1; // 연도를 1 감소시킵니다.
      }

      setYear(newYear); // 연도를 업데이트합니다.
      return newMonth;
    });
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
              className="flex items-center bg-[#ffffff] pl-2 pr-2 pt-2 rounded-t-xl"
              href={`/api/receipts`}
            >
              <h1 className="text-xl font-bold w-[100px]">달력</h1>
            </Link>
            <Link
              className="flex items-center bg-[#ffffff] pl-2 pr-2 pt-2 rounded-t-xl"
              href={`/api/receipts/table`}
            >
              <h1 className="text-xl font-bold w-[100px]">표</h1>
            </Link>
            <Link
              className="flex items-center bg-[#f1ff9c] pl-2 pr-2 pt-2 rounded-t-xl"
              href={`/api/receipts/analysis`}
            >
              <h1 className="text-xl font-bold w-[100px]">감정 분석</h1>
            </Link>
          </div>
        </div>
        <main
          className="bg-white flex flex-col items-center"
          style={{
            marginTop: "13px",
            height: "432px",
            overflow: "auto",
          }}
        >
          {/* 연도, 월 변경 버튼 */}
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center gap-4 ">
              <Button
                variant="outline"
                className="flex items-center px-4 py-2  bg-[#ffffff]"
                onClick={() => handleYearChange(-1)}
              >
                &lt;
              </Button>
              <Button
                variant="outline"
                className="flex items-center px-4 py-2  bg-[#ffffff]"
                onClick={() => handleMonthChange(-1)}
              >
                &lt;
              </Button>
              <div className="flex items-center px-4 py-2  bg-[#ffffff]">
                {year}년 {month}월
              </div>
              <Button
                variant="outline"
                className="flex items-center px-4 py-2  bg-[#ffffff]"
                onClick={() => handleMonthChange(1)}
              >
                &gt;
              </Button>
              <Button
                variant="outline"
                className="flex items-center px-4 py-2  bg-[#ffffff]"
                onClick={() => handleYearChange(1)}
              >
                &gt;
              </Button>
            </div>
          </div>

          {/* 막대 */}
          {barData.length > 0 && (
            <BarChart
              dataset={barData}
              xAxis={[{ scaleType: "band", dataKey: "month" }]}
              series={[
                {
                  dataKey: "positiveSum",
                  label: "긍정적 기분",
                  color: "#3D73DB",
                },
                {
                  dataKey: "negativeSum",
                  label: "부정적 기분",
                  color: "#DB7292",
                },
              ]}
              sx={{
                padding: "20px",
              }}
            />
          )}
        </main>
      </div>
    </RootLayout>
  );
}
