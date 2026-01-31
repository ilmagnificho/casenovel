'use client';

import { useState } from 'react';

interface ResultDisplayProps {
    posts: string[];
    onRegenerate: () => void;
    onReset: () => void;
}

export default function ResultDisplay({
    posts,
    onRegenerate,
    onReset,
}: ResultDisplayProps) {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [copiedAll, setCopiedAll] = useState(false);

    const copyToClipboard = async (text: string, index?: number) => {
        try {
            await navigator.clipboard.writeText(text);
            if (typeof index === 'number') {
                setCopiedIndex(index);
                setTimeout(() => setCopiedIndex(null), 2000);
            } else {
                setCopiedAll(true);
                setTimeout(() => setCopiedAll(false), 2000);
            }
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const copyAllPosts = () => {
        const allText = posts
            .map((post, i) => `[${i + 1}/${posts.length}]\n${post}`)
            .join('\n\n---\n\n');
        copyToClipboard(allText);
    };

    const totalLength = posts.reduce((sum, post) => sum + post.length, 0);

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-navy-900 mb-1">
                        🎉 연재 콘텐츠가 완성되었습니다!
                    </h2>
                    <p className="text-gray-500">
                        총 {posts.length}개 포스트 · {totalLength.toLocaleString()}자
                    </p>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={copyAllPosts}
                        className={`px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2 ${copiedAll
                                ? 'bg-green-500 text-white'
                                : 'bg-navy-800 text-white hover:bg-navy-900'
                            }`}
                    >
                        {copiedAll ? (
                            <>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                복사됨!
                            </>
                        ) : (
                            <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                전체 복사
                            </>
                        )}
                    </button>
                    <button
                        onClick={onRegenerate}
                        className="px-5 py-2.5 rounded-lg font-medium bg-gold-500 text-white hover:bg-gold-600 transition-all flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        다시 생성
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-navy-800 text-white text-sm font-medium rounded-full">
                                    {index + 1}/{posts.length}
                                </span>
                                <span className="text-sm text-gray-500">
                                    {post.length}자
                                </span>
                            </div>
                            <button
                                onClick={() => copyToClipboard(post, index)}
                                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${copiedIndex === index
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {copiedIndex === index ? (
                                    <>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        복사됨
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                        복사
                                    </>
                                )}
                            </button>
                        </div>
                        <div className="p-5">
                            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                                {post}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
                <button
                    onClick={onReset}
                    className="px-6 py-3 rounded-lg font-medium text-gray-600 hover:text-navy-800 hover:bg-gray-100 transition-all flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    새로운 콘텐츠 만들기
                </button>
            </div>
        </div>
    );
}
