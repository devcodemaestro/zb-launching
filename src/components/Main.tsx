"use client"; // 클라이언트 컴포넌트로 지정
import { useRef, useState } from "react";
import Button from "./Button";

const Main = () => {
  const [isEditing, setIsEditing] = useState(true); // 편집 상태 관리
  const [address, setAddress] = useState(""); // 수정 가능한 주소값 관리
  const inputRef = useRef<HTMLInputElement>(null); // input의 포커스를 제어할 ref

  // Enter 키 처리 (onKeyDown 사용)
  const handleKeyDown = (e: { key: string }) => {
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
      <div className="py-0.5 border-y-2 border-black"></div>
      <div className="text-left">
        <h3 className="mt-6 text-lg font-black">1. 회사 위치를 알려줄래?</h3>
      </div>
      <div className="mt-8 w-72 p-2 flex justify-center items-center text-lg font-bold gap-6">
        {isEditing ? (
          <input
            ref={inputRef} // input에 ref 연결
            className="w-72 h-9 px-6 flex items-center justify-center rounded-xl border-2 border-black bg-white focus:bg-gray-100 focus:border-gray-500 hover:border-gray-400 transition duration-200 ease-in-out"
            placeholder="판교역로 235, 분당 주공"
            value={address} // useState로 관리되는 값을 input에 설정
            onChange={(e) => setAddress(e.target.value)} // 입력값을 업데이트
            onKeyDown={handleKeyDown} // Enter 키 처리
          />
        ) : (
          <p
            onClick={handleTextClick} // 텍스트 클릭 시 input으로 전환 및 포커스
            className="w-72 h-9 px-6 flex items-center justify-center rounded-xl border-2 border-black cursor-pointer"
          >
            {address || "판교역로 235, 분당 주공"} {/* 입력된 주소 표시 */}
          </p>
        )}
      </div>
      <div className="mt-52">
        <Button href="/choose-type" type="action" text="시작하기"></Button>
      </div>
      <div className="mt-10 py-0.5 border-y-2 border-black"></div>
    </main>
  );
};

export default Main;
