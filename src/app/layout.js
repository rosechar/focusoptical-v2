import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata = {
  title: "Focus Optical - Rochester Hills, MI",
  description:
    "Eye care services, glasses, and contact lenses in Rochester Hills since 1984",
  metadataBase: new URL("https://focusoptical.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <Header />
          <main className="flex-grow bg-gray-900">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
