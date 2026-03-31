import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationCerts from './components/EducationCerts';
import Troubleshooting from './components/Troubleshooting';
import './index.css';

function App() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="no-print fixed bottom-6 right-6 z-50">
        <button
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-lg transition-colors"
        >
          PDF로 저장
        </button>
      </div>

      <Hero />
      <Skills />
      <Projects />
      <Troubleshooting />
      <Experience />
      <EducationCerts />

      <footer className="no-print py-8 text-center text-xs text-slate-400">
        © 2026 권오현 · Built with React
      </footer>
    </div>
  );
}

export default App;
