'use client';

import { useState } from 'react';
import { CaseType, ToneStyle, ScenarioData, GenerateResponse } from '@/types';
import StepIndicator from './StepIndicator';
import CaseTypeSelector from './CaseTypeSelector';
import ScenarioForm from './ScenarioForm';
import ToneSelector from './ToneSelector';
import GeneratingState from './GeneratingState';
import ResultDisplay from './ResultDisplay';

const STEP_LABELS = ['사건 유형', '상세 정보', '톤 선택', '생성 중', '결과'];

export default function StepWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [caseType, setCaseType] = useState<CaseType | null>(null);
    const [scenario, setScenario] = useState<ScenarioData>({});
    const [tone, setTone] = useState<ToneStyle | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [result, setResult] = useState<GenerateResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep((prev) => prev + 1);
        } else if (currentStep === 3) {
            handleGenerate();
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const handleGenerate = async () => {
        if (!caseType || !tone) return;

        setIsGenerating(true);
        setCurrentStep(4);
        setError(null);

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    caseType,
                    scenario,
                    tone,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || '콘텐츠 생성에 실패했습니다.');
            }

            setResult(data);
            setCurrentStep(5);
        } catch (err) {
            setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
            setCurrentStep(3);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleRegenerate = () => {
        handleGenerate();
    };

    const handleReset = () => {
        setCurrentStep(1);
        setCaseType(null);
        setScenario({});
        setTone(null);
        setResult(null);
        setError(null);
    };

    const canProceed = () => {
        switch (currentStep) {
            case 1:
                return caseType !== null;
            case 2:
                return Object.keys(scenario).length >= 3;
            case 3:
                return tone !== null;
            default:
                return false;
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Step Indicator - hide on result */}
            {currentStep < 5 && (
                <StepIndicator
                    currentStep={currentStep}
                    totalSteps={5}
                    stepLabels={STEP_LABELS}
                />
            )}

            {/* Error Message */}
            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span>{error}</span>
                    </div>
                </div>
            )}

            {/* Step Content */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-10">
                {currentStep === 1 && (
                    <CaseTypeSelector
                        selectedType={caseType}
                        onSelect={(type) => {
                            setCaseType(type);
                            setScenario({});
                        }}
                    />
                )}

                {currentStep === 2 && caseType && (
                    <ScenarioForm
                        caseType={caseType}
                        scenario={scenario}
                        onChange={setScenario}
                    />
                )}

                {currentStep === 3 && (
                    <ToneSelector selectedTone={tone} onSelect={setTone} />
                )}

                {currentStep === 4 && isGenerating && <GeneratingState />}

                {currentStep === 5 && result && (
                    <ResultDisplay
                        posts={result.posts}
                        onRegenerate={handleRegenerate}
                        onReset={handleReset}
                    />
                )}
            </div>

            {/* Navigation Buttons */}
            {currentStep < 4 && (
                <div className="flex justify-between mt-8">
                    <button
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${currentStep === 1
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-600 hover:text-navy-800 hover:bg-gray-100'
                            }`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        이전
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={!canProceed()}
                        className={`px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${canProceed()
                                ? 'bg-navy-800 text-white hover:bg-navy-900 shadow-lg hover:shadow-xl'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        {currentStep === 3 ? (
                            <>
                                ✨ 생성하기
                            </>
                        ) : (
                            <>
                                다음
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
