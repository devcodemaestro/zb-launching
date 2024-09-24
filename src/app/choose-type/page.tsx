import Button from "@/components/Button";
import React from "react";

const page = () => {
  return (
    <main className="mx-auto mt-[1.5vh] text-center w-72">
      <div className="py-0.5 border-y-2 border-black"></div>
      <div className="text-left">
        <h3 className="mt-[2vh] text-lg font-black">
          2. 어떤 방식으로 골라볼까?
        </h3>
      </div>
      <div className="mt-[3vh] mx-0.5 w-76 px-2 flex justify-end items-center text-lg font-bold gap-6">
        <Button
          href="/preference"
          type="primary"
          text="오늘 이게 땡겨요ㅎ"
        ></Button>
        <Button
          href="/not-preference"
          type="primary"
          text="오늘 이게 안땡겨ㅜ"
        ></Button>
      </div>
      <div>
        <Button href="/random" type="random" text="아무거나"></Button>
      </div>
      <div className="mt-[2vh] py-0.5 border-y-2 border-black"></div>
    </main>
  );
};

export default page;
