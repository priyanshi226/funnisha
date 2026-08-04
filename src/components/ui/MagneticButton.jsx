import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  as = "button",
  className = "",
  tone = "solid",
  ...rest
}) {
  const Tag = motion[as] ?? motion.button;

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
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 ${tones[tone]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
