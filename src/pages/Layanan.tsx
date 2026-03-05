import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { motion } from "framer-motion";
import { Car, UserCheck, PlaneTakeoff, Building2, CalendarDays, MapPin, ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/6281333993654";

const services = [
  {
    icon: Car,
    title: "Rental Mobil Lepas Kunci",
    description:
      "Nikmati kebebasan berkendara sendiri dengan pilihan mobil yang nyaman dan terawat. Tersedia harian, mingguan, atau bulanan.",
  },
  {
    icon: UserCheck,
    title: "Rental Mobil dengan Sopir",
    description:
      "Perjalanan lebih nyaman dan aman dengan sopir profesional, ramah, dan berpengalaman yang siap mengantar Anda ke mana saja.",
  },
  {
    icon: PlaneTakeoff,
    title: "Drop Off & Antar Jemput Bandara",
    description:
      "Layanan antar jemput bandara yang tepat waktu dan terpercaya. Anda tidak perlu khawatir soal keterlambatan.",
  },
  {
    icon: Building2,
    title: "Sewa Mobil Operasional Perusahaan",
    description:
      "Solusi transportasi untuk kebutuhan operasional perusahaan Anda. Tersedia kontrak bulanan dan tahunan dengan harga kompetitif.",
  },
  {
    icon: CalendarDays,
    title: "Sewa Harian, Mingguan, Bulanan",
    description:
      "Pilihan durasi sewa yang fleksibel, disesuaikan dengan kebutuhan Anda. Harga terjangkau dan proses mudah dan cepat.",
  },
  {
    icon: MapPin,
    title: "Perjalanan Wisata & Luar Kota",
    description:
      "Kami menyediakan paket perjalanan wisata ke berbagai destinasi favorit dengan armada nyaman dan sopir berpengalaman.",
  },
];

const Layanan = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Intro */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
              LAYANAN RENTAL MOBIL <span className="text-accent">LENGKAP</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              Kami menyediakan berbagai layanan rental mobil yang terbaik untuk memenuhi semua
              kebutuhan perjalanan Anda. Dari perjalanan pribadi, bisnis, maupun wisata —
              semuanya tersedia di sini.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-accent font-semibold text-sm hover:underline"
              >
                HUBUNGI KAMI <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Butuh Kendaraan dalam Waktu Dekat?
          </h2>
          <p className="mt-3 text-primary-foreground/80 text-sm md:text-base">
            Pesan mobil sekarang dan nikmati perjalanan yang nyaman, aman, dan terjangkau bersama Ozil Trans354 Tour & Travel.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-xl font-bold text-sm hover:bg-accent/90 transition-colors"
          >
            HUBUNGI KAMI <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </main>
  );
};

export default Layanan;
