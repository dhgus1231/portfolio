import ProfilePage from './components/ProfilePage';
import Projects from './components/Projects';
import Troubleshooting from './components/Troubleshooting';
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

      {/* Page 1: 프로필 */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <ProfilePage />
      </div>

      {/* Page 2: Projects */}
      <div className="print-page max-w-6xl mx-auto mb-8 print:mb-0 print:max-w-none shadow-lg print:shadow-none">
        <Projects />
      </div>

      {/* Pages 3-4: Troubleshooting */}
      <div className="max-w-6xl mx-auto print:max-w-none">
        <Troubleshooting />
      </div>

      <footer className="no-print py-8 text-center text-xs text-slate-400">
        © 2026 권오현 · Built with React
      </footer>
    </div>
  );
}

export default App;
