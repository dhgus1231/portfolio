import { profile } from '../data/profile';

export default function Projects() {
  return (
    <section className="py-10 px-8 border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Projects</h2>
        <div className="flex flex-col gap-6 print:flex print:flex-col print:gap-3">
          {profile.projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-xl border overflow-hidden print:rounded-md break-inside-avoid ${
                project.highlight ? 'border-blue-200' : 'border-slate-200'
              }`}
            >
              {/* Header */}
              <div className={`px-6 py-4 print:px-3 print:py-1.5 ${project.highlight ? 'bg-blue-50' : 'bg-slate-50'}`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 print:text-xs print:font-bold">{project.title}</h3>
                    <p className="text-sm text-slate-500 print:text-xs">{project.subtitle}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-medium text-blue-600 print:text-xs">{project.period}</p>
                    <p className="text-xs text-slate-500">{project.role}</p>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 print:px-3 print:py-2 bg-white flex flex-col gap-4 print:gap-1.5">
                {/* Overview */}
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 print:mb-0.5">Overview</p>
                  <p className="text-sm text-slate-700 leading-relaxed print:text-xs print:leading-snug">{project.overview}</p>
                </div>

                {/* Contribution */}
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 print:mb-0.5">My Contribution</p>
                  <ul className="flex flex-col gap-1.5 print:gap-0.5">
                    {project.contribution.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-700 print:text-xs print:leading-snug">
                        <span className="text-blue-400 shrink-0 mt-0.5">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 print:gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium print:border print:border-slate-300 print:bg-white print:px-1 print:py-0 print:text-xs"
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
    </section>
  );
}
