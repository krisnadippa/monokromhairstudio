import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COMING SOON — MONOKROM HAIR STUDIO",
  description: "Editorial Hair Artistry • Contemporary Aesthetics. Monokrom Hair Studio Opening Soon in Karawang.",
  metadataBase: new URL("https://monokromhairstudio.com"),
  icons: {
    icon: [
      { url: "/images/monokromlogo.jpeg", type: "image/jpeg" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/monokromlogo.jpeg",
    apple: [
      { url: "/images/monokromlogo.jpeg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  openGraph: {
    title: "COMING SOON — MONOKROM HAIR STUDIO",
    description: "Editorial Hair Artistry • Contemporary Aesthetics. Monokrom Hair Studio Opening Soon in Karawang.",
    url: "https://monokromhairstudio.com",
    siteName: "MONOKROM HAIR STUDIO",
    images: [
      {
        url: "/images/monokromlogo.jpeg",
        width: 750,
        height: 750,
        alt: "Monokrom Hair Studio Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COMING SOON — MONOKROM HAIR STUDIO",
    description: "Editorial Hair Artistry • Contemporary Aesthetics. Monokrom Hair Studio Opening Soon in Karawang.",
    images: ["/images/monokromlogo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        {/* Fallback explicit link tags for all browser tabs and mobile devices */}
        <link rel="icon" href="/images/monokromlogo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/monokromlogo.jpeg" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
