import { useEffect } from 'react';

import ProfilePage from './components/ProfilePage';
import ProjectPage from './components/ProjectPage';
import ExperiencePage from './components/ExperiencePage';
import ScreenshotPage from './components/ScreenshotPage';
import './index.css';

// A4 가로 한 장의 실제 인쇄 가능 크기 (여백 8mm 10mm 제외)
const PAGE_CONTENT_MM = 194;
const PAGE_WIDTH_MM = 277;
const PX_PER_MM = 96 / 25.4;
// 인쇄 본문 최소 크기가 9pt이므로 0.70배까지는 6.3pt로 읽힌다.
// 이보다 더 줄여야 하는 페이지는 축소 대신 두 장으로 흘려보낸다.
const MIN_SCALE = 0.70;

// 화면 스타일은 인쇄 스타일보다 10%가량 크게 렌더되므로 화면 높이로 계산하면
// 이미 한 장에 들어가는 페이지까지 줄어든다. @media print 규칙을 잠깐 켜서
// 실제 인쇄 높이를 그대로 잰 뒤 즉시 되돌린다 (되돌리기 전에 paint 되지 않는다).
function measurePrintHeights() {
  const flipped = [];
  for (const sheet of document.styleSheets) {
    let rules;
    try {
      rules = sheet.cssRules;
    } catch {
      continue; // 교차 출처 스타일시트는 건너뛴다
    }
    for (const rule of rules) {
      const isPrintOnly =
        rule.type === CSSRule.MEDIA_RULE &&
        /print/i.test(rule.conditionText) &&
        !/screen/i.test(rule.conditionText);
      if (!isPrintOnly) continue;
      flipped.push([rule, rule.conditionText]);
      try {
        rule.media.mediaText = 'all';
      } catch {
        flipped.pop();
      }
    }
  }

  const probe = document.createElement('style');
  probe.textContent = `.print-page{width:${PAGE_WIDTH_MM}mm !important;max-width:${PAGE_WIDTH_MM}mm !important;}`;
  document.head.appendChild(probe);

  const heights = [...document.querySelectorAll('.print-page')].map(page => {
    const inner = page.firstElementChild;
    return inner ? inner.getBoundingClientRect().height : 0;
  });

  probe.remove();
  for (const [rule, condition] of flipped) {
    try {
      rule.media.mediaText = condition;
    } catch {
      /* 되돌리지 못해도 인쇄 결과에는 영향이 없다 */
    }
  }
  return heights;
}

// 인쇄 직전 각 페이지 내용을 A4 한 장에 맞춰 축소한다.
// 축소해도 읽을 수 없는 페이지는 건드리지 않고 자연스럽게 다음 장으로 넘긴다.
function fitPagesForPrint() {
  const available = PAGE_CONTENT_MM * PX_PER_MM;
  const heights = measurePrintHeights();

  document.querySelectorAll('.print-page').forEach((page, i) => {
    const inner = page.firstElementChild;
    if (!inner) return;

    inner.style.transform = '';
    inner.style.width = '';
    page.classList.remove('print-two-page');

    const height = heights[i];
    if (!height || height <= available) return;

    const scale = available / height;
    if (scale >= MIN_SCALE) {
      inner.style.transformOrigin = 'top left';
      inner.style.transform = `scale(${scale.toFixed(3)})`;
      inner.style.width = `${(100 / scale).toFixed(2)}%`;
    } else {
      page.classList.add('print-two-page');
    }
  });
}

function resetPagesAfterPrint() {
  document.querySelectorAll('.print-page').forEach(page => {
    const inner = page.firstElementChild;
    if (!inner) return;
    inner.style.transform = '';
    inner.style.width = '';
    inner.style.transformOrigin = '';
    page.classList.remove('print-two-page');
  });
}

function App() {
  useEffect(() => {
    window.addEventListener('beforeprint', fitPagesForPrint);
    window.addEventListener('afterprint', resetPagesAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', fitPagesForPrint);
      window.removeEventListener('afterprint', resetPagesAfterPrint);
    };
  }, []);

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-200">
      <div className="no-print fixed bottom-6 right-6 z-50">
        <button
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-lg transition-colors"
        >
          PDF로 저장
        </button>
      </div>

      {/* Page 1: 프로필 전체 */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <ProfilePage />
      </div>

      {/* Page 2: AI 보이스 상담 시스템 */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <ProjectPage projectKey="ai-voice" />
      </div>

      {/* Page 2-1: AI 보이스 상담 — 결과물 화면 (실서비스 챗봇) */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <ScreenshotPage projectKey="ai-voice" />
      </div>

      {/* Page 3: AIDE 교사 행정업무 지원 시스템 */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <ProjectPage projectKey="aide" />
      </div>

      {/* Page 3-1: AIDE — 결과물 화면 (직접 구현 파트) */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <ScreenshotPage projectKey="aide" />
      </div>

      {/* Page 3: UWB 실내 위치추적 */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <ProjectPage projectKey="uwb" />
      </div>

      {/* Page 4: AIVLE 1차 미니프로젝트 */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <ProjectPage projectKey="aivle-minip1" />
      </div>

      {/* Page 5: EPTS 플랫폼 */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <ProjectPage projectKey="epts" />
      </div>

      {/* Page 5-1: EPTS — 결과물 화면 */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <ScreenshotPage projectKey="epts" />
      </div>

      {/* Page 6: 위세아이텍 인턴십 — 숨김(경력, 포폴 비노출). 내용은 삭제하지 않고 렌더만 제외 */}
      {/* <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <ExperiencePage />
      </div> */}

      <footer className="no-print py-8 text-center text-xs text-slate-400">
        © 2026 권오현 · Built with React
      </footer>
    </div>
  );
}

export default App;
