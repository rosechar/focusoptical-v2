interface JsonLdProps {
  /** A schema.org node or `@graph`; the `@context` is added here. */
  data: Record<string, unknown>;
}

// Escaping "<" keeps a string value containing "</script>" from closing the tag early.
export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify({ "@context": "https://schema.org", ...data }).replace(
    /</g,
    "\\u003c",
  );
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
