import { motion } from "framer-motion";
import { Car, ShieldCheck, UserCheck, Headphones, Wrench, Smile } from "lucide-react";

const features = [
  { icon: Headphones, title: "Layanan 24/7", desc: "Tim kami siap melayani 24 jam untuk kebutuhan dan darurat perjalanan Anda kapan saja." },
  { icon: Wrench, title: "Gratis Perawatan", desc: "Biaya perawatan dan servis sudah termasuk dalam paket rental tanpa biaya tambahan." },
  { icon: Smile, title: "Berkendara Nyaman", desc: "Interior bersih, wangi, dan nyaman untuk pengalaman perjalanan terbaik Anda." },
  { icon: ShieldCheck, title: "Bebas Khawatir", desc: "Dilengkapi asuransi dan jaminan keselamatan penuh selama perjalanan berlangsung." },
  { icon: Car, title: "Mobil Baru", desc: "Armada mobil dalam kondisi baru dan terawat untuk kenyamanan perjalanan Anda." },
  { icon: UserCheck, title: "Sopir Profesional", desc: "Driver berpengalaman, ramah, dan menguasai rute untuk perjalanan yang aman." },
];

const FeaturesSection = () => {
  return (
    <section id="keunggulan" className="py-16 md:py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-8 md:p-12"
        >
          {/* Top: badge + heading (left) | description (right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12 items-center">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-5">
                Keunggulan Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Rasakan Keamanan &amp; Pelayanan Terbaik
              </h2>
            </div>
            <div>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Kami mendefinisikan ulang layanan rental mobil dengan mengutamakan ketenangan pikiran Anda.
                Dari harga transparan hingga bantuan darurat 24/7, misi kami memastikan setiap perjalanan
                Anda lancar, aman, dan sesuai kebutuhan.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 mb-10" />

          {/* Bottom: feature grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4 shrink-0">
                  <f.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-white text-sm md:text-base mb-2">{f.title}</h3>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
