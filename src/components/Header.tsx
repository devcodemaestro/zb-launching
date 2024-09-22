import React from "react";

const Header = () => {
  return (
    <header className="mx-auto mt-20 text-center w-72">
      <div className="mx-auto w-48">
        <h1 className="text-4xl font-black">JumMeChu</h1>
      </div>
      <div className="mx-auto pt-1 w-20">
        <h2 className="text-xs font-bold">Lunch Menu Recommendation</h2>
      </div>
      <div className="flex justify-between items-center mt-6 pt-3 border-t-2 border-black">
        <div>
          <h3 className="text-sm font-bold">STAGE 1</h3>
          <p className="text-xs font-medium text-start">Question</p>
        </div>
        <div>
          <h3 className="text-sm font-bold">NUMBER</h3>
          <p className="text-xs font-medium text-end">1</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
