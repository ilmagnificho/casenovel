import { CaseTypeInfo, ToneStyleInfo } from '@/types';

export const CASE_TYPES: CaseTypeInfo[] = [
    {
        id: 'divorce',
        name: '이혼/가사',
        icon: '💔',
        description: '이혼, 양육권, 재산분할 관련 사건',
        questions: [
            {
                id: 'duration',
                label: '결혼 기간은?',
                type: 'select',
                options: [
                    { value: 'under5', label: '5년 미만' },
                    { value: '5to10', label: '5-10년' },
                    { value: 'over10', label: '10년 이상' },
                ],
            },
            {
                id: 'reason',
                label: '이혼 사유는?',
                type: 'select',
                options: [
                    { value: 'infidelity', label: '외도' },
                    { value: 'financial', label: '경제적 문제' },
                    { value: 'personality', label: '성격 차이' },
                    { value: 'violence', label: '가정폭력' },
                    { value: 'other', label: '기타' },
                ],
            },
            {
                id: 'children',
                label: '자녀가 있나요?',
                type: 'select',
                options: [
                    { value: 'none', label: '없음' },
                    { value: 'preschool', label: '미취학' },
                    { value: 'elementary', label: '초등학생' },
                    { value: 'middle-high', label: '중고등학생' },
                    { value: 'adult', label: '성인' },
                ],
            },
            {
                id: 'dramaticMoment',
                label: '가장 드라마틱했던 순간을 간단히 설명해주세요',
                type: 'text',
                placeholder: '예: 법정에서 상대방이 갑자기 눈물을 흘렸다...',
            },
        ],
    },
    {
        id: 'inheritance',
        name: '상속/유언',
        icon: '📜',
        description: '상속 분쟁, 유언장 관련 사건',
        questions: [
            {
                id: 'relationship',
                label: '분쟁 당사자 간의 관계는?',
                type: 'select',
                options: [
                    { value: 'spouse-children', label: '배우자와 자녀들' },
                    { value: 'siblings', label: '형제자매 간' },
                    { value: 'extended', label: '친척 포함 분쟁' },
                ],
            },
            {
                id: 'disputeCause',
                label: '분쟁의 주요 원인은?',
                type: 'select',
                options: [
                    { value: 'will', label: '유언장 내용' },
                    { value: 'distribution', label: '재산 분배 비율' },
                    { value: 'care', label: '생전 부양 문제' },
                    { value: 'hidden', label: '숨겨진 재산' },
                ],
            },
            {
                id: 'asset',
                label: '주요 쟁점 자산은?',
                type: 'select',
                options: [
                    { value: 'realestate', label: '부동산' },
                    { value: 'cash', label: '현금/예금' },
                    { value: 'business', label: '사업체/회사 지분' },
                    { value: 'mixed', label: '복합적' },
                ],
            },
            {
                id: 'dramaticMoment',
                label: '특별한 에피소드가 있었다면?',
                type: 'text',
                placeholder: '예: 숨겨진 유언장이 발견되었다...',
            },
        ],
    },
    {
        id: 'criminal',
        name: '형사',
        icon: '⚖️',
        description: '형사 사건 변호 경험',
        questions: [
            {
                id: 'crimeType',
                label: '사건 유형은?',
                type: 'select',
                options: [
                    { value: 'fraud', label: '사기' },
                    { value: 'assault', label: '폭행/상해' },
                    { value: 'theft', label: '절도/횡령' },
                    { value: 'dui', label: '음주운전' },
                    { value: 'other', label: '기타' },
                ],
            },
            {
                id: 'role',
                label: '변호한 입장은?',
                type: 'select',
                options: [
                    { value: 'defendant', label: '피고인 측' },
                    { value: 'victim', label: '피해자 측' },
                ],
            },
            {
                id: 'result',
                label: '사건 결과는?',
                type: 'select',
                options: [
                    { value: 'acquittal', label: '무죄/불기소' },
                    { value: 'reduced', label: '감형 성공' },
                    { value: 'compensation', label: '피해자 보상 성공' },
                    { value: 'settlement', label: '합의 성립' },
                ],
            },
            {
                id: 'dramaticMoment',
                label: '반전이 있었던 순간은?',
                type: 'text',
                placeholder: '예: 결정적 증거가 법정에서 공개되었다...',
            },
        ],
    },
    {
        id: 'traffic',
        name: '교통사고',
        icon: '🚗',
        description: '교통사고 손해배상, 형사 사건',
        questions: [
            {
                id: 'accidentType',
                label: '사고 유형은?',
                type: 'select',
                options: [
                    { value: 'pedestrian', label: '보행자 사고' },
                    { value: 'vehicle', label: '차량 간 사고' },
                    { value: 'hitandrun', label: '뺑소니' },
                    { value: 'fatal', label: '사망 사고' },
                ],
            },
            {
                id: 'clientRole',
                label: '의뢰인의 입장은?',
                type: 'select',
                options: [
                    { value: 'victim', label: '피해자' },
                    { value: 'perpetrator', label: '가해자' },
                ],
            },
            {
                id: 'issue',
                label: '주요 쟁점은?',
                type: 'select',
                options: [
                    { value: 'fault', label: '과실 비율' },
                    { value: 'compensation', label: '손해배상 금액' },
                    { value: 'insurance', label: '보험사 분쟁' },
                    { value: 'criminal', label: '형사 처벌' },
                ],
            },
            {
                id: 'dramaticMoment',
                label: '인상적인 순간은?',
                type: 'text',
                placeholder: '예: CCTV 영상이 반전의 증거가 되었다...',
            },
        ],
    },
    {
        id: 'realestate',
        name: '부동산',
        icon: '🏠',
        description: '부동산 거래, 임대차 분쟁',
        questions: [
            {
                id: 'disputeType',
                label: '분쟁 유형은?',
                type: 'select',
                options: [
                    { value: 'contract', label: '매매 계약 분쟁' },
                    { value: 'lease', label: '임대차 보증금' },
                    { value: 'defect', label: '하자 문제' },
                    { value: 'eviction', label: '명도/퇴거' },
                ],
            },
            {
                id: 'amount',
                label: '분쟁 금액 규모는?',
                type: 'select',
                options: [
                    { value: 'under1', label: '1억 미만' },
                    { value: '1to5', label: '1-5억' },
                    { value: 'over5', label: '5억 이상' },
                ],
            },
            {
                id: 'opponent',
                label: '상대방은?',
                type: 'select',
                options: [
                    { value: 'individual', label: '개인' },
                    { value: 'lessor', label: '임대인/임차인' },
                    { value: 'developer', label: '시행사/건설사' },
                    { value: 'agent', label: '중개업자' },
                ],
            },
            {
                id: 'dramaticMoment',
                label: '기억에 남는 장면은?',
                type: 'text',
                placeholder: '예: 현장 검증에서 결정적 발견을 했다...',
            },
        ],
    },
    {
        id: 'civil',
        name: '민사소송',
        icon: '📋',
        description: '일반 민사 분쟁, 채권추심 등',
        questions: [
            {
                id: 'civilType',
                label: '소송 유형은?',
                type: 'select',
                options: [
                    { value: 'debt', label: '채권 추심' },
                    { value: 'damage', label: '손해배상' },
                    { value: 'contract', label: '계약 분쟁' },
                    { value: 'defamation', label: '명예훼손' },
                ],
            },
            {
                id: 'position',
                label: '의뢰인 입장은?',
                type: 'select',
                options: [
                    { value: 'plaintiff', label: '원고 (청구하는 측)' },
                    { value: 'defendant', label: '피고 (방어하는 측)' },
                ],
            },
            {
                id: 'outcome',
                label: '결과는?',
                type: 'select',
                options: [
                    { value: 'win', label: '승소' },
                    { value: 'partial', label: '일부 승소' },
                    { value: 'settlement', label: '조정/합의' },
                    { value: 'ongoing', label: '현재 진행 중' },
                ],
            },
            {
                id: 'dramaticMoment',
                label: '결정적인 순간이 있었다면?',
                type: 'text',
                placeholder: '예: 증인이 법정에서 진술을 번복했다...',
            },
        ],
    },
];

export const TONE_STYLES: ToneStyleInfo[] = [
    {
        id: 'dramatic',
        name: '드라마틱/감성적',
        icon: '🎭',
        description: '눈물 나는 스토리, 감정선에 집중',
        example: '"그날 법정을 나서며 의뢰인의 눈에서 눈물이 흘렀다..."',
    },
    {
        id: 'cathartic',
        name: '통쾌한/사이다',
        icon: '⚡',
        description: '정의 구현, 시원한 반전',
        example: '"상대방 변호사의 얼굴이 하얗게 질렸다..."',
    },
    {
        id: 'informative',
        name: '정보 전달형',
        icon: '📚',
        description: '교훈적, 법률 지식 전달',
        example: '"많은 분들이 놓치시는 포인트가 있습니다..."',
    },
    {
        id: 'dark-comedy',
        name: '블랙코미디',
        icon: '😏',
        description: '웃픈 이야기, 아이러니',
        example: '"변호사로 10년, 이런 건 처음이었다..."',
    },
];
