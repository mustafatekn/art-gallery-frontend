import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styles from "./DefaultLayout.module.css";
import Image from "next/image";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="block md:hidden my-5 text-center">
        <Image
          src="/assets/images/logo.png"
          alt="rixusart-cat"
          width={270}
          height={36}
          className="object-cover object-center"
        />
      </div>
      <main id={styles.contentWrapper}>{children}</main>
      <Footer />
    </>
  );
}
