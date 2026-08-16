import { GOOGLE_REVIEWS } from "@/lib/business";

export interface Review {
  name: string;
  /** Verbatim excerpt from the Google review (whole sentences, nothing reworded). */
  quote: string;
  /** Link to the review on Google: the individual review where we have one, otherwise the reviews list. */
  href: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Pam T.",
    quote:
      "I have a small face, and it's hard to find frames that I like, and that fit. Tom just keeps working with me until we find something that works. No high pressure, and quick turnaround time.",
    href: GOOGLE_REVIEWS.url,
  },
  {
    name: "Kelsey O.",
    quote:
      "This shop is a more intimate and calm experience than larger-scale ones. You aren't going to have salespeople standing behind you trying to upsell you on things you don't need.",
    href: GOOGLE_REVIEWS.url,
  },
  {
    name: "Carolyn K.",
    quote:
      "I have four different prescriptions, and he managed to get every single one exactly right. That takes real skill and attention to detail.",
    href: GOOGLE_REVIEWS.url,
  },
  {
    name: "Emily",
    quote:
      "I've been going here since I was a little girl. Tom is super helpful, and the doc is great!",
    href: "https://g.co/kgs/yiVrZD",
  },
  {
    name: "Nancy S.",
    quote:
      "Prices are reasonable, choice is wide, ordering is easy, and timelines are short. Tom calls you as soon as your order arrives.",
    href: GOOGLE_REVIEWS.url,
  },
  {
    name: "Erin P.",
    quote:
      "Every time I try some place different I always end up going back to Tom at Focus. Highly recommend!",
    href: GOOGLE_REVIEWS.url,
  },
];
