import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#identity", label: "Identity" },
  { href: "#problem", label: "Problem" },
  { href: "#product", label: "Product" },
  { href: "#technology", label: "Technology" },
  { href: "#traction", label: "Traction" },
  { href: "#contact", label: "Contact" },
];

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 62;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 h-[62px] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="select-none"
        >
          <img src="/medicarelab_logo.png" alt="MEDICARELAB" className="h-6 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className="text-[14px] font-[500] text-[#666] hover:text-[#00b859] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="hidden md:inline-flex bg-[#00b859] text-white px-5 py-2 rounded-[8px] font-[600] hover:bg-[#00a350] transition-all text-[14px] shadow-sm hover:shadow-md"
          >
            도입 문의
          </a>
          <button
            className="lg:hidden text-[#313131] p-1"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-5 space-y-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  scrollTo(e, l.href);
                  setOpen(false);
                }}
                className="block text-[15px] text-[#666] hover:text-[#00b859] font-[500] py-3 border-b border-gray-50 last:border-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
