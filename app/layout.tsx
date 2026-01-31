import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CaseNovel | 변호사를 위한 AI 쓰레드 소설 생성",
  description:
    "변호사의 실제 사건 경험을 바탕으로 쓰레드(Threads) SNS에 연재할 수 있는 짧은 소설 형식의 콘텐츠를 AI로 자동 생성해주는 서비스입니다.",
  keywords: ["변호사", "쓰레드", "소설", "AI", "콘텐츠", "마케팅", "법률"],
  authors: [{ name: "CaseNovel" }],
  openGraph: {
    title: "CaseNovel | 변호사를 위한 AI 쓰레드 소설 생성",
    description:
      "변호사의 실제 사건 경험을 바탕으로 쓰레드 SNS 연재용 소설을 AI로 자동 생성",
    type: "website",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen`}
      >
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-xl font-bold text-navy-800">
                  Case<span className="text-gold-500">Novel</span>
                </span>
              </div>
              <p className="hidden sm:block text-sm text-gray-500">
                변호사를 위한 AI 쓰레드 소설 생성
              </p>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-navy-900 text-white mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">📚</span>
                <span className="font-semibold">
                  Case<span className="text-gold-400">Novel</span>
                </span>
              </div>
              <p className="text-sm text-gray-400 text-center">
                © 2025 CaseNovel. AI 생성 콘텐츠입니다. 법적 조언이 아닙니다.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
