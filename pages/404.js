import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Rixusart | Not Found</title>
      </Head>
      <div className="h-screen flex flex-col items-center pt-10">
        <div className="cursor-pointer">
          <Link href="/">
            <Image src="/assets/images/logo.png" width={540} height={72} />
          </Link>
        </div>
        <div className="flex flex-col h-screen justify-center items-center space-y-10 md:space-y-20">
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 border-8 border-zinc-900 rounded-full items-center justify-center flex flex-col">
            <div className="space-y-5 text-center">
              <div className="text-6xl sm:text-6xl md:text-8xl italic font-bold">
                404
              </div>
              <div className="text-5xl sm:text-5xl md:text-6xl font-semibold">
                Not Found
              </div>
            </div>
          </div>
          <div className="text-2xl md:text-3xl space-y-5 text-center">
            <div>The page you're looking for is not found.</div>
            <div className="text-blue-900">
              <Link href="/">Go to homepage</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
