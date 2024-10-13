"use client";
import HeaderLogo from "@/components/icons/HeaderLogo";
import LeftAngleBracket from "@/components/icons/LeftAngleBracket";
import Select from "@/components/icons/Select";
import ProgressBar from "@/components/ProgressBar";
import useGoBack from "@/hooks/UseGoBack";
import { useRouter } from "next/navigation";
import { useState } from "react";

const American = () => {
  const router = useRouter();
  const goBack = useGoBack();
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

  const handleNextClick = () => {
    router.push("/result");
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
        <ProgressBar progress={100} />
      </header>
      <main className="mx-auto mt-7 px-5 min-h-[78.4vh] flex flex-col justify-start">
        <div className="flex-grow">
          <div className="flex justify-between mb-3 items-end">
            <p className="font-bold text-xl ">미국 감성 중에 어떤거?</p>
          </div>
          <div className="w-84 h-[auto] flex flex-wrap justify-between gap-1 items-center">
            <div
              className={`flex justify-between px-5 items-center cursor-pointer w-84 h-16 border rounded-[1.25rem] py-6 relative ${
                selectedItem === 0 ? "bg-selected" : ""
              }`}
              onClick={() => handleItemClick(0)}
            >
              <div className="mt-1 flex flex-col justify-center items-center">
                <p className="items-center font-medium text-lg">서브웨이</p>
              </div>
              <div>
                <div className="">
                  <Select
                    className="w-6 h-6"
                    fill={`${
                      selectedItem === 0
                        ? "var(--color-primary)"
                        : "var(--color-disabled)"
                    }`}
                  />
                </div>
              </div>
            </div>
            <div
              className={`flex justify-between px-5 items-center cursor-pointer w-84 h-16 border rounded-[1.25rem] py-6 relative ${
                selectedItem === 1 ? "bg-selected" : ""
              }`}
              onClick={() => handleItemClick(1)}
            >
              <div className="mt-1 flex flex-col justify-center items-center">
                <p className="items-center font-medium text-lg">햄버거</p>
              </div>
              <div>
                <div className="flex justify-center items-center ">
                  <Select
                    className="w-6 h-6"
                    fill={`${
                      selectedItem === 1
                        ? "var(--color-primary)"
                        : "var(--color-disabled)"
                    }`}
                  />
                </div>
              </div>
            </div>
            <div
              className={`flex justify-between px-5 cursor-pointer w-84 h-16 border rounded-[1.25rem] py-6 relative ${
                selectedItem === 2 ? "bg-selected" : ""
              }`}
              onClick={() => handleItemClick(2)}
            >
              <div className="mt-1 flex justify-center items-center">
                <p className="items-center font-medium text-lg">피자</p>
              </div>
              <div>
                <Select
                  className="w-6 h-6"
                  fill={`${
                    selectedItem === 2
                      ? "var(--color-primary)"
                      : "var(--color-disabled)"
                  }`}
                />
              </div>
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
            onClick={handleNextClick}
          >
            <p>다음</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default American;
