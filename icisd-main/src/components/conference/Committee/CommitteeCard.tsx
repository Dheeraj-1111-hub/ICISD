
interface CommitteeCardProps {
  name: string;
  role: string;
  organization: string;
}

export const CommitteeCard = ({
  name,
  role,
  organization,
}: CommitteeCardProps) => {
  return (
    <div
      className="
        group
        relative
        bg-white
        rounded-2xl
        border border-slate-200
        p-9
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_20px_50px_-16px_rgba(0,0,0,0.16)]
        hover:border-emerald-300
      "
    >
      {/* Top Accent Line */}
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-emerald-400 to-emerald-600" />

      {/* Content */}
      <div className="text-center">
        {/* Name */}
        <h3 className="text-[22px] font-semibold text-slate-900 tracking-tight mb-3 leading-snug">
          {name}
        </h3>

        {/* Role */}
        {role && (
          <p className="text-sm font-semibold text-emerald-600 uppercase tracking-[0.15em] mb-5">
            {role}
          </p>
        )}

        {/* Divider */}
        <div className="w-16 h-[1.5px] bg-slate-200 mx-auto mb-5 group-hover:bg-emerald-300 transition-colors" />

        {/* Organization */}
        <p className="text-base text-slate-600 leading-relaxed font-medium px-2">
          {organization}
        </p>
      </div>
    </div>
  );
};
