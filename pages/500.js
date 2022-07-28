import Head from "next/head";
import Link from "next/link";
import DefaultLayout from "../layouts/DefaultLayout";

export default function InternalServerError() {
  return (
    <DefaultLayout>
      <Head>
        <title>Server Error | Rixusart</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="Rixusart" content="Rixusart" />
        <meta
          name="description"
          content="Rixusart'a ulaşılamadı, server hatası"
        />
        <meta name="keywords" content="Rixusart, ulaşılamadı, server, hata" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Mustafa Osman Tekin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 border-8 border-zinc-900 items-center justify-center flex flex-col my-10">
            <div className="text-center">
              <div className="text-5xl sm:text-5xl md:text-9xl font-semibold segoe">
                500
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-semibold">
                Internal Server Error
              </div>
            </div>
          </div>
          <div className="text-xl md:text-2xl space-y-5 text-center">
            <div>
              There is a problem with the resource you are looking for, please
              try again later
            </div>
            <div className="text-blue-900">
              <Link href="/">Go to homepage</Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
