export interface CityArea {
  slug: string;
  city: string;
  county: string;
  zips: string[];
  driveTime: string;
  /** Short blurb shown on the service-areas overview grid. */
  summary: string;
  /** Unique long-form paragraphs for the dedicated city page. */
  paragraphs: string[];
  faqs: { q: string; a: string }[];
  primary?: boolean;
}

export const CITIES: CityArea[] = [
  {
    slug: "rochester-hills",
    city: "Rochester Hills",
    county: "Oakland County",
    zips: ["48309", "48307", "48306"],
    driveTime: "We're located here",
    summary:
      "Focus Optical is located right here in Rochester Hills at 2046 W Auburn Rd. We're your neighborhood optician for eye exams, prescription glasses, contact lenses, and free eyeglass adjustments.",
    paragraphs: [
      "Focus Optical has been Rochester Hills' independent optical store since 1984. Our shop at 2046 W Auburn Rd sits just west of Crooks Road, minutes from Rochester Hills City Hall, Bloomer Park, and the Rochester Hills Public Library — with ample free parking right outside the door.",
      "Eye exams are performed on-site by Dr. Diane Galper, Optometrist, and every pair of lenses is cut and edged in our own lab by owner Tom Hamilton, who has been making eyeglasses since 1977. That means faster turnaround — next day service on most prescriptions — and quality control you won't find at chain optical stores in the mall.",
      "Whether you live near Adams Road, downtown along Rochester Road, or in the neighborhoods off Auburn Road, we're the closest independent optician for an annual eye exam, new prescription glasses, contact lens fittings, or a quick free adjustment of glasses you bought anywhere.",
    ],
    faqs: [
      {
        q: "Where is Focus Optical located in Rochester Hills?",
        a: "We're at 2046 W Auburn Rd, Rochester Hills, MI 48309, just west of Crooks Road with free parking on-site.",
      },
      {
        q: "Do you do eye exams in Rochester Hills?",
        a: "Yes — comprehensive eye exams and contact lens exams are performed in our Rochester Hills office by Dr. Diane Galper, Optometrist.",
      },
      {
        q: "Can I get glasses adjusted without buying them from you?",
        a: "Absolutely. We offer free adjustments and cleaning to anyone, no appointment and no purchase required.",
      },
    ],
    primary: true,
  },
  {
    slug: "rochester",
    city: "Rochester",
    county: "Oakland County",
    zips: ["48306", "48307"],
    driveTime: "About 10 minutes",
    summary:
      "Just minutes from downtown Rochester, Focus Optical offers Rochester residents comprehensive optical services — from annual eye exams to a wide selection of frames and contact lenses.",
    paragraphs: [
      "Focus Optical is about a 10-minute drive from downtown Rochester — head south on Rochester Road and west on Auburn Road and you're here. For over 40 years, Rochester families have skipped the mall chains and come to us for eye exams, glasses, and contacts.",
      "We're an easy stop after a morning at the Rochester Farmers' Market or a walk on the Paint Creek Trail. Eye exams are performed by Dr. Diane Galper, Optometrist, and contact lens exams include a full eye exam in a single visit.",
      "Because we cut and edge lenses in our own on-site lab, most Rochester patients get their new glasses the next day. We can also put new lenses in your existing frames, and adjustments are always free — even on glasses you didn't buy from us.",
    ],
    faqs: [
      {
        q: "How far is Focus Optical from downtown Rochester?",
        a: "About 10 minutes — south on Rochester Road, then west on Auburn Road to 2046 W Auburn Rd in Rochester Hills.",
      },
      {
        q: "Do you take patients from Rochester?",
        a: "Yes, many of our longtime patients come from Rochester. Call (248) 852-8830 or book online to schedule an exam.",
      },
    ],
  },
  {
    slug: "troy",
    city: "Troy",
    county: "Oakland County",
    zips: ["48083", "48084", "48085", "48098"],
    driveTime: "About 10 minutes",
    summary:
      "Troy residents looking for a quality optician choose Focus Optical for our craftsmanship, personalized service, and no-pressure environment. We cut and edge all lenses on-site.",
    paragraphs: [
      "Focus Optical is roughly 10 minutes north of Troy — straight up Crooks Road or Livernois to Auburn Road. Troy patients tell us the short drive beats the big-box optical experience: no sales quotas, no upselling, just an experienced optician who makes your glasses himself.",
      "Owner Tom Hamilton has been crafting eyeglasses since 1977, and every lens is cut and edged in our on-site lab rather than shipped to an out-of-state facility. That's why we can offer next day service on most prescriptions — handy if you work along the Big Beaver corridor and need glasses before your next meeting.",
      "We offer comprehensive eye exams with Dr. Diane Galper, Optometrist, contact lens exams and fittings, a wide frame selection for every budget, and free adjustments for anyone who walks in — even with glasses bought elsewhere.",
    ],
    faqs: [
      {
        q: "How do I get to Focus Optical from Troy?",
        a: "Take Crooks Road or Livernois north to Auburn Road. We're at 2046 W Auburn Rd in Rochester Hills, about 10 minutes from most of Troy.",
      },
      {
        q: "Why choose Focus Optical over an optical chain in Troy?",
        a: "We're independently owned, cut all lenses on-site, offer next day service on most prescriptions, and never use sales pressure.",
      },
    ],
  },
  {
    slug: "lake-orion",
    city: "Lake Orion",
    county: "Oakland County",
    zips: ["48360", "48362"],
    driveTime: "About 15 minutes",
    summary:
      "Lake Orion patients make the short drive to Focus Optical for our reputation as one of Oakland County's most experienced independent opticians.",
    paragraphs: [
      "From downtown Lake Orion, Focus Optical is about 15 minutes south — down M-24 (Lapeer Road) through Auburn Hills to Auburn Road. Lake Orion families have been making the trip since 1984 for one reason: glasses made right, by hand, by people who know them.",
      "Eye exams and contact lens exams are performed by Dr. Diane Galper, Optometrist. Active on the lake? We carry sunglasses and can fit specialty lenses, and our on-site lab means new lenses or repairs don't leave the building.",
      "Most prescriptions are ready the next day, and adjustments are always free — bent your frames at the beach or on the trail, just stop in and we'll straighten them out at no charge, no appointment needed.",
    ],
    faqs: [
      {
        q: "How far is Focus Optical from Lake Orion?",
        a: "About 15 minutes — take M-24 south to Auburn Road. We're at 2046 W Auburn Rd in Rochester Hills.",
      },
      {
        q: "Do you carry sunglasses for Lake Orion's outdoor lifestyle?",
        a: "Yes — prescription and non-prescription sunglasses plus specialty lenses, all fitted and adjusted in-house.",
      },
    ],
  },
  {
    slug: "royal-oak",
    city: "Royal Oak",
    county: "Oakland County",
    zips: ["48067", "48068", "48073"],
    driveTime: "About 20 minutes",
    summary:
      "Royal Oak residents appreciate our independent, no-franchise approach to optical care. No sales pressure, just expert craftsmanship and honest service.",
    paragraphs: [
      "Focus Optical is about 20 minutes north of Royal Oak — a quick run up I-75 or Crooks Road to Auburn Road. Royal Oak patients who value independent local businesses find a kindred spirit here: family-owned since 1984, no franchise, no corporate sales targets.",
      "Every pair of glasses is cut and edged in our on-site lab by owner Tom Hamilton, an optician since 1977. Comprehensive eye exams and contact lens fittings are performed by Dr. Diane Galper, Optometrist, with next day service available on most prescriptions.",
      "We keep a wide selection of frames at every price point and will happily put new lenses in frames you already love. Adjustments and cleanings are free for everyone — no purchase necessary.",
    ],
    faqs: [
      {
        q: "Is Focus Optical worth the drive from Royal Oak?",
        a: "Our patients think so — independent service, on-site lens crafting, next day turnaround on most prescriptions, and free adjustments for life.",
      },
      {
        q: "How do I get there from Royal Oak?",
        a: "Take I-75 north to Exit 67 (Rochester Rd/Auburn Rd area) or drive Crooks Road north — about 20 minutes to 2046 W Auburn Rd, Rochester Hills.",
      },
    ],
  },
  {
    slug: "bloomfield-hills",
    city: "Bloomfield Hills",
    county: "Oakland County",
    zips: ["48301", "48302", "48304"],
    driveTime: "About 15 minutes",
    summary:
      "We serve Bloomfield Hills patients seeking a trusted, experienced optician. Our attention to detail and on-site lens cutting sets us apart from chain optical stores.",
    paragraphs: [
      "Bloomfield Hills patients reach Focus Optical in about 15 minutes — east on Square Lake Road or South Boulevard to Adams, then up to Auburn Road. For discerning patients who expect precision, our on-site lab and four decades of craftsmanship deliver.",
      "Owner Tom Hamilton personally cuts and edges every lens, and eye exams are performed by Dr. Diane Galper, Optometrist. We take the time to fit frames properly to your face — the difference between glasses that work and glasses you fight with all day.",
      "We carry quality frames across a range of styles and budgets, fit specialty and progressive lenses, and offer next day service on most prescriptions. Adjustments are always complimentary, even on eyewear purchased elsewhere.",
    ],
    faqs: [
      {
        q: "Do you fit progressive lenses for Bloomfield Hills patients?",
        a: "Yes — progressives, specialty lenses, and precise fittings are core to what we do, with all lens work done in our on-site lab.",
      },
      {
        q: "How far is Focus Optical from Bloomfield Hills?",
        a: "About 15 minutes east via Square Lake Road or South Boulevard to 2046 W Auburn Rd in Rochester Hills.",
      },
    ],
  },
  {
    slug: "sterling-heights",
    city: "Sterling Heights",
    county: "Macomb County",
    zips: ["48310", "48312", "48313", "48314"],
    driveTime: "About 15 minutes",
    summary:
      "Sterling Heights patients come to Focus Optical for the expert, personalized service you can only get at an independently owned optical store with over 45 years of experience.",
    paragraphs: [
      "Focus Optical is about 15 minutes from Sterling Heights — west on Auburn Road from Dequindre, or up M-59 to Crooks. Plenty of Macomb County patients cross the county line for an optician who still does things the old way: in person, by hand, with no sales pressure.",
      "Comprehensive eye exams and contact lens exams are performed by Dr. Diane Galper, Optometrist. Because we cut and edge all lenses in our own lab, most Sterling Heights patients pick up their new glasses the next day.",
      "We offer a wide selection of frames and contact lens brands, can re-lens your existing frames, and provide free adjustments and cleanings to anyone who stops in — no appointment, no purchase required.",
    ],
    faqs: [
      {
        q: "Do you serve patients from Macomb County?",
        a: "Yes — Sterling Heights, Shelby Township, and Utica patients visit regularly. We're about 15 minutes west via Auburn Road or M-59.",
      },
      {
        q: "How fast can I get glasses near Sterling Heights?",
        a: "We offer next day service on most prescriptions thanks to our on-site lens cutting and edging lab.",
      },
    ],
  },
  {
    slug: "auburn-hills",
    city: "Auburn Hills",
    county: "Oakland County",
    zips: ["48326"],
    driveTime: "About 10 minutes",
    summary:
      "Auburn Hills residents trust Focus Optical for eye exams, new glasses, and free adjustments on existing eyewear. Conveniently located on W Auburn Rd.",
    paragraphs: [
      "Focus Optical sits on Auburn Road itself — about 10 minutes east of most of Auburn Hills, with easy access from I-75 and M-59. If you work near the Oakland University campus or the corporate corridor, we're a quick trip for an exam or a fitting.",
      "Eye exams are performed by Dr. Diane Galper, Optometrist, and contact lens exams include a full eye exam in one visit. Owner Tom Hamilton has crafted eyeglasses since 1977 and cuts every lens in our on-site lab.",
      "Most prescriptions are ready the next day. We also add new lenses to existing frames and provide free adjustments and cleaning to anyone — students, commuters, and neighbors alike.",
    ],
    faqs: [
      {
        q: "How close is Focus Optical to Auburn Hills?",
        a: "About 10 minutes — straight east on Auburn Road to 2046 W Auburn Rd in Rochester Hills, near Crooks Road.",
      },
      {
        q: "Do you see Oakland University students?",
        a: "Yes — exams, glasses, and contacts for students and staff, with next day service on most prescriptions.",
      },
    ],
  },
];

export function getCity(slug: string): CityArea | undefined {
  return CITIES.find((c) => c.slug === slug);
}
