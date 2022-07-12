import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../layouts/DefaultLayout";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Rixusart | Not Found</title>
      </Head>
      <div className="h-screen flex flex-col items-center">
        <div className="py-36">
          <Image src="/assets/images/logo.png" width={270} height={36} />
        </div>
      </div>
    </>
  );
}
