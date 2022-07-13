import Head from "next/head";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Contact() {
  return (
    <DefaultLayout title="Contact">
      <Head>
        <title>Contact | Rixusart</title>
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-rows-1 lg:mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col text-base lg:text-xl font-semibold">
              <div className="w-full mx-auto px-4">
                <div className="w-full lg:w-4/5 mx-auto space-y-3">
                  <div>Benimle iletişime geçmekten çekinmeyin.</div>
                  <div>
                    <a href="mailto:emirteke04@gmail.com">
                      <svg
                        role="img"
                        className="w-5 h-5 text-primary-black inline-block mr-2"
                      >
                        <use xlinkHref="/assets/icons/sprite.svg#email" />
                      </svg>
                      emirteke04@gmail.com
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
                      +90 538 050 8992
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10 lg:mt-0 items-center lg:items-start px-4 2xl:w-4/5">
              <form className="w-full">
                <div className="form-input-wrapper w-full">
                  <input
                    type="text"
                    className="border border-slate-200 w-full py-1.5 rounded-sm pl-2"
                    placeholder="Name"
                  />
                </div>

                <div className="form-input-wrapper w-full mt-5">
                  <input
                    type="text"
                    className="border border-slate-200 w-full py-1.5 rounded-sm pl-2"
                    placeholder="Subject"
                  />
                </div>

                <div className="form-input-wrapper w-full mt-5">
                  <textarea
                    className="border border-slate-200 w-full py-1.5 h-40 pl-2"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-input-wrapper w-full">
                  <button className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full mt-3">
                    Submit
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
