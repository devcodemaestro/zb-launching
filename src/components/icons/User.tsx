import React from "react";
interface UserProps {
  className?: string;
  stroke?: string;
}
// width="16"      height="19"
const User: React.FC<UserProps> = ({ className, stroke }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="4"
        cy="3.85184"
        rx="4"
        ry="3.85184"
        transform="matrix(-1 0 0 1 12.3091 1)"
        stroke={stroke ? stroke : "#424A53"}
        strokeWidth="1.76744"
      />
      <path
        d="M1 14.6728C1 13.7828 1.56505 12.9909 2.4067 12.7014V12.7014C6.03138 11.4549 9.96862 11.4549 13.5933 12.7014V12.7014C14.4349 12.9909 15 13.7828 15 14.6728V15.8546C15 16.989 13.9984 17.8622 12.8746 17.7077L11.5227 17.5217C9.18526 17.2001 6.81475 17.2001 4.47726 17.5217L3.12537 17.7077C2.0016 17.8622 1 16.989 1 15.8546V14.6728Z"
        stroke={stroke ? stroke : "#424A53"}
        strokeWidth="1.76744"
      />
    </svg>
  );
};

export default User;
