import React from "react";
interface SelectProps {
  fill?: string;
  className?: string;
}
// width="24"      height="24"
const Select: React.FC<SelectProps> = ({ className, fill }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill={fill ? fill : "#FF8107"} />
      <path
        d="M7.19995 12.0002L10.8 15.6002L17.2 9.2002"
        stroke="white"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Select;
