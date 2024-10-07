import React from "react";
interface AngleProps {
  className?: string;
  stroke?: string;
}
// width="10"      height="18"
const LeftAngleBracket: React.FC<AngleProps> = ({ className, stroke }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.79163 16.5834L1.20829 9.00002L8.79163 1.41669"
        stroke={stroke ? stroke : "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LeftAngleBracket;
