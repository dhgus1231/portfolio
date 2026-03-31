export const profile = {
  name: '권오현',
  nameEn: 'Kwon OhHyun',
  title: 'AI · 데이터 백엔드 개발자',
  email: 'ohhyun1231@gmail.com',
  phone: '010-8395-5565',
  github: 'https://github.com/dhgus1231',
  bio: 'LLM/RAG 기반 AI 시스템 설계와 데이터 분석 경험을 보유한 개발자입니다. 실내 위치추적 알고리즘 개발부터 온프레미스 AI 상담 시스템 구축까지, 실무 납품 경험을 갖추고 있습니다.',

  skills: [
    { category: 'Language', items: ['Python', 'Java'] },
    { category: 'AI / ML', items: ['LLM Fine-tuning', 'RAG', 'On-premise LLM', 'OpenCV'] },
    { category: 'Backend / DB', items: ['Spring', 'Kafka', 'ClickHouse', 'Docker', 'SQL'] },
    { category: 'Tools', items: ['Git / GitHub', 'Jira', 'Eclipse'] },
  ],

  projects: [
    {
      title: 'AI 보이스 상담 시스템 구축',
      subtitle: '온프레미스 LLM 기반',
      period: '2025.12 – 2026.02',
      role: '팀장 (기여도 50%)',
      company: 'It-os',
      description:
        '고객사 기술 협의를 주도하고 LLM 파인튜닝 및 RAG 설계를 통해 실무 최적화된 AI 음성 상담 환경을 구축했습니다.',
      tags: ['Python', 'LLM', 'RAG', 'Fine-tuning', 'On-premise'],
      highlight: true,
    },
    {
      title: 'UWB 기반 실내 위치추적 시스템',
      subtitle: '삼변측량 알고리즘 설계 · (주)메티스 납품',
      period: '2024.05 – 2024.09',
      role: '실내측위 알고리즘 개발 (기여도 50%)',
      company: '한국기술교육대학교 학부연구생 → (주)메티스 납품',
      description:
        'LLS(선형최소제곱법)의 결과를 LM(Levenberg-Marquardt) 알고리즘의 초기값으로 활용하는 하이브리드 삼변측량 방식을 직접 제안·구현했습니다. 기존 LM 대비 X축 위치 오차를 224cm → 71cm로 68% 개선했으며, 유전 알고리즘 + 시뮬레이티드 어닐링 결합으로 AP 최적 배치 시 HDOP를 40.12 → 3.42로 감소시켰습니다. OpenCV 벽 추출 및 Convex Hull 외벽 알고리즘 기반 GUI 모니터링 프로그램을 Java로 구현, 10,000회 시뮬레이션 검증 후 (주)메티스에 납품했습니다.',
      tags: ['Java', 'UWB', 'LLS+LM 삼변측량', '유전 알고리즘', 'OpenCV', 'GUI', '최적화'],
      highlight: true,
      metrics: [
        { label: 'X축 오차 개선', value: '224cm → 71cm (68%↓)' },
        { label: 'HDOP 개선', value: '40.12 → 3.42' },
        { label: '실험 횟수', value: '10,000회 검증' },
      ],
    },
    {
      title: '풋살 선수 분석 플랫폼 (EPTS)',
      subtitle: '창업동아리 Alphaca · 졸업설계 연계',
      period: '2025.02 – 2025.06',
      role: '백엔드 팀장',
      company: 'Alphaca 창업동아리',
      description:
        'UWB 센서로 수집된 선수 위치 데이터를 실시간 처리하는 EPTS 플랫폼의 백엔드를 총괄 설계했습니다. Kafka로 실시간 위치 데이터를 스트리밍하고 ClickHouse(시계열 DB)에 적재하는 파이프라인을 구축했으며, 히트맵·총 이동거리·팀 압박 스코어·수비라인 높이·전술유지도·탈압박 등 6종 이상의 경기 분석 지표를 SQL로 구현했습니다. Docker Compose로 전체 인프라를 컨테이너화했습니다.',
      tags: ['Java', 'Kafka', 'ClickHouse', 'Docker', 'Spring', 'UWB', '실시간 스트리밍'],
      highlight: false,
    },
  ],

  experience: [
    {
      company: '위세아이텍',
      role: '인턴 (주임)',
      department: 'DM사업부',
      period: '2025.06 – 2025.12 (6개월)',
      tasks: ['공공데이터 품질 진단', 'DB 기반 데이터 분석', '논리적 개선 방안 보고서 작성'],
    },
    {
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
