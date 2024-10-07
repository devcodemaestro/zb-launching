import React from "react";
interface PlusProps {
  className?: string;
}
// width="25"      height="24"
const Plus: React.FC<PlusProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.125" cy="12" r="12" fill="#FF8107" />
      <line
        x1="7.125"
        y1="11.8571"
        x2="17.125"
        y2="11.8571"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="11.9824"
        y1="17"
        x2="11.9824"
        y2="7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Plus;
