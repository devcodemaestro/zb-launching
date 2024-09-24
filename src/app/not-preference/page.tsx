"use client";

import Button from "@/components/Button";
import { useState } from "react";

const NonPreference = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // 항목 선택 처리 함수
  const handleSelect = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      if (selectedItems.length < 5) {
        setSelectedItems([...selectedItems, item]);
      }
    }
  };

  // 항목이 선택되었는지 확인
  const isSelected = (item: string) => selectedItems.includes(item);

  return (
    <main className="mx-auto mt-[1.5vh] text-center w-72">
      <div className="py-0.5 border-y-2 border-black"></div>
      <div className="text-left">
        <h3 className="mt-[2vh] text-lg font-black">2. 오늘은 이게 안땡겨ㅎ</h3>
      </div>
      <div className="mt-[3vh] flex-wrap flex justify-center items-center text-lg font-bold gap-3">
        {[
          { text: "간단한거", subText: "토스트 밥버거 브리또 포케, 죽" },
          { text: "면이 땡겨", subText: "라면, 우동, 국수" },
          { text: "뜨끈한 국물", subText: "국밥, 부대찌개, 칼국수" },
          { text: "밥이 땡겨", subText: "백반, 국밥, 덮밥, 볶음밥" },
          { text: "바삭한거", subText: "돈까스, 튀김덮밥" },
          { text: "미국 감성", subText: "서브웨이, 햄버거, 피자, 샐러드" },
        ].map((item, index) => (
          <div
            key={index}
            className={`w-22 h-36 py-3 mx-auto flex flex-col items-center justify-center gap-3 rounded-xl  border-black border-2 cursor-pointer transition duration-300 ease-in-out
              ${
                isSelected(item.text)
                  ? "bg-gray-500 border-gray-700 border-solid " // 선택된 항목 스타일
                  : "hover:bg-gray-300 hover:border-gray-600 active:bg-gray-700 border-dashed "
              }`}
            onClick={() => handleSelect(item.text)}
          >
            <div className="text-center">
              <p className="text-lg">{item.text}</p>
              <p
                className={`text-sm ${
                  isSelected(item.text) ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {item.subText}
              </p>
            </div>
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

export default NonPreference;
