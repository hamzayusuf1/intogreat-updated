import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Intogreat Housing | Managed Housing for Councils, Landlords and Investors",
    template: "%s | Intogreat Housing",
  },
  description:
    "Intogreat Housing manages temporary accommodation for local authorities, supported accommodation for tenants with support needs, and guaranteed rent agreements for landlords across the UK.",
  metadataBase: new URL("https://intogreathousing.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Intogreat Housing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
