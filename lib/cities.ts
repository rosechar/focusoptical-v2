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
      "We're right here in Rochester Hills at 2046 W Auburn Rd. We're the neighborhood optician for eye exams, glasses, contacts, and free adjustments.",
    paragraphs: [
      "Focus Optical has been Rochester Hills' independent optician since 1984. The shop sits on W Auburn Rd just west of Crooks Road, a few minutes from City Hall, Bloomer Park, and the public library, with free parking right out front.",
      "Dr. Diane Galper does the eye exams here, and Tom cuts and edges every lens in the shop. He's been making glasses since 1977. Because the lab is on site, most prescriptions are ready the next day, and you get someone who actually checks the work instead of a mall chain.",
      "Whether you live near Adams Road, downtown off Rochester Road, or in the neighborhoods around Auburn Road, we're the closest independent shop for a yearly eye exam, new glasses, a contact lens fitting, or a quick free adjustment on glasses you bought anywhere.",
    ],
    faqs: [
      {
        q: "Where are you in Rochester Hills?",
        a: "We're at 2046 W Auburn Rd, Rochester Hills, MI 48309, just west of Crooks Road, with free parking out front.",
      },
      {
        q: "Do you do eye exams in Rochester Hills?",
        a: "Yes. Dr. Diane Galper does eye exams and contact lens exams right here in the office.",
      },
      {
        q: "Can I get glasses adjusted without buying them from you?",
        a: "Of course. Adjustments and cleaning are free for anyone, no appointment and no purchase needed.",
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
      "A few minutes from downtown Rochester, we handle eye exams, a big selection of frames, and contact lenses.",
    paragraphs: [
      "We're about a 10 minute drive from downtown Rochester. Head south on Rochester Road, then west on Auburn Road and you're here. Rochester families have skipped the mall chains and come to us for years.",
      "It's an easy stop after the farmers' market or a walk on the Paint Creek Trail. Dr. Diane Galper does the eye exams, and a contact lens exam includes a full eye exam in the same visit.",
      "We cut and edge lenses in our own lab, so most folks from Rochester pick up new glasses the next day. We'll also put new lenses in frames you already like, and adjustments are always free, even on glasses you didn't buy here.",
    ],
    faqs: [
      {
        q: "How far is the shop from downtown Rochester?",
        a: "About 10 minutes. South on Rochester Road, then west on Auburn Road to 2046 W Auburn Rd in Rochester Hills.",
      },
      {
        q: "Do you see patients from Rochester?",
        a: "Plenty of our regulars come from Rochester. Call (248) 852-8830 or book online to set up an exam.",
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
      "Troy folks come to us for careful work and a shop with no sales quotas. We cut every lens on site.",
    paragraphs: [
      "We're about 10 minutes north of Troy, straight up Crooks Road or Livernois to Auburn Road. Troy customers tell us the short drive beats the big-box experience: no quotas, no upselling, just someone who makes your glasses himself.",
      "Tom's been making glasses since 1977, and every lens gets cut and edged in our own lab instead of shipped out of state. That's why most prescriptions are ready the next day, handy if you work along Big Beaver and need glasses before a meeting.",
      "We do eye exams with Dr. Diane Galper, contact lens fittings, a wide range of frames for any budget, and free adjustments for anyone who walks in, even with glasses bought somewhere else.",
    ],
    faqs: [
      {
        q: "How do I get there from Troy?",
        a: "Take Crooks Road or Livernois north to Auburn Road. We're at 2046 W Auburn Rd in Rochester Hills, about 10 minutes from most of Troy.",
      },
      {
        q: "Why come here instead of a chain in Troy?",
        a: "We're family owned, cut every lens on site, have most prescriptions ready the next day, and we won't push a sale on you.",
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
      "Lake Orion folks make the short drive for one of the area's most experienced independent opticians.",
    paragraphs: [
      "From downtown Lake Orion, we're about 15 minutes south, down M-24 (Lapeer Road) through Auburn Hills to Auburn Road. Lake Orion families have been making the trip since 1984 for one reason: glasses made right, by hand, by people who know them.",
      "Dr. Diane Galper does eye exams and contact lens exams. Spend time on the lake? We carry sunglasses and can fit specialty lenses, and with our own lab, new lenses and repairs don't leave the building.",
      "Most prescriptions are ready the next day, and adjustments are always free. Bent your frames at the beach or on the trail? Stop in and we'll straighten them out, no charge and no appointment.",
    ],
    faqs: [
      {
        q: "How far is it from Lake Orion?",
        a: "About 15 minutes. Take M-24 south to Auburn Road. We're at 2046 W Auburn Rd in Rochester Hills.",
      },
      {
        q: "Do you carry sunglasses?",
        a: "Yes, prescription and regular sunglasses plus specialty lenses, all fitted and adjusted in the shop.",
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
      "Royal Oak folks like our independent, no-franchise way of doing things. No sales pressure, just careful work and a straight answer.",
    paragraphs: [
      "We're about 20 minutes north of Royal Oak, a quick run up I-75 or Crooks Road to Auburn Road. If you like supporting local shops, you'll feel at home here: family owned since 1984, no franchise, no corporate sales targets.",
      "Tom cuts and edges every pair in our own lab, and he's been an optician since 1977. Dr. Diane Galper handles eye exams and contact lens fittings, with most prescriptions ready the next day.",
      "We keep a wide range of frames at every price, and we're happy to put new lenses in frames you already love. Adjustments and cleanings are free for everyone, no purchase needed.",
    ],
    faqs: [
      {
        q: "Is it worth the drive from Royal Oak?",
        a: "Our customers think so: independent service, lenses cut on site, most prescriptions ready the next day, and free adjustments for life.",
      },
      {
        q: "How do I get there from Royal Oak?",
        a: "Take I-75 north toward the Rochester Road and Auburn Road area, or drive Crooks Road north. About 20 minutes to 2046 W Auburn Rd in Rochester Hills.",
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
      "Bloomfield Hills folks come to us for a trusted optician who cuts lenses on site and takes the time to fit them right.",
    paragraphs: [
      "Bloomfield Hills is about 15 minutes away, east on Square Lake Road or South Boulevard to Adams, then up to Auburn Road. If you expect things done right, our own lab and four decades of practice deliver.",
      "Tom cuts and edges every lens himself, and Dr. Diane Galper does the eye exams. We take the time to fit frames to your face, which is the difference between glasses that work and glasses you fight with all day.",
      "We carry quality frames in a range of styles and budgets, fit progressive and specialty lenses, and have most prescriptions ready the next day. Adjustments are always free, even on eyewear from somewhere else.",
    ],
    faqs: [
      {
        q: "Do you fit progressive lenses?",
        a: "Yes, progressives, specialty lenses, and careful fittings are a big part of what we do, with all lens work done in our own lab.",
      },
      {
        q: "How far is it from Bloomfield Hills?",
        a: "About 15 minutes east on Square Lake Road or South Boulevard to 2046 W Auburn Rd in Rochester Hills.",
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
      "Sterling Heights folks come to us for the kind of personal service you only get at an independent shop with over 45 years behind it.",
    paragraphs: [
      "We're about 15 minutes from Sterling Heights, west on Auburn Road from Dequindre, or up M-59 to Crooks. Plenty of Macomb County folks cross the county line for an optician who still does things in person, by hand, with no pressure.",
      "Dr. Diane Galper does eye exams and contact lens exams. Because we cut and edge every lens in our own lab, most folks from Sterling Heights pick up new glasses the next day.",
      "We carry a wide range of frames and contact brands, we'll re-lens frames you already have, and we give free adjustments and cleanings to anyone who stops in, no appointment or purchase needed.",
    ],
    faqs: [
      {
        q: "Do you see patients from Macomb County?",
        a: "Yes, folks from Sterling Heights, Shelby Township, and Utica come in all the time. We're about 15 minutes west on Auburn Road or M-59.",
      },
      {
        q: "How fast can I get glasses?",
        a: "Most prescriptions are ready the next day, since we cut and edge lenses right here.",
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
      "Auburn Hills folks come to us for eye exams, new glasses, and free adjustments on the glasses they already own. We're right on W Auburn Rd.",
    paragraphs: [
      "We sit on Auburn Road itself, about 10 minutes east of most of Auburn Hills, with easy access from I-75 and M-59. If you work near the Oakland University campus or the corporate area, we're a quick trip for an exam or a fitting.",
      "Dr. Diane Galper does eye exams, and a contact lens exam includes a full eye exam in one visit. Tom's been making glasses since 1977 and cuts every lens in our own lab.",
      "Most prescriptions are ready the next day. We'll also put new lenses in frames you already have, and adjustments and cleaning are free for anyone, students, commuters, and neighbors alike.",
    ],
    faqs: [
      {
        q: "How close are you to Auburn Hills?",
        a: "About 10 minutes, straight east on Auburn Road to 2046 W Auburn Rd in Rochester Hills, near Crooks Road.",
      },
      {
        q: "Do you see Oakland University students?",
        a: "Yes, exams, glasses, and contacts for students and staff, with most prescriptions ready the next day.",
      },
    ],
  },
];

export function getCity(slug: string): CityArea | undefined {
  return CITIES.find((c) => c.slug === slug);
}
