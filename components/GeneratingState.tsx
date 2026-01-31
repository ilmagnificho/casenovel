'use client';

export default function GeneratingState() {
    return (
        <div className="w-full flex flex-col items-center justify-center py-16">
            <div className="relative mb-8">
                {/* Outer ring animation */}
                <div className="absolute inset-0 rounded-full border-4 border-gold-200 animate-ping opacity-75"></div>

                {/* Inner spinning circle */}
                <div className="relative w-24 h-24 rounded-full border-4 border-navy-100 border-t-gold-500 animate-spin"></div>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl">✍️</span>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-navy-900 mb-3">
                스토리를 작성하고 있습니다
            </h2>
            <p className="text-gray-500 text-center max-w-md mb-6">
                AI가 입력하신 정보를 바탕으로<br />
                쓰레드용 연재 콘텐츠를 생성 중입니다.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>약 10~15초 소요 예상</span>
            </div>

            {/* Progress bar */}
            <div className="w-64 h-1.5 bg-gray-200 rounded-full mt-8 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full animate-pulse-width"></div>
            </div>
        </div>
    );
}
