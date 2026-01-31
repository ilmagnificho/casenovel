import { NextRequest, NextResponse } from 'next/server';
import { getOpenAIClient } from '@/lib/openai';
import { getSystemPrompt, buildUserPrompt, parseGeneratedPosts } from '@/lib/prompts';
import { GenerateRequest, GenerateResponse } from '@/types';

export async function POST(request: NextRequest) {
    try {
        const body: GenerateRequest = await request.json();
        const { caseType, scenario, tone } = body;

        if (!caseType || !scenario || !tone) {
            return NextResponse.json(
                { error: '필수 입력값이 누락되었습니다.' },
                { status: 400 }
            );
        }

        const systemPrompt = getSystemPrompt();
        const userPrompt = buildUserPrompt(caseType, scenario, tone);

        const openai = getOpenAIClient();
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt },
            ],
            temperature: 0.8,
            max_tokens: 3000,
        });

        const generatedContent = completion.choices[0]?.message?.content;

        if (!generatedContent) {
            return NextResponse.json(
                { error: 'AI 응답을 생성하지 못했습니다.' },
                { status: 500 }
            );
        }

        const posts = parseGeneratedPosts(generatedContent);
        const totalLength = posts.reduce((sum, post) => sum + post.length, 0);

        const response: GenerateResponse = {
            posts,
            totalLength,
        };

        return NextResponse.json(response);
    } catch (error) {
        console.error('Generate API Error:', error);

        if (error instanceof Error && error.message.includes('API key')) {
            return NextResponse.json(
                { error: 'OpenAI API 키가 설정되지 않았습니다. .env.local 파일을 확인해주세요.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: '콘텐츠 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
            { status: 500 }
        );
    }
}
