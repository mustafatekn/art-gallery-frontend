import Image from "next/image";
import { memo } from "react";
import LandingCat from './assets/img/landing-cat.jpg';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto text-center px-10 md:px-14 lg:px-0">
        <Image
          src={LandingCat}
          alt="rixusart-cat"
          width={1000}
          height={700}
          className="object-cover object-center block mx-auto"
        />
      </div>
    </main>
  );
}

export default memo(Home);