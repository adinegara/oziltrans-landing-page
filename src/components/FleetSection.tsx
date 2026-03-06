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
import carHiace from "@/assets/car-hiace.png";
import carXenia from "@/assets/great new xenia.png";
import carInnova from "@/assets/kijang innova.png";
import carLuxio from "@/assets/luxio type M.png";
import carCalya from "@/assets/new calya.png";
import carPajero from "@/assets/pajero_sport.png";

const WA_LINK = "https://wa.me/6281333993654";

const cars = [
  {
    name: "Toyota Corolla",
    image: carCorolla,
    seats: "5 Kursi",
    fuel: "Bensin",
    transmission: "Matic",
  },
  {
    name: "Honda Brio",
    image: carBrio,
    seats: "5 Kursi",
    fuel: "Bensin",
    transmission: "Matic / Manual",
  },
  {
    name: "Jeep Grand Cherokee",
    image: carGrandCherokee,
    seats: "5 Kursi",
    fuel: "Bensin",
    transmission: "Matic",
  },
  {
    name: "Toyota Alphard",
    image: carAlphard,
    seats: "7 Kursi",
    fuel: "Bensin",
    transmission: "Matic",
  },
  {
    name: "Toyota Avanza",
    image: carAvanza,
    seats: "7 Kursi",
    fuel: "Bensin",
    transmission: "Matic / Manual",
  },
  {
    name: "Toyota Fortuner TRD",
    image: carFortunerTrd,
    seats: "7 Kursi",
    fuel: "Diesel",
    transmission: "Matic",
  },
  {
    name: "Toyota Hilux",
    image: carHilux,
    seats: "5 Kursi",
    fuel: "Diesel",
    transmission: "Manual / Matic",
  },
  {
    name: "Toyota HiAce",
    image: carHiace,
    seats: "15 Kursi",
    fuel: "Diesel",
    transmission: "Manual",
  },
  {
    name: "Daihatsu Xenia",
    image: carXenia,
    seats: "7 Kursi",
    fuel: "Bensin",
    transmission: "Matic / Manual",
  },
  {
    name: "Toyota Kijang Innova",
    image: carInnova,
    seats: "7 Kursi",
    fuel: "Bensin / Diesel",
    transmission: "Matic / Manual",
  },
  {
    name: "Daihatsu Luxio Type M",
    image: carLuxio,
    seats: "8 Kursi",
    fuel: "Bensin",
    transmission: "Manual",
  },
  {
    name: "Toyota Calya",
    image: carCalya,
    seats: "7 Kursi",
    fuel: "Bensin",
    transmission: "Matic / Manual",
  },
  {
    name: "Mitsubishi Pajero Sport",
    image: carPajero,
    seats: "7 Kursi",
    fuel: "Diesel",
    transmission: "Matic / Manual",
  },
];

const FleetSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
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
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
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
                <div className=" p-6 flex items-center justify-center h-56 overflow-hidden">
                  <img
                    src={car.image}
                    alt={`Sewa ${car.name} Jogja - Rental Mobil Ozil Trans354`}
                    className="w-full max-w-[280px] object-contain group-hover:scale-105 transition-transform duration-500"
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
                    href={WA_LINK}
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
