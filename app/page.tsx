import StepWizard from "@/components/StepWizard";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy-50 to-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            변호사님의 사건이
            <br />
            <span className="text-gold-500">연재 소설</span>이 됩니다
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            실제 사건 경험을 바탕으로 쓰레드(Threads)용 연재 콘텐츠를
            <br className="hidden md:block" />
            AI가 자동으로 생성해드립니다.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <span>✅</span>
              <span>5~8개 포스트 자동 분할</span>
            </div>
            <div className="flex items-center gap-1">
              <span>✅</span>
              <span>개인정보 보호 각색</span>
            </div>
            <div className="flex items-center gap-1">
              <span>✅</span>
              <span>다양한 톤 & 스타일</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wizard Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StepWizard />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 text-center mb-8">
            왜 <span className="text-gold-500">CaseNovel</span>인가요?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-navy-800 mb-2">빠른 생성</h3>
              <p className="text-sm text-gray-500">
                몇 가지 질문에 답하면 10초 내에 연재용 콘텐츠가 완성됩니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-semibold text-navy-800 mb-2">개인정보 보호</h3>
              <p className="text-sm text-gray-500">
                AI가 실제 인물/장소를 특정할 수 없게 자동으로 각색합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-navy-800 mb-2">마케팅 최적화</h3>
              <p className="text-sm text-gray-500">
                쓰레드 글자 수 제한에 맞춘 연재형 콘텐츠로 팔로워 확보.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
