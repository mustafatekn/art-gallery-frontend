import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import styles from './layout.module.css';
import Footer from "@/components/Footer";
import Logo from '@/assets/img/logo.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "Rixusart",
  title: "Rixusart",
  description: "Yağlı boya tablo, soyut resim, duvar resmi ve dekoratif boya gibi sanatın birçok dalından projeler",
  keywords: "Rixusart, rixusart, Mural, Interior Architecture, Interior, Architecture,iç, mimari, iç mimari, dekorasyon, Art, Resim, Sanat, Dekoratif Boya, Yağlı Boya, Tablo, Emir Teke, Duvar Resmi, Duvar Ressamı, Soyut Resim, Anasayfa, Ana, Sayfa, Proje, Instagram, Facebook, Pinterest, instagram, facebook, pinterest",
  robots: "index,follow",
  authors: {
    name: "Mustafa Osman Tekin",
    url: "https://github.com/mustafatekn"
  },
};

export default function RootLayout({
  children,
  title
}: Readonly<{
  children: React.ReactNode;
  title: string
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="block md:hidden mt-5 text-center">
            <Image
              src={Logo}
              alt="rixusart-cat"
              width={270}
              height={36}
              className="object-cover object-center"
              priority={true}
            />
          </div>
          <main id={styles.contentWrapper}>
            {title && (
              <div className="bg-zinc-50 h-16 md:h-24 flex flex-col justify-center items-center mt-5 md:mt-0">
                <h1 className="text-4xl md:text-5xl font-semibold">{title}</h1>
              </div>
            )}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
