import { useState, useEffect } from "react";
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

const NavItem = ({ item, onClick, active, isMobile }: { item: typeof navItems[0]; onClick?: () => void; active?: boolean; isMobile?: boolean }) => {
  const isPage = item.href.startsWith("/") && !item.href.includes("#");
  
  const baseClass = isMobile 
    ? "block text-3xl font-bold transition-colors text-white/80 hover:text-white py-2"
    : "relative py-1 text-sm font-semibold transition-colors text-black hover:text-primary";
    
  const activeClass = isMobile
    ? "block text-3xl font-bold transition-colors text-white py-2"
    : "relative py-1 text-sm font-semibold transition-colors text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary";

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

  // Scroll lock when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const isActive = (href: string) => {
    const isPage = href.startsWith("/") && !href.includes("#");
    if (isPage) {
      return location.pathname === href;
    }
    return location.hash === href.replace("/", "");
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      open ? "bg-primary" : "bg-white/80 backdrop-blur-md"
    } border-b border-border/40`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Ozil Trans354" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform" />
          <span className={`${open ? "text-white" : "text-black"} font-bold text-sm md:text-base lg:text-lg leading-tight uppercase tracking-tight`}>
            Ozil Trans354 Tour & Travel
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavItem key={item.href} item={item} active={isActive(item.href)} />
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-bold hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-md shadow-accent/20 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" /> Hubungi Kami
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden relative z-[110] p-2 ${open ? "text-white" : "text-black"} hover:bg-black/5 rounded-full transition-colors`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[101] md:hidden"
            />
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-primary z-[102] shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full p-8 pt-24 text-white">
                <div className="flex flex-col gap-6">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <NavItem 
                        item={item} 
                        active={isActive(item.href)} 
                        onClick={() => setOpen(false)} 
                        isMobile 
                      />
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/70 text-sm mb-6"
                  >
                    Butuh bantuan sewa mobil? Hubungi kami sekarang untuk layanan 24 jam.
                  </motion.p>
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-accent text-accent-foreground py-4 rounded-2xl text-lg font-bold text-center flex items-center justify-center gap-3 shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    <Phone className="w-5 h-5" /> Hubungi Kami
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
