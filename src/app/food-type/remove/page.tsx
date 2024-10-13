"use client";
import FriedShrimp from "@/components/icons/FriedShrimp";
import HeaderLogo from "@/components/icons/HeaderLogo";
import HotSoup from "@/components/icons/HotSoup";
import LeftAngleBracket from "@/components/icons/LeftAngleBracket";
import Noodle from "@/components/icons/Noodle";
import OldGlory from "@/components/icons/OldGlory";
import Rice from "@/components/icons/Rice";
import Salad from "@/components/icons/Salad";
import Select from "@/components/icons/Select";
import ProgressBar from "@/components/ProgressBar";
import useGoBack from "@/hooks/UseGoBack";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Remove = () => {
  const router = useRouter();
  const goBack = useGoBack();

  // 여러 개의 선택된 아이템을 관리하는 상태
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  // 아이템 클릭 핸들러
  const handleItemClick = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index)); // 선택 해제
    } else if (selectedItems.length < 5) {
      setSelectedItems([...selectedItems, index]); // 새로운 선택 추가, 최대 5개
    }
  };

  // 선택된 항목이 있으면 /result 페이지로 이동
  const handleNextClick = () => {
    if (selectedItems.length > 0) {
      router.push("/result");
    }
  };

  return (
    <div>
      <header className="relative pt-1 px-5 w-96 h-18 rounded-b-32">
        <div className="relative flex justify-between items-center text-sm font-bold font-[family-name:var(--font-pretendard)]">
          <button onClick={goBack}>
            <LeftAngleBracket className="w-6 h-6" />
          </button>
          <HeaderLogo className="w-16 h-5" />
          <LeftAngleBracket className="w-6 h-6 -scale-100 invisible" />
        </div>
        <ProgressBar progress={50} />
      </header>
      <main className="mx-auto mt-7 px-5">
        <div className="flex justify-between mb-3 items-end">
          <p className="font-bold text-xl">오늘 이건 안땡겨</p>
          <p className="font-normal text-xs text-dark3">
            중복 선택 가능(최대 5개)
          </p>
        </div>
        <div className="w-84 h-[28.6875rem] flex flex-wrap justify-around gap-1 items-center">
          {[
            {
              icon: <Salad className="w-16 h-14" />,
              text: "간단한거",
              desc: "토스트/밥버거/브리또/포케/죽",
            },
            {
              icon: <Noodle className="w-16 h-14" />,
              text: "면 종류",
              desc: "짜장&짬뽕/파스타/잔치국수",
            },
            {
              icon: <HotSoup className="w-16 h-14" />,
              text: "뜨끈한 국물",
              desc: "국밥/부대찌개/칼국수",
            },
            {
              icon: <FriedShrimp className="w-16 h-14" />,
              text: "바삭한거",
              desc: "돈까스/튀김덮밥/전",
            },
            {
              icon: <Rice className="w-16 h-14" />,
              text: "밥 종류",
              desc: "불고기/덮밥/콩불",
            },
            {
              icon: <OldGlory className="w-16 h-14" />,
              text: "미국 감성",
              desc: "서브웨이/햄버거/피자",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer w-40 h-36 border rounded-[1.25rem] py-6 relative ${
                selectedItems.includes(index) ? "bg-selected" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              <div className="absolute top-3 right-3 flex justify-center items-center">
                <Select
                  className="w-6 h-6"
                  fill={`${
                    selectedItems.includes(index)
                      ? "var(--color-primary)"
                      : "var(--color-disabled)"
                  }`}
                />
              </div>
              <div className="flex justify-center items-center">
                <div className="w-16 h-14 mx-auto">{item.icon}</div>
              </div>
              <div className="mt-1 flex flex-col justify-center items-center">
                <p className="font-medium text-lg">{item.text}</p>
                <p className="mt-1 text-dark5 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 flex justify-center items-center w-80 h-14 gap-2">
          <div
            className="cursor-pointer flex justify-center border border-[#dddddd] items-center w-39 h-14 rounded-xl font-semibold text-dark3"
            onClick={goBack}
          >
            <p>이전</p>
          </div>
          <div
            className={`cursor-pointer mx-auto w-39 h-14 flex justify-center items-center rounded-xl text-white font-semibold ${
              selectedItems.length > 0 ? "bg-primary" : "bg-disabled"
            }`}
            onClick={handleNextClick}
          >
            <p>다음</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Remove;
