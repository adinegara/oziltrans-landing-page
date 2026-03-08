import { motion } from "framer-motion";
import { ArrowUpRight, Car, Users, Clock, Headphones } from "lucide-react";
import carImage from "@/assets/pajero_sport.png";

const WA_LINK = "https://wa.me/6281333993654";

const stats = [
  { value: "100+", label: "Armada Mobil", icon: Car },
  { value: "500+", label: "Pelanggan Puas", icon: Users },
  { value: "10+", label: "Tahun Pengalaman", icon: Clock },
  { value: "24 Jam", label: "Layanan Siap Sedia", icon: Headphones },
];

const HeroSection = () => {
  return (
    <section id="beranda" className="relative bg-background min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-5 md:py-10 w-full">
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
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-bold">
                di Jogja &amp; Seluruh Indonesia
              </span>
            </h1>
            <p className="mt-6 text-muted-foreground text-sm md:text-base max-w-lg leading-relaxed">
              Sewa mobil murah di Jogja (Yogyakarta) dan Pulau Jawa dengan armada terbaik dan sopir profesional. Tersedia rental mobil lepas kunci, rental dengan sopir, dan antar jemput bandara — harga terjangkau, pelayanan 24 jam.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 hidden md:inline-flex items-center gap-4 bg-accent text-accent-foreground pl-6 pr-2 py-2 rounded-full font-bold text-base hover:bg-accent/90 hover:scale-105 transition-all shadow-lg shadow-accent/20"
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
            className="relative flex justify-end -mr-4 md:-mr-20 lg:-mr-40 mt-7 lg:mt-0"
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
              alt="Rental Mobil Jogja - Mitsubishi Pajero Sport Ozil Trans354"
              className="relative z-10 w-full max-w-2xl md:max-w-3xl lg:max-w-5xl object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Mobile CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-start md:hidden w-full z-20 mt-2"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-accent text-accent-foreground pl-6 pr-2 py-2 rounded-full font-bold text-base hover:bg-accent/90 hover:scale-105 transition-all shadow-lg shadow-accent/20"
            >
              Booking Sekarang
              <div className="bg-background text-accent p-3 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white rounded-2xl shadow-xl border border-border/50 p-4 md:p-6 grid grid-cols-2 md:flex md:flex-row items-stretch md:items-center gap-6 gap-y-8 md:gap-0"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center flex-1">
              <div className="flex-1 flex flex-col items-center gap-2 px-2 md:px-4 text-center">
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                <div className="text-xl md:text-3xl font-extrabold text-primary">{stat.value}</div>
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
