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
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      className="
        group
        relative
        bg-white
        border border-slate-200
        rounded-2xl
        px-8
        py-9
        text-center
        shadow-[0_1px_3px_rgba(0,0,0,0.06)]
        transition-all duration-300 ease-out
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)]
        hover:-translate-y-1
      "
    >
      <div className="absolute inset-x-8 top-0 h-[2px] bg-emerald-500/80 rounded-full" />

      {/* Avatar */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full bg-emerald-200/40 blur-lg opacity-70" />
        <div className="
          relative
          w-20 h-20
          rounded-full
          bg-white
          flex items-center justify-center
          text-emerald-700
          font-semibold
          text-xl
          ring-1 ring-slate-200
        ">
          {initials}
        </div>
      </div>
      <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight mb-1">
        {name}
      </h3>
      <p className="text-sm text-emerald-700 font-medium mb-1">
        {role}
      </p>

      <div className="w-10 h-px bg-slate-200 mx-auto my-3" />

      <p className="text-sm text-slate-600 leading-relaxed">
        {organization}
      </p>
    </div>
  );
};
