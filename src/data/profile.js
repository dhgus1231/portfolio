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
      overview: 'Asterisk(VoIP) → STT → LLM → TTS로 이어지는 전화 AI 상담 파이프라인. Kanana 8B 모델을 vLLM으로 서빙하는 온프레미스 구조로 It-os에 납품.',
      architecture: {
        flow: ['Asterisk ARI', 'RTP 수신', 'CLOVA STT', 'Spring Boot\nCallFlow', 'Kanana 8B\n(vLLM)', 'ElevenLabs TTS'],
        note: 'ChromaDB RAG 연동 · LoRA 파인튜닝 · Docker Compose 인프라',
      },
      contribution: [
        '전체 시스템 아키텍처 설계 (파이프라인 구조 정의)',
        '온프레미스 Linux 서버 환경 직접 구축 (GPU 서버 OS 설치·네트워크 설정·환경 구성)',
        'Spring Boot 기반 CallFlow 통합 서비스 구현 (세션 관리·STT 콜백·LLM·TTS 연동)',
        'Hugging Face Transformers + LoRA 방식으로 Kanana 8B 파인튜닝',
        'ChromaDB 기반 RAG 아키텍처 설계 및 구현',
        'Docker Compose로 전체 인프라 컨테이너화',
        '고객사 기술 협의 주도 및 요구사항 기술 스펙 전환',
      ],
      tags: ['Spring Boot', 'Asterisk', 'gRPC', 'vLLM', 'Kanana 8B', 'LoRA', 'RAG', 'ChromaDB', 'CLOVA STT', 'ElevenLabs', 'Docker'],
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
      contribution: [
        'LLS 결과를 LM 초기값으로 활용하는 하이브리드 삼변측량 방식 제안 → 2D 위치 오차(RMSE) 224cm → 71cm (68%↓, 10,000회 시뮬레이션 검증)',
        'HDOP에 동일축 패널티 가중치를 추가한 커스텀 적합도 함수 설계',
        '유전 알고리즘 + 시뮬레이티드 어닐링 결합으로 최적 AP 배치 자동 산출 (HDOP 40.12 → 3.42)',
        'OpenCV + Convex Hull 기반 평면도 벽 추출 알고리즘 구현',
        'Java GUI 실시간 모니터링 프로그램 구현 및 10,000회 시뮬레이션 검증',
      ],
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
      contribution: [
        '조장으로서 8인 팀 R&R 정립 및 프로젝트 방향 조율',
        '전처리 파이프라인 구축으로 반복 작업 자동화 (Pandas, NumPy, Joblib)',
        '하이퍼파라미터 반복 실험으로 최적 딥러닝 모델 도출 (Dropout, EarlyStopping 적용)',
        '추가 데이터 Fine-tuning → 불만족 고객(class 0) Recall 0.81 → 0.96, Accuracy 95% 달성',
        '가설→분석→결론 비즈니스 스토리라인 구성으로 서비스 개선 방향 제시 (타 조 대비 차별화)',
      ],
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
      contribution: [
        'Kafka → ClickHouse 실시간 위치 데이터 파이프라인 설계 및 구현',
        '히트맵·이동거리·팀 압박 스코어·수비라인 높이·전술유지도·탈압박 등 6종 분석 지표 SQL 구현',
        'Docker Compose로 전체 인프라 컨테이너화',
        '프론트엔드 개발자 이탈 후 프론트엔드 직접 구축',
      ],
      tags: ['Java', 'Spring', 'Kafka', 'ClickHouse', 'Docker', 'Jira', 'UWB', 'React Native'],
      highlight: false,
      screenshots: [
        { src: '/images/epts/screen1.png', caption: '경기 실시간 현황' },
        { src: '/images/epts/screen2.png', caption: '포지션별 분석 레이더' },
        { src: '/images/epts/screen3.png', caption: '주간 목표 & 랭킹' },
      ],
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
