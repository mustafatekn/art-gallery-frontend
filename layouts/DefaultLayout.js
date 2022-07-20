import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styles from "../styles/DefaultLayout.module.css";
import Image from "next/image";

export default function DefaultLayout({ children, title }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="block md:hidden mt-5 text-center">
        <Image
          src="/assets/images/logo.png"
          alt="rixusart-cat"
          width={270}
          height={36}
          className="object-cover object-center"
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
  );
}
