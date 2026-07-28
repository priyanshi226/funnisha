import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  as = "button",
  className = "",
  tone = "solid",
  ...rest
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const Tag = motion[as] ?? motion.button;

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.28, y: y * 0.35 });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  const tones = {
    solid:
      "bg-olive text-cream hover:bg-forest",
    outline:
      "border border-olive/30 text-olive hover:border-olive",
    light:
      "bg-cream text-olive hover:bg-white",
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 ${tones[tone]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
