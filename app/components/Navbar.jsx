'use client';

// Navbar.jsx
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navigation = [
    { name: "Projects", href: "/", current: pathname === "/" },
    { name: "About", href: "/about", current: pathname === "/about" },
    { name: "Contact", href: "/contact", current: pathname === "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-6 flex justify-between items-center">
        <a
          href="/"
          className="text-2xl font-normal text-slate-900 hover:text-[#437029] cursor-pointer"
        >
          Shreya Valgot
        </a>
        <div className="flex gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={[
                "rounded-[24px] px-6 py-[10px] text-base md:text-lg transition-colors cursor-pointer",
                item.current
                  ? "bg-[#437029] text-white hover:bg-[#567E40]"
                  : "text-slate-700 hover:text-[#437029] hover:bg-[#F9FFF5] hover:ring-1 hover:ring-[#C6D7BC]",
              ].join(" ")}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
