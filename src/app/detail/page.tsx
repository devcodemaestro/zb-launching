"use client";
import { useState } from "react";
import Button from "@/components/Button";
import React from "react";

const Page = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  // 항목 선택 처리 함수
  const handleSelect = (item: string) => {
    setSelectedItem(item); // 새로 선택된 항목을 저장
  };

  const isSelected = (item: string) => selectedItem === item;

  return (
    <main className="mx-auto mt-[1.5vh] text-center w-72">
      <div className="py-0.5 border-y-2 border-black"></div>
      <div className="text-left">
        <h3 className="mt-[2vh] text-lg font-black">
          4. 간단한 거 중에 어떤거??
        </h3>
      </div>
      <div className="mt-[3vh] min-h-72 flex flex-col justify-start items-center text-lg font-bold gap-3">
        {[
          "토스트 / 샌드위치",
          "밥버거 / 김밥",
          "샐러드(포케)",
          "죽",
          "브리또",
        ].map((item, index) => (
          <div
            key={index}
            className={`w-72 h-12 px-4 flex items-center justify-center rounded-xl border-2 border-black border-dashed bg-white transition duration-300 ease-in-out cursor-pointer
              ${
                isSelected(item)
                  ? "border-gray-600 bg-gray-400" // 선택된 항목 스타일
                  : "hover:bg-gray-300 hover:border-gray-600 active:bg-gray-700"
              }`}
            onClick={() => handleSelect(item)}
          >
            <p className="text-lg">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-[2vh]">
        <Button href="/result" type="action" text="다음"></Button>
      </div>
      <div className="mt-[2vh] py-0.5 border-y-2 border-black"></div>
    </main>
  );
};

export default Page;
