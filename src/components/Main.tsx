import React from "react";

const Main = ({ setCurrentComponent }) => {
  return (
    <main className="mx-auto mt-3 text-center w-72">
      <div className="py-0.5 border-y-2 border-black"></div>
      <div className="text-left">
        <h3 className="mt-6 text-lg font-black">1. 어떤 방식으로 골라볼까?</h3>
      </div>
      <div className="mt-16 w-76 p-2 flex justify-end items-center text-lg font-bold gap-6">
        <button
          className="h-48 px-6 flex items-center justify-center rounded-xl border-2 border-black border-dashed bg-white hover:bg-gray-200 hover:border-gray-600 active:bg-gray-700 transition duration-300 ease-in-out"
          onClick={() => setCurrentComponent("Preference")}
        >
          <p>오늘 이게 땡겨ㅎ</p>
        </button>
        <button
          className="h-48 px-6 flex items-center justify-center rounded-xl border-2 border-black border-dashed bg-white hover:bg-gray-200 hover:border-gray-600 active:bg-gray-700 transition duration-300 ease-in-out"
          onClick={() => setCurrentComponent("NotPreference")}
        >
          <p>오늘 이게 안땡겨ㅜ</p>
        </button>
      </div>
      <div>
        <button
          className="w-64 h-24 mt-6 mx-auto flex items-center justify-center rounded-xl border-2 border-black border-dashed bg-white hover:bg-gray-300 hover:border-gray-600 active:bg-gray-700 transition duration-300 ease-in-out"
          onClick={() => setCurrentComponent("Random")}
        >
          <p className="text-2xl font-bold">아무거나</p>
        </button>
      </div>
      <div className="mt-10 py-0.5 border-y-2 border-black"></div>
    </main>
  );
};

export default Main;
