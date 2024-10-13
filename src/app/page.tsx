"use client";
import SplashText from "@/components/icons/SplashText";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); // useRouter 사용

  // 클릭시 페이지 라우팅
  const handleNextClick = () => {
    router.push("/home");
  };
  return (
    <div className="">
      <div className="mt-[15vh] mx-auto flex justify-center">
        <SplashText
          fill="var(--color-primary)"
          className="w-full max-w-[9.5625rem] h-auto max-h-[4.9375rem]"
        />
      </div>

      <div className="mx-auto mt-[2vh] w-44 text-center">
        <p className="font-semibold text-xl font-[family-name:var(--font-pretendard)]">
          회사 근처 맛집을 AI로 5초안에 찾아보세요!
        </p>
      </div>
      <Image
        src="/images/bg-onboarding.webp"
        width={375}
        height={296}
        alt="온보딩 배경 이미지"
        className="w-[100vw] max-w-[23.4375rem] h-auto mt-[7vh] max-h-[18.5rem]"
      />
      <div
        className="cursor-pointer mt-11 mx-auto flex justify-center items-center w-[40vh] max-w-[20rem] h-14 rounded-xl bg-[var(--color-primary)]"
        onClick={handleNextClick}
      >
        <p className="text-white font-[family-name:var(--font-pretendard)] font-semibold text-xl">
          점메츄 시작하기
        </p>
      </div>
    </div>
  );
}
