import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";

const paperlogy = localFont({
  src: [
    { path: "/fonts/Paperlogy-1Thin.ttf", weight: "100" },
    { path: "/fonts/Paperlogy-2ExtraLight.ttf", weight: "200" },
    { path: "/fonts/Paperlogy-3Light.ttf", weight: "300" },
    { path: "/fonts/Paperlogy-4Regular.ttf", weight: "400" },
    { path: "/fonts/Paperlogy-5Medium.ttf", weight: "500" },
    { path: "/fonts/Paperlogy-6SemiBold.ttf", weight: "600" },
    { path: "/fonts/Paperlogy-7Bold.ttf", weight: "700" },
    { path: "/fonts/Paperlogy-8ExtraBold.ttf", weight: "800" },
    { path: "/fonts/Paperlogy-9Black.ttf", weight: "900" },
  ],
  display: "swap",
  variable: "--font-paperlogy",
});

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
  // themeColor: "#ff8107",
};

export const metadata: Metadata = {
  title: "점메추",
  description: "점심 메뉴를 추천해드려요! 근데 이제 ai를 곁들인",

  // 아이콘 경로 수정
  icons: {
    icon: [
      {
        url: "/icons/favicon-16x16.png",
        type: "image/png",
      },
      {
        url: "/icons/favicon-32x32.png",
        type: "image/png",
      },
      {
        url: "/icons/favicon-96x96.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icons/apple-icon-57x57.png",
      },
      {
        url: "/icons/apple-icon-60x60.png",
      },
      {
        url: "/icons/apple-icon-72x72.png",
      },
      {
        url: "/icons/apple-icon-76x76.png",
      },
      {
        url: "/icons/apple-icon-114x114.png",
      },
      {
        url: "/icons/apple-icon-120x120.png",
      },
      {
        url: "/icons/apple-icon-144x144.png",
      },
      {
        url: "/icons/apple-icon-152x152.png",
      },
      {
        url: "/icons/apple-icon-180x180.png",
      },
    ],
  },
  manifest: "/manifest.json",
  // other: [
  //   { name: "msapplication-TileColor", content: "/icons/ms-icon-70x70.png" },
  //   { name: "msapplication-TileImage", content: "/icons/ms-icon-144x144.png" },
  //   { name: "msapplication-TileImage", content: "/icons/ms-icon-150x150.png" },
  //   { name: "msapplication-TileImage", content: "/icons/ms-icon-310x310.png" },
  // ],

  // Open Graph 설정
  openGraph: {
    type: "website",
    title: "점메추 - 점심 메뉴 추천",
    description: "점심 메뉴를 추천해드려요! 근데 이제 ai를 곁들인",
    url: "https://zb-launching.vercel.app/",
    images: [
      {
        url: "https://zb-launching.vercel.app/",
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
  // themeColor: "#ff8107",
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
        className={`${paperlogy.variable} ${pretendard.variable} antialiased max-w-[375px] w-full max-h-[812px] h-screen mx-auto overflow-hidden box-border break-keep min-h-[100vh] font-[family-name:var(--font-paperlogy)]`}
      >
        {/* <Splash /> */}

        {children}
      </body>
    </html>
  );
}
