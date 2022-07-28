import DefaultLayout from "../layouts/DefaultLayout";
import Image from "next/image";
import Head from "next/head";

export default function Landing() {
  return (
    <DefaultLayout>
      <Head>
        <title>Rixusart | Home</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="Rixusart" content="Rixusart" />
        <meta
          name="description"
          content="Yağlı boya tablo, soyut resim, duvar resmi ve dekoratif boya gibi sanatın birçok dalından projeler"
        />
        <meta
          name="keywords"
          content="Rixusart, rixusart, Art, Resim, Sanat, Dekoratif Boya, Yağlı Boya, Tablo, Emir Teke, Duvar Resmi, Duvar Ressamı, Soyut Resim, Anasayfa, Ana, Sayfa, Proje, Instagram, Facebook, Pinterest, instagram, facebook, pinterest"
        />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Mustafa Osman Tekin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
