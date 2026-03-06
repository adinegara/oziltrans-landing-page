import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  { name: "Ibnu - Padang", text: "Pelayanan sangat memuaskan! Mobil bersih, sopir ramah, dan tepat waktu. Sangat direkomendasikan!", rating: 5 },
  { name: "Dina - Pekanbaru", text: "Sudah 3 kali rental di Ozil Trans354, selalu puas dengan pelayanannya. Harga juga bersaing!", rating: 5 },
  { name: "Achmad Samy", text: "Booking mudah lewat WhatsApp, respon cepat, dan armada mobilnya bagus-bagus. Top!", rating: 5 },
  { name: "Anisa Nur - Surabaya", text: "Pertama kali coba rental di sini dan langsung jadi langganan. Sopirnya sangat profesional dan mobilnya wangi!", rating: 5 },
  { name: "Hans - Kapuas", text: "Sewa mobil untuk acara kantor, semua berjalan lancar. Armada datang tepat waktu dan kondisi prima.", rating: 5 },
  { name: "Novarinta", text: "Harga terjangkau tapi kualitas premium. Anak-anak nyaman selama perjalanan wisata keluarga kami.", rating: 5 },
];

const CARDS_PER_SLIDE = 3;
const totalSlides = Math.ceil(testimonials.length / CARDS_PER_SLIDE);

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const currentCards = testimonials.slice(
    current * CARDS_PER_SLIDE,
    current * CARDS_PER_SLIDE + CARDS_PER_SLIDE
  );

  return (
    <section id="testimoni" className="py-16 md:py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-100 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <span className="inline-block bg-foreground/10 text-foreground text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-5">
              Testimoni
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
              Testimoni Pelanggan <span className="text-accent">Rental Mobil Kami</span>
            </h2>
          </div>

          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Cards */}
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {currentCards.map((t) => (
                <div
                  key={t.name}
                  className="bg-white border border-border rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    "{t.text}"
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <span className="text-foreground font-semibold text-sm">{t.name}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Bottom bar: dots left, nav buttons right */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-accent w-6" : "w-2.5 bg-foreground/20 hover:bg-foreground/40"
                      }`}
                  />
                ))}
              </div>
              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
