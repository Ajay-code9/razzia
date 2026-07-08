export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
}) {
  const alignClass = center ? "text-center mx-auto" : "";
  return (
    <header className={`max-w-3xl ${alignClass}`}>
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-razzia-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-smoke-900 md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-smoke-600">{description}</p>
    </header>
  );
}
