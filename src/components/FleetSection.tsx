import { motion } from "framer-motion";
import { Users, Fuel, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import carCorolla from "@/assets/2018 Toyota Corolla.png";
import carBrio from "@/assets/Honda Brio.png";
import carGrandCherokee from "@/assets/Jeep Grand Cherokee.png";
import carAlphard from "@/assets/Toyota Alphard.png";
import carAvanza from "@/assets/Toyota Avanza.png";
import carFortunerTrd from "@/assets/Toyota Fortuner TRD Sportivo Auto.png";
import carHilux from "@/assets/Toyota Hilux  Truk pickup.png";
import carHiace from "@/assets/hiace commuter.jpg";
import carXenia from "@/assets/great new xenia.png";
import carInnova from "@/assets/kijang innova.png";
import carLuxio from "@/assets/luxio type M.png";
import carCalya from "@/assets/new calya.png";
import carPajero from "@/assets/pajero_sport.png";
import Papa from "papaparse";

const WA_LINK = "https://wa.me/6281333993654";

// Replace this with your Google Sheet CSV publish link
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHgf5JKWQXP6qLjHqs2-0Jkj15g93qIvkxpPPxCio4kTEmKoditYBzpBCPO5dE5IaKAt_ALF3IOFfD/pub?output=csv";

interface CarData {
  name: string;
  image: string;
  seats: string;
  fuel: string;
  transmission: string;
}

const getDirectImageUrl = (url: string) => {
  if (!url) return "";

  // Handle Google Drive links
  if (url.includes("drive.google.com")) {
    const match = url.match(/\/d\/([^/?]+)/) || url.match(/id=([^&]+)/);
    if (match && match[1]) {
      // thumbnail?id=ID&sz=w1000 is much more reliable for embedding and avoids download quotas
      return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
    }
  }

  // Handle Dropbox links
  if (url.includes("dropbox.com")) {
    return url.replace("?dl=0", "?raw=1").replace("&dl=0", "&raw=1");
  }

  return url;
};

const FleetSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cars, setCars] = useState<CarData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    // Fetch data from Google Sheets
    setIsLoading(true);
    Papa.parse(GOOGLE_SHEET_CSV_URL, {
      download: true,
      header: true,
      complete: (results) => {
        const parsedCars = results.data
          .filter((row: any) => row.name && row.image) // Ensure row has basic data
          .map((row: any) => ({
            name: row.name,
            image: getDirectImageUrl(row.image),
            seats: row.seats || "N/A",
            fuel: row.fuel || "N/A",
            transmission: row.transmission || "N/A",
          }));
        setCars(parsedCars as CarData[]);
        setIsLoading(false);
      },
      error: (error: any) => {
        console.error("Error fetching sheet data:", error);
        setError("Gagal memuat data armada.");
        setIsLoading(false);
      },
    });

    checkScroll();
    const el = scrollRef.current;

    // Check scroll after a slight delay to ensure items are rendered
    const scrollTimeout = setTimeout(checkScroll, 100);

    el?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      clearTimeout(scrollTimeout);
      el?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="armada" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
            Pilihan <span className="text-primary">Armada Rental Mobil</span> Terbaik di Jogja
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Sewa mobil murah di Jogja (Yogyakarta) dan se-Pulau Jawa dengan berbagai pilihan armada terawat dan nyaman. Dari city car hingga minibus, tersedia untuk rental harian, mingguan, dan bulanan.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          {canScrollLeft && !isLoading && !error && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && !isLoading && !error && cars.length > 0 && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12 text-destructive">
              <p>{error}</p>
            </div>
          )}

          {/* Loading State */}
          {isLoading && !error && (
            <div className="flex gap-5 overflow-x-hidden pb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="min-w-[260px] md:min-w-[300px] h-[380px] bg-muted/50 rounded-2xl animate-pulse" />
              ))}
            </div>
          )}

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {cars.map((car, i) => (
              <motion.div
                key={car.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.1, 0.3) }}
                className="min-w-[260px] md:min-w-[300px] snap-start bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow group flex-shrink-0"
              >
                <div className="flex items-center justify-center h-56 w-full overflow-hidden">
                  <img
                    src={car.image}
                    alt={`Sewa ${car.name} Jogja - Rental Mobil Ozil Trans354`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground text-lg">{car.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-accent" />{car.seats}</span>
                    <span className="flex items-center gap-1"><Fuel className="w-3.5 h-3.5 text-accent" />{car.fuel}</span>
                    <span className="flex items-center gap-1"><Settings className="w-3.5 h-3.5 text-accent" />{car.transmission}</span>
                  </div>
                  <a
                    href={`${WA_LINK}?text=${encodeURIComponent(`Halo Ozil Trans354, saya ingin booking mobil ${car.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-center bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Booking Sekarang
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
