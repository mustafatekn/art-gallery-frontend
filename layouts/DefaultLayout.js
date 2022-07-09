import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="my-24">{children}</main>
      <Footer />
    </>
  );
}
