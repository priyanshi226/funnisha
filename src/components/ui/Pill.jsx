export default function Pill({ children, tone = "olive", className = "" }) {
  const tones = {
    olive: "bg-olive text-cream",
    cream: "bg-cream text-olive border border-olive/20",
    terracotta: "bg-terracotta text-cream",
    outline: "border border-ink/15 text-ink-soft",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.14em] uppercase ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
