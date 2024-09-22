import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";

const pretendard = localFont({
  src: "/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "점메추",
  description: "점심 메뉴를 추천해드려요~!",

  // Open Graph 설정
  openGraph: {
    type: "website",
    title: "점메추 - 점심 메뉴 추천",
    description: "모바일 환경에 최적화된 점심 메뉴 추천 웹사이트입니다.",
    url: "https://www.yourwebsite.com",
    images: [
      {
        url: "https://www.yourwebsite.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "점심 메뉴 추천 이미지",
      },
    ],
  },

  // Twitter Cards 설정
  // twitter: 트위터 카드를 위한 메타 정보를 설정.
  // twitter: {
  //   card: "summary_large_image",
  //   title: "점메추 - 점심 메뉴 추천",
  //   description: "모바일 환경에 최적화된 점심 메뉴 추천 웹사이트입니다.",
  //   images: ["https://www.yourwebsite.com/twitter-image.jpg"],
  // },

  // SEO 설정
  keywords: ["점심", "메뉴 추천", "음식 추천", "점심 추천"],
  robots: {
    index: true,
    follow: true,
  },
  //모바일 브라우저에서 상태바의 색상을 설정할 수 있음.
  // themeColor: "#ffffff",
  // icons: {
  //   icon: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} antialiased max-w-[390px] h-screen mx-auto overflow-hidden box-border`}
      >
        {children}
      </body>
    </html>
  );
}
