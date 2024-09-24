const page = () => {
  return (
    <main className="mx-auto mt-[1.5vh] text-center w-72">
      <div className="py-0.5 border-y-2 border-black"></div>
      <div className="text-center">
        <h3 className="mt-[2vh] text-lg font-black">오늘은 캐비어닭!</h3>
      </div>
      <div className="mt-[3vh] mx-0.5 w-76 px-2 flex justify-end items-center text-lg font-bold gap-6">
        {/* <Button
          href="/preference"
          type="again"
          text="오늘 이게 땡겨요ㅎ"
        ></Button> */}
      </div>
      <div>{/* <Button href="/random" type="isLike" text=""></Button> */}</div>
      <div className="mt-[2vh] py-0.5 border-y-2 border-black"></div>
    </main>
  );
};

export default page;
