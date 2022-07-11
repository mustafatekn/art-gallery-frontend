import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [open]);

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-6 border-b-2 fixed top-0 right-0 left-0 z-50 hidden md:block">
        <div className="container flex flex-wrap justify-between items-center mx-auto font">
          <Link href="/" className="flex items-center">
            <a>
              <Image
                src="/assets/images/logo.png"
                width={270}
                height={36}
                alt="Rixusart Logo"
                className="h-6 sm:h-9"
              />
            </a>
          </Link>
          <div className="w-full  md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  href="/projects"
                  className="block py-2 pr-4 pl-3 text-primary-black"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/rixusart"
                  className="block py-2 pr-4 pl-3 text-primary-black"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="inline-block py-2 pr-4 pl-3 text-primary-black"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 pr-4 pl-3 text-primary-black"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <button onClick={() => setOpen(true)}>
          <svg role="img" className="w-6 h-6 text-primary-black mt-2 ml-2">
            <use xlinkHref="/assets/icons/sprite.svg#menu" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="fixed bottom-0 top-0 left-0 right-0 bg-white z-50">
          <div className="border-b-2 pt-3 mx-auto text-center">
            <Link href="/" className="flex items-center">
              <a>
                <Image
                  src="/assets/images/logo.png"
                  width={270}
                  height={36}
                  alt="Rixusart Logo"
                  className="h-6 sm:h-9"
                />
              </a>
            </Link>
          </div>
          <div className="w-full  md:w-auto text-center" id="mobile-menu">
            <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium font-semibold">
              <li className="py-3 border-b-2">
                <Link
                  href="/projects"
                  className="block py-2 pr-4 pl-3 text-primary-black"
                >
                  Projects
                </Link>
              </li>
              <li className="py-3 border-b-2">
                <Link
                  href="/rixusart"
                  className="block py-2 pr-4 pl-3 text-primary-black"
                >
                  About Me
                </Link>
              </li>
              <li className="py-3 border-b-2">
                <Link
                  href="/shop"
                  className="inline-block py-2 pr-4 pl-3 text-primary-black"
                >
                  Shop
                </Link>
              </li>
              <li className="py-3 border-b-2">
                <Link
                  href="/contact"
                  className="block py-2 pr-4 pl-3 text-primary-black"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}
