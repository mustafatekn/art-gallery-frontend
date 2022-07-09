import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styles from './DefaultLayout.module.css';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <main id={styles.contentWrapper}>{children}</main>
      <Footer />
    </>
  );
}
