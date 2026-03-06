import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Car, UserCheck, PlaneTakeoff, Building2, CalendarDays, MapPin, ArrowRight } from "lucide-react";

const WA_LINK = "https://wa.me/6281333993654";

const services = [
  {
    icon: Car,
    title: "Rental Mobil Lepas Kunci Jogja",
    description:
      "Nikmati kebebasan berkendara sendiri dengan sewa mobil lepas kunci di Jogja (Yogyakarta). Pilihan mobil nyaman dan terawat, tersedia harian, mingguan, atau bulanan dengan harga murah.",
  },
  {
    icon: UserCheck,
    title: "Rental Mobil dengan Sopir Jogja",
    description:
      "Perjalanan lebih nyaman dan aman dengan rental mobil plus sopir profesional di Jogja. Sopir ramah dan berpengalaman siap mengantar Anda ke mana saja.",
  },
  {
    icon: PlaneTakeoff,
    title: "Antar Jemput Bandara Jogja",
    description:
      "Layanan antar jemput bandara Jogja (YIA & Adisucipto) yang tepat waktu dan terpercaya. Sewa mobil bandara dengan harga terjangkau.",
  },
  {
    icon: Building2,
    title: "Sewa Mobil Operasional Perusahaan",
    description:
      "Solusi rental mobil untuk kebutuhan operasional perusahaan di Jogja, Jawa, dan seluruh Indonesia. Tersedia kontrak bulanan dan tahunan dengan harga kompetitif.",
  },
  {
    icon: CalendarDays,
    title: "Sewa Mobil Harian, Mingguan, Bulanan",
    description:
      "Pilihan durasi sewa mobil murah yang fleksibel di Jogja (Yogyakarta). Rental harian, mingguan, atau bulanan dengan proses mudah dan cepat.",
  },
  {
    icon: MapPin,
    title: "Paket Wisata Jogja & Luar Kota",
    description:
      "Paket wisata Jogja (Yogyakarta) dan perjalanan luar kota dengan armada nyaman dan sopir berpengalaman. Rental mobil wisata murah untuk keluarga dan rombongan.",
  },
];

const Layanan = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Layanan Rental Mobil Jogja - Sewa Mobil Murah dengan Sopir"
        description="Layanan rental mobil lengkap di Jogja (Yogyakarta) & Jawa: sewa mobil lepas kunci, rental mobil dengan sopir profesional, antar jemput bandara, sewa harian/mingguan/bulanan. Harga murah & armada terbaik."
        keywords="layanan rental mobil Jogja, layanan rental mobil Jawa, layanan rental mobil Yogyakarta, sewa mobil murah Jogja, sewa mobil murah Jawa, rental mobil dengan sopir Jogja, rental mobil dengan sopir Jawa, rental mobil lepas kunci Jogja, antar jemput bandara Jogja, sewa mobil harian Jogja, rental mobil bulanan, sewa mobil operasional perusahaan, paket wisata Jogja, paket wisata Jawa"
        path="/layanan"
      />
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
              LAYANAN RENTAL MOBIL <span className="text-accent">JOGJA</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              Ozil Trans354 menyediakan berbagai layanan sewa mobil murah di Jogja (Yogyakarta), Pulau Jawa, dan seluruh Indonesia.
              Dari rental mobil lepas kunci, rental mobil dengan sopir, hingga antar jemput bandara —
              semua tersedia dengan harga terjangkau dan armada terbaik.
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
