"use client";
import BI from "@/components/icons/BI";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  const router = useRouter(); // useRouter 사용
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
    router.push("/main");
  };

  return (
    <div>
      <header className="pt-1 px-7 bg-primary w-94 h-40 rounded-b-32">
        <div className="flex justify-between text-white text-sm font-bold font-[family-name:var(--font-pretendard)]">
          <div>서울 양천구 중앙로 45길</div>
          <div>버튼</div>
        </div>
        <div className="mt-7 flex justify-between">
          <div>
            <span className="font-bold text-3xl">점메츄님</span>
            <p className="font-medium text-2xl">점심 메뉴 고르셨나요?</p>
          </div>
          <BI className="w-20 h-14" />
        </div>
      </header>
      <main className="mx-auto mt-8 px-5">
        <section>
          <p className="font-bold text-lg font-[family-name:var(--font-pretendard)]">
            주변 추천 식당
          </p>
          <div className="mt-3">
            <div className="w-62 h-9 flex justify-between items-center gap-1 text-center">
              <button
                className={`w-22 border-2 flex justify-center gap-1 items-center rounded-3xl ${
                  selectedItem === 0 ? "bg-secondary" : ""
                }`}
                onClick={() => handleItemClick(0)}
              >
                <Image
                  src="/images/burger.webp"
                  width={28}
                  height={28}
                  alt="아이콘 이미지"
                />
                <p className="font-medium text-xs">샐러드</p>
              </button>
              <button
                className={`w-22 border-2 flex justify-center gap-1 items-center rounded-3xl ${
                  selectedItem === 1 ? "bg-secondary" : ""
                }`}
                onClick={() => handleItemClick(1)}
              >
                <Image
                  src="/images/burger.webp"
                  width={28}
                  height={28}
                  alt="아이콘 이미지"
                />
                <p className="font-medium text-xs">초밥</p>
              </button>
              <button
                className={`w-22 border-2 flex justify-center gap-1 items-center rounded-3xl ${
                  selectedItem === 2 ? "bg-secondary" : ""
                }`}
                onClick={() => handleItemClick(2)}
              >
                <Image
                  src="/images/burger.webp"
                  width={28}
                  height={28}
                  alt="아이콘 이미지"
                />
                <p className="font-medium text-xs">초밥</p>
              </button>
            </div>
          </div>
          <div className="mt-2 w-full">
            <Swiper slidesPerView={2.3} spaceBetween={20}>
              <SwiperSlide>
                <div className="w-36 h-46 bg-gray-100 rounded-xl flex justify-center items-center">
                  1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-36 h-46 bg-gray-100 rounded-xl flex justify-center items-center">
                  2
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-36 h-46 bg-gray-100 rounded-xl flex justify-center items-center">
                  3
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-36 h-46 bg-gray-100 rounded-xl flex justify-center items-center">
                  4
                </div>
              </SwiperSlide>
              {/* 추가 카드 */}
            </Swiper>
          </div>
        </section>
        <section className="mt-7">
          <p className="font-bold text-lg font-[family-name:var(--font-pretendard)]">
            이번 주 직장인 인기메뉴
          </p>
          <div className="mt-4 w-full">
            <Swiper slidesPerView={2.6} spaceBetween={20}>
              <SwiperSlide>
                <div className="w-32 h-28 border-2 border-gray-100 rounded-xl flex flex-col justify-center items-center">
                  <Image
                    src="/images/burger.webp"
                    width={77}
                    height={69}
                    alt="음식 이미지"
                  />
                  <p>샐러드</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-32 h-28 border-2 border-gray-100 rounded-xl flex flex-col justify-center items-center">
                  <Image
                    src="/images/burger.webp"
                    width={77}
                    height={69}
                    alt="음식 이미지"
                  />
                  <p>초밥</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-32 h-28 border-2 border-gray-100 rounded-xl flex flex-col justify-center items-center">
                  <Image
                    src="/images/burger.webp"
                    width={77}
                    height={69}
                    alt="음식 이미지"
                  />
                  <p>파스타/마제소바</p>
                </div>
              </SwiperSlide>
              {/* 추가 카드 */}
            </Swiper>
          </div>
        </section>

        <div
          className="cursor-pointer mx-auto mt-10 w-80 h-14 bg-primary flex justify-center items-center rounded-xl text-white font-semibold font-[family-name:var(--font-pretendard)]"
          onClick={handleNextClick}
        >
          <p>메뉴 고르러 가기</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
