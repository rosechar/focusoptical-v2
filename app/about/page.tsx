import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Tom Hamilton, owner of Focus Optical in Rochester Hills, MI. An independent optician since 1984 with over 45 years of experience making eyeglasses. Eye exams performed by Dr. Diane Galper, Optometrist.",
  keywords: [
    "Focus Optical owner Tom Hamilton",
    "Rochester Hills optician",
    "independent optical store Rochester Hills",
    "Dr Diane Galper optometrist",
    "eye exam Rochester Hills",
  ],
  alternates: {
    canonical: "/about",
  },
};

const milestones = [
  { year: "1977", label: "Tom begins making eyeglasses." },
  { year: "1984", label: "Focus Optical opens in Rochester Hills." },
  { year: "Today", label: "Still cutting lenses on Auburn Road." },
];

export default function AboutPage() {
  return (
    <>
      <section className="max-w-[1180px] mx-auto lg:px-10 lg:pt-14 lg:pb-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">
          <div className="relative h-[300px] lg:h-[460px] lg:rounded-[20px] overflow-hidden">
            <Image
              src="/images/tom.jpg"
              alt="Tom Hamilton, owner of Focus Optical"
              fill
              priority
              className="object-cover duotone"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute left-4 bottom-4 lg:left-5 lg:bottom-5 rounded-xl lg:rounded-[14px] bg-accent px-4 py-3 lg:px-5 lg:py-4 text-white">
              <div className="font-display text-[26px] lg:text-[34px] font-extrabold leading-none">
                45+
              </div>
              <div className="text-xs lg:text-[13px] text-accent-ondark">
                years of experience
              </div>
            </div>
          </div>

          <div className="px-5 pt-7 lg:p-0">
            <p className="text-accent font-bold text-xs tracking-[0.12em] lg:tracking-[0.18em] uppercase mb-2 lg:mb-3">
              Our story
            </p>
            <h1 className="font-display text-[28px] lg:text-[42px] lg:leading-[1.05] font-extrabold text-ink tracking-[-0.02em] lg:tracking-[-0.03em] mb-4 lg:mb-5">
              Tom Hamilton, your optician
            </h1>
            <p className="text-[15.5px] lg:text-[17px] leading-relaxed lg:leading-[1.65] text-secondary mb-3.5 lg:mb-4">
              I opened Focus Optical in 1984 and have been making eyeglasses since
              1977. I cut and edge every lens in-house and treat each pair as if I
              were making it for myself.
            </p>
            <p className="text-[15.5px] lg:text-[17px] leading-relaxed lg:leading-[1.65] text-secondary">
              No outside labs and no upsell. Adjusting a pair just right is a bit
              of a lost art, and it&apos;s the part I like most. Most
              prescriptions are ready the next day.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 lg:px-10 lg:pb-14">
        <div className="lg:grid lg:grid-cols-2 lg:gap-14 lg:items-start lg:border-t lg:border-hairline-soft lg:pt-12">
          <div className="mt-6 border-t border-hairline-soft pt-[22px] lg:m-0 lg:border-0 lg:p-0">
            <p className="hidden lg:block text-accent font-bold text-xs tracking-[0.18em] uppercase mb-[18px]">
              Our history
            </p>
            <dl className="flex flex-col gap-4 lg:gap-[18px]">
              {milestones.map(({ year, label }) => (
                <div key={year} className="flex gap-4 lg:gap-5 items-baseline">
                  <dt className="font-display text-lg lg:text-[22px] font-extrabold text-accent w-[54px] lg:w-16 shrink-0">
                    {year}
                  </dt>
                  <dd className="text-[14.5px] lg:text-base text-secondary">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6 border-t border-hairline-soft pt-[22px] lg:m-0 lg:border-0 lg:p-0">
            <p className="text-accent font-bold text-xs tracking-[0.12em] lg:tracking-[0.18em] uppercase mb-2 lg:mb-3">
              Our optometrist
            </p>
            <h2 className="font-display text-xl lg:text-2xl font-extrabold text-ink mb-2.5 lg:mb-3">
              Dr. Diane Galper, OD
            </h2>
            <p className="text-[14.5px] lg:text-base leading-relaxed lg:leading-[1.65] text-body">
              Eye exams at Focus Optical are performed by Dr. Galper, an
              experienced optometrist. She also handles contact lens fittings.
            </p>
          </div>
        </div>
      </section>

      <CtaBand className="pt-7 pb-10 lg:pt-4 lg:pb-20" />
    </>
  );
}
