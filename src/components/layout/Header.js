import { Glasses } from "lucide-react";

export function Header() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">Focus Optical</span>
            <Glasses className="w-6 h-6" />
          </div>
          <div className="text-right">
            <div className="text-sm">ROCHESTER HILLS, MI</div>
            <div className="text-sm">SINCE 1984</div>
          </div>
        </nav>
      </div>
      <nav className="border-t border-gray-800">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8 py-4">
            <li>
              <a href="/contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="/insurance" className="hover:text-blue-400">
                Insurance
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
