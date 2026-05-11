import { profile } from '../data/profile';

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen print:min-h-0 print:h-auto bg-white">
      {/* ── Left Sidebar ───────────────────────────────── */}
      <aside className="w-72 bg-slate-900 text-white flex flex-col gap-6 p-8 shrink-0 print:w-56 print:p-5 print:gap-4">
        {/* Photo + Name */}
        <div className="flex flex-col items-center gap-3 print:gap-2">
          <div className="w-28 h-28 rounded-full bg-slate-600 border-2 border-slate-500 print:w-20 print:h-20 flex items-center justify-center overflow-hidden">
            <span className="text-slate-400 text-xs">사진</span>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold print:text-lg">{profile.name}</h1>
            <p className="text-slate-400 text-sm print:text-xs">{profile.nameEn}</p>
            <p className="text-blue-300 font-medium mt-1 text-sm print:text-xs">{profile.title}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-slate-300 text-xs leading-relaxed border-t border-slate-700 pt-4 print:pt-3">{profile.bio}</p>

        {/* Contact */}
        <div className="border-t border-slate-700 pt-4 print:pt-3">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Contact</p>
          <div className="flex flex-col gap-1.5">
            <a href={`mailto:${profile.email}`} className="text-xs text-slate-300 hover:text-white">✉ {profile.email}</a>
            <span className="text-xs text-slate-300">☎ {profile.phone}</span>
            <a href={profile.github} className="text-xs text-slate-300 hover:text-white" target="_blank" rel="noreferrer">
              ⌥ {profile.github.replace('https://', '')}
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="border-t border-slate-700 pt-4 print:pt-3 flex-1">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 print:mb-2">Skills</p>
          <div className="flex flex-col gap-3 print:gap-2">
            {profile.skills.map((group) => (
              <div key={group.category}>
                <p className="text-xs text-blue-300 font-semibold mb-0.5">{group.category}</p>
                {group.desc && <p className="text-xs text-slate-400 italic mb-1">{group.desc}</p>}
                <div className="flex flex-wrap gap-1">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs text-slate-300 bg-slate-700 px-1.5 py-0.5 rounded print:bg-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* ── Right Content ──────────────────────────────── */}
      <main className="flex-1 p-8 print:p-6 flex flex-col gap-6 print:gap-4">
        {/* Headline */}
        {profile.headline && (
          <div className="border-l-4 border-blue-500 pl-4 py-1">
            <p className="text-slate-700 font-medium text-sm print:text-xs">{profile.headline}</p>
          </div>
        )}

        {/* 핵심역량 */}
        {profile.strengths && (
          <div>
            <h2 className="text-lg font-bold text-slate-800 pb-1.5 mb-3 border-b-2 border-slate-200 print:text-base print:mb-2">핵심역량</h2>
            <div className="grid grid-cols-3 gap-3 print:gap-2">
              {profile.strengths.map((s) => (
                <div key={s.keyword} className="bg-blue-50 rounded-xl p-4 border border-blue-100 print:rounded-lg print:p-3">
                  <p className="font-bold text-blue-700 text-sm print:text-xs">{s.keyword}</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        <div>
          <h2 className="text-lg font-bold text-slate-800 pb-1.5 mb-3 border-b-2 border-slate-200 print:text-base print:mb-2">Experience</h2>
          <div className="flex flex-col gap-4 print:gap-3">
            {profile.experience.map((exp) => (
              <div key={exp.company} className="flex gap-4">
                <div className="w-0.5 bg-blue-300 rounded-full shrink-0 print:bg-blue-400" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm print:text-xs">{exp.company}</h3>
                      <p className="text-xs text-slate-500">{exp.role} · {exp.department}</p>
                    </div>
                    <p className="text-xs text-blue-600 font-medium shrink-0">{exp.period}</p>
                  </div>
                  <ul className="flex flex-col gap-0.5">
                    {exp.tasks.map((task) => (
                      <li key={task} className="text-xs text-slate-700 flex gap-1.5">
                        <span className="text-blue-400 shrink-0">·</span>{task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education + Certifications side by side */}
        <div className="grid grid-cols-2 gap-6 print:gap-4">
          {/* Education + Military */}
          <div>
            <h2 className="text-lg font-bold text-slate-800 pb-1.5 mb-3 border-b-2 border-slate-200 print:text-base print:mb-2">Education</h2>
            <div className="flex flex-col gap-3 print:gap-2">
              {profile.education.map((edu) => (
                <div key={edu.school} className="bg-slate-50 rounded-xl p-4 print:rounded-lg print:p-3 border border-slate-100">
                  <h3 className="font-bold text-slate-900 text-sm print:text-xs">{edu.school}</h3>
                  <p className="text-xs text-blue-600 font-medium mt-0.5">{edu.major} · {edu.degree}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{edu.period} · {edu.location}</p>
                  <p className="text-xs text-slate-600 mt-0.5">학점 <span className="font-semibold">{edu.gpa}</span></p>
                </div>
              ))}
              <div className="bg-slate-50 rounded-xl p-4 print:rounded-lg print:p-3 border border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm print:text-xs">병역</h3>
                <p className="text-xs text-slate-600 mt-0.5">{profile.military.rank}</p>
                <p className="text-xs text-slate-500">{profile.military.period}</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-lg font-bold text-slate-800 pb-1.5 mb-3 border-b-2 border-slate-200 print:text-base print:mb-2">Certifications</h2>
            <div className="flex flex-col gap-2.5 print:gap-2">
              {profile.certifications.map((cert) => (
                <div key={cert.name} className="flex items-start gap-2.5 bg-slate-50 rounded-xl p-3.5 print:rounded-lg print:p-3 border border-slate-100">
                  <span className="text-blue-500 font-bold text-sm shrink-0 print:text-xs">✓</span>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm print:text-xs">{cert.name}</p>
                    <p className="text-xs text-slate-500">{cert.issuer} · {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
