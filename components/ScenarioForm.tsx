'use client';

import { CaseType, ScenarioData } from '@/types';
import { CASE_TYPES } from '@/lib/questions';

interface ScenarioFormProps {
    caseType: CaseType;
    scenario: ScenarioData;
    onChange: (scenario: ScenarioData) => void;
}

export default function ScenarioForm({
    caseType,
    scenario,
    onChange,
}: ScenarioFormProps) {
    const caseInfo = CASE_TYPES.find((c) => c.id === caseType);

    if (!caseInfo) {
        return <div>사건 유형을 먼저 선택해주세요.</div>;
    }

    const handleChange = (questionId: string, value: string) => {
        onChange({
            ...scenario,
            [questionId]: value,
        });
    };

    return (
        <div className="w-full">
            <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{caseInfo.icon}</span>
                <h2 className="text-2xl font-bold text-navy-900">
                    {caseInfo.name} 상세 정보
                </h2>
            </div>
            <p className="text-gray-600 mb-8">
                더 생생한 스토리를 위해 몇 가지 질문에 답해주세요.
            </p>

            <div className="space-y-6">
                {caseInfo.questions.map((question, index) => (
                    <div key={question.id} className="bg-white rounded-xl p-6 border border-gray-200">
                        <label className="block mb-3">
                            <span className="text-navy-800 font-medium">
                                {index + 1}. {question.label}
                            </span>
                        </label>

                        {question.type === 'select' && question.options && (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {question.options.map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => handleChange(question.id, option.value)}
                                        className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${scenario[question.id] === option.value
                                                ? 'border-gold-500 bg-gold-50 text-navy-900'
                                                : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gold-300'
                                            }`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        )}

                        {question.type === 'text' && (
                            <textarea
                                value={scenario[question.id] || ''}
                                onChange={(e) => handleChange(question.id, e.target.value)}
                                placeholder={question.placeholder}
                                rows={3}
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all resize-none text-gray-800 placeholder:text-gray-400"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
