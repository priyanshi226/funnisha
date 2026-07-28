import { motion } from "framer-motion";

export function FloatingStar({ className = "", size = 22, color = "var(--color-mustard)" }) {
  return (
    <motion.svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      animate={{ rotate: [0, 12, -8, 0], y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M12 0 L14.2 9.2 L24 12 L14.2 14.8 L12 24 L9.8 14.8 L0 12 L9.8 9.2 Z"
        fill={color}
      />
    </motion.svg>
  );
}

export function FloatingRing({ className = "", size = 60 }) {
  return (
    <motion.span
      className={`block rounded-full border ${className}`}
      style={{ width: size, height: size, borderColor: "var(--color-terracotta)" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
    />
  );
}

export function Blob({ className = "", fill = "var(--color-sage-light)" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill={fill}
        d="M45.4,-58.3C58.2,-49.6,67.5,-34.9,71.6,-18.7C75.7,-2.5,74.6,15.2,66.7,29.1C58.9,43,44.3,53.1,28.5,60.4C12.7,67.8,-4.4,72.4,-20.6,68.8C-36.9,65.2,-52.3,53.3,-61.6,38.1C-70.9,22.9,-74,4.5,-70.1,-11.9C-66.3,-28.3,-55.4,-42.7,-41.6,-51.6C-27.7,-60.5,-13.9,-63.9,1.7,-66.3C17.2,-68.6,32.7,-67,45.4,-58.3Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function DottedGrid({ className = "" }) {
  return <div className={`bg-dot-texture ${className}`} aria-hidden="true" />;
}

export function StampSeal({ className = "", label = "Since 2013" }) {
  return (
    <motion.div
      className={`flex h-24 w-24 items-center justify-center rounded-full border border-olive/25 text-center ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" className="absolute h-24 w-24">
        <defs>
          <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text fontSize="8.2" letterSpacing="2.5" fill="var(--color-olive)">
          <textPath href="#circlePath" startOffset="0%">
            CHARTERED ACCOUNTANT • COMPANY SECRETARY •
          </textPath>
        </text>
      </svg>
      <span className="font-display text-xs italic text-olive">{label}</span>
    </motion.div>
  );
}
