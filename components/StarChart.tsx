const SIZES = {
  // Hero rating tile, which only shows on desktop.
  sm: {
    stack: "gap-0.5",
    five: "text-7xl",
    star: "text-4xl",
    service: "text-xl",
    rating: "text-2xl",
  },
  // Reviews card: hero-tile sizes on mobile, a step larger on desktop.
  lg: {
    stack: "gap-0.5",
    five: "text-7xl lg:text-8xl",
    star: "text-4xl lg:text-5xl",
    service: "text-xl lg:text-2xl",
    rating: "text-stars",
  },
} as const;

// "5 STAR SERVICE" eye-chart lockup shared by the hero rating tile and the reviews card.
// Built from spans so it can sit inside a heading or a link. Pass stars={false} to place the
// star row elsewhere.
export default function StarChart({
  size,
  stars = true,
}: {
  size: keyof typeof SIZES;
  stars?: boolean;
}) {
  const s = SIZES[size];
  return (
    <span className={`flex flex-col items-center font-chart font-black uppercase leading-none text-accent ${s.stack}`}>
      <span className={s.five}>5</span>{" "}
      <span className={`spaced-chart ${s.star}`}>Star</span>{" "}
      <span className={`spaced-chart ${s.service}`}>Service</span>
      {stars && (
        <span aria-hidden className={`mt-1 font-normal text-gold spaced-widest ${s.rating}`}>
          ★★★★★
        </span>
      )}
    </span>
  );
}
