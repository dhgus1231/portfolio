import { profile } from '../data/profile';

export default function Experience() {
  return (
    <section className="py-10 px-8 border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Experience</h2>
        <div className="flex flex-col gap-5">
          {profile.experience.map((exp) => (
            <div key={exp.company} className="flex gap-5">
              <div className="w-1 bg-blue-200 rounded-full shrink-0 print:bg-blue-400" />
              <div className="flex-1 pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{exp.company}</h3>
                    <p className="text-sm text-slate-500">{exp.role} · {exp.department}</p>
                  </div>
                  <p className="text-sm text-blue-600 font-medium shrink-0">{exp.period}</p>
                </div>
                <ul className="flex flex-col gap-1">
                  {exp.tasks.map((task) => (
                    <li key={task} className="text-sm text-slate-700 flex gap-2">
                      <span className="text-blue-400 shrink-0">·</span> {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
