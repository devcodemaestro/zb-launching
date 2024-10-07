import React from "react";
interface CancelProps {
  className?: string;
}
// width="15" height="15"
const Cancel: React.FC<CancelProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L14 14"
        stroke="#939393"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 14L14 1"
        stroke="#939393"
        stroke-width="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cancel;
