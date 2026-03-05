import { motion } from "framer-motion";
import { ArrowUpRight, Car, Users, Clock, Headphones } from "lucide-react";
import carImage from "@/assets/pajero_sport.png";

const WA_LINK = "https://wa.me/6281333993654";

const stats = [
  { value: "500+", label: "Armada Mobil", icon: Car },
  { value: "50+", label: "Pelanggan Puas", icon: Users },
  { value: "10+", label: "Tahun Pengalaman", icon: Clock },
  { value: "24 Jam", label: "Layanan Siap Sedia", icon: Headphones },
];

const HeroSection = () => {
  return (
    <section id="beranda" className="relative bg-background min-h-screen flex flex-col justify-center pt-10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-10 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <span className="text-primary font-bold text-sm md:text-base tracking-widest uppercase">
              Ozil Trans354 Tour & Travel
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1]">
              Rental{" "}
              <span className="text-primary">Mobil</span>
              <br />
              Terpercaya
            </h1>
            <p className="mt-6 text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
              Menyediakan layanan rental mobil dengan armada terbaik, harga terjangkau, dan pelayanan profesional untuk perjalanan Anda.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-4 bg-accent text-accent-foreground pl-6 pr-2 py-2 rounded-full font-bold text-base hover:bg-accent/90 hover:scale-105 transition-all shadow-lg shadow-accent/20"
            >
              Booking Sekarang
              <div className="bg-background text-accent p-3 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </a>
          </motion.div>

          {/* Right car image with accent background */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-end -mr-4 md:-mr-20 lg:-mr-40"
          >
            {/* Accent rounded rectangle background */}
            <div className="absolute -top-[25%] right-[5%] w-[55%] h-[115%] bg-primary rounded-t-[3rem] overflow-hidden">
              {/* Tire track pattern */}
              <svg
                className="absolute bottom-0 right-0 w-[80%] h-[60%] opacity-20"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Diagonal tire track 1 */}
                <g transform="rotate(-35 200 150)">
                  {/* Track strip 1 */}
                  <rect x="80" y="20" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="80" y="90" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="80" y="160" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="80" y="230" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="80" y="300" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />

                  {/* Track strip 2 */}
                  <rect x="120" y="20" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="120" y="90" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="120" y="160" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="120" y="230" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="120" y="300" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                </g>

                {/* Diagonal tire track 2 */}
                <g transform="rotate(-35 300 200)">
                  {/* Track strip 1 */}
                  <rect x="220" y="40" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="220" y="110" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="220" y="180" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="220" y="250" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="220" y="320" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />

                  {/* Track strip 2 */}
                  <rect x="260" y="40" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="260" y="110" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="260" y="180" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="260" y="250" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                  <rect x="260" y="320" width="30" height="60" rx="4" fill="currentColor" className="text-primary-foreground" />
                </g>
              </svg>
            </div>

            {/* Car image on top */}
            <img
              src={carImage}
              alt="Pajero Sport"
              className="relative z-10 w-full max-w-2xl md:max-w-3xl lg:max-w-5xl object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white rounded-2xl shadow-xl border border-border/50 p-4 md:p-6 flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-0"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center flex-1">
              <div className="flex-1 flex flex-col items-center gap-2 px-4">
                <stat.icon className="w-10 h-10 text-primary" />
                <div className="text-2xl md:text-3xl font-extrabold text-primary">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-border" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
