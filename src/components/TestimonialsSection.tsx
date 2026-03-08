import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Papa from "papaparse";

// Replace this with your Google Sheet CSV publish link for Sheet2
const GOOGLE_SHEET_TESTIMONIALS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHgf5JKWQXP6qLjHqs2-0Jkj15g93qIvkxpPPxCio4kTEmKoditYBzpBCPO5dE5IaKAt_ALF3IOFfD/pub?gid=428103020&single=true&output=csv";

interface TestimonialData {
  name: string;
  text: string;
  rating: number;
}

const CARDS_PER_SLIDE = 3;

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = Math.ceil(testimonials.length / CARDS_PER_SLIDE);

  const next = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    // Fetch data from Google Sheets (Sheet 2)
    setIsLoading(true);
    Papa.parse(GOOGLE_SHEET_TESTIMONIALS_URL, {
      download: true,
      header: true,
      complete: (results) => {
        const parsedTestimonials = results.data
          .filter((row: any) => row.name && row.text) // Ensure row has basic data
          .map((row: any) => ({
            name: row.name,
            text: row.text,
            rating: parseInt(row.rating) || 5,
          }));
        setTestimonials(parsedTestimonials as TestimonialData[]);
        setIsLoading(false);
      },
      error: (error: any) => {
        console.error("Error fetching testimonial data:", error);
        setError("Gagal memuat testimoni.");
        setIsLoading(false);
      },
    });
  }, []);

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next, totalSlides]);

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
            {/* Error State */}
            {error && (
              <div className="text-center py-12 text-destructive">
                <p>{error}</p>
              </div>
            )}

            {/* Loading State */}
            {isLoading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-48 bg-white/50 border border-border rounded-2xl p-6 shadow-sm animate-pulse" />
                ))}
              </div>
            )}

            {/* Cards */}
            {!isLoading && !error && (
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
            )}

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
