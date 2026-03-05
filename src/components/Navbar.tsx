import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-ozil_trans.jpg";

const WA_LINK = "https://wa.me/6281333993654";

const navItems = [
  { label: "Beranda", href: "/#beranda" },
  { label: "Layanan", href: "/layanan" },
  { label: "Armada", href: "/#armada" },
  { label: "Keunggulan", href: "/#keunggulan" },
  { label: "Testimoni", href: "/#testimoni" },
  { label: "Kontak", href: "/#kontak" },
];

const NavItem = ({ item, onClick, active }: { item: typeof navItems[0]; onClick?: () => void; active?: boolean }) => {
  const isPage = item.href.startsWith("/") && !item.href.includes("#");
  const baseClass = "relative py-1 text-sm font-semibold transition-colors text-black hover:text-primary";
  const activeClass = "relative py-1 text-sm font-semibold transition-colors text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary";

  const className = active ? activeClass : baseClass;

  if (isPage) {
    return (
      <Link to={item.href} onClick={onClick} className={className}>
        {item.label}
      </Link>
    );
  }
  return (
    <a href={item.href} onClick={onClick} className={className}>
      {item.label}
    </a>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    const isPage = href.startsWith("/") && !href.includes("#");
    if (isPage) {
      return location.pathname === href;
    }
    return location.hash === href.replace("/", "");
  };

  return (
    <nav className="relative z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Ozil Trans354" className="w-9 h-9 rounded-full object-cover" />
          <span className="text-black font-bold text-lg leading-tight uppercase">
            Ozil Trans354 Tour & Travel
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavItem key={item.href} item={item} active={isActive(item.href)} />
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2">
            <Phone className="w-4 h-4" /> Hubungi Kami
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-black">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-primary/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 pb-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <NavItem key={item.href} item={item} active={isActive(item.href)} onClick={() => setOpen(false)} />
              ))}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground px-4 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-accent/90 transition-colors">
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
