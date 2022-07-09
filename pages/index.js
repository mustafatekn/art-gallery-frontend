import DefaultLayout from "../layouts/DefaultLayout";
import Image from "next/image";
import Head from "next/head";

export default function Landing() {
  return (
    <DefaultLayout>
      <Head>
        <title>Rixusart</title>
      </Head>
      <div className="container mx-auto text-center">
        <Image
          src="/assets/images/landing-cat.jpg"
          alt="rixusart-cat"
          width={500}
          height={500}
          className="object-cover object-center"
        />
      </div>
    </DefaultLayout>
  );
}
