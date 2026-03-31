import { profile } from '../data/profile';

export default function Projects() {
  return (
    <section className="py-10 px-8 border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Projects</h2>
        <div className="flex flex-col gap-5">
          {profile.projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-xl p-6 border print:rounded-lg print:p-4 ${
                project.highlight
                  ? 'border-blue-200 bg-blue-50 print:border-blue-300'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
                  <p className="text-sm text-slate-500">{project.subtitle}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-medium text-blue-600">{project.period}</p>
                  <p className="text-xs text-slate-500">{project.role}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mb-2 font-medium">{project.company}</p>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 font-medium print:border print:border-slate-300 print:bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
