import { Helmet } from "react-helmet-async";

const SITE_NAME = "Ozil Trans354 Tour & Travel";
// Ganti dengan domain asli setelah beli domain
const SITE_URL = "https://oziltrans354.com";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  ogImage?: string;
}

const SEO = ({
  title,
  description = "Ozil Trans354 Tour & Travel - Layanan rental mobil dan sewa mobil murah di Jogja (Yogyakarta), Jawa & seluruh Indonesia. Tersedia rental mobil dengan sopir, lepas kunci, antar jemput bandara. Armada terbaik, harga terjangkau.",
  keywords = "rental mobil Jogja, rental mobil Yogyakarta, rental mobil Jawa, sewa mobil Jogja, sewa mobil Yogyakarta, sewa mobil Jawa, rental mobil murah Jogja, rental mobil murah Jawa, sewa mobil murah Jogja, rental mobil dengan sopir Jogja, rental mobil dengan sopir Jawa, rental mobil lepas kunci Jogja, sewa mobil harian Jogja, rental mobil bulanan, antar jemput bandara Jogja, antar jemput bandara Yogyakarta, rental mobil Indonesia, Ozil Trans354",
  path = "",
  ogImage = `${SITE_URL}/og-image.jpg`,
}: SEOProps) => {
  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} - Rental Mobil Murah & Terpercaya di Jogja`;
  const canonicalUrl = `${SITE_URL}${path}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: "Ozil Trans354 Tour & Travel",
    description:
      "Layanan rental mobil dan sewa mobil murah di Jogja (Yogyakarta), Pulau Jawa & seluruh Indonesia. Rental mobil dengan sopir, lepas kunci, dan antar jemput bandara.",
    url: SITE_URL,
    telephone: "+6281333993654",
    email: "ozilmiftahuda@gmail.com",
    image: ogImage,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yogyakarta",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.7956,
      longitude: 110.3695,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    sameAs: [
      "https://www.instagram.com/Ozil_trans354",
      "https://www.tiktok.com/@ozil_trans354",
      "https://www.facebook.com/OzilMiftaHuda",
    ],
    alternateName: "Rental Mobil Jogja Ozil Trans354",
    areaServed: [
      {
        "@type": "City",
        name: "Yogyakarta",
        alternateName: "Jogja",
      },
      {
        "@type": "AdministrativeArea",
        name: "Pulau Jawa",
        alternateName: "Jawa",
      },
      {
        "@type": "Country",
        name: "Indonesia",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Rental Mobil",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rental Mobil Lepas Kunci Jogja",
            description:
              "Sewa mobil lepas kunci di Jogja (Yogyakarta) dengan armada terawat. Tersedia harian, mingguan, dan bulanan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rental Mobil dengan Sopir Jogja",
            description:
              "Rental mobil dengan sopir profesional di Jogja (Yogyakarta) untuk perjalanan nyaman dan aman.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Antar Jemput Bandara Jogja",
            description:
              "Layanan antar jemput bandara Jogja (YIA & Adisucipto) tepat waktu dan terpercaya.",
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
