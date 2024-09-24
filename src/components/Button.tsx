import Link from "next/link";
import React from "react";

// Button props에 대한 타입 정의
interface ButtonProps {
  href: string; // href에 명시적으로 string 타입을 지정
  text: string;
  type?:
    | "primary"
    | "secondary"
    | "action"
    | "detailSelect"
    | "random"
    | "again"
    | "isLike"
    | "select"; // 선택적 타입 정의
  subText?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  subText,
  type = "primary",
  textColor = "default",
}) => {
  // 버튼 스타일 및 p 태그 스타일 통합 관리
  const styles = {
    primary: {
      button:
        "h-48 px-4 flex items-center justify-center rounded-xl border-2 border-black border-dashed bg-white hover:bg-gray-200 hover:border-gray-600 active:bg-gray-700 transition duration-300 ease-in-out",
      text: "",
      subText: "",
    },
    secondary: {
      button:
        "w-32 h-12 px-4 flex items-center justify-center rounded-xl border-2 border-black bg-white hover:bg-gray-200 hover:border-gray-600 active:bg-gray-700 transition duration-300 ease-in-out",
      text: "",
      subText: "",
    },
    random: {
      button:
        "mx-2 h-24 mt-[3vh] mx-auto flex items-center justify-center rounded-xl border-2 border-black border-dashed bg-white hover:bg-gray-300 hover:border-gray-600 active:bg-gray-700 transition duration-300 ease-in-out",
      text: "text-2xl font-bold",
      subText: "",
    },
    detailSelect: {
      button:
        "mb-3 w-72 h-12 px-4 flex items-center border-dashed rounded-xl border-2 border-black bg-white hover:bg-gray-300 hover:border-gray-600 active:bg-gray-700 transition duration-300 ease-in-out",
      text: "ml-4",
      subText: "",
    },
    action: {
      button:
        "w-72 h-12 flex items-center justify-center rounded-xl border-2 border-black bg-black hover:bg-gray-800 hover:border-gray-500 active:bg-gray-900 transition duration-300 ease-in-out",
      text: "text-white",
      subText: "",
    },
    select: {
      button:
        "w-22 h-36 py-3 mx-auto flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-black border-dashed bg-white hover:bg-gray-300 hover:border-gray-600 active:bg-gray-700 transition duration-300 ease-in-out",
      text: "",
      subText: "text-sm text-gray-400",
    },
    again: {
      button:
        "w-69 p-3 flex items-center justify-center rounded-full border-black bg-[#D9D9D9] hover:bg-[#bfbfbf] active:bg-[#a6a6a6] transition duration-300 ease-in-out",
      text: "text-sm",
      subText: "",
    },
    isLike: {
      button:
        "w-28 p-3 flex items-center justify-center rounded-full border-black bg-[#D9D9D9] hover:bg-[#bfbfbf] active:bg-[#a6a6a6] transition duration-300 ease-in-out",
      text: "text-sm",
      subText: "",
    },
  };

  // 버튼 스타일 선택
  const getButtonStyle = styles[type] || styles.primary;

  // 텍스트 색상 추가
  const getTextStyle = `${getButtonStyle.text} ${
    textColor === "white" ? "text-white" : ""
  }`;

  return (
    <Link href={href}>
      <div className={getButtonStyle.button}>
        <p className={getTextStyle}>{text}</p>

        {type === "select" ? (
          <div className="w-12 h-16 flex items-center">
            <p className={getButtonStyle.subText}>{subText}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
};

export default Button;
