import type { Metadata } from "next";
import { Geist, Geist_Mono, Caudex, Forum, Nunito } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caudex = Caudex({
  variable: "--font-caudex",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin"],
  weight: ["400"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Psykologipalvelu Ville Huuskonen",
  description: "Psykologin etävastaanotolta sovitusti. Tarjoan psykologin palveluita etävastaanoton kautta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caudex.variable} ${forum.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
