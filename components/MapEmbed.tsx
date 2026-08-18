import { BUSINESS } from "@/lib/business";

// Google Maps embed with our own floating "Get directions" card. The map is the one
// image on the site that does not get the duotone treatment.
export default function MapEmbed({
  className = "",
  showInfo = true,
}: {
  className?: string;
  showInfo?: boolean;
}) {
  return (
    <div className={`relative isolate overflow-clip bg-surface ${className}`}>
      {/* The embed draws its own place card in the top-left corner; shifting the frame up clips it out
          while keeping the pin (it lands a little above center). The wide desktop embed draws a taller card. */}
      <div className="absolute -top-22 lg:-top-36 inset-x-0 bottom-0">
        <iframe
          src={BUSINESS.mapsEmbedUrl}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Focus Optical location map"
        />
      </div>
      {showInfo && (
        <div className="pointer-events-none absolute inset-0">
          <div className="max-w-295 h-full mx-auto px-3.5 lg:px-10 flex items-end">
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto mb-3.5 lg:mb-6 flex items-center gap-2.25 lg:gap-3 rounded-xl lg:rounded-2xl bg-white/95 backdrop-blur-sm px-3.25 py-2.5 lg:px-4.5 lg:py-3.5 text-ink shadow-float hover:bg-white transition-colors"
            >
              <span
                aria-hidden
                className="flex h-7.5 w-7.5 lg:h-9.5 lg:w-9.5 shrink-0 items-center justify-center rounded-lg lg:rounded-xl bg-accent-soft text-accent text-base lg:text-lg"
              >
                ◎
              </span>
              <span>
                <span className="block text-sm lg:text-md font-bold leading-tight">
                  <span className="lg:hidden">{BUSINESS.address.street}</span>
                  <span className="hidden lg:inline">
                    {BUSINESS.address.street}, {BUSINESS.address.city},{" "}
                    {BUSINESS.address.state}
                  </span>
                </span>
                <span className="block text-xs lg:text-sm text-body">
                  <span className="lg:hidden">{BUSINESS.address.city} · </span>
                  Get directions →
                </span>
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
