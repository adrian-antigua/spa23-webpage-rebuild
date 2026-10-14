import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { ToastProvider } from "@/components/providers/ToastProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spa 23 Fitness & Lifestyle",
  description:
    "Family-owned multipurpose health club on Route 23 in Pompton Plains, NJ. Pool, spa, yoga, CrossFit, group fitness, kids programs — 45+ years strong.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-sans">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
