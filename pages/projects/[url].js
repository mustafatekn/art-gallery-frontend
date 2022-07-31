import { useState, useRef } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { projectData } from "../../data";
import Head from "next/head";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//eslint-disable-next-line
import "swiper/css";
//eslint-disable-next-line
import "swiper/css/navigation";
//eslint-disable-next-line
import "swiper/css/pagination";
import Image from "next/image";

export default function ProjectDetails({ project }) {
  const [show, setShow] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);
  const prevButton = useRef(null);
  const nextButton = useRef(null);
  console.log("project details rendered");
  return (
    <DefaultLayout>
      <Head>
        <title>{`${project.title} | Rixusart`}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {typeof window !== "undefined" && (
          <meta
            name={`Rixusart ${project.title}(${
              location.origin + location.pathname
            }) Details`}
            content="Rixusart"
          />
        )}
        {typeof window !== "undefined" && (
          <meta
            name="description"
            content={`Rixusart ${project.title}(${
              location.origin + location.pathname
            }) Details with all gallery`}
          />
        )}

        <meta
          name="keywords"
          content="Rixusart, rixusart, Mural, Interior Architecture, Interior, Architecture,iç, mimari, iç mimari, dekorasyon, Art, Resim, Sanat, Dekoratif Boya, Yağlı Boya, Tablo, Emir Teke, Duvar Resmi, Duvar Ressamı, Soyut Resim, Proje, Proje Detayları, Project, Details, Instagram, Facebook, Pinterest, instagram, facebook, pinterest"
        />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Mustafa Osman Tekin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {show ? (
        <div className="w-full fixed bottom-0 top-0 left-0 right-0 z-50 mx-auto bg-transparent h-screen mt-3 pb-7 backdrop-blur-sm">
          <button className="float-right mr-2" onClick={() => setShow(false)}>
            <svg
              role="img"
              className="w-7 h-7"
              stroke="#fff"
              strokeWidth={0.78}
            >
              <use xlinkHref="/assets/icons/sprite.svg#close" />
            </svg>
          </button>
          <div className="w-full mx-auto h-full px-2 py-20 container">
            <div className="w-full flex flex-col justify-center h-full">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevButton.current;
                  swiper.params.navigation.nextEl = nextButton.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                pagination={{ clickable: true }}
                className="flex flex-col relative overflow-hidden w-full h-full self-center items-center justify-center"
                initialSlide={initialIndex}
              >
                <div>
                  {project?.images?.map((img, index) => (
                    <SwiperSlide key={index} className="w-full h-full">
                      <Image
                        src={img.url}
                        className="object-contain rounded-sm border border-slate-400"
                        layout="fill"
                        alt={img.description}
                      />
                    </SwiperSlide>
                  ))}
                </div>
                <div className="flex mx-auto">
                  <div className="left-0 z-10 flex items-center absolute inset-y-0">
                    <button
                      ref={prevButton}
                      className="slider-arrow disabled:opacity-50"
                      disabled={initialIndex === 0}
                    >
                      <span className="sr-only">Prev</span>
                      <svg
                        role="img"
                        className="w-14 h-14 text-gray-900"
                        stroke="#fff"
                        strokeWidth={0.78}
                      >
                        <use xlinkHref="/assets/icons/sprite.svg#arrow-left" />
                      </svg>
                    </button>
                  </div>
                  <div className="inset-y-0 right-0 z-10 flex items-center absolute">
                    <button
                      ref={nextButton}
                      className="slider-arrow  disabled:opacity-50"
                      disabled={initialIndex === project.images.length - 1}
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        role="img"
                        className="w-14 h-14"
                        stroke="#fff"
                        strokeWidth={0.78}
                      >
                        <use xlinkHref="/assets/icons/sprite.svg#arrow-right" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mx-auto w-full flex h-[180px] md:h-[400px] xl:h-[550px] 2xl:h-[700px] mb-10 md:mb-16">
            <div className="w-full relative filter ease-in-out duration-700">
              <Image
                src={project.thumbnail.url}
                alt={project.thumbnail.description}
                loading="lazy"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="w-full h-full mx-auto text-center absolute -bottom-5 right-0 left-0 top-0 flex flex-col items-start justify-end text-white">
                <div className="text-white w-fit text-left bg-gradient-to-r from-slate-700 flex flex-col pl-5 lg:pl-7 xl:pl-10 pr-12 md:pr-20 lg:pr-16 xl:pr-36 py-0 md:py-1 lg:py-2 ">
                  <h2 className="font-extrabold text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl h-fit">
                    {project.title}
                  </h2>
                  <h6 className="font-bold text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl h-fit">
                    {project.location}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-cols-8 gap-12 lg:grid mx-5 lg:mx-12">
            {project?.images?.map((img, index) => (
              <div
                className={
                  index > 2
                    ? "flex-col col-span-4 lg:flex my-12 lg:my-0 w-full h-full"
                    : "flex-col col-span-4 lg:flex mb-12 lg:mb-0 w-full h-full"
                }
                key={img.url}
              >
                <div className="flex flex-col gap-12 w-full h-full">
                  <img
                    src={img.url}
                    className="object-center object-cover w-full h-full rounded-sm cursor-pointer filter ease-in-out duration-700 hover:brightness-50 hover:grayscale-0"
                    alt={img.description}
                    onClick={() => {
                      setInitialIndex(index);
                      setShow(true);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </DefaultLayout>
  );
}

export async function getServerSideProps({ params }) {
  const project = projectData.find((i) => i.url === params.url);

  return {
    props: {
      project,
    },
  };
}
