import Button from "@/components/Button";
import React from "react";

const page = () => {
  return (
    <main className="mx-auto mt-[1.5vh] text-center w-72">
      <div className="py-0.5 border-y-2 border-black"></div>
      <div className="text-left">
        <h3 className="mt-[2vh] text-lg font-black">
          4. 간단한 거 중에 어떤거??
        </h3>
      </div>
      <div className="mt-[3vh] min-h-72 flex flex-col justify-start items-center text-lg font-bold">
        <Button href="" type="detailSelect" text="토스트 / 샌드위치"></Button>
        <Button href="" type="detailSelect" text="밥버거 / 김밥"></Button>
        <Button href="" type="detailSelect" text="샐러드(포케)"></Button>
        <Button href="" type="detailSelect" text="죽"></Button>
        <Button href="" type="detailSelect" text="브리또"></Button>
      </div>
      <div className="mt-[2vh]">
        <Button href="/result" type="action" text="다음"></Button>
      </div>
      <div className="mt-[2vh] py-0.5 border-y-2 border-black"></div>
    </main>
  );
};

export default page;
