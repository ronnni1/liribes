import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

const BASE_URL = "https://liribes.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ordinanca Liribes | Ordinancë Private Mjekësi Familjare – Ferizaj",
    template: "%s | Ordinanca Liribes",
  },
  description: "Ordinancë private për mjekësi familjare në Ferizaj. Dr. Naser Fetahu dhe Dr. Besart Fetahu ofrojnë vizita, vaksinime, EKG, vizita shtëpiake dhe më shumë. E hënë–e shtunë, 10:00–18:00.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  keywords: [
    "ordinancë private Ferizaj",
    "mjek familjar Ferizaj",
    "mjekësi familjare Ferizaj",
    "klinikë private Ferizaj",
    "mjek privat Ferizaj",
    "ordinancë mjekësore Ferizaj",
    "mjekësi familjare Kosovë",
    "vizitë mjekësore Ferizaj",
    "ordinancë Talinoc",
    "Dr Naser Fetahu",
    "Dr Besart Fetahu",
    "liribes",
  ],
  authors: [{ name: "Ordinanca Liribes" }],
  creator: "Ordinanca Liribes",
  openGraph: {
    type: "website",
    locale: "sq_AL",
    url: BASE_URL,
    siteName: "Ordinanca Liribes",
    title: "Ordinanca Liribes | Ordinancë Private Mjekësi Familjare – Ferizaj",
    description: "Ordinancë private për mjekësi familjare në Ferizaj. Vizita, vaksinime, EKG dhe vizita shtëpiake. E hënë–e shtunë 10:00–18:00.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Ordinanca Liribes",
            "description": "Ordinancë private për mjekësi familjare në Ferizaj, Kosovë.",
            "url": "https://liribes.vercel.app",
            "telephone": "+38344880718",
            "email": "ordinancaliribesi@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Talinoc i Muhaxherëve",
              "addressLocality": "Ferizaj",
              "addressCountry": "XK"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
              "opens": "10:00",
              "closes": "18:00"
            },
            "medicalSpecialty": "GeneralPractice",
            "employee": [
              { "@type": "Physician", "name": "Dr. Naser Fetahu" },
              { "@type": "Physician", "name": "Dr. Besart Fetahu" }
            ]
          })}}
        />
        <ClientLayout>
          <Navbar />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
