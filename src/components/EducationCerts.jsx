import { profile } from '../data/profile';

export default function EducationCerts() {
  return (
    <section className="py-10 px-8 border-b border-slate-200">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 print:grid-cols-2 print:gap-6">
        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-5">Education</h2>
          {profile.education.map((edu) => (
            <div key={edu.school} className="bg-slate-50 rounded-xl p-5 print:rounded-md print:p-3 print:border print:border-slate-200">
              <h3 className="font-bold text-slate-900 print:text-xs">{edu.school}</h3>
              <p className="text-sm text-blue-600 font-medium print:text-xs">{edu.major} · {edu.degree}</p>
              <p className="text-sm text-slate-500 mt-1 print:text-xs print:mt-0.5">{edu.period}</p>
              <p className="text-sm text-slate-600 mt-1 print:text-xs print:mt-0.5">학점: <span className="font-semibold">{edu.gpa}</span></p>
            </div>
          ))}
          <div className="mt-4 bg-slate-50 rounded-xl p-5 print:rounded-md print:p-3 print:mt-2 print:border print:border-slate-200">
            <h3 className="font-bold text-slate-900 print:text-xs">병역</h3>
            <p className="text-sm text-slate-600 mt-1 print:text-xs print:mt-0.5">{profile.military.rank}</p>
            <p className="text-sm text-slate-500 print:text-xs">{profile.military.period}</p>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-5">Certifications</h2>
          <div className="flex flex-col gap-3 print:gap-1.5">
            {profile.certifications.map((cert) => (
              <div key={cert.name} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 print:rounded-md print:p-2.5 print:border print:border-slate-200">
                <span className="text-blue-500 text-lg shrink-0 print:text-sm">✓</span>
                <div>
                  <p className="font-semibold text-slate-800 text-sm print:text-xs">{cert.name}</p>
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
