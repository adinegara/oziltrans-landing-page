import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "../assets/logo-ozil_trans.jpg";

const WA_LINK = "https://wa.me/6281333993654";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.27 8.27 0 0 0 4.76 1.5V7.1a4.83 4.83 0 0 1-1-.41z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer id="kontak" className="bg-background text-foreground">
      {/* Upper footer */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Ozil Trans354" className="w-24 h-24 rounded-full object-cover" />
              <div>
                <div className="font-bold text-lg">Ozil Trans354</div>
                <div className="text-xs text-muted-foreground">Tour &amp; Travel</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Rental mobil murah dan terpercaya di Jogja (Yogyakarta), Pulau Jawa & seluruh Indonesia. Sewa mobil dengan sopir profesional, lepas kunci, dan antar jemput bandara — armada terbaik, harga terjangkau, layanan 24 jam.
            </p>
          </div>

          {/* Kontak column */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-base mb-5">Kontak Kami</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>+62 813-3399-3654</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>ozilmiftahuda@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Yogyakarta, Indonesia</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>24 Jam, 7 Hari Seminggu</span>
              </div>
            </div>
          </div>

          {/* Navigasi column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-base mb-5">Navigasi</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/#beranda" className="hover:text-accent transition-colors">Beranda</a></li>
              <li><a href="/layanan" className="hover:text-accent transition-colors">Layanan</a></li>
              <li><a href="/#armada" className="hover:text-accent transition-colors">Armada</a></li>
              <li><a href="/#keunggulan" className="hover:text-accent transition-colors">Keunggulan</a></li>
              <li><a href="/#testimoni" className="hover:text-accent transition-colors">Testimoni</a></li>
            </ul>
          </div>

          {/* Sosial Media column */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-base mb-5">Sosial Media</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="https://www.instagram.com/Ozil_trans354" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <InstagramIcon className="w-5 h-5 shrink-0" />
                <span>Ozil_trans354</span>
              </a>
              <a href="https://www.tiktok.com/@ozil_trans354" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <TikTokIcon className="w-5 h-5 shrink-0" />
                <span>Ozil trans Tour N travel</span>
              </a>
              <a href="https://www.facebook.com/OzilMiftaHuda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <FacebookIcon className="w-5 h-5 shrink-0" />
                <span>Ozil Miftakhul Huda</span>
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>+62 813-3399-3654</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Ozil Trans354 Tour &amp; Travel. Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/Ozil_trans354" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all" aria-label="Instagram">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="https://www.tiktok.com/@oziltranstourntravel" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all" aria-label="TikTok">
              <TikTokIcon className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/ozil.miftakhul.huda" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all" aria-label="Facebook">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all" aria-label="WhatsApp">
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Large brand text watermark */}
      <div className="overflow-hidden select-none pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 -mb-12">
          <span className="block text-[clamp(3rem,12vw,10rem)] font-extrabold leading-none opacity-[0.04] tracking-tight whitespace-nowrap">
            OzilTrans354
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
