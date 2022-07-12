import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../layouts/DefaultLayout";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Rixusart | Not Found</title>
      </Head>
      <div className="h-screen flex flex-col items-center space-y-28 py-20">
        <Image src="/assets/images/logo.png" width={270} height={36} />
        <div className="mt-10">
          <div className="w-96 h-96 border-4 border-zinc-900 rounded-full items-center justify-center flex">
            <div className="w-80 h-80 rounded-full flex flex-col justify-center items-center space-y-5 italic">
              <div className="text-8xl">404</div>
              <div className="text-6xl">Not Found</div>
            </div>
          </div>
        </div>
        <div className="text-3xl mt-10">
          The page you're looking for is not found.
        </div>
      </div>
    </>
  );
}
