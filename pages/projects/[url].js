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
        <div className="w-full fixed bottom-0 top-0 left-0 right-0 z-50 mx-auto bg-white">
          <button
            className="float-right mt-2 mr-3 font-semibold"
            onClick={() => setShow(false)}
          >
            <svg role="img" className="w-6 h-6">
              <use xlinkHref="/assets/icons/sprite.svg#close" />
            </svg>
          </button>
          <div className="w-4/5 mx-auto md:h-screen">
            <div className="py-10 w-full h-full">
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
                className="h-full flex flex-col relative overflow-hidden"
                initialSlide={initialIndex}
              >
                {project?.images?.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img.url}
                      className="object-center object-cover w-full h-full rounded-sm border border-slate-400"
                      alt={img.explanation}
                    />
                  </SwiperSlide>
                ))}
                <div className="flex mx-auto">
                  <div className="left-0 z-10 flex items-center mx-3 lg:absolute lg:inset-y-0 lg:mx-0">
                    <button
                      ref={prevButton}
                      className="slider-arrow"
                    >
                      <span className="sr-only">Prev</span>
                      <svg role="img" className="w-12 h-12 text-gray-900">
                        <use xlinkHref="/assets/icons/sprite.svg#arrow-left" />
                      </svg>
                    </button>
                  </div>
                  <div className="inset-y-0 right-0 z-10 flex items-center mx-3 lg:absolute lg:mx-0">
                    <button
                      ref={nextButton}
                      className="slider-arrow"
                    >
                      <span className="sr-only">Next</span>
                      <svg role="img" className="w-12 h-12">
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
          <div className="mx-auto w-full">
            <div className="flex justify-center">
              <img
                src={project.thumbnail.url}
                alt={project.thumbnail.explanation}
                className="object-fill w-full h-auto"
                loading="lazy"
                style={{ maxHeight: 600 }}
              />
            </div>
          </div>
          <div className="container w-full mx-auto text-center my-10">
            <h2 className="font-extrabold text-3xl ">{project.title}</h2>
            <h6 className="font-bold text-2xl">{project.location}</h6>
            <p className="font-semibold text-xl">{project.text}</p>
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
                    alt={img.explanation}
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
      <style jsx>{`
        .swiper-button-prev {
          color: "black";
          background: "black";
        }
      `}</style>
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
