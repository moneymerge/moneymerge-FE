"use client";
import Link from "next/link";
import RootLayout from "../../../../../components/layout.js";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
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
import { BASE_URL } from '../../../../../../url.js';

export default function Component() {
  const params = useParams();
  const bookId = params.bookId;
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [viewType, setViewType] = useState("income");
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  //// 막대 ////
  useEffect(() => {
    fetch(
      `${BASE_URL}/books/${bookId}/analysis-member?year=${year}&month=${month}`,
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
        console.log("Received user data:", data.data);
        const transformedBarData = transformBarData(data.data.months, viewType);
        const transformedPieData = transformPieData(
          data.data.categories,
          viewType
        );
        setBarData(transformedBarData);
        setPieData(transformedPieData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [bookId, year, month, viewType]);

  // 데이터를 차트 형식으로 변환
  const transformBarData = (monthsData, type) => {
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
    const dataset = months.map((month, index) => {
      const monthData = { month };
      monthsData.forEach((user) => {
        const userMonthData = user.months.find(
          (m) => m.month === index + 1
        ) || { income: 0 };
        monthData[user.username] = userMonthData[type];
      });
      return monthData;
    });
    return dataset;
  };

  // const dataset = [
  //   // barData
  //   {
  //     london: 59, // 멤버 이름: 수입 합
  //     paris: 57,
  //     newYork: 86,
  //     seoul: 21,
  //     month: "Jan", // 월
  //   },
  //   {
  //     london: 50,
  //     paris: 52,
  //     newYork: 78,
  //     seoul: 28,
  //     month: "Fev",
  //   },
  // ];

  const chartSetting = {
    yAxis: [
      {
        // label: `${viewType} (원)`, // 변경된 y축 레이블
      },
    ],
    width: 595,
    height: 300,
    sx: {
      // [`.${axisClasses.left} .${axisClasses.label}`]: {
      //   transform: "translate(-20px, 0)",
      // },
    },
  };

  // const valueFormatter = (value: number | null) => `${value}mm`;
  const valueFormatter = (value) => `${value}원`;

  //// 원형 ////
  const transformPieData = (categoriesData, type) => {
    return categoriesData.map((userCategories) => {
      const { userId, username, categories } = userCategories;
      const data = categories.map((category) => ({
        label: category.categoryName,
        value: category[`cat${capitalizeFirstLetter(type)}Sum`],
      }));
      return { userId, username, data };
    });
  };
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const size = {
    width: 400,
    height: 200,
  };

  const handleViewTypeChange = (type) => {
    setViewType(type);
    fetch(
      `${BASE_URL}/books/${bookId}/analysis-member?year=${year}&month=${month}`,
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
        const transformedBarData = transformBarData(data.data.months, type);
        const transformedPieData = transformPieData(data.data.categories, type);
        setBarData(transformedBarData);
        setPieData(transformedPieData);
      })
      .catch((error) => console.error("Error fetching data:", error));
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
              className="flex items-center bg-[#f1ff9c] pl-2 pr-2 pt-2 rounded-t-xl"
              href={`/api/books/${bookId}/analysis`}
            >
              <h1 className="text-xl font-bold w-[100px]">소비 분석</h1>
            </Link>
          </div>
        </div>
        <main
          className="bg-white "
          style={{
            marginTop: "13px",
            height: "432px",
            overflow: "auto",
          }}
        >
          <Card>
            <CardContent>
              {/* 연도, 월 변경 버튼 */}
              <div className="w-full flex flex-col items-center border-b pb-2">
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

              {/* 수입, 지출 변경 버튼 */}
              <div className="flex items-center pt-2">
                <button
                  className={`flex items-center px-4 py-2 ${
                    viewType === "income" ? "bg-[#FFD7DD]" : "bg-[#ffffff]"
                  }`}
                  onClick={() => handleViewTypeChange("income")}
                >
                  수입
                </button>
                <button
                  className={`flex items-center px-4 py-2 ${
                    viewType === "expense" ? "bg-[#FFD7DD]" : "bg-[#ffffff]"
                  }`}
                  onClick={() => handleViewTypeChange("expense")}
                >
                  지출
                </button>
              </div>

              {/* 막대 */}

              {barData.length > 0 && (
                <BarChart
                  dataset={barData}
                  xAxis={[{ scaleType: "band", dataKey: "month" }]}
                  series={Object.keys(barData[0])
                    .filter((key) => key !== "month")
                    .map((username) => ({
                      dataKey: username,
                      label: username,
                      valueFormatter,
                    }))}
                  {...chartSetting}
                  sx={{
                    // margin: "20px",
                    padding: "20px",
                    // border: "1px solid black",
                  }}
                />
              )}
            </CardContent>
          </Card>

          {/* 원형 */}
          {pieData.map((userData) => (
            <Card className="shadow">
              <CardHeader>
                {/* <CardTitle>{userData.username}</CardTitle> */}
                {/* <CardDescription>원</CardDescription> */}
              </CardHeader>
              <CardContent>
                <div key={userData.userId} style={{ marginBottom: "20px" }}>
                  <h2>{userData.username}</h2>
                  <PieChart
                    series={[
                      {
                        arcLabel: (item) => `${item.label} (${item.value}원)`,
                        arcLabelMinAngle: 45,
                        data: userData.data,
                      },
                    ]}
                    sx={{
                      [`& .${pieArcLabelClasses.root}`]: {
                        fill: "white",
                        fontWeight: "bold",
                      },
                    }}
                    {...size}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </main>
      </div>
    </RootLayout>
  );
}
