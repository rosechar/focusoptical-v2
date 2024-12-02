import { Glasses } from "lucide-react";

export function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className=" px-4 py-4">
        <nav className="flex justify-between items-center">
          <a
            href="/"
            className="hover:text-blue-400 flex items-center space-x-2"
          >
            <span className="text-2xl">Focus Optical</span>
            <Glasses className="w-6 h-6" />
          </a>
          <div className="text-right">
            <div className="text-sm">ROCHESTER HILLS, MI</div>
            <div className="text-sm">SINCE 1984</div>
          </div>
        </nav>
      </div>
      <nav className="border-t border-b border-gray-500">
        <div className=" bg-gray-900">
          <ul className="flex justify-evenly py-4">
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
