import { useState } from 'react';
import { profile } from '../data/profile';

function Shot({ shot }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex-1 flex flex-col items-center gap-2 print:gap-1.5 break-inside-avoid">
      {failed ? (
        <div className="shot-img w-full min-h-[45vh] print:min-h-[100mm] flex flex-col items-center justify-center gap-1 rounded-2xl print:rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-400">이미지 준비 중</p>
          <p className="text-xs text-slate-400 break-all text-center">public/{shot.src}</p>
        </div>
      ) : (
        <img
          src={`${import.meta.env.BASE_URL}${shot.src}`}
          alt={shot.caption}
          onError={() => setFailed(true)}
          className="shot-img w-full object-contain rounded-2xl print:rounded-xl border border-slate-200 shadow-md print:shadow-none bg-white"
        />
      )}
      <div className="text-center">
        <p className="text-sm font-semibold text-slate-700 print:text-xs">{shot.caption}</p>
        {shot.desc && (
          <p className="text-xs text-slate-500 leading-snug mt-0.5">{shot.desc}</p>
        )}
      </div>
    </div>
  );
}

export default function ScreenshotPage({ projectKey }) {
  const project = profile.projects.find(p => p.key === projectKey);
  if (!project?.screens) return null;

  const { label, note, shots } = project.screens;

  return (
    <div className="p-8 print:p-5 bg-white min-h-screen print:min-h-0 flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between pb-3 mb-5 border-b-2 border-slate-200 print:mb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 print:text-xl">
            {project.title}
            <span className="text-base font-medium text-slate-400 ml-2 print:text-sm">결과물 화면</span>
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">{label || project.subtitle}</p>
        </div>
        {project.demo && (
          <div className="text-right shrink-0">
            <p className="text-xs text-slate-400 mb-0.5">실제 서비스</p>
            <a
              href={project.demo.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline print:no-underline"
            >
              🔗 {project.demo.label}
            </a>
          </div>
        )}
      </div>

      {/* Shots — 3장 이상이면 2열 그리드로 배치해 각 캡처를 크게 보여준다.
          가로로만 늘어놓으면 4장일 때 폭이 1/4로 줄어 화면 내용이 안 보인다. */}
      <div
        className={
          shots.length >= 3
            ? 'grid grid-cols-2 gap-x-6 gap-y-5 print:gap-x-4 print:gap-y-3 items-start flex-1'
            : 'flex gap-6 print:gap-4 items-start justify-center flex-1'
        }
      >
        {shots.map((shot, i) => (
          <Shot key={i} shot={shot} />
        ))}
      </div>

      {note && (
        <p className="text-xs text-slate-400 mt-4 print:mt-3 text-center">{note}</p>
      )}
    </div>
  );
}
