export function StatPill({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-full border border-line-100 bg-white px-4 py-2 shadow-[0_6px_18px_rgba(20,20,20,0.06)]">
      <span className="text-sm font-bold text-smoke-900">{value}</span>
      <span className="ml-2 text-xs text-smoke-600">{label}</span>
    </div>
  );
}
