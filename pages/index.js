import DefaultLayout from "../layouts/DefaultLayout";
import Image from "next/image";

export default function Landing() {
  return (
    <DefaultLayout>
      <div className="container mx-auto text-center mt-20">
        <Image
          src="/assets/images/landing-cat.jpg"
          alt="rixusart-cat"
          width={500}
          height={500}
        />
      </div>
    </DefaultLayout>
  );
}
