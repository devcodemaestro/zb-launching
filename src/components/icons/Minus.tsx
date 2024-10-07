import React from "react";

interface MinusProps {
  className?: string;
}
// width="25"      height="24"
const Minus: React.FC<MinusProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.25" cy="12" r="12" fill="#FF8107" />
      <line
        x1="7.25"
        y1="11.8571"
        x2="17.25"
        y2="11.8571"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Minus;
