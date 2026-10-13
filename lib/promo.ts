export interface Promo {
  title: string;
  detail: string;
}

/** The current offer, shown by OfferCard on the home and /glasses pages. Set to null for none. */
export const PROMO: Promo | null = {
  title: "Free frames this month",
  detail: "With any complete pair of lenses.",
};
