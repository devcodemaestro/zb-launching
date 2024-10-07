import SplashText from "@/components/icons/SplashText";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="mt-[15vh] mx-auto flex justify-center">
        <SplashText
          fill="var(--color-primary)"
          className="w-full max-w-[153px] h-auto max-h-[79px]"
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
        className="w-[100vw] max-w-[375px] h-auto mt-[7vh] max-h-[296px]"
      />
      <Link href="/home">
        <div className="mt-11 mx-auto flex justify-center items-center w-[40vh] max-w-[320px] h-14 rounded-xl bg-[var(--color-primary)] ">
          <p className="text-white font-[family-name:var(--font-pretendard)] font-semibold text-xl">
            점메츄 시작하기
          </p>
        </div>
      </Link>
    </div>
  );
}
