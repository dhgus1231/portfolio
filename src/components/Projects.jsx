import { profile } from '../data/profile';

const FILTERS = [
  { key: 'all', label: '전체' },
  { key: 'ai', label: 'AI · Agent' },
  { key: 'backend', label: '백엔드 · 인프라' },
];

function countBy(key) {
  if (key === 'all') return profile.projects.length;
  return profile.projects.filter(p => p.category === key).length;
}

function FeaturedCard({ project, onSelect }) {
  return (
    <button
      onClick={() => onSelect(project.key)}
      className="text-left bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all overflow-hidden flex flex-col group"
    >
      <div className="px-5 py-4 border-b border-slate-100">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-slate-900 leading-snug">{project.title}</h3>
          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full shrink-0">
            대표
          </span>
        </div>
        <p className="text-xs text-slate-500 mt-1 line-clamp-1">{project.subtitle}</p>
        <div className="flex items-center gap-2 mt-2 text-xs">
          <span className="text-blue-600 font-medium shrink-0">{project.period}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400 line-clamp-1">{project.role}</span>
        </div>
      </div>

      <div className="px-5 py-4 flex flex-col gap-3 flex-1">
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{project.overview}</p>

        <div className="flex flex-wrap gap-1 mt-auto">
          {project.tags.slice(0, 5).map(tag => (
            <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-[10px] px-1.5 py-0.5 text-slate-400">+{project.tags.length - 5}</span>
          )}
        </div>

        <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-700">자세히 보기 →</span>
      </div>
    </button>
  );
}

function CompactCard({ project, onSelect }) {
  return (
    <button
      onClick={() => onSelect(project.key)}
      className="text-left bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all px-4 py-3 flex flex-col gap-1.5 group"
    >
      <h3 className="font-semibold text-slate-800 text-sm leading-snug line-clamp-2">{project.title}</h3>
      <p className="text-[11px] text-slate-400 line-clamp-1">{project.subtitle}</p>
      <span className="text-[11px] text-blue-600 font-medium">{project.period}</span>
      <div className="flex flex-wrap gap-1 mt-1">
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500">
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}

/**
 * 프로젝트 목록(인덱스). 화면 탐색 전용 — 인쇄 시에는 제외된다.
 * 대표 프로젝트는 큰 카드, 나머지는 작은 카드로 보여준다.
 */
export default function ProjectIndex({ filter = 'all', onFilter, onSelect }) {
  const visible = profile.projects.filter(p => filter === 'all' || p.category === filter);
  const featured = visible.filter(p => p.highlight);
  const rest = visible.filter(p => !p.highlight);

  return (
    <div className="no-print max-w-6xl mx-auto px-6 py-10">
      {/* 헤더 + 필터 탭 */}
      <div className="flex items-end justify-between gap-4 border-b border-slate-300 pb-2 mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Projects</h2>
          <p className="text-xs text-slate-500 mt-0.5">카드를 클릭하면 해당 프로젝트만 자세히 볼 수 있습니다</p>
        </div>
        <div className="flex items-center gap-4 text-xs shrink-0">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => onFilter(f.key)}
              className={`pb-1.5 -mb-[9px] border-b-2 transition-colors ${
                filter === f.key
                  ? 'text-blue-600 font-bold border-blue-600'
                  : 'text-slate-400 hover:text-slate-600 border-transparent'
              }`}
            >
              {f.label} <span className="opacity-60">{countBy(f.key)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 대표 프로젝트 */}
      {featured.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {featured.map(p => (
            <FeaturedCard key={p.key} project={p} onSelect={onSelect} />
          ))}
        </div>
      )}

      {/* 그 외 프로젝트 */}
      {rest.length > 0 && (
        <>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">그 외 프로젝트</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {rest.map(p => (
              <CompactCard key={p.key} project={p} onSelect={onSelect} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
