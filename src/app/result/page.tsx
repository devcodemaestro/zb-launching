"use client";
import HeaderLogo from "@/components/icons/HeaderLogo";
import LeftAngleBracket from "@/components/icons/LeftAngleBracket";
import ResultImage from "@/components/icons/ResultImage";
import ProgressBar from "@/components/ProgressBar";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Result = () => {
  const router = useRouter();

  const handleRedoClick = () => {
    router.push("/main");
  };

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
          <HeaderLogo className="w-16 h-5" />
          <LeftAngleBracket className="w-6 h-6 -scale-100 invisible" />
        </div>
        <ProgressBar progress={100} />
      </header>
      <main className="mx-auto mt-7 px-5">
        <section className="flex flex-col justify-cestart items-center w-84 h-86 mt-9 border-[1px] rounded-[1.25rem] border-[#dddddd]">
          <p className="my-[1.875rem] font-bold text-[1.75rem]">
            오늘은 <span className="text-primary">국밥</span>이다!
          </p>
          <div className="relative">
            <Image
              src="/images/soup.webp"
              width={230}
              height={200}
              alt="음식 이미지"
            ></Image>
            <ResultImage className="absolute w-20 h-18 bottom-0 right-0" />
          </div>
        </section>
        <button className="mx-auto mt-10 flex justify-center items-center w-80 h-14 ">
          <div
            className={`cursor-pointer mx-auto w-80 h-14 flex justify-center items-center rounded-xl text-white font-semibold font-[family-name:var(--font-pretendard)] bg-primary`}
            onClick={handleRedoClick}
          >
            <p>메뉴 추천 다시 받기</p>
          </div>
        </button>
      </main>
    </div>
  );
};

export default Result;
