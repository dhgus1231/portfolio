import { troubleshooting } from '../data/troubleshooting';

const categoryColor = {
  기술: 'bg-blue-100 text-blue-700',
  업무: 'bg-orange-100 text-orange-700',
};

export default function Troubleshooting() {
  return (
    <section className="py-10 px-8 border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Troubleshooting</h2>
        <p className="text-sm text-slate-500 mb-6 print:hidden">문제를 어떻게 정의하고 해결했는지에 대한 기록입니다.</p>
        <div className="flex flex-col gap-5 print:flex print:flex-col print:gap-2.5">
          {troubleshooting.map((item, i) => (
            <div
              key={i}
              className={`bg-white border border-slate-200 rounded-xl overflow-hidden print:rounded-md break-inside-avoid ${
                i === 4 ? 'print-page-break' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-2 px-6 py-3 print:px-3 print:py-1.5 bg-slate-50 border-b border-slate-200 flex-wrap">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColor[item.category]}`}>
                  {item.category}
                </span>
                <span className="text-xs text-slate-400">{item.project}</span>
                <span className="text-xs font-semibold text-slate-700 print:text-xs">· {item.title}</span>
              </div>
              <div className="px-6 py-3 print:px-3 print:py-2">
                <div className="flex flex-col gap-2 print:gap-1">
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
                      <p className="text-sm text-slate-700 leading-relaxed print:text-xs print:leading-snug">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
