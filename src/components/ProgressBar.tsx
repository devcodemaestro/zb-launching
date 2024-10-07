import React from "react";
import BI from "./icons/BI";

interface ProgressBarProps {
  progress: 0 | 50 | 100;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="mt-4 w-84 h-8 relative flex justify-start items-center">
      <BI className="-scale-x-100 w-8 h-6 z-10" />
      <div className="w-72 h-1 leading-4 items-center bg-disabled z-0"></div>
      <div
        className={`absolute h-1 bg-primary z-0 transition-all duration-300`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
