import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COMING SOON — MONOKROM HAIR STUDIO",
  description: "Editorial Hair Artistry • Contemporary Aesthetics. Monokrom Hair Studio Opening Soon.",
  icons: {
    icon: "/favicon.ico",
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
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
