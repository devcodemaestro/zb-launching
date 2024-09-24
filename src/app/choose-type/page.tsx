import Button from "@/components/Button";
import React from "react";

const page = () => {
  return (
    <main className="mx-auto mt-3 text-center w-72">
      <div className="py-0.5 border-y-2 border-black"></div>
      <div className="text-left">
        <h3 className="mt-6 text-lg font-black">1. 회사 위치를 알려줄래?</h3>
      </div>
      <div className="mt-8 w-76 p-2 flex justify-end items-center text-lg font-bold gap-6">
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
      <div className="mt-10 py-0.5 border-y-2 border-black"></div>
    </main>
  );
};

export default page;
