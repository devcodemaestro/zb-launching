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
    | "select"; // 선택적 타입 정의
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  type = "primary",
  textColor = "default",
}) => {
  // 버튼 스타일 및 p 태그 스타일 통합 관리
  const styles = {
    primary: {
      button:
        "h-48 px-6 flex items-center justify-center rounded-xl border-2 border-black border-dashed bg-white hover:bg-gray-200 hover:border-gray-600 active:bg-gray-700 transition duration-300 ease-in-out",
      text: "",
    },
    secondary: {
      button:
        "w-32 h-12 px-4 flex items-center justify-center rounded-xl border-2 border-black bg-white hover:bg-gray-200 hover:border-gray-600 active:bg-gray-700 transition duration-300 ease-in-out",
      text: "",
    },
    random: {
      button:
        "w-64 h-24 mt-6 mx-auto flex items-center justify-center rounded-xl border-2 border-black border-dashed bg-white hover:bg-gray-300 hover:border-gray-600 active:bg-gray-700 transition duration-300 ease-in-out",
      text: "text-2xl font-bold",
    },
    select: {
      button:
        "w-72 h-12 px-4 flex items-center justify-center rounded-xl border-2 border-black bg-white hover:bg-gray-300 hover:border-gray-600 active:bg-gray-700 transition duration-300 ease-in-out",
      text: "",
    },
    action: {
      button:
        "w-72 h-12 px-4 flex items-center justify-center rounded-xl border-2 border-black bg-black hover:bg-gray-800 hover:border-gray-500 active:bg-gray-900 transition duration-300 ease-in-out",
      text: "text-white",
    },
    detailSelect: {
      button:
        "w-64 h-12 mt-6 mx-auto flex items-center justify-center rounded-xl border-2 border-black border-dashed bg-white hover:bg-gray-300 hover:border-gray-600 active:bg-gray-700 transition duration-300 ease-in-out",
      text: "",
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
      </div>
    </Link>
  );
};

export default Button;
