// A template re-mounts on every navigation, so each page fades in (pageIn).
// Disabled automatically under prefers-reduced-motion (see globals.css).
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page-in">{children}</div>;
}
