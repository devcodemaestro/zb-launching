import Button from "@/components/Button";

const page = () => {
  return (
    <main className="mx-auto mt-[1.5vh] text-center w-72">
      <div className="py-0.5 border-y-2 border-black"></div>
      <div className="text-left">
        <h3 className="mt-[2vh] text-lg font-black">3. 오늘 이게 땡겨ㅎ</h3>
      </div>
      <div className="mt-[3vh] flex-wrap flex justify-center items-center text-lg font-bold gap-3">
        <Button
          href="/detail"
          type="select"
          text="간단한거"
          subText="토스트 밥버거 브리또 포케, 죽"
        ></Button>
        <Button
          href="/detail"
          type="select"
          text="면이 땡겨"
          subText="토스트 밥버거 브리또 포케, 죽"
        ></Button>
        <Button
          href="/detail"
          type="select"
          text="뜨끈한 국물"
          subText="국밥 부대찌개 칼국수"
        ></Button>
        <Button
          href="/detail"
          type="select"
          text="밥이 땡겨"
          subText="백반 국밥 덮밥 볶음밥"
        ></Button>
        <Button
          href="/detail"
          type="select"
          text="바삭한거"
          subText="돈까스 튀김덮밥"
        ></Button>
        <Button
          href="/detail"
          type="select"
          text="미국 감성"
          subText="서브웨이 햄버거 피자 샐러드"
        ></Button>
      </div>
      <div className="mt-[2vh]">
        <Button href="/random" type="action" text="다음"></Button>
      </div>
      <div className="mt-[2vh] py-0.5 border-y-2 border-black"></div>
    </main>
  );
};

export default page;
