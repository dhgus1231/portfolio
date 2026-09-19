import { useEffect, useState } from 'react';

import { profile } from './data/profile';
import ProjectIndex from './components/Projects';
import ProfilePage from './components/ProfilePage';
import ProjectPage from './components/ProjectPage';
import ExperiencePage from './components/ExperiencePage';
import ScreenshotPage from './components/ScreenshotPage';
import TroubleshootingPage from './components/TroubleshootingPage';
import { fitPagesForPrint, resetPagesAfterPrint } from './printFit';
import './index.css';

/**
 * 화면에서는 선택된 프로젝트만 보여주고,
 * 인쇄(PDF 저장)할 때는 선택과 무관하게 항상 전부 포함시킨다.
 */
function ScreenOnly({ show, children }) {
  return <div className={show ? '' : 'hidden print:block'}>{children}</div>;
}

function Page({ children }) {
  return (
    <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
      {children}
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    window.addEventListener('beforeprint', fitPagesForPrint);
    window.addEventListener('afterprint', resetPagesAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', fitPagesForPrint);
      window.removeEventListener('afterprint', resetPagesAfterPrint);
    };
  }, []);

  // 프로젝트를 고르거나 목록으로 돌아올 때 맨 위로
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selected]);

  const handlePrint = () => window.print();

  const isList = selected === null;
  const shows = key => selected === key;
  const current = profile.projects.find(p => p.key === selected);

  return (
    <div className="min-h-screen bg-slate-200">
      {/* 상세 보기일 때만 상단에 돌아가기 바 */}
      {!isList && (
        <div className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-3">
            <button
              onClick={() => setSelected(null)}
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              ← 프로젝트 목록
            </button>
            <span className="text-slate-300">|</span>
            <span className="text-sm font-medium text-slate-700 truncate">{current?.title}</span>
          </div>
        </div>
      )}

      <div className="no-print fixed bottom-6 right-6 z-50">
        <button
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-lg transition-colors"
        >
          PDF로 저장
        </button>
      </div>

      {/* 프로필 — 목록 화면에서만 노출, 인쇄에는 항상 포함 */}
      <ScreenOnly show={isList}>
        <Page>
          <ProfilePage />
        </Page>
      </ScreenOnly>

      {/* 프로젝트 목록 (화면 전용) */}
      {isList && (
        <ProjectIndex filter={filter} onFilter={setFilter} onSelect={setSelected} />
      )}

      {/* AI 보이스 상담 시스템 */}
      <ScreenOnly show={shows('ai-voice')}>
        <Page>
          <ProjectPage projectKey="ai-voice" showTroubleshooting={false} />
        </Page>
        <Page>
          <TroubleshootingPage projectKey="ai-voice" />
        </Page>
        <Page>
          <ScreenshotPage projectKey="ai-voice" />
        </Page>
      </ScreenOnly>

      {/* AIDE */}
      <ScreenOnly show={shows('aide')}>
        <Page>
          <ProjectPage projectKey="aide" showTroubleshooting={false} />
        </Page>
        <Page>
          <TroubleshootingPage projectKey="aide" />
        </Page>
        <Page>
          <ScreenshotPage projectKey="aide" />
        </Page>
      </ScreenOnly>

      {/* UWB 실내 위치추적 */}
      <ScreenOnly show={shows('uwb')}>
        <Page>
          <ProjectPage projectKey="uwb" />
        </Page>
      </ScreenOnly>

      {/* AIVLE 1차 미니프로젝트 */}
      <ScreenOnly show={shows('aivle-minip1')}>
        <Page>
          <ProjectPage projectKey="aivle-minip1" />
        </Page>
      </ScreenOnly>

      {/* AIVLE 2차 미니프로젝트 — AI 강사 Agent */}
      <ScreenOnly show={shows('aivle-minip2')}>
        <Page>
          <ProjectPage projectKey="aivle-minip2" />
        </Page>
      </ScreenOnly>

      {/* AIVLE 3차 미니프로젝트 — 상품 리뷰 분석 Agent */}
      <ScreenOnly show={shows('aivle-minip3')}>
        <Page>
          <ProjectPage projectKey="aivle-minip3" />
        </Page>
      </ScreenOnly>

      {/* EPTS 플랫폼 */}
      <ScreenOnly show={shows('epts')}>
        <Page>
          <ProjectPage projectKey="epts" />
        </Page>
        <Page>
          <ScreenshotPage projectKey="epts" />
        </Page>
      </ScreenOnly>

      {/* 위세아이텍 인턴십 — 숨김(경력, 포폴 비노출). 내용은 삭제하지 않고 렌더만 제외 */}
      {/* <Page>
        <ExperiencePage />
      </Page> */}

      <footer className="no-print py-8 text-center text-xs text-slate-400">
        © 2026 권오현 · Built with React
      </footer>
    </div>
  );
}

export default App;
