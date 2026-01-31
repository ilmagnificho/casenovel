'use client';

import { CaseType } from '@/types';
import { CASE_TYPES } from '@/lib/questions';

interface CaseTypeSelectorProps {
    selectedType: CaseType | null;
    onSelect: (type: CaseType) => void;
}

export default function CaseTypeSelector({
    selectedType,
    onSelect,
}: CaseTypeSelectorProps) {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold text-navy-900 mb-2">
                어떤 유형의 사건인가요?
            </h2>
            <p className="text-gray-600 mb-8">
                전문 분야를 선택하시면 맞춤 질문이 제공됩니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {CASE_TYPES.map((caseType) => (
                    <button
                        key={caseType.id}
                        onClick={() => onSelect(caseType.id)}
                        className={`group relative p-6 rounded-xl border-2 transition-all duration-200 text-left hover:shadow-lg ${selectedType === caseType.id
                                ? 'border-gold-500 bg-gold-50 shadow-md'
                                : 'border-gray-200 bg-white hover:border-gold-300'
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <span className="text-4xl">{caseType.icon}</span>
                            <div>
                                <h3
                                    className={`font-semibold text-lg mb-1 ${selectedType === caseType.id
                                            ? 'text-navy-900'
                                            : 'text-gray-800'
                                        }`}
                                >
                                    {caseType.name}
                                </h3>
                                <p className="text-sm text-gray-500">{caseType.description}</p>
                            </div>
                        </div>

                        {selectedType === caseType.id && (
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
