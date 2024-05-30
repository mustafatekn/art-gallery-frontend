import { useEffect, useState, memo } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [open]);

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-6 border-b-2 fixed top-0 right-0 left-0 z-50 hidden md:block raleway-medium">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/logo.png"
              width={270}
              height={36}
              alt="Rixusart Logo"
            />
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

      <div className="block md:hidden">
        <button onClick={() => setOpen(true)}>
          <svg role="img" className="w-6 h-6 text-primary-black mt-4 ml-3">
            <use xlinkHref="/assets/icons/sprite.svg#menu" />
          </svg>
        </button>
      </div>
      <nav
        className={`fixed top-0 left-0 w-full h-full bg-white z-40  md:hidden raleway-medium ease-linear duration-300 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-row justify-between border-b-2 py-6 mx-auto">
          <div className="flex self-start items-center">
            <Link href="/">
              <Image
                src="/assets/images/logo.png"
                width={270}
                height={36}
                alt="Rixusart Logo"
                className="h-6 sm:h-9"
              />
            </Link>
          </div>
          <button
            className="flex flex-col mr-3 justify-start mt-1"
            onClick={() => setOpen(false)}
          >
            <svg role="img" className="w-7 h-7 ml-auto">
              <use
                xlinkHref="/assets/icons/sprite.svg#close"
                stroke="#fff"
                strokeWidth={0.78}
              />
            </svg>
          </button>
        </div>
        <div className="w-full  md:w-auto text-center" id="mobile-menu">
          <ul className="flex flex-col mt-10 font-semibold w-3/4 mx-auto">
            <li className="py-3 border-b-2" onClick={() => setOpen(false)}>
              <Link
                href="/projects"
                className="block py-2 pr-4 pl-3 text-primary-black"
              >
                Projects
              </Link>
            </li>
            <li className="py-3 border-b-2" onClick={() => setOpen(false)}>
              <Link
                href="/rixusart"
                className="block py-2 pr-4 pl-3 text-primary-black"
              >
                About Me
              </Link>
            </li>
            <li className="py-3 border-b-2" onClick={() => setOpen(false)}>
              <Link
                href="/shop"
                className="inline-block py-2 pr-4 pl-3 text-primary-black"
              >
                Shop
              </Link>
            </li>
            <li className="py-3 border-b-2" onClick={() => setOpen(false)}>
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
    </>
  );
}
export default memo(Navbar);
