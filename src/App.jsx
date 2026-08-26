import { useEffect } from 'react';

import ProfilePage from './components/ProfilePage';
import ProjectPage from './components/ProjectPage';
import ExperiencePage from './components/ExperiencePage';
import ScreenshotPage from './components/ScreenshotPage';
import TroubleshootingPage from './components/TroubleshootingPage';
import './index.css';

// A4 가로 한 장의 실제 인쇄 가능 크기 (여백 8mm 10mm 제외)
const PAGE_CONTENT_MM = 194;
const PAGE_WIDTH_MM = 277;
const PX_PER_MM = 96 / 25.4;
// 인쇄 본문 최소 크기가 9pt이므로 0.70배까지는 6.3pt로 읽힌다.
// 이보다 더 줄여야 하는 페이지는 축소 대신 두 장으로 흘려보낸다.
const MIN_SCALE = 0.70;
// 이보다 배율이 낮으면 폭 확장 반복이 무의미할 만큼 내용이 길다는 뜻
const HARD_FLOOR = 0.45;

// 화면 스타일은 인쇄 스타일보다 10%가량 크게 렌더되므로 화면 높이로 계산하면
// 이미 한 장에 들어가는 페이지까지 줄어든다. @media print 규칙을 잠깐 켜고
// 인쇄 폭(277mm)을 강제해 실제 인쇄 레이아웃 그대로 재고 되돌린다.
function withPrintLayout(measure) {
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

  try {
    return measure();
  } finally {
    probe.remove();
    for (const [rule, condition] of flipped) {
      try {
        rule.media.mediaText = condition;
      } catch {
        /* 되돌리지 못해도 인쇄 결과에는 영향이 없다 */
      }
    }
  }
}

// 인쇄 직전 각 페이지 내용을 A4 한 장에 맞춰 축소한다.
// 축소해도 읽을 수 없는 페이지는 건드리지 않고 자연스럽게 다음 장으로 넘긴다.
function fitPagesForPrint() {
  const available = PAGE_CONTENT_MM * PX_PER_MM;

  withPrintLayout(() => {
    document.querySelectorAll('.print-page').forEach(page => {
      const inner = page.firstElementChild;
      if (!inner) return;

      // 직전 계산 결과를 지우고 원래 높이부터 다시 잰다
      inner.style.transform = '';
      inner.style.width = '';
      page.style.height = '';
      page.style.overflow = '';
      page.classList.remove('print-two-page');

      let height = inner.offsetHeight; // 레이아웃 높이 (transform 영향 없음)
      if (!height || height <= available) return;

      // 폭을 넓히면 같은 내용이 짧아지므로 배율을 몇 번 반복해 수렴시킨다.
      // 첫 추정값은 폭 확장을 반영하지 않아 실제보다 작게 나오므로,
      // MIN_SCALE 판정은 수렴이 끝난 뒤에 한다.
      let widthScale = available / height;
      for (let i = 0; i < 4; i += 1) {
        if (widthScale < HARD_FLOOR) break; // 폭이 비현실적으로 넓어지는 것을 막는다
        inner.style.width = `${(100 / widthScale).toFixed(3)}%`;
        height = inner.offsetHeight;
        const next = available / height;
        if (Math.abs(next - widthScale) < 0.005) {
          widthScale = next;
          break;
        }
        widthScale = (widthScale + next) / 2; // 진동을 줄이며 수렴시킨다
      }

      if (widthScale < MIN_SCALE) {
        inner.style.width = '';
        page.classList.add('print-two-page');
        return;
      }

      // 최종 폭을 확정한 뒤 그 폭에서 높이를 다시 잰다.
      // 배율은 폭 기준값을 넘지 않게 잡는다 — 폭(%) × 배율 ≤ 100%가 유지되어야
      // 가로로 잘리지 않는다.
      inner.style.width = `${(100 / widthScale).toFixed(3)}%`;
      height = inner.offsetHeight;
      const scale = Math.min(widthScale, available / height);

      inner.style.transformOrigin = 'top left';
      inner.style.transform = `scale(${scale.toFixed(4)})`;
      // transform은 레이아웃 높이를 줄이지 않는다. 축소된 실제 높이를 감싸는 쪽에
      // 지정해야 인쇄 엔진이 그 높이로 페이지를 나눈다.
      page.style.height = `${Math.ceil(height * scale)}px`;
      page.style.overflow = 'hidden';
    });
  });
}

function resetPagesAfterPrint() {
  document.querySelectorAll('.print-page').forEach(page => {
    const inner = page.firstElementChild;
    if (!inner) return;
    inner.style.transform = '';
    inner.style.width = '';
    inner.style.transformOrigin = '';
    page.style.height = '';
    page.style.overflow = '';
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
        <ProjectPage projectKey="ai-voice" showTroubleshooting={false} />
      </div>

      {/* Page 2-1: AI 보이스 상담 — 문제 해결 기록 */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <TroubleshootingPage projectKey="ai-voice" />
      </div>

      {/* Page 2-1: AI 보이스 상담 — 결과물 화면 (실서비스 챗봇) */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <ScreenshotPage projectKey="ai-voice" />
      </div>

      {/* Page 3: AIDE 교사 행정업무 지원 시스템 */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <ProjectPage projectKey="aide" showTroubleshooting={false} />
      </div>

      {/* Page 3-1: AIDE — 문제 해결 기록 */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <TroubleshootingPage projectKey="aide" />
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
