export const profile = {
  name: '권오현',
  nameEn: 'Kwon OhHyun',
  title: 'SW 개발자 · AI / 백엔드',
  headline: '납품 2건을 완료한 AI·백엔드 개발자 — LLM 시스템 설계부터 실시간 파이프라인까지 직접 구축',
  email: 'ohhyun1231@gmail.com',
  phone: '010-8395-5565',
  github: 'https://github.com/dhgus1231',
  bio: '납품 경험을 보유한 SW 개발자 권오현입니다. KT AIVLE 9기 과정에서 AI 개발 역량을 심화하며, LLM 파인튜닝부터 실시간 데이터 파이프라인까지 직접 구축하고 운영한 경험을 갖추고 있습니다. 본 포트폴리오는 AI 시스템 설계, 백엔드 개발, 알고리즘 최적화 능력을 실제 납품 프로젝트와 수치 기반 성과로 제시합니다.',

  strengths: [
    { keyword: '리더십', desc: '3개 프로젝트에서 팀장·조장으로 팀 방향 조율 및 R&R 정립' },
    { keyword: '설계 능력', desc: '납품 프로젝트 전체 아키텍처를 직접 설계하고 구현' },
    { keyword: '커뮤니케이션', desc: '고객사 기술 협의 주도 및 요구사항 기술 스펙 전환' },
  ],

  skills: [
    { category: 'Language', desc: '백엔드·알고리즘 구현', items: ['Python', 'Java'] },
    { category: 'AI / ML', desc: '파인튜닝·RAG·딥러닝 모델링·서빙', items: ['TensorFlow/Keras', 'Hugging Face Transformers', 'LoRA', 'vLLM', 'ChromaDB', 'RAG', 'Scikit-learn', 'OpenCV'] },
    { category: 'Backend / Infra', desc: 'API·실시간 파이프라인·인프라 구축', items: ['Spring Boot', 'gRPC', 'Asterisk', 'Kafka', 'ClickHouse', 'MySQL', 'Docker'] },
    { category: 'Tools', desc: '협업·이슈 관리', items: ['Git / GitHub', 'Jira'] },
  ],

  projects: [
    {
      key: 'ai-voice',
      title: 'AI 보이스 상담 시스템',
      subtitle: '온프레미스 LLM 기반 · It-os 납품',
      period: '2025.12 – 2026.02',
      role: '팀장 (기여도 50%)',
      overview: '인바운드 전화 상담은 Asterisk → STT → LLM → TTS 파이프라인으로, 아웃바운드 상담은 RAG 기반 챗봇으로 구현한 2채널 AI 상담 시스템. Kanana 8B 온프레미스 서빙, It-os 납품.',
      architecture: {
        flows: [
          { label: '인바운드 (음성)', nodes: ['Asterisk ARI', 'RTP 수신', 'CLOVA STT', 'Spring Boot\nCallFlow', 'Kanana 8B\n(vLLM)', 'ElevenLabs TTS'] },
          { label: '아웃바운드 (챗봇)', nodes: ['WebSocket\n수신', '슬롯 추출\n+ Router LLM', 'ChromaDB\nRAG 검색', 'Kanana 8B\n(vLLM)', '스트리밍\n응답'] },
        ],
        note: 'Redis 세션 관리 · LoRA 파인튜닝 · Docker Compose 인프라',
      },
      problemSolving: {
        problem: [
          '인바운드 전화 상담을 상담원이 직접 처리해야 해 운영 인력 의존도가 높았음',
          '아웃바운드 요금제 상담 시 고객 조건(통신사·속도·TV)에 맞는 맞춤 안내 자동화 시스템 부재',
        ],
        impact: [
          '상담원 부재 시간 응대 공백 → 고객 이탈 및 서비스 만족도 저하',
          '요금제 상담 품질이 상담원 역량에 의존 → 일관성 부족',
        ],
        solution: [
          '인바운드: Asterisk ARI + Spring Boot CallFlow로 전화 수신 → STT → LLM → TTS 파이프라인 구축',
          '인바운드: 온프레미스 Kanana 8B + vLLM 서빙으로 데이터 보안·낮은 latency·파인튜닝 자유도 동시 확보',
          '아웃바운드: FastAPI WebSocket 기반 실시간 챗봇 서버 단독 구현',
          '아웃바운드: 규칙 기반 슬롯 추출 + Router LLM 의도 분류 + ChromaDB RAG로 고객 조건 맞춤 요금제 검색',
          '아웃바운드: Redis 세션 관리 + vLLM 스트리밍 응답으로 자연스러운 대화 흐름 구현',
        ],
        result: [
          '인바운드·아웃바운드 2채널 AI 상담 시스템 납품 완료 (It-os)',
          '고객 조건 기반 요금제 자동 추천 및 실시간 스트리밍 응답 제공',
        ],
      },
      techRationale: [
        { tech: 'vLLM', reason: '온프레미스 환경에서 낮은 latency 확보 — 실시간 전화·챗봇 응답 속도 우선' },
        { tech: 'Kanana 8B', reason: '한국어 특화 오픈소스 모델 — 온프레미스 배포 가능, LoRA 파인튜닝 지원' },
        { tech: 'ChromaDB', reason: '경량 벡터 DB — 온프레미스 설치 용이, 메타데이터 필터 기반 요금제 검색 지원' },
        { tech: 'Redis', reason: '챗봇 세션 상태(슬롯·대화이력) 관리 — 인메모리 구조로 빠른 세션 조회·저장' },
        { tech: 'Docker Compose', reason: '전체 스택 컨테이너화 — 납품 환경 재현성 및 배포 일관성 확보' },
      ],
      contribution: [
        '전체 시스템 아키텍처 설계 (인바운드·아웃바운드 2채널 파이프라인 구조 정의)',
        '온프레미스 Linux 서버 환경 직접 구축 (GPU 서버 OS 설치·네트워크 설정·환경 구성)',
        'Spring Boot 기반 CallFlow 통합 서비스 구현 (세션 관리·STT 콜백·LLM·TTS 연동)',
        'Hugging Face Transformers + LoRA 방식으로 Kanana 8B 파인튜닝',
        'ChromaDB 기반 RAG 아키텍처 설계 및 구현',
        'FastAPI WebSocket 기반 아웃바운드 챗봇 서버 단독 구현 (규칙 기반 슬롯 추출·Router LLM 의도 분류·RAG 요금제 검색·Redis 세션 관리·vLLM 스트리밍 응답)',
        'Docker Compose로 전체 인프라 컨테이너화',
        '고객사 기술 협의 주도 및 요구사항 기술 스펙 전환',
      ],
      growth: {
        lessons: [
          '온프레미스 LLM 서빙에서 latency·throughput 트레이드오프를 직접 경험',
          '규칙 기반 슬롯 추출과 LLM 의도 분류를 조합하는 하이브리드 NLU 설계 경험',
          '외부 의존 요소(장비·벤더) 리스크를 사전 식별하고 병렬 작업으로 대응하는 프로젝트 관리 습관 형성',
        ],
        improvements: [
          'vLLM 배치 추론 최적화로 동시 다중 통화 처리 성능 개선',
          '슬롯 추출을 LLM 기반으로 전환해 복잡한 자연어 표현 처리 커버리지 확대',
          '응답 품질 모니터링 시스템 추가 (상담 로그 기반 이상 탐지)',
        ],
      },
      tags: ['Spring Boot', 'Asterisk', 'FastAPI', 'WebSocket', 'vLLM', 'Kanana 8B', 'LoRA', 'RAG', 'ChromaDB', 'Redis', 'CLOVA STT', 'ElevenLabs', 'Docker'],
      highlight: true,
    },
    {
      key: 'uwb',
      title: 'UWB 기반 실내 위치추적 시스템',
      subtitle: '삼변측량 알고리즘 설계 · (주)메티스 납품',
      period: '2024.05 – 2024.09',
      role: '학부연구생 (기여도 50%)',
      overview: 'UWB 센서와 삼변측량 알고리즘으로 산업 현장 내 작업자 위치를 실시간 추적하고 이동 경로를 시각화하는 시스템. (주)메티스에 납품.',
      architecture: {
        flows: [
          {
            label: '위치 추적',
            nodes: ['UWB 앵커 × N', 'RSSI 수집', 'LLS 초기 추정', 'LM 비선형\n최적화', '위치 좌표\n산출', 'Java GUI\n실시간 표시'],
          },
          {
            label: 'AP 배치 최적화',
            nodes: ['평면도 입력', 'OpenCV\nConvex Hull', '커스텀 HDOP\n적합도 함수', '유전 알고리즘\n+ SA', '최적 AP\n배치 산출'],
          },
        ],
        note: '동일축 패널티 가중치를 포함한 커스텀 적합도 함수로 AP 기하학적 분산 자동 최적화',
      },
      problemSolving: {
        problem: [
          '기존 LLS 단일 삼변측량 방식의 2D 위치 오차(RMSE) 224cm — 산업 현장 적용 기준 미달',
          'AP 배치를 수작업으로 결정해 기하학적 분산 최적화 불가, 동일축 배치 시 오차 급증',
        ],
        impact: [
          '위치 오차가 커 작업자 안전 관리 시스템에 실사용 불가',
          'AP 배치 비효율로 측위 정확도 저하 및 재설치 비용 발생',
        ],
        solution: [
          'LLS 결과를 LM 초기값으로 활용하는 하이브리드 방식 직접 설계 — 비선형 최적화 수렴 안정성 확보',
          'HDOP에 동일축 패널티 가중치 추가한 커스텀 적합도 함수 설계 — 기존 HDOP의 한계 직접 보완',
          '유전 알고리즘 + 시뮬레이티드 어닐링 결합으로 비볼록 AP 배치 문제 전역 최적해 탐색',
        ],
        result: [
          'RMSE 224cm → 71cm (68%↓, 10,000회 시뮬레이션 검증)',
          'HDOP 40.12 → 3.42 (최적 AP 배치 자동 산출)',
          '(주)메티스 납품 완료',
        ],
      },
      techRationale: [
        { tech: 'LLS + LM 하이브리드', reason: 'LLS만 사용 시 비선형 환경에서 수렴 불안정 — LLS 초기값으로 LM에 전달해 정확도·안정성 동시 확보' },
        { tech: '유전 알고리즘 + SA', reason: 'HDOP 최적화는 복잡한 비볼록 문제 — 그리디로는 전역 최적해 탐색 불가하여 메타휴리스틱 결합' },
        { tech: 'OpenCV Convex Hull', reason: '평면도에서 벽 영역 자동 추출 — AP 배치 가능 구역 계산 자동화로 수작업 제거' },
      ],
      contribution: [
        'LLS 결과를 LM 초기값으로 활용하는 하이브리드 삼변측량 방식 제안 → 2D 위치 오차(RMSE) 224cm → 71cm (68%↓, 10,000회 시뮬레이션 검증)',
        'HDOP에 동일축 패널티 가중치를 추가한 커스텀 적합도 함수 설계',
        '유전 알고리즘 + 시뮬레이티드 어닐링 결합으로 최적 AP 배치 자동 산출 (HDOP 40.12 → 3.42)',
        'OpenCV + Convex Hull 기반 평면도 벽 추출 알고리즘 구현',
        'Java GUI 실시간 모니터링 프로그램 구현 및 10,000회 시뮬레이션 검증',
      ],
      growth: {
        lessons: [
          '수치 기반 알고리즘 성능 검증의 중요성 — 10,000회 시뮬레이션으로 통계적 신뢰성 확보 방법 체득',
          '메타휴리스틱 알고리즘의 파라미터 튜닝 경험 (세대 수, 돌연변이율, 냉각 스케줄)',
          '도메인 한계(HDOP의 동일축 문제)를 직접 발견하고 커스텀 함수로 보완하는 문제 정의 역량 강화',
        ],
        improvements: [
          '3D 위치 추적으로 확장 (높이 축 추가로 다층 현장 적용)',
          '칼만 필터 도입으로 이동 경로 스무딩 및 예측 정확도 향상',
          '실시간 RSSI 변동에 대한 적응형 가중치 알고리즘 적용',
        ],
      },
      tags: ['Java', 'UWB', 'LLS+LM', '유전 알고리즘', '시뮬레이티드 어닐링', 'OpenCV', 'GUI'],
      highlight: true,
    },
    {
      key: 'aivle-minip1',
      title: 'AI 기반 고객 만족도 예측 시스템',
      subtitle: 'KT AIVLE 9기 1차 미니프로젝트',
      period: '2026.04.14 – 2026.04.15',
      role: '조장 · 전처리 파이프라인 구축 · 딥러닝 Fine-tuning',
      overview: '항공사 고객 만족도 데이터를 기반으로 가설 수립 및 통계 검증을 거쳐 TensorFlow/Keras 딥러닝 모델을 구축하고, 추가 데이터 Fine-tuning으로 불만족 고객 탐지 성능을 향상시킨 AI 모델링 프로젝트.',
      architecture: {
        flow: ['데이터 수집', '가설 수립\n& 통계 검증', '전처리\n파이프라인', 'Base Model\n구축', '추가 데이터\nFine-tuning', '서비스 개선\n방향 도출'],
        note: 'TensorFlow/Keras · Scikit-learn · 이진 분류 (sigmoid + binary_crossentropy) · EarlyStopping · Dropout',
      },
      problemSolving: {
        problem: [
          '불만족 고객(class 0) Recall 0.81 — 미탐지율이 높아 실서비스 적용 기준 미달',
        ],
        impact: [
          '불만족 고객을 놓치면 서비스 개선 우선순위 설정 불가 → 고객 이탈 방지 기회 손실',
        ],
        solution: [
          '추가 데이터 Fine-tuning으로 불만족 클래스 학습 강화',
          'EarlyStopping + Dropout으로 과적합 방지 및 일반화 성능 확보',
          '가설 수립 → 통계 검증 → 모델링 순서로 비즈니스 스토리라인 구성',
        ],
        result: [
          '불만족 고객 Recall 0.81 → 0.96 (18.5%↑)',
          'Accuracy 95% 달성',
        ],
      },
      techRationale: [
        { tech: 'TensorFlow/Keras', reason: '이진 분류 딥러닝 모델 — sigmoid + binary_crossentropy로 만족/불만족 분류에 적합' },
        { tech: 'Joblib', reason: '전처리 파이프라인 직렬화 — 반복 실험 시 동일한 전처리 재현성 확보' },
      ],
      contribution: [
        '조장으로서 8인 팀 R&R 정립 및 프로젝트 방향 조율',
        '전처리 파이프라인 구축으로 반복 작업 자동화 (Pandas, NumPy, Joblib)',
        '하이퍼파라미터 반복 실험으로 최적 딥러닝 모델 도출 (Dropout, EarlyStopping 적용)',
        '추가 데이터 Fine-tuning → 불만족 고객(class 0) Recall 0.81 → 0.96, Accuracy 95% 달성',
        '가설→분석→결론 비즈니스 스토리라인 구성으로 서비스 개선 방향 제시 (타 조 대비 차별화)',
      ],
      growth: {
        lessons: [
          '클래스 불균형 데이터에서 Accuracy보다 Recall 중심 성능 지표 설정의 중요성 체득',
          '비즈니스 가설을 통계적으로 검증하고 모델링으로 연결하는 전체 분석 프로세스 경험',
        ],
        improvements: [
          'SMOTE 등 오버샘플링 기법 적용으로 클래스 불균형 직접 해소',
          'SHAP 값으로 불만족 고객 주요 원인 변수 해석 추가',
        ],
      },
      tags: ['Python', 'TensorFlow/Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'Joblib', 'Fine-tuning'],
      highlight: false,
    },
    {
      key: 'epts',
      title: '풋살 선수 분석 플랫폼 (EPTS)',
      subtitle: '창업동아리 Alphaca · 졸업설계 연계',
      period: '2025.02 – 2025.06',
      role: '백엔드 팀장',
      overview: 'UWB 센서로 풋살 선수의 실시간 위치를 추적하고 경기 데이터를 분석하는 EPTS 플랫폼. Jira 스프린트 기반으로 운영.',
      architecture: {
        flow: ['UWB 센서', 'Kafka\n스트리밍', 'ClickHouse\n저장/분석', 'Spring Boot\nAPI', 'Frontend\n시각화'],
        note: 'Docker Compose 인프라 · Jira 스프린트 기반 개발 · 6종 분석 지표 SQL',
      },
      problemSolving: {
        problem: [
          '풋살 선수의 전술·체력 데이터를 실시간으로 수집·분석하는 전용 도구 부재',
          '프론트엔드 담당 팀원 갑작스러운 이탈로 서비스 완성 위기',
        ],
        impact: [
          '선수 개인화 피드백 및 팀 전술 분석 불가 → 훈련 효율 저하',
          '프론트엔드 공백으로 전체 프로젝트 납기 위협',
        ],
        solution: [
          'Kafka → ClickHouse 실시간 파이프라인 설계 — 고빈도 위치 데이터 처리에 최적화된 컬럼형 DB 선택',
          '히트맵·이동거리·팀 압박 스코어 등 6종 분석 지표 SQL 직접 구현',
          '프론트엔드 이탈 후 React Native로 직접 구축해 프로젝트 완성',
        ],
        result: [
          '실시간 위치 데이터 파이프라인 및 6종 분석 지표 시각화 서비스 완성',
          '졸업설계 연계 프로젝트 기한 내 완료',
        ],
      },
      techRationale: [
        { tech: 'ClickHouse', reason: '컬럼형 DB — 고빈도 위치 데이터 집계 쿼리 성능 MySQL 대비 우수, 시계열 분석에 적합' },
        { tech: 'Kafka', reason: 'UWB 센서 고빈도 데이터 스트리밍 — 비동기 버퍼링으로 파이프라인 안정성 확보' },
      ],
      contribution: [
        'Kafka → ClickHouse 실시간 위치 데이터 파이프라인 설계 및 구현',
        '히트맵·이동거리·팀 압박 스코어·수비라인 높이·전술유지도·탈압박 등 6종 분석 지표 SQL 구현',
        'Docker Compose로 전체 인프라 컨테이너화',
        '프론트엔드 개발자 이탈 후 React Native로 프론트엔드 직접 구축',
      ],
      growth: {
        lessons: [
          '예상치 못한 팀원 이탈 상황에서 프론트엔드까지 커버하며 풀스택 대응 역량 강화',
          'ClickHouse 컬럼형 DB의 집계 쿼리 특성 및 파티셔닝 최적화 경험',
        ],
        improvements: [
          '실시간 경기 중 전술 패턴 자동 분류 AI 모델 연동',
          'ClickHouse MergeTree 파티셔닝으로 장기 데이터 조회 성능 개선',
        ],
      },
      tags: ['Java', 'Spring', 'Kafka', 'ClickHouse', 'Docker', 'Jira', 'UWB', 'React Native'],
      highlight: false,
    },
  ],

  experience: [
    {
      key: 'wiseitech',
      company: '위세아이텍',
      role: '인턴 (주임)',
      department: 'DM사업부',
      period: '2025.06 – 2025.12 (6개월)',
      tasks: ['공공데이터 품질 진단', 'DB 기반 데이터 분석', '논리적 개선 방안 보고서 작성'],
    },
    {
      key: 'lghv',
      company: 'LG헬로비전',
      role: '아르바이트',
      department: '전기차충전기사업부',
      period: '2022.09 – 2023.02 (5개월)',
      tasks: ['엑셀 활용 데이터 정리', '고객·협력사 전화 응대'],
    },
  ],

  education: [
    {
      school: '한국기술교육대학교',
      major: '컴퓨터공학부',
      degree: '학사 졸업',
      period: '2020.03 – 2026.02',
      gpa: '3.71 / 4.5 (전공 3.92)',
      location: '충남',
    },
  ],

  certifications: [
    { name: 'KT AIVLE 9기 AI 개발자 교육', issuer: 'KT', date: '2026.04 ~', note: '교육 이수 중' },
    { name: '정보처리기사', issuer: '한국산업인력공단', date: '2025.06' },
    { name: '직업능력개발훈련교사 3급', issuer: '고용노동부', date: '2026.02' },
    { name: '파이썬 프로그래밍 활용능력 1급', issuer: '한국정보인재개발원', date: '2023.11' },
    { name: 'TOEIC Speaking Intermediate High', issuer: 'YBM', date: '2026.03' },
  ],

  military: {
    rank: '병장 (만기제대)',
    period: '2021.01 – 2022.07',
  },
};
