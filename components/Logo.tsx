// Glasses-outline mark from the design handoff. Stroke inherits the accent via currentColor.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="30"
      height="16"
      viewBox="0 0 30 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      aria-hidden="true"
      className={`text-accent ${className}`}
    >
      <circle cx="6.6" cy="9" r="5.1" />
      <circle cx="23.4" cy="9" r="5.1" />
      <path d="M11.7 8.6c1-1.1 5.6-1.1 6.6 0" />
      <path d="M1.5 8.2C1.5 5 2.4 3.2 4.3 2.2" />
      <path d="M28.5 8.2c0-3.2-.9-5-2.8-6" />
    </svg>
  );
}
