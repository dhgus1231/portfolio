import { profile } from '../data/profile';

export default function EducationCerts() {
  return (
    <section className="py-10 px-8 border-b border-slate-200">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-5">Education</h2>
          {profile.education.map((edu) => (
            <div key={edu.school} className="bg-slate-50 rounded-xl p-5 print:border print:border-slate-200">
              <h3 className="font-bold text-slate-900">{edu.school}</h3>
              <p className="text-sm text-blue-600 font-medium">{edu.major} · {edu.degree}</p>
              <p className="text-sm text-slate-500 mt-1">{edu.period}</p>
              <p className="text-sm text-slate-600 mt-1">학점: <span className="font-semibold">{edu.gpa}</span></p>
            </div>
          ))}
          {/* Military */}
          <div className="mt-4 bg-slate-50 rounded-xl p-5 print:border print:border-slate-200">
            <h3 className="font-bold text-slate-900">병역</h3>
            <p className="text-sm text-slate-600 mt-1">{profile.military.rank}</p>
            <p className="text-sm text-slate-500">{profile.military.period}</p>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-5">Certifications</h2>
          <div className="flex flex-col gap-3">
            {profile.certifications.map((cert) => (
              <div key={cert.name} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 print:border print:border-slate-200">
                <span className="text-blue-500 text-lg shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{cert.name}</p>
                  <p className="text-xs text-slate-500">{cert.issuer} · {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
