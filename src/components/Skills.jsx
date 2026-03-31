import { profile } from '../data/profile';

export default function Skills() {
  return (
    <section className="py-10 px-8 border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profile.skills.map((group) => (
            <div key={group.category} className="bg-slate-50 rounded-xl p-4 print:border print:border-slate-200 print:rounded-lg">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">{group.category}</p>
              <div className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="text-sm text-slate-700 font-medium">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
