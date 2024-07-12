import { useRef, memo } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProjectObject } from "@/app/types";
import { NavigationOptions } from "swiper/types";
import ArrowLeftIcon from '@/assets/svg/arrow-left.svg';
import ArrowRightIcon from '@/assets/svg/arrow-right.svg';
import CloseIcon from '@/assets/svg/close.svg';

type SliderProps = {
    index: number;
    setShow: Function;
    project: ProjectObject
}

const Slider = ({ index, setShow, project }: SliderProps) => {
    const prevButton = useRef<HTMLButtonElement>(null);
    const nextButton = useRef<HTMLButtonElement>(null);

    return (
        <div className="w-full fixed bottom-0 top-0 left-0 right-0 z-50 mx-auto bg-transparent h-screen mt-3 pb-7 backdrop-blur-sm">
            <button className="float-right mr-2" onClick={() => setShow(false)}>
                <CloseIcon className="w-7 h-7" stroke="#fff" strokeWidth={0.78} />
            </button>
            <div className="w-full mx-auto h-full px-2 py-20 container">
                <div className="w-full flex flex-col justify-center h-full">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        onInit={(swiper) => {
                            if (!(swiper.params.navigation && prevButton.current && nextButton.current)) return;
                            const navigation = swiper.params.navigation as NavigationOptions;
                            if (!navigation) return;
                            navigation.prevEl = prevButton.current;
                            navigation.nextEl = nextButton.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        loop
                        pagination={{ clickable: true }}
                        className="flex flex-col relative overflow-hidden w-full h-full self-center items-center justify-center"
                        initialSlide={index}
                    >
                        <div>
                            {project.images.map((img, index) => (
                                <SwiperSlide key={index} className="w-full h-full">
                                    <Image
                                        src={img.url}
                                        className="object-contain rounded-sm"
                                        fill
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
                                    <ArrowLeftIcon className="w-14 h-14 text-gray-900" stroke="#fff" strokeWidth={0.78} />
                                </button>
                            </div>
                            <div className="inset-y-0 right-0 z-10 flex items-center absolute">
                                <button
                                    ref={nextButton}
                                    className="slider-arrow  disabled:opacity-50"
                                >
                                    <span className="sr-only">Next</span>
                                    <ArrowRightIcon className="w-14 h-14 text-gray-900" stroke="#fff" strokeWidth={0.78} />
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