import { profile } from '../data/profile';

export default function Projects() {
  return (
    <div className="p-8 print:p-6 bg-white min-h-screen print:min-h-0">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 print:text-lg print:mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 print:grid-cols-3 print:gap-4">
        {profile.projects.map((project) => (
          <div
            key={project.title}
            className={`rounded-xl border overflow-hidden flex flex-col print:rounded-lg ${
              project.highlight ? 'border-blue-200' : 'border-slate-200'
            }`}
          >
            {/* Header */}
            <div className={`px-5 py-3 print:px-3 print:py-2 ${project.highlight ? 'bg-blue-50' : 'bg-slate-50'}`}>
              <h3 className="font-bold text-slate-900 text-sm print:text-xs">{project.title}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{project.subtitle}</p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-xs text-blue-600 font-medium">{project.period}</p>
                <p className="text-xs text-slate-500">{project.role}</p>
              </div>
            </div>

            <div className="px-5 py-4 print:px-3 print:py-2 bg-white flex flex-col gap-3 print:gap-2 flex-1">
              {/* Overview */}
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Overview</p>
                <p className="text-xs text-slate-700 leading-relaxed print:leading-snug">{project.overview}</p>
              </div>

              {/* Contribution */}
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">My Contribution</p>
                <ul className="flex flex-col gap-1">
                  {project.contribution.map((item, i) => (
                    <li key={i} className="flex gap-1.5 text-xs text-slate-700 leading-snug">
                      <span className="text-blue-400 shrink-0 mt-0.5">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-auto pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 print:border print:border-slate-200 print:bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
