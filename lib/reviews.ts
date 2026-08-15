export interface Review {
  name: string;
  quote: string;
  /** Link to the original Google review. */
  href: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Emily",
    quote:
      "I've been going here since I was a little girl. Tom is super helpful, and the doc is great!",
    href: "https://g.co/kgs/yiVrZD",
  },
  {
    name: "Erik",
    quote:
      "Tom really helped me out to get a great pair of glasses for a great price.",
    href: "https://g.co/kgs/A64L4m",
  },
  {
    name: "Ed",
    quote: "The owner was very helpful. I'll come here from now on.",
    href: "https://g.co/kgs/k2vTVR",
  },
];
