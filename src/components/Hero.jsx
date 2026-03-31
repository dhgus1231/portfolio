import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-8 print:bg-white print:py-6 print:border-b-2 print:border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* 이름 + 소개 */}
          <div className="flex items-center gap-6">
            {/* 사진 */}
            <div className="shrink-0 w-24 h-24 rounded-full bg-slate-600 border-2 border-slate-400 print:bg-slate-100 print:border-slate-300 flex items-center justify-center overflow-hidden">
              <span className="text-slate-400 text-xs text-center leading-tight">사진</span>
            </div>
            {/* 텍스트 */}
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-white print:text-slate-900 print:text-3xl">{profile.name}</h1>
              <p className="text-slate-300 text-lg mt-1 print:text-slate-600">{profile.nameEn}</p>
              <p className="text-blue-300 text-xl font-medium mt-2 print:text-blue-700">{profile.title}</p>
              <p className="text-slate-300 mt-3 max-w-xl leading-relaxed text-sm print:text-slate-700 print:mt-2">
                {profile.bio}
              </p>
            </div>
          </div>
          {/* 연락처 */}
          <div className="flex flex-col gap-2 text-sm shrink-0">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-slate-300 hover:text-white print:text-slate-800">
              <span>✉</span> {profile.email}
            </a>
            <span className="flex items-center gap-2 text-slate-300 print:text-slate-800">
              <span>☎</span> {profile.phone}
            </span>
            <a href={profile.github} className="flex items-center gap-2 text-slate-300 hover:text-white print:text-slate-800" target="_blank" rel="noreferrer">
              <span>⌥</span> {profile.github.replace('https://', '')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
