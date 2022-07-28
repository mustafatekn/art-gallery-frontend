import Head from "next/head";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Contact() {
  return (
    <DefaultLayout title="Contact">
      <Head>
        <title>Contact | Rixusart</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="application-name" content="Rixusart" />
        <meta
          name="description"
          content="Soru sormak veya görüş, öneri bildirmek için Rixusart ile iletişime geçebilirsiniz."
        />
        <meta
          name="keywords"
          content="rixusart, iletişim, Email, soru, cevap, görüş, öneri"
        />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Mustafa Osman Tekin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-rows-1 my-4 lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center text-base lg:text-xl font-semibold">
              <div className="w-full mx-auto px-4">
                <div className="w-full lg:w-4/5 mx-auto space-y-3 lg:mb-20">
                  <div>Benimle iletişime geçmekten çekinmeyin.</div>
                  <div>
                    <a href="mailto:emirteke04@gmail.com">
                      <svg
                        role="img"
                        className="w-5 h-5 text-primary-black inline-block mr-2"
                      >
                        <use xlinkHref="/assets/icons/sprite.svg#email" />
                      </svg>
                      emirteke<span className="segoe">04</span>@gmail.com
                    </a>
                  </div>
                  <div>
                    <a href="tel:905380508992">
                      <svg
                        role="img"
                        className="w-5 h-5 text-primary-black inline-block mr-1"
                      >
                        <use xlinkHref="/assets/icons/sprite.svg#phone" />
                      </svg>
                      <span className="segoe">+90 538 050 8992</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10 lg:mt-0 items-center lg:items-start px-4 2xl:w-4/5 raleway-medium">
              <form className="w-full">
                <div className="form-input-wrapper w-full">
                  <input
                    type="text"
                    className="border-b border-slate-200 w-full py-1.5 rounded-sm pl-2 focus:outline-none"
                    placeholder="Name"
                  />
                </div>

                <div className="form-input-wrapper w-full mt-5">
                  <input
                    type="email"
                    className="border-b border-slate-200 w-full py-1.5 rounded-sm pl-2 focus:outline-none"
                    placeholder="Email"
                  />
                </div>

                <div className="form-input-wrapper w-full mt-5">
                  <input
                    type="text"
                    className="border-b border-slate-200 w-full py-1.5 rounded-sm pl-2 focus:outline-none"
                    placeholder="Phone"
                  />
                </div>

                <div className="form-input-wrapper w-full mt-5">
                  <input
                    type="text"
                    className="border-b border-slate-200 w-full py-1.5 rounded-sm pl-2 focus:outline-none"
                    placeholder="Subject"
                  />
                </div>

                <div className="form-input-wrapper w-full mt-5">
                  <textarea
                    className="border-b border-slate-200 w-full py-1.5 h-40 pl-2 focus:outline-none"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-input-wrapper w-full">
                  <button className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full mt-3">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
