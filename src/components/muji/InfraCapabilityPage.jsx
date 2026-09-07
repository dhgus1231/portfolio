import { jdMapping, gaps } from '../../data/muji';

const LEVEL = {
  high: { label: '직접 수행', cls: 'bg-blue-600 text-white' },
  mid: { label: '직접 수행', cls: 'bg-blue-500 text-white' },
  low: { label: '인접 경험', cls: 'bg-slate-400 text-white' },
};

export default function InfraCapabilityPage() {
  return (
    <div className="min-h-screen print:min-h-0 print:h-auto bg-white p-10 print:p-6 flex flex-col gap-4 print:gap-3">
      <header className="border-b-2 border-slate-800 pb-2">
        <p className="text-xs text-blue-600 font-semibold tracking-wider uppercase">
          MUJI · 경영기획팀 네트워크 인프라 담당자 지원
        </p>
        <h1 className="text-2xl font-bold text-slate-900 mt-1 print:text-xl">담당업무별 보유 경험</h1>
        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
          채용 공고의 담당업무를 기준으로 실제 수행한 일을 정리했습니다. 하지 않은 일은 마지막에 그대로 적었습니다.
        </p>
      </header>

      <div className="flex flex-col gap-2 print:gap-2">
        {jdMapping.map((m) => (
          <section key={m.axis} className="border border-slate-200 rounded-xl print:rounded-lg overflow-hidden">
            <div className="flex items-center gap-2.5 bg-slate-50 px-4 py-2 border-b border-slate-200">
              <h2 className="font-bold text-slate-900 text-sm print:text-xs">{m.axis}</h2>
              <span className="text-xs text-slate-500">{m.sub}</span>
              <span className={`ml-auto text-xs px-2 py-0.5 rounded-full shrink-0 ${LEVEL[m.level].cls}`}>
                {LEVEL[m.level].label}
              </span>
            </div>
            <ul className="flex flex-col gap-1 px-4 py-2.5 print:py-2">
              {m.items.map((it, i) => (
                <li key={i} className="text-xs text-slate-700 leading-relaxed flex gap-2">
                  <span className="text-blue-500 shrink-0 font-bold">·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="border border-slate-300 rounded-xl print:rounded-lg bg-slate-50 px-4 py-2.5 print:py-2">
        <h2 className="font-bold text-slate-900 text-sm print:text-xs mb-2">아직 경험하지 못한 영역</h2>
        <div className="grid grid-cols-2 gap-4 print:gap-3">
          <div>
            <p className="text-xs font-semibold text-slate-500 mb-1">입사 후 배워야 하는 것</p>
            <ul className="flex flex-col gap-0.5">
              {gaps.none.map((g) => (
                <li key={g} className="text-xs text-slate-600 flex gap-1.5">
                  <span className="text-slate-400 shrink-0">·</span>{g}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 mb-1">기반이 되는 것</p>
            <ul className="flex flex-col gap-0.5">
              {gaps.have.map((g) => (
                <li key={g} className="text-xs text-slate-700 flex gap-1.5">
                  <span className="text-blue-500 shrink-0">✓</span>{g}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-2.5 leading-relaxed border-t border-slate-200 pt-2">
          장비를 직접 운영해 본 적은 없지만, 그 위에서 무엇이 어떻게 오가는지는 확인하며 일했습니다.
          네트워크 계층에서 원인을 찾아본 경험이 현장에서 배우는 속도를 앞당길 것이라 생각합니다.
        </p>
      </section>
    </div>
  );
}
