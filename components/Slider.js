import { useRef, memo } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
//eslint-disable-next-line
import "swiper/css";
//eslint-disable-next-line
import "swiper/css/navigation";
//eslint-disable-next-line
import "swiper/css/pagination";

function Slider({ index, setShow, project }) {
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  return (
    <div className="w-full fixed bottom-0 top-0 left-0 right-0 z-50 mx-auto bg-transparent h-screen mt-3 pb-7 backdrop-blur-sm">
      <button className="float-right mr-2" onClick={() => setShow(false)}>
        <svg role="img" className="w-7 h-7" stroke="#fff" strokeWidth={0.78}>
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
            loop
            pagination={{ clickable: true }}
            className="flex flex-col relative overflow-hidden w-full h-full self-center items-center justify-center"
            initialSlide={index}
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
  );
}
export default memo(Slider);
