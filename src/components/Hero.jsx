import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-8 print:bg-white print:text-slate-900 print:py-8 print:border-b-2 print:border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-5xl font-bold tracking-tight print:text-4xl">{profile.name}</h1>
            <p className="text-slate-300 text-lg mt-1 print:text-slate-600">{profile.nameEn}</p>
            <p className="text-blue-300 text-xl font-medium mt-3 print:text-blue-700">{profile.title}</p>
            <p className="text-slate-300 mt-4 max-w-xl leading-relaxed text-sm print:text-slate-700 print:mt-2">
              {profile.bio}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-slate-300 print:text-slate-700 shrink-0">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-white print:text-slate-800">
              <span>✉</span> {profile.email}
            </a>
            <span className="flex items-center gap-2">
              <span>☎</span> {profile.phone}
            </span>
            <a href={profile.github} className="flex items-center gap-2 hover:text-white print:text-slate-800" target="_blank" rel="noreferrer">
              <span>⌥</span> {profile.github.replace('https://', '')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
