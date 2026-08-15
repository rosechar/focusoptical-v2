import { BUSINESS } from "@/lib/business";

// Google Maps embed with a floating "Get directions" card. The map is the one
// image on the site that does not get the duotone treatment.
export default function MapEmbed({
  className = "",
  showInfo = true,
}: {
  className?: string;
  showInfo?: boolean;
}) {
  return (
    <div className={`relative isolate bg-[#e8eced] ${className}`}>
      <iframe
        src={BUSINESS.mapsEmbedUrl}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Focus Optical location map"
      />
      {showInfo && (
        <div className="pointer-events-none absolute inset-0">
          <div className="max-w-[1180px] h-full mx-auto px-3.5 lg:px-10 flex items-end">
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto mb-3.5 lg:mb-6 flex items-center gap-[9px] lg:gap-3 rounded-[11px] lg:rounded-[14px] bg-white/95 backdrop-blur-sm px-[13px] py-2.5 lg:px-[18px] lg:py-3.5 text-ink shadow-[0_4px_14px_rgba(0,0,0,0.14)] lg:shadow-[0_6px_20px_rgba(0,0,0,0.16)] hover:bg-white transition-colors"
            >
              <span
                aria-hidden
                className="flex h-[30px] w-[30px] lg:h-[38px] lg:w-[38px] shrink-0 items-center justify-center rounded-lg lg:rounded-[10px] bg-accent-soft text-accent text-base lg:text-lg"
              >
                ◎
              </span>
              <span>
                <span className="block text-[13px] lg:text-[15px] font-bold leading-[1.2]">
                  <span className="lg:hidden">{BUSINESS.address.street}</span>
                  <span className="hidden lg:inline">
                    {BUSINESS.address.street}, {BUSINESS.address.city},{" "}
                    {BUSINESS.address.state}
                  </span>
                </span>
                <span className="block text-[11.5px] lg:text-[13px] text-body">
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
