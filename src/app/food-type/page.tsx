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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FoodType = () => {
  const router = useRouter();

  // 선택된 아이템을 관리하는 상태
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  // 아이템 클릭 핸들러
  const handleItemClick = (index: number) => {
    if (selectedItem === index) {
      setSelectedItem(null); // 같은 아이템 클릭 시 선택 해제
    } else {
      setSelectedItem(index); // 다른 아이템 클릭 시 해당 아이템 선택
    }
  };
  // ProgressBar 진행률을 관리하는 상태
  const [progress, setProgress] = useState(50);

  const goBack = () => {
    router.back(); // 이전 페이지로 이동
  };

  return (
    <div>
      <header className="relative pt-1 px-5 w-96 h-18 rounded-b-32">
        <div className="relative flex justify-between items-center text-sm font-bold font-[family-name:var(--font-pretendard)]">
          <button onClick={goBack}>
            <LeftAngleBracket className="w-6 h-6" />
          </button>
          <div
            style={{
              left: `${progress}%`, // 진행률에 따른 위치
            }}
            className="absolute transform -translate-x-1/2 transition-all duration-300"
          >
            <HeaderLogo className="w-16 h-5" />
          </div>
          <LeftAngleBracket className="w-6 h-6 -scale-100 invisible" />
        </div>
        <ProgressBar progress={50} />
      </header>
      <main className="mx-auto mt-7 px-5">
        <div className="flex justify-between mb-3 items-end">
          <p className="font-bold text-xl ">오늘 이게 땡겨</p>
          <p className="font-normal text-xs text-dark3 ">보기 하나만 선택</p>
        </div>
        <div className="w-84 h-[459px] flex flex-wrap justify-around gap-1 items-center">
          <div
            className={`cursor-pointer w-40 h-37 border rounded-[20px] py-6 relative ${
              selectedItem === 0 ? "bg-selected" : ""
            }`}
            onClick={() => handleItemClick(0)}
          >
            <div>
              <div className="flex justify-center items-center ">
                <Select
                  className="absolute top-3 right-3 w-6 h-6"
                  fill={`${
                    selectedItem === 0
                      ? "var(--color-primary)"
                      : "var(--color-disabled)"
                  }`}
                />
              </div>
            </div>
            <div className="flex w-16 h-14 mx-auto justify-center items-center ">
              <Salad className="w-16 h-14" />
            </div>
            <div className="mt-1 flex flex-col justify-center items-center">
              <p className="items-center font-medium text-lg">간단한거</p>
              <p className="mt-1 text-dark5 text-xs">
                토스트/밥버거/브리또/포케/죽
              </p>
            </div>
          </div>
          <div
            className={`cursor-pointer w-40 h-37 border rounded-[20px] py-6 relative ${
              selectedItem === 1 ? "bg-selected" : ""
            }`}
            onClick={() => handleItemClick(1)}
          >
            <div>
              <div className="flex justify-center items-center ">
                <Select
                  className="absolute top-3 right-3 w-6 h-6"
                  fill={`${
                    selectedItem === 1
                      ? "var(--color-primary)"
                      : "var(--color-disabled)"
                  }`}
                />
              </div>
            </div>
            <div className=" flex justify-center items-center ">
              <div className="flex w-16 h-14 mx-auto justify-center items-center ">
                <Noodle className="w-16 h-14" />
              </div>
            </div>
            <div className="mt-1 flex flex-col justify-center items-center">
              <p className="items-center font-medium text-lg">면 종류</p>
              <p className="mt-1 text-dark5 text-xs">
                짜장&짬뽕/파스타/잔치국수
              </p>
            </div>
          </div>
          <div
            className={`cursor-pointer w-40 h-37 border rounded-[20px] py-6 relative ${
              selectedItem === 2 ? "bg-selected" : ""
            }`}
            onClick={() => handleItemClick(2)}
          >
            <div>
              <div className="flex justify-center items-center ">
                <Select
                  className="absolute top-3 right-3 w-6 h-6"
                  fill={`${
                    selectedItem === 2
                      ? "var(--color-primary)"
                      : "var(--color-disabled)"
                  }`}
                />
              </div>
            </div>
            <div className=" flex justify-center items-center ">
              <div className="flex w-16 h-14 mx-auto justify-center items-center ">
                <HotSoup className="w-16 h-14" />
              </div>
            </div>
            <div className="mt-1 flex flex-col justify-center items-center">
              <p className="items-center font-medium text-lg">뜨끈한 국물</p>
              <p className="mt-1 text-dark5 text-xs">국밥/부대찌개/칼국수 </p>
            </div>
          </div>
          <div
            className={`cursor-pointer w-40 h-37 border rounded-[20px] py-6 relative ${
              selectedItem === 3 ? "bg-selected" : ""
            }`}
            onClick={() => handleItemClick(3)}
          >
            <div>
              <div className="flex justify-center items-center ">
                <Select
                  className="absolute top-3 right-3 w-6 h-6"
                  fill={`${
                    selectedItem === 3
                      ? "var(--color-primary)"
                      : "var(--color-disabled)"
                  }`}
                />
              </div>
            </div>
            <div className=" flex justify-center items-center ">
              <div className="flex w-16 h-14 mx-auto justify-center items-center ">
                <FriedShrimp className="w-16 h-14" />
              </div>
            </div>
            <div className="mt-1 flex flex-col justify-center items-center">
              <p className="items-center font-medium text-lg">바삭한거</p>
              <p className="mt-1 text-dark5 text-xs">돈까스/튀김덮밥/전 </p>
            </div>
          </div>
          <div
            className={`cursor-pointer w-40 h-37 border rounded-[20px] py-6 relative ${
              selectedItem === 4 ? "bg-selected" : ""
            }`}
            onClick={() => handleItemClick(4)}
          >
            <div>
              <div className="flex justify-center items-center ">
                <Select
                  className="absolute top-3 right-3 w-6 h-6"
                  fill={`${
                    selectedItem === 4
                      ? "var(--color-primary)"
                      : "var(--color-disabled)"
                  }`}
                />
              </div>
            </div>
            <div className=" flex justify-center items-center ">
              <div className="flex w-16 h-14 mx-auto justify-center items-center ">
                <Rice className="w-16 h-14" />
              </div>
            </div>
            <div className="mt-1 flex flex-col justify-center items-center">
              <p className="items-center font-medium text-lg">밥 종류</p>
              <p className="mt-1 text-dark5 text-xs">불고기/덮밥/콩불</p>
            </div>
          </div>
          <div
            className={`cursor-pointer w-40 h-37 border rounded-[20px] py-6 relative ${
              selectedItem === 5 ? "bg-selected" : ""
            }`}
            onClick={() => handleItemClick(5)}
          >
            <div>
              <div className="flex justify-center items-center ">
                <Select
                  className="absolute top-3 right-3 w-6 h-6"
                  fill={`${
                    selectedItem === 5
                      ? "var(--color-primary)"
                      : "var(--color-disabled)"
                  }`}
                />
              </div>
            </div>
            <div className=" flex justify-center items-center ">
              <div className="flex w-16 h-14 mx-auto justify-center items-center ">
                <OldGlory className="w-16 h-14" />
              </div>
            </div>
            <div className="mt-1 flex flex-col justify-center items-center">
              <p className="items-center font-medium text-lg">미국 감성</p>
              <p className="mt-1 text-dark5 text-xs">서브웨이/햄버거/피자</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex justify-center items-center w-80 h-14 gap-2 ">
          <div
            className={`cursor-pointer flex justify-center border border-[#dddddd] items-center w-39 h-14 rounded-xl font-semibold text-dark3 font-[family-name:var(--font-pretendard)] `}
            onClick={goBack}
          >
            <p className="flex ">이전</p>
          </div>
          <div
            className={`cursor-pointer mx-auto w-39 h-14 flex justify-center items-center rounded-xl text-white font-semibold font-[family-name:var(--font-pretendard)] ${
              selectedItem !== null ? "bg-primary" : "bg-disabled"
            }`}
          >
            <Link href="/food-type">
              <p>다음</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FoodType;
