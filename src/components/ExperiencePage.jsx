import { profile } from '../data/profile';
import { troubleshooting } from '../data/troubleshooting';

const categoryColor = {
  기술: 'bg-blue-100 text-blue-700',
  업무: 'bg-orange-100 text-orange-700',
};

export default function ExperiencePage() {
  const exp = profile.experience.find(e => e.key === 'wiseitech');
  const items = troubleshooting.filter(t => t.projectKey === 'wiseitech');

  return (
    <div className="p-8 print:p-5 bg-white min-h-screen print:min-h-0">
      {/* Header */}
      <div className="flex items-start justify-between pb-3 mb-5 border-b-2 border-slate-200 print:mb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 print:text-xl">{exp.company}</h2>
          <p className="text-sm text-slate-500 mt-0.5">{exp.role} · {exp.department}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-sm font-semibold text-blue-600">{exp.period}</p>
          <p className="text-xs text-slate-500">인턴십</p>
        </div>
      </div>

      {/* Body */}
      <div className="flex gap-6 print:gap-5">

        {/* ── Left: 업무 내용 ── */}
        <div className="w-2/5 shrink-0 flex flex-col gap-4 print:gap-3">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Overview</p>
            <p className="text-sm text-slate-700 leading-relaxed print:text-xs print:leading-snug">
              공공기관 대상 데이터 품질 진단 및 개선을 전문으로 하는 위세아이텍 DM사업부에서 인턴으로 근무하며, 공공데이터 품질 진단·분석 업무와 함께 반복 업무 자동화 및 처리 성능 개선에 기여했습니다.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">주요 업무</p>
            <ul className="flex flex-col gap-2">
              {[
                '공공기관 제출 데이터셋 품질 진단 및 오류 항목 분류',
                'DB 기반 데이터 분석 및 논리적 개선 방안 보고서 작성',
                '심사 담당자 배정 자동화 (Python 스크립트 개발)',
                '대용량 엑셀 파일 병렬 처리 최적화 (Java 멀티스레딩)',
              ].map((task, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-700 leading-snug print:text-xs">
                  <span className="text-blue-400 shrink-0 mt-0.5">▸</span>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Right: Troubleshooting ── */}
        <div className="flex-1 flex flex-col gap-3 print:gap-2.5">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Troubleshooting</p>
          <div className="flex flex-col gap-4 print:gap-3">
            {items.map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4 print:rounded-lg print:p-3">
                <div className="flex items-center gap-2 mb-3 print:mb-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColor[item.category]}`}>
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-800 print:text-xs">{item.title}</h4>
                </div>
                <div className="flex flex-col gap-2 print:gap-1.5">
                  {[
                    { label: '문제 상황', color: 'bg-red-400', text: item.problem },
                    { label: '원인 분석', color: 'bg-yellow-400', text: item.cause },
                    { label: '해결 방법', color: 'bg-blue-400', text: item.solution },
                    { label: '결과', color: 'bg-green-400', text: item.result },
                  ].map(({ label, color, text }) => (
                    <div key={label} className="flex gap-2">
                      <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${color}`} />
                        <span className="text-xs font-semibold text-slate-500 w-14 shrink-0">{label}</span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed print:text-xs">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
