interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
}

export default function StatsCard({
  title,
  value,
  icon,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <span className="text-3xl">{icon}</span>

        <span className="text-sm text-slate-400">
          {title}
        </span>
      </div>

      <h2 className="mt-5 text-4xl font-black text-white">
        {value}
      </h2>
    </div>
  );
}