import { profile } from '../data/profile';
import { troubleshooting } from '../data/troubleshooting';

const categoryColor = {
  기술: 'bg-blue-100 text-blue-700',
  업무: 'bg-orange-100 text-orange-700',
};

function FlowRow({ nodes }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {nodes.map((node, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <div className="bg-blue-50 border border-blue-200 text-blue-800 px-2.5 py-1.5 rounded-lg text-xs font-medium text-center whitespace-pre-line leading-tight">
            {node}
          </div>
          {i < nodes.length - 1 && (
            <span className="text-blue-300 font-bold text-sm">→</span>
          )}
        </div>
      ))}
    </div>
  );
}

function ArchitectureFlow({ architecture }) {
  // flows 배열이 있으면 복수 플로우, 없으면 단일 flow
  const flows = architecture.flows
    ? architecture.flows
    : [{ nodes: architecture.flow }];

  return (
    <div className="flex flex-col gap-2.5 print:gap-2">
      {flows.map((f, i) => (
        <div key={i}>
          {f.label && (
            <p className="text-xs text-slate-400 font-medium mb-1">{f.label}</p>
          )}
          <FlowRow nodes={f.nodes} />
        </div>
      ))}
      {architecture.note && (
        <p className="text-xs text-slate-500">{architecture.note}</p>
      )}
    </div>
  );
}

function TroubleCard({ item }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 print:p-2.5">
      <div className="flex items-center gap-1.5 mb-2 print:mb-1.5">
        <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-full shrink-0 ${categoryColor[item.category]}`}>
          {item.category}
        </span>
        <h4 className="text-xs font-bold text-slate-800 leading-snug">{item.title}</h4>
      </div>
      <div className="flex flex-col gap-1.5 print:gap-1">
        {[
          { label: '문제', color: 'bg-red-400', text: item.problem },
          { label: '해결', color: 'bg-blue-400', text: item.solution },
          { label: '결과', color: 'bg-green-400', text: item.result },
        ].map(({ label, color, text }) => (
          <div key={label} className="flex gap-1.5">
            <div className="flex items-center gap-1 shrink-0 pt-0.5">
              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${color}`} />
              <span className="text-xs font-semibold text-slate-500 w-6 shrink-0">{label}</span>
            </div>
            <p className="text-xs text-slate-700 leading-snug">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectPage({ projectKey }) {
  const project = profile.projects.find(p => p.key === projectKey);
  const items = troubleshooting.filter(t => t.projectKey === projectKey);

  return (
    <div className="p-8 print:p-5 bg-white min-h-screen print:min-h-0">
      {/* Header */}
      <div className="flex items-start justify-between pb-3 mb-5 border-b-2 border-slate-200 print:mb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 print:text-xl">{project.title}</h2>
          <p className="text-sm text-slate-500 mt-0.5">{project.subtitle}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-sm font-semibold text-blue-600">{project.period}</p>
          <p className="text-xs text-slate-500">{project.role}</p>
        </div>
      </div>

      {/* Body: Left + Right */}
      <div className="flex gap-6 print:gap-5">

        {/* ── Left: Overview + Architecture + Tags ── */}
        <div className="w-2/5 flex flex-col gap-4 print:gap-3 shrink-0">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Overview</p>
            <p className="text-sm text-slate-700 leading-relaxed print:text-xs print:leading-snug">{project.overview}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Architecture</p>
            <ArchitectureFlow architecture={project.architecture} />
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Tech Stack</p>
            {project.techRationale ? (
              <div className="flex flex-col gap-1.5">
                {project.techRationale.map(({ tech, reason }) => (
                  <div key={tech}>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">{tech}</span>
                    <span className="text-xs text-slate-500 ml-1.5 leading-snug">{reason}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-1">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium print:border print:border-slate-200 print:bg-white">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Right: Contribution + Growth ── */}
        <div className="flex-1 flex flex-col gap-4 print:gap-3">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">My Contribution</p>
            <ul className="flex flex-col gap-1.5 print:gap-1">
              {project.contribution.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-700 leading-snug print:text-xs">
                  <span className="text-blue-400 shrink-0 mt-0.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {project.growth && (
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">배운점 & 향후 개선 방향</p>
              <div className="grid grid-cols-2 gap-3 print:gap-2">
                <div className="bg-green-50 border border-green-100 rounded-lg p-3 print:p-2.5">
                  <p className="text-xs font-semibold text-green-700 mb-1.5">배운점</p>
                  <ul className="flex flex-col gap-1">
                    {project.growth.lessons.map((l, i) => (
                      <li key={i} className="flex gap-1.5 text-xs text-slate-700 leading-snug">
                        <span className="text-green-400 shrink-0">·</span>{l}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 print:p-2.5">
                  <p className="text-xs font-semibold text-orange-700 mb-1.5">향후 개선 방향</p>
                  <ul className="flex flex-col gap-1">
                    {project.growth.improvements.map((imp, i) => (
                      <li key={i} className="flex gap-1.5 text-xs text-slate-700 leading-snug">
                        <span className="text-orange-400 shrink-0">·</span>{imp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Problem Solving ── */}
      {project.problemSolving && (
        <div className="mt-5 print:mt-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">문제 해결 과정</p>
          <div className="grid grid-cols-4 gap-2 print:gap-1.5">
            {[
              { label: '문제', color: 'bg-red-50 border-red-100', labelColor: 'text-red-600', dot: 'bg-red-400', items: project.problemSolving.problem },
              { label: '영향', color: 'bg-orange-50 border-orange-100', labelColor: 'text-orange-600', dot: 'bg-orange-400', items: project.problemSolving.impact },
              { label: '해결', color: 'bg-blue-50 border-blue-100', labelColor: 'text-blue-600', dot: 'bg-blue-400', items: project.problemSolving.solution },
              { label: '결과', color: 'bg-green-50 border-green-100', labelColor: 'text-green-600', dot: 'bg-green-400', items: project.problemSolving.result },
            ].map(({ label, color, labelColor, dot, items }) => (
              <div key={label} className={`${color} border rounded-lg p-3 print:p-2.5`}>
                <p className={`text-xs font-bold ${labelColor} mb-1.5`}>{label}</p>
                <ul className="flex flex-col gap-1">
                  {items.map((item, i) => (
                    <li key={i} className="flex gap-1.5 text-xs text-slate-700 leading-snug">
                      <div className={`w-1 h-1 rounded-full ${dot} shrink-0 mt-1.5`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Troubleshooting ── */}
      {items.length > 0 && (
        <div className="mt-5 print:mt-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Troubleshooting</p>
          <div className={`grid gap-3 print:gap-2 ${items.length >= 3 ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {items.map((item, i) => (
              <TroubleCard key={i} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* ── Screenshots ── */}
      {project.screenshots && (
        <div className="mt-6 print:mt-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">App Screenshots</p>
          <div className="flex gap-4 print:gap-3">
            {project.screenshots.map((shot, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                <div className="rounded-2xl print:rounded-xl overflow-hidden border border-slate-200 shadow-md print:shadow-none w-full">
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    className="w-full object-cover"
                  />
                </div>
                <p className="text-xs text-slate-500 text-center">{shot.caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
