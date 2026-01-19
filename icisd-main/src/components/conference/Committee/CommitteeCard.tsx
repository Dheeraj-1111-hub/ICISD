import React from 'react';

interface CommitteeCardProps {
  name: string;
  role: string;
  organization: string;
  img?: string;
}

export const CommitteeCard = ({
  name,
  role,
  organization,
  img,
}: CommitteeCardProps) => {
  // Safer initials logic (max 2 chars, uppercase)
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div
      className="
        group
        relative
        flex flex-col items-center
        bg-white
        rounded-2xl
        border border-slate-200
        shadow-sm
        overflow-hidden
        transition-all duration-300
        hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]
        hover:border-emerald-200
        hover:-translate-y-1
      "
    >
      {/* Decorative Gradient Header */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-br from-emerald-50 to-emerald-100/50" />

      {/* Avatar Container */}
      <div className="relative mt-8 mb-5">
        <div
          className="
            relative
            w-28 h-28
            rounded-full
            p-1
            bg-white
            ring-1 ring-slate-100
            shadow-sm
            group-hover:ring-emerald-100
            transition-all duration-300
          "
        >
          {/* Inner Circle */}
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-50 flex items-center justify-center">
            {img ? (
              <img
                src={img}
                alt={name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-2xl tracking-wider">
                {initials}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-8 text-center w-full">
        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
          {name}
        </h3>

        {role && (
          <div className="text-sm font-semibold text-emerald-600 mb-3 uppercase tracking-wide text-[11px]">
            {role}
          </div>
        )}

        {/* Subtle separator */}
        <div className="w-12 h-0.5 bg-slate-100 mx-auto mb-4 group-hover:bg-emerald-100 transition-colors" />

        <p className="text-sm text-slate-500 leading-relaxed px-2 font-medium">
            {organization}
        </p>
      </div>
    </div>
  );
};