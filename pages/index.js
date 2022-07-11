import DefaultLayout from "../layouts/DefaultLayout";
import Image from "next/image";
import Head from "next/head";

export default function Landing() {
  return (
    <DefaultLayout>
      <Head>
        <title>Rixusart</title>
      </Head>
      <div className="container mx-auto text-center px-10 md:px-14 lg:px-0">
        <Image
          src="/assets/images/landing-cat.jpg"
          alt="rixusart-cat"
          width={1000}
          height={700}
          className="object-cover object-center"
        />
      </div>
    </DefaultLayout>
  );
}
