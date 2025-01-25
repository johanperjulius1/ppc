import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/menu";
import Footer from "@/components/footer/footer"
import styles from './layout.module.css'


// Static data fetching at build time
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Slotsa.se',
  description: 'Slotsa - the number one casino review page',
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Pass the pre-fetched data to CasinoProvider */}
          <Menu />
          <main className={styles.main} >{children}</main>
          <Footer />
      </body>
    </html>
  );
}
