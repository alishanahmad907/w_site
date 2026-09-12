import { motion } from "framer-motion";

interface DecorativeDividerProps {
  variant?: "ornate" | "floral" | "simple" | "lotus" | "vine";
  className?: string;
  color?: string;
  /** Use "ivory" for dividers on dark/burgundy backgrounds */
  theme?: "default" | "ivory";
}

export default function DecorativeDivider({
  variant = "ornate",
  className = "",
  color,
  theme = "default",
}: DecorativeDividerProps) {
  const resolvedColor = color ?? (theme === "ivory" ? "var(--color-cream)" : "var(--color-gold)");

  const dividers: Record<string, React.ReactNode> = {
    ornate: (
      <svg
        viewBox="0 0 400 50"
        className={`w-48 sm:w-64 md:w-80 h-auto ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Center diamond */}
        <path
          d="M200 8 L208 25 L200 42 L192 25 Z"
          fill={resolvedColor}
          opacity="0.8"
        />
        {/* Left scroll */}
        <path
          d="M185 25 Q170 15 150 20 Q130 25 120 18 Q110 12 100 18"
          stroke={resolvedColor}
          strokeWidth="1.2"
          opacity="0.6"
          fill="none"
        />
        <path
          d="M185 25 Q170 35 150 30 Q130 25 120 32 Q110 38 100 32"
          stroke={resolvedColor}
          strokeWidth="1.2"
          opacity="0.6"
          fill="none"
        />
        {/* Right scroll */}
        <path
          d="M215 25 Q230 15 250 20 Q270 25 280 18 Q290 12 300 18"
          stroke={resolvedColor}
          strokeWidth="1.2"
          opacity="0.6"
          fill="none"
        />
        <path
          d="M215 25 Q230 35 250 30 Q270 25 280 32 Q290 38 300 32"
          stroke={resolvedColor}
          strokeWidth="1.2"
          opacity="0.6"
          fill="none"
        />
        {/* End dots */}
        <circle cx="95" cy="25" r="2" fill={resolvedColor} opacity="0.5" />
        <circle cx="305" cy="25" r="2" fill={resolvedColor} opacity="0.5" />
        {/* Far lines */}
        <line x1="50" y1="25" x2="90" y2="25" stroke={resolvedColor} strokeWidth="0.5" opacity="0.3" />
        <line x1="310" y1="25" x2="350" y2="25" stroke={resolvedColor} strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),

    floral: (
      <svg
        viewBox="0 0 400 60"
        className={`w-48 sm:w-64 md:w-80 h-auto ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Center flower */}
        <g transform="translate(200, 30)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-8"
              rx="3"
              ry="8"
              fill={resolvedColor}
              opacity="0.4"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle cx="0" cy="0" r="3" fill={resolvedColor} opacity="0.7" />
        </g>
        {/* Vine left */}
        <path
          d="M175 30 Q155 20 135 28 Q120 35 105 28 Q90 22 75 28"
          stroke={resolvedColor}
          strokeWidth="1"
          opacity="0.4"
          fill="none"
        />
        {/* Vine right */}
        <path
          d="M225 30 Q245 20 265 28 Q280 35 295 28 Q310 22 325 28"
          stroke={resolvedColor}
          strokeWidth="1"
          opacity="0.4"
          fill="none"
        />
        {/* Small leaves */}
        <ellipse cx="140" cy="25" rx="4" ry="2" fill={resolvedColor} opacity="0.25" transform="rotate(-20, 140, 25)" />
        <ellipse cx="260" cy="25" rx="4" ry="2" fill={resolvedColor} opacity="0.25" transform="rotate(20, 260, 25)" />
      </svg>
    ),

    simple: (
      <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
        <div
          className="h-px flex-1 max-w-20 sm:max-w-32"
          style={{ background: `linear-gradient(to right, transparent, ${resolvedColor})` }}
        />
        <svg width="8" height="8" viewBox="0 0 8 8" fill={resolvedColor} opacity="0.6">
          <rect x="1.5" y="1.5" width="5" height="5" transform="rotate(45 4 4)" />
        </svg>
        <div
          className="h-px flex-1 max-w-20 sm:max-w-32"
          style={{ background: `linear-gradient(to left, transparent, ${resolvedColor})` }}
        />
      </div>
    ),

    lotus: (
      <svg
        viewBox="0 0 200 40"
        className={`w-32 sm:w-40 h-auto ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(100, 28)">
          {/* Center petal */}
          <ellipse cx="0" cy="-12" rx="4" ry="12" fill={resolvedColor} opacity="0.35" />
          {/* Side petals */}
          <ellipse cx="0" cy="-10" rx="4" ry="11" fill={resolvedColor} opacity="0.25" transform="rotate(-25)" />
          <ellipse cx="0" cy="-10" rx="4" ry="11" fill={resolvedColor} opacity="0.25" transform="rotate(25)" />
          <ellipse cx="0" cy="-8" rx="3.5" ry="9" fill={resolvedColor} opacity="0.2" transform="rotate(-50)" />
          <ellipse cx="0" cy="-8" rx="3.5" ry="9" fill={resolvedColor} opacity="0.2" transform="rotate(50)" />
        </g>
        {/* Base lines */}
        <line x1="10" y1="30" x2="60" y2="30" stroke={resolvedColor} strokeWidth="0.5" opacity="0.3" />
        <line x1="140" y1="30" x2="190" y2="30" stroke={resolvedColor} strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),

    vine: (
      <svg
        viewBox="0 0 500 40"
        className={`w-56 sm:w-72 md:w-96 h-auto ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Center ornament */}
        <g transform="translate(250, 20)">
          <ellipse cx="0" cy="-6" rx="2.5" ry="6" fill={resolvedColor} opacity="0.4" />
          <ellipse cx="0" cy="-5" rx="2.5" ry="5.5" fill={resolvedColor} opacity="0.3" transform="rotate(-30)" />
          <ellipse cx="0" cy="-5" rx="2.5" ry="5.5" fill={resolvedColor} opacity="0.3" transform="rotate(30)" />
          <circle cx="0" cy="0" r="2" fill={resolvedColor} opacity="0.5" />
        </g>
        {/* Left vine with leaves */}
        <path
          d="M225 20 Q200 12 175 18 Q155 24 135 16 Q120 10 100 16 Q85 22 65 16"
          stroke={resolvedColor}
          strokeWidth="0.8"
          opacity="0.35"
          fill="none"
        />
        <ellipse cx="180" cy="15" rx="5" ry="2" fill={resolvedColor} opacity="0.15" transform="rotate(-15, 180, 15)" />
        <ellipse cx="140" cy="18" rx="4" ry="1.8" fill={resolvedColor} opacity="0.12" transform="rotate(10, 140, 18)" />
        <ellipse cx="105" cy="14" rx="4.5" ry="1.8" fill={resolvedColor} opacity="0.12" transform="rotate(-12, 105, 14)" />
        {/* Right vine with leaves */}
        <path
          d="M275 20 Q300 12 325 18 Q345 24 365 16 Q380 10 400 16 Q415 22 435 16"
          stroke={resolvedColor}
          strokeWidth="0.8"
          opacity="0.35"
          fill="none"
        />
        <ellipse cx="320" cy="15" rx="5" ry="2" fill={resolvedColor} opacity="0.15" transform="rotate(15, 320, 15)" />
        <ellipse cx="360" cy="18" rx="4" ry="1.8" fill={resolvedColor} opacity="0.12" transform="rotate(-10, 360, 18)" />
        <ellipse cx="395" cy="14" rx="4.5" ry="1.8" fill={resolvedColor} opacity="0.12" transform="rotate(12, 395, 14)" />
        {/* End dots */}
        <circle cx="60" cy="18" r="1.5" fill={resolvedColor} opacity="0.3" />
        <circle cx="440" cy="18" r="1.5" fill={resolvedColor} opacity="0.3" />
      </svg>
    ),
  };

  return (
    <motion.div
      className="flex justify-center items-center py-4 sm:py-6"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      {dividers[variant]}
    </motion.div>
  );
}
