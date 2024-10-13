import React from "react";
import BI from "./icons/BI";

interface ProgressBarProps {
  progress: 0 | 50 | 100;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="mt-4 w-84 h-8 relative flex justify-start items-center">
      {/* BI 아이콘의 위치 설정 */}
      <div
        className={`absolute z-10 transform transition-all duration-300 ${
          progress === 0
            ? "left-0 transform translate-x-0" // 0%에서 아이콘이 막대 시작점에 위치
            : progress === 50
            ? "left-2/4 transform -translate-x-1/2" // 50%에서 중앙
            : "right-0 transform translate-x-1/2" // 100%에서 막대 끝에 위치
        }`}
      >
        <BI className="-scale-x-100 w-8 h-6 z-10" />
      </div>

      {/* 배경 바 */}
      <div className="absolute w-84 h-1 leading-4 items-center bg-disabled z-0"></div>

      {/* 진행 바 */}
      <div
        className="absolute h-1 bg-primary z-0 transition-all duration-300"
        style={{ width: `${progress}%` }} // 진행률에 따라 너비 설정
      ></div>
    </div>
  );
};

export default ProgressBar;
