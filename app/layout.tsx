import type { Metadata, Viewport } from "next";
import { Inter, Great_Vibes } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-wedding",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://wedding-invitation.vercel.app"
  ),

  title: "Trian & Salzahara | Wedding Invitation",

  description:
    "Undangan Pernikahan Trian & Salzahara",

  openGraph: {
    title:
      "Trian & Salzahara | Wedding Invitation",

    description:
      "Dengan hormat kami mengundang Anda untuk hadir pada acara pernikahan kami.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Trian & Salzahara | Wedding Invitation",

    description:
      "Dengan hormat kami mengundang Anda untuk hadir pada acara pernikahan kami.",

    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.className} ${greatVibes.variable} min-h-screen`}
      >
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context":
                "https://schema.org",

              "@type": "Event",

              name:
                "Wedding Trian & Salzahara",

              startDate:
                "2027-08-12T08:00:00+07:00",

              location: {
                "@type": "Place",

                name:
                  "Gedung Pernikahan Bandung",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
