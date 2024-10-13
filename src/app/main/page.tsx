"use client";
import FriedShrimp from "@/components/icons/FriedShrimp";
import HeaderLogo from "@/components/icons/HeaderLogo";
import HotSoup from "@/components/icons/HotSoup";
import LeftAngleBracket from "@/components/icons/LeftAngleBracket";
import Minus from "@/components/icons/Minus";
import Noodle from "@/components/icons/Noodle";
import OldGlory from "@/components/icons/OldGlory";
import Plus from "@/components/icons/Plus";
import Rice from "@/components/icons/Rice";
import Salad from "@/components/icons/Salad";
import Select from "@/components/icons/Select";
import ProgressBar from "@/components/ProgressBar";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Main = () => {
  const router = useRouter(); // useRouter 사용
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  // 아이템 클릭 핸들러
  const handleItemClick = (index: number) => {
    if (selectedItem === index) {
      setSelectedItem(null); // 같은 아이템 클릭 시 선택 해제
    } else {
      setSelectedItem(index); // 다른 아이템 클릭 시 해당 아이템 선택
    }
  };

  const goBack = () => {
    router.back(); // 이전 페이지로 이동
  };

  // 선택된 아이템에 따라 다른 페이지로 라우팅
  const handleNextClick = () => {
    if (selectedItem === 0) {
      router.push("/food-type/want"); // '먹고싶은걸 고를래' 선택 시 경로
    } else if (selectedItem === 1) {
      router.push("/food-type/remove"); // '안땡기는걸 뺄래' 선택 시 경로
    } else if (selectedItem === 2) {
      router.push("/result"); // '아무거나 먹을래' 선택 시 경로
    }
  };

  return (
    <div>
      <header className="pt-1 px-5 w-96 h-18 rounded-b-32">
        <div className="flex justify-between items-center text-sm font-bold font-[family-name:var(--font-pretendard)]">
          <button onClick={goBack}>
            <LeftAngleBracket className="w-6 h-6" />
          </button>
          <HeaderLogo className="w-16 h-5" />
          <LeftAngleBracket className="w-6 h-6 -scale-100 invisible" />
        </div>
        <ProgressBar progress={0} />
      </header>
      <main className="mx-auto mt-7 px-5">
        <div>
          <p className="font-bold text-xl mb-3">어떤 방식으로 골라볼까?</p>
        </div>
        <div className="w-84 h-[28.6875rem] flex flex-col justify-around gap-3 items-center">
          <div
            className={`cursor-pointer w-84 h-36 border rounded-[1.25rem] py-6 relative ${
              selectedItem === 0 ? "bg-selected" : ""
            }`}
            onClick={() => handleItemClick(0)}
          >
            <div className="flex justify-center items-center ">
              <Select
                className="absolute top-3 right-3 w-6 h-6"
                fill={`${
                  selectedItem === 0
                    ? "var(--color-primary)"
                    : "var(--color-disabled)"
                }`}
              />
              <p className="items-center font-bold text-xl">
                먹고싶은걸 <span className="text-primary">고를래!</span>
              </p>
            </div>
            <div className=" flex justify-center items-center ">
              <div
                className={`m-2 w-15 h-15  rounded-full relative ${
                  selectedItem === 0 ? "bg-white" : "bg-selected"
                }`}
              >
                <Plus className="absolute right-0 w-6 h-6 z-10" />
                <Noodle className="absolute mx-auto w-9 h-10 top-3 left-3 z-0" />
              </div>
            </div>
          </div>
          <div
            className={`cursor-pointer w-84 h-36 border rounded-[1.25rem] py-6 relative ${
              selectedItem === 1 ? "bg-selected" : ""
            }`}
            onClick={() => handleItemClick(1)}
          >
            <div className="flex justify-center items-center ">
              <Select
                className="absolute top-3 right-3 w-6 h-6"
                fill={`${
                  selectedItem === 1
                    ? "var(--color-primary)"
                    : "var(--color-disabled)"
                }`}
              />
              <p className="items-center font-bold text-xl">
                안땡기는걸 <span className="text-primary">뺄래!</span>
              </p>
            </div>
            <div className=" flex justify-center items-center ">
              <div
                className={`m-2 w-15 h-15 bg-selected rounded-full relative ${
                  selectedItem === 1 ? "bg-white" : "bg-selected"
                }`}
              >
                <Minus className="absolute right-0 w-6 h-6 z-10" />
                <Salad className="absolute mx-auto w-9 h-10 top-3 left-3 z-0" />
              </div>
            </div>
          </div>
          <div
            className={`cursor-pointer w-84 h-36 border rounded-[1.25rem] py-6 relative ${
              selectedItem === 2 ? "bg-selected" : ""
            }`}
            onClick={() => handleItemClick(2)}
          >
            <div className="flex justify-center items-center ">
              <Select
                className="absolute top-3 right-3 w-6 h-6"
                fill={`${
                  selectedItem === 2
                    ? "var(--color-primary)"
                    : "var(--color-disabled)"
                }`}
              />
              <p className="items-center font-bold text-xl">
                <span className="text-primary">아무거나</span> 먹을래!
              </p>
            </div>
            <div className="mt-2 flex justify-center items-center overflow-hidden">
              <div
                className={`h-15 w-screen flex gap-8 items-center relative ${
                  selectedItem === 2 ? "bg-selected" : ""
                }`}
              >
                <Salad className="w-9 h-10" />
                <Rice className="w-9 h-10" />
                <OldGlory className="w-9 h-10" />
                <Noodle className="w-9 h-10" />
                <HotSoup className="w-9 h-10" />
                <FriedShrimp className="w-9 h-10" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`cursor-pointer mx-auto mt-10 w-80 h-14 flex justify-center items-center rounded-xl text-white font-semibold font-[family-name:var(--font-pretendard)] ${
            selectedItem !== null ? "bg-primary" : "bg-disabled"
          }`}
          onClick={handleNextClick} // 버튼 클릭 시 라우팅 함수 호출
        >
          <p>다음</p>
        </div>
      </main>
    </div>
  );
};

export default Main;
