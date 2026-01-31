'use client';

import { ToneStyle } from '@/types';
import { TONE_STYLES } from '@/lib/questions';

interface ToneSelectorProps {
    selectedTone: ToneStyle | null;
    onSelect: (tone: ToneStyle) => void;
}

export default function ToneSelector({
    selectedTone,
    onSelect,
}: ToneSelectorProps) {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold text-navy-900 mb-2">
                어떤 분위기로 작성할까요?
            </h2>
            <p className="text-gray-600 mb-8">
                스토리의 톤과 스타일을 선택해주세요.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TONE_STYLES.map((tone) => (
                    <button
                        key={tone.id}
                        onClick={() => onSelect(tone.id)}
                        className={`group relative p-6 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-lg ${selectedTone === tone.id
                                ? 'border-gold-500 bg-gold-50 shadow-md'
                                : 'border-gray-200 bg-white hover:border-gold-300'
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <span className="text-4xl">{tone.icon}</span>
                            <div className="flex-1">
                                <h3
                                    className={`font-semibold text-lg mb-1 ${selectedTone === tone.id ? 'text-navy-900' : 'text-gray-800'
                                        }`}
                                >
                                    {tone.name}
                                </h3>
                                <p className="text-sm text-gray-500 mb-3">{tone.description}</p>
                                <p className="text-xs text-gray-400 italic">
                                    {tone.example}
                                </p>
                            </div>
                        </div>

                        {selectedTone === tone.id && (
                            <div className="absolute top-3 right-3">
                                <svg
                                    className="w-6 h-6 text-gold-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
