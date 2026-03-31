import { troubleshooting } from '../data/troubleshooting';

const categoryColor = {
  기술: 'bg-blue-100 text-blue-700',
  업무: 'bg-orange-100 text-orange-700',
};

function TroubleCard({ item }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden print:rounded-lg">
      <div className="flex items-center gap-2 px-4 py-2.5 print:px-3 print:py-1.5 bg-slate-50 border-b border-slate-200 flex-wrap">
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${categoryColor[item.category]}`}>
          {item.category}
        </span>
        <span className="text-xs text-slate-400 shrink-0">{item.project}</span>
        <span className="text-xs font-semibold text-slate-700">· {item.title}</span>
      </div>
      <div className="px-4 py-3 print:px-3 print:py-2">
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
                <span className="text-xs font-semibold text-slate-500 w-8 shrink-0">{label}</span>
              </div>
              <p className="text-xs text-slate-700 leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TroubleshootingGroup({ items, title }) {
  return (
    <div className="p-8 print:p-6 bg-white min-h-screen print:min-h-0">
      <h2 className="text-2xl font-bold text-slate-800 mb-1 print:text-lg">Troubleshooting</h2>
      {title && <p className="text-sm text-slate-500 mb-5 print:hidden">문제를 어떻게 정의하고 해결했는지에 대한 기록입니다.</p>}
      {!title && <p className="text-xs text-slate-400 mb-4 print:mb-3">— 계속</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
        {items.map((item, i) => (
          <TroubleCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Troubleshooting() {
  return (
    <>
      <TroubleshootingGroup items={troubleshooting.slice(0, 4)} title={true} />
      <div className="print-page-break">
        <TroubleshootingGroup items={troubleshooting.slice(4)} title={false} />
      </div>
    </>
  );
}
