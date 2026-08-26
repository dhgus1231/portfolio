import { profile } from '../data/profile';
import { troubleshooting } from '../data/troubleshooting';

const categoryColor = {
  기술: 'bg-blue-100 text-blue-700',
  업무: 'bg-orange-100 text-orange-700',
};

function TroubleCard({ item }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 print:p-3 break-inside-avoid">
      <div className="flex items-center gap-1.5 mb-2 print:mb-1.5 flex-wrap">
        <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-full shrink-0 ${categoryColor[item.category]}`}>
          {item.category}
        </span>
        <span className="text-xs font-semibold text-slate-700">{item.title}</span>
      </div>
      <div className="flex flex-col gap-1.5 print:gap-1">
        {[
          { label: '문제', color: 'bg-red-400', text: item.problem },
          { label: '원인', color: 'bg-yellow-400', text: item.cause },
          { label: '해결', color: 'bg-blue-400', text: item.solution },
          { label: '결과', color: 'bg-green-400', text: item.result },
        ].map(({ label, color, text }) => (
          <div key={label} className="flex gap-2">
            <div className="flex items-start gap-1 shrink-0 pt-0.5">
              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${color}`} />
              <span className="text-xs font-semibold text-slate-500 w-7 shrink-0">{label}</span>
            </div>
            <p className="text-xs text-slate-700 leading-snug">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TroubleshootingPage({ projectKey }) {
  const project = profile.projects.find(p => p.key === projectKey);
  const items = troubleshooting.filter(t => t.projectKey === projectKey);
  if (!project || items.length === 0) return null;

  return (
    <div className="p-8 print:p-5 bg-white min-h-screen print:min-h-0">
      {/* Header */}
      <div className="flex items-start justify-between pb-3 mb-5 border-b-2 border-slate-200 print:mb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 print:text-xl">
            {project.title}
            <span className="text-base font-medium text-slate-400 ml-2 print:text-sm">문제 해결 기록</span>
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">{project.subtitle}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-sm font-semibold text-blue-600">{project.period}</p>
          <p className="text-xs text-slate-500">{project.role}</p>
        </div>
      </div>

      <div className={`grid gap-3.5 print:gap-3 ${items.length >= 3 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {items.map((item, i) => (
          <TroubleCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
