import type { Metadata, Viewport } from "next";
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

const siteUrl = "https://casenovel.vercel.app";

export const metadata: Metadata = {
  // 기본 메타데이터
  title: {
    default: "CaseNovel | 변호사를 위한 AI 쓰레드 소설 생성",
    template: "%s | CaseNovel",
  },
  description:
    "변호사의 실제 사건 경험을 바탕으로 쓰레드(Threads) SNS에 연재할 수 있는 짧은 소설 형식의 콘텐츠를 AI로 자동 생성해주는 서비스입니다. 이혼, 상속, 형사, 교통사고 등 다양한 사건 유형 지원.",
  keywords: [
    "변호사",
    "쓰레드",
    "Threads",
    "소설",
    "AI",
    "콘텐츠",
    "마케팅",
    "법률",
    "이혼 변호사",
    "상속 변호사",
    "법률 마케팅",
    "SNS 마케팅",
    "법률 콘텐츠",
  ],
  authors: [{ name: "CaseNovel" }],
  creator: "CaseNovel",
  publisher: "CaseNovel",

  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "CaseNovel",
    title: "CaseNovel | 변호사를 위한 AI 쓰레드 소설 생성",
    description:
      "변호사의 실제 사건 경험을 바탕으로 쓰레드 SNS 연재용 소설을 AI로 자동 생성. 이혼, 상속, 형사 등 6가지 사건 유형 지원.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CaseNovel - 변호사를 위한 AI 쓰레드 소설 생성 서비스",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "CaseNovel | 변호사를 위한 AI 쓰레드 소설 생성",
    description:
      "변호사의 실제 사건 경험을 쓰레드 SNS 연재용 소설로 자동 생성",
    images: ["/og-image.png"],
  },

  // 로봇 설정
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 기타
  category: "Legal Technology",
  classification: "Business",
};

// Viewport 설정 (GEO 및 모바일 최적화)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a365d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 추가 메타 태그 */}
        <meta name="geo.region" content="KR" />
        <meta name="geo.placename" content="South Korea" />
        <meta name="language" content="Korean" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/icon.png" />

        {/* JSON-LD 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "CaseNovel",
              description:
                "변호사의 실제 사건 경험을 바탕으로 쓰레드 SNS 연재용 소설을 AI로 자동 생성하는 서비스",
              url: siteUrl,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "KRW",
              },
              author: {
                "@type": "Organization",
                name: "CaseNovel",
              },
              inLanguage: "ko-KR",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen`}
      >
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-xl font-bold text-navy-800">
                  Case<span className="text-gold-500">Novel</span>
                </span>
              </a>
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
