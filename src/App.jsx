import ProfilePage from './components/ProfilePage';
import ProjectPage from './components/ProjectPage';
import ExperiencePage from './components/ExperiencePage';
import './index.css';

function App() {
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

      {/* Page 6: 위세아이텍 인턴십 */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <ExperiencePage />
      </div>

      <footer className="no-print py-8 text-center text-xs text-slate-400">
        © 2026 권오현 · Built with React
      </footer>
    </div>
  );
}

export default App;
