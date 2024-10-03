"use client"; // 클라이언트 컴포넌트로 지정
import { useRef, useState } from "react";
import Button from "./Button";

const Main = () => {
  const [isEditing, setIsEditing] = useState(true); // 편집 상태 관리
  const [address, setAddress] = useState(""); // 수정 가능한 주소값 관리
  const inputRef = useRef(null); // input의 포커스를 제어할 ref

  // Enter 키 처리 (onKeyDown 사용)
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false); // Enter를 누르면 텍스트로 변환
    }
  };

  // 텍스트 클릭 시 input에 포커스가 가도록 처리
  const handleTextClick = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus(); // input이 나타난 후 포커스 설정
    }, 0);
  };

  return (
    <main className="mx-auto mt-3 text-center w-72">
      메인페이지 입니다.
      {/* <div className="mt-52">
        <Button href="/choose-type" type="action" text="시작하기"></Button>
      </div> */}
    </main>
  );
};

export default Main;
