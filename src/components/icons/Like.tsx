import React from "react";
interface LikeProps {
  className?: string;
  fill?: string;
}
// width="18"height="16"

const Like: React.FC<LikeProps> = ({ className, fill }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.09 0.332818L4.935 4.48782C4.6575 4.76532 4.5 5.14782 4.5 5.54532V13.0378C4.5 13.8628 5.175 14.5378 6 14.5378H12.75C13.35 14.5378 13.89 14.1778 14.13 13.6303L16.575 7.92282C17.205 6.43782 16.1175 4.78782 14.505 4.78782H10.2675L10.98 1.35282C11.055 0.977818 10.9425 0.595318 10.6725 0.325318C10.23 -0.109681 9.525 -0.109681 9.09 0.332818ZM1.5 14.5378C2.325 14.5378 3 13.8628 3 13.0378V7.03782C3 6.21282 2.325 5.53782 1.5 5.53782C0.675 5.53782 0 6.21282 0 7.03782V13.0378C0 13.8628 0.675 14.5378 1.5 14.5378Z"
        fill={fill ? fill : "#797979"}
      />
    </svg>
  );
};

export default Like;
