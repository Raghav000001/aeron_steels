import { Inter, Oxygen } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const oxygen = Oxygen({
  variable: "--font-oxygen",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Aeron Steels | Manufacturer & Exporter of Steel Strips",
  description:
    "India's trusted manufacturer and exporter of carbon steel strips, hardened & tempered steel, and CRCA steel. 42+ years of excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oxygen.variable} min-h-screen flex flex-col antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster
          position="top-right"
          richColors
          closeButton
          toastOptions={{
            style: { fontFamily: "var(--font-oxygen)" },
          }}
        />
      </body>
    </html>
  );
}
