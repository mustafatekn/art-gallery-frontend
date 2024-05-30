import Image from "next/image";

export default function ProjectImages({ project, setSliderIndex, setShow }) {
  
  const onClickImage = (index) => {
    setSliderIndex(index);
    setShow(true);
  }

  return (
    <>
      <div className="mx-auto w-full flex h-[180px] md:h-[400px] xl:h-[550px] 2xl:h-[700px] mb-10 md:mb-16">
        <div className="w-full relative filter ease-in-out duration-700">
          {project.thumbnail ? <Image
            src={project.thumbnail.url}
            alt={project.thumbnail.description}
            loading="lazy"
            fill
            className="object-cover object-center"
          /> : null}
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
        {project.images && project.images.length > 0 && project.images.map((img, index) => (
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
                onClick={() => onClickImage(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
