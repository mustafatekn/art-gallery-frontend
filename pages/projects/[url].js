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
  return (
    <DefaultLayout>
      <Head>
        <title>{`${project.title} | Rixusart`}</title>
      </Head>
      {show ? (
        <div className="w-full fixed bottom-0 top-0 left-0 right-0 z-50 mx-auto bg-white h-screen">
          <button
            className="float-right mt-3 mr-2"
            onClick={() => setShow(false)}
          >
            <svg
              role="img"
              className="w-7 h-7"
              stroke="#fff"
              strokeWidth={0.78}
            >
              <use xlinkHref="/assets/icons/sprite.svg#close" />
            </svg>
          </button>
          <div className="w-full mx-auto h-full px-2">
            <div className="w-full flex flex-col justify-center h-full pb-20">
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
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
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
          <div className="mx-auto w-full flex h-[350px] md:h-[700px] mb-10 md:mb-16 px-5 md:px-0">
            <div className="w-full h-full relative filter ease-in-out duration-700">
              <Image
                src={project.thumbnail.url}
                alt={project.thumbnail.description}
                loading="lazy"
                layout="fill"
                objectFit="fill"
              />
              <div className="w-full h-full mx-auto text-center absolute bottom-0 right-0 left-0 top-0 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 duration-700 hover:backdrop-brightness-50 hover:backdrop-grayscale-0 space-y-2">
                <h2 className="font-extrabold text-5xl ">{project.title}</h2>
                <h6 className="font-bold text-4xl">{project.location}</h6>
                <p className="font-semibold text-2xl">{project.text}</p>
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
                    className="object-center object-cover w-full h-full rounded-sm cursor-pointer"
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
