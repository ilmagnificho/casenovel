'use client';

interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
    stepLabels: string[];
}

export default function StepIndicator({
    currentStep,
    totalSteps,
    stepLabels,
}: StepIndicatorProps) {
    return (
        <div className="w-full mb-8">
            <div className="flex items-center justify-between relative">
                {/* Background line */}
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10" />
                <div
                    className="absolute top-5 left-0 h-0.5 bg-gold-500 -z-10 transition-all duration-500"
                    style={{
                        width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
                    }}
                />

                {stepLabels.map((label, index) => {
                    const stepNumber = index + 1;
                    const isCompleted = stepNumber < currentStep;
                    const isCurrent = stepNumber === currentStep;

                    return (
                        <div key={index} className="flex flex-col items-center z-10">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${isCompleted
                                        ? 'bg-gold-500 text-white'
                                        : isCurrent
                                            ? 'bg-navy-800 text-white ring-4 ring-navy-100'
                                            : 'bg-gray-200 text-gray-500'
                                    }`}
                            >
                                {isCompleted ? (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    stepNumber
                                )}
                            </div>
                            <span
                                className={`mt-2 text-xs font-medium hidden md:block ${isCurrent ? 'text-navy-800' : 'text-gray-400'
                                    }`}
                            >
                                {label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
