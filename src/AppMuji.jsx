import { useEffect } from 'react';

import MujiProfilePage from './components/muji/MujiProfilePage';
import InfraCapabilityPage from './components/muji/InfraCapabilityPage';
import ProjectPage from './components/ProjectPage';
import ExperiencePage from './components/ExperiencePage';
import TroubleshootingPage from './components/TroubleshootingPage';
import { fitPagesForPrint, resetPagesAfterPrint } from './printFit';
import './index.css';

// 무인양품(MUJI) 경영기획팀 네트워크 인프라 담당자 지원용 구성.
// 기본 포트폴리오(App.jsx)와 같은 데이터를 쓰되, 인프라·네트워크·보안 근거를
// 앞으로 당기고 AI 모델링 위주 페이지는 뺀다.
const PAGE = 'print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none';

function AppMuji() {
  useEffect(() => {
    window.addEventListener('beforeprint', fitPagesForPrint);
    window.addEventListener('afterprint', resetPagesAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', fitPagesForPrint);
      window.removeEventListener('afterprint', resetPagesAfterPrint);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-200">
      <div className="no-print fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-lg transition-colors"
        >
          PDF로 저장
        </button>
      </div>

      {/* 1. 프로필 — 인프라 관점으로 재구성 */}
      <div className={PAGE}><MujiProfilePage /></div>

      {/* 2. 담당업무별 보유 경험 — 이 지원의 핵심 페이지 */}
      <div className={PAGE}><InfraCapabilityPage /></div>

      {/* 3. AI 보이스 상담 — 온프레미스 구축 · 전화망 연동 */}
      <div className={PAGE}><ProjectPage projectKey="ai-voice" showTroubleshooting={false} /></div>

      {/* 4. 전화망 대역 규명 · 명세 없는 장비 신호 역분석 */}
      <div className={PAGE}><TroubleshootingPage projectKey="ai-voice" /></div>

      {/* 5. AIDE — 3계층 아키텍처 · 접근통제 · 개인정보 경계 */}
      <div className={PAGE}><ProjectPage projectKey="aide" showTroubleshooting={false} /></div>

      {/* 6. AIDE — 문제 해결 기록 */}
      <div className={PAGE}><TroubleshootingPage projectKey="aide" /></div>

      {/* 7. UWB — AP 배치 최적화 (무선 네트워크 설계) */}
      <div className={PAGE}><ProjectPage projectKey="uwb" /></div>

      {/* 8. EPTS — 실시간 데이터 파이프라인 인프라 */}
      <div className={PAGE}><ProjectPage projectKey="epts" /></div>

      {/* 9. 위세아이텍 인턴십 — 운영 업무 자동화·성능 개선 (기본 포폴에서는 비노출) */}
      <div className={PAGE}><ExperiencePage /></div>

      <footer className="no-print py-8 text-center text-xs text-slate-400">
        © 2026 권오현 · 무인양품 지원용 구성
      </footer>
    </div>
  );
}

export default AppMuji;
