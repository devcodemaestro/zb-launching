"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import NotPreference from "@/components/NotPreference";
import Preference from "@/components/Preference";
import Random from "@/components/Random";
import { useState } from "react";

export default function Home() {
  // 현재 선택된 컴포넌트를 상태로 관리
  const [currentComponent, setCurrentComponent] = useState("Main");

  // 컴포넌트 선택 함수
  const renderComponent = () => {
    switch (currentComponent) {
      case "Preference":
        return <Preference />;
      case "NotPreference":
        return <NotPreference />;
      case "Random":
        return <Random />;
      default:
        return <Main setCurrentComponent={setCurrentComponent} />;
    }
  };

  return (
    <div className="break-keep px-6 min-h-screen font-[family-name:var(--font-pretendard)]">
      <Header />
      {renderComponent()}
      <Footer />
    </div>
  );
}
