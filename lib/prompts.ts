import { CaseType, ToneStyle, ScenarioData } from '@/types';
import { CASE_TYPES, TONE_STYLES } from './questions';

export function getSystemPrompt(): string {
    return `당신은 한국의 법률 드라마 작가입니다. 변호사의 실제 사건 경험을 바탕으로 쓰레드(Threads) SNS에 연재할 수 있는 짧은 소설을 작성합니다.

## 규칙:
1. 실제 인물/장소가 특정되지 않도록 철저히 각색합니다.
2. 총 6~8개의 포스트로 구성된 연재물을 작성합니다.
3. 각 포스트는 한국어 기준 200~250자 이내로 작성합니다.
4. 첫 번째 포스트는 강력한 "훅"으로 시작해 독자의 관심을 끕니다.
5. 마지막 포스트는 여운 또는 교훈으로 마무리합니다.
6. 법률 전문 용어는 최소화하고, 일반인도 이해할 수 있게 작성합니다.
7. 감정선을 살려 독자의 공감을 유도합니다.
8. 각 포스트 사이에는 자연스러운 연결성을 유지합니다.
9. 마지막 포스트 말미에 다음 문구를 포함합니다: "※ AI로 사실 기반 사연을 각색해 생성한 콘텐츠입니다."

## 출력 형식:
각 포스트를 다음 형식으로 출력하세요:

[POST 1]
(첫 번째 포스트 내용)

[POST 2]
(두 번째 포스트 내용)

...계속...`;
}

export function buildUserPrompt(
    caseType: CaseType,
    scenario: ScenarioData,
    tone: ToneStyle
): string {
    const caseInfo = CASE_TYPES.find((c) => c.id === caseType);
    const toneInfo = TONE_STYLES.find((t) => t.id === tone);

    if (!caseInfo || !toneInfo) {
        throw new Error('Invalid case type or tone style');
    }

    // 시나리오 답변을 읽기 쉬운 형태로 변환
    const scenarioDescription = caseInfo.questions
        .map((q) => {
            const answer = scenario[q.id];
            if (!answer) return null;

            if (q.type === 'select' && q.options) {
                const selectedOption = q.options.find((o) => o.value === answer);
                return `- ${q.label}: ${selectedOption?.label || answer}`;
            }
            return `- ${q.label}: ${answer}`;
        })
        .filter(Boolean)
        .join('\n');

    return `## 사건 유형
${caseInfo.name} (${caseInfo.description})

## 시나리오 정보
${scenarioDescription}

## 요청 톤/스타일
${toneInfo.name}: ${toneInfo.description}
예시: ${toneInfo.example}

위 정보를 바탕으로 쓰레드 연재용 소설을 작성해주세요.`;
}

export function parseGeneratedPosts(content: string): string[] {
    // [POST N] 패턴으로 분리
    const postPattern = /\[POST\s*\d+\]\s*/gi;
    const parts = content.split(postPattern).filter((part) => part.trim());

    // 각 포스트 정리
    return parts.map((post) => post.trim()).filter((post) => post.length > 0);
}
