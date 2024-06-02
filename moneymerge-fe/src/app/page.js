"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();
  const [board, setBoard] = useState({});

  useEffect(() => {
    // fetch(`http://43.203.66.36:8080/api/boards/${params.boardId}`)
    fetch(`http://43.203.66.36:8080/api/boards/1`)
      .then((result) => result.json())
      .then((result) => setBoard(result.data));
  }, []);

  return (
    <div>
      {/* <>{params.boardId}</> */}
      <li>id: {board.boardId}</li>
      <li>게시판: {board.boardType}</li>
      <li>제목: {board.title}</li>
      <li>내용: {board.content}</li>
      <li>이미지: {board.image}</li>
      <li>작성자: {board.author}</li>
      <li>작성일: {board.createdAt}</li>
      <li>수정일: {board.modifiedAt}</li>
      <li>좋아요: {board.likes}</li>
    </div>
  );
}
