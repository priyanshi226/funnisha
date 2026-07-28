export default function PortraitFrame({ className = "", variant = "hero" }) {
  const ring = variant === "hero";
  return (
    <div className={`relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] ${className}`}>
      <img
        src="/images/profile.jpeg"
        alt="Dr. CA CS Funnisha Garg"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(35,47,31,0) 55%, rgba(35,47,31,0.75) 100%)",
        }}
      />
      <div className="absolute inset-6 rounded-[2rem] border border-cream/25" />
      {ring && (
        <div className="absolute -right-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full border border-mustard/60" />
      )}
    </div>
  );
}
