import { memo } from "react";

const ProjectDetailsSkeleton = () => {
    const temporaryData = [1, 2, 3, 4];

    return (
        <>
            <div className="mx-auto w-full flex h-[180px] md:h-[400px] xl:h-[550px] 2xl:h-[700px] mb-10 md:mb-16">
                <div className="w-full relative filter ease-in-out duration-700">
                    <div className="w-full h-full bg-gray-100" />
                    <div className="w-full h-full mx-auto text-center absolute -bottom-5 right-0 left-0 top-0 flex flex-col items-start justify-end text-white">
                        <div className="text-white text-left bg-gradient-to-r from-slate-700 flex flex-col pl-5 lg:pl-7 xl:pl-10 pr-12 md:pr-20 lg:pr-16 xl:pr-36 py-0 md:py-1 lg:py-2 w-1/6 h-9 md:h-16 lg:h-[76px] xl:h-[84px] 2xl:h-[104px]" />
                    </div>
                </div>
            </div>
            <div className="grid-cols-8 gap-12 lg:grid mx-5 lg:mx-12">
                {temporaryData.map((index) => (
                    <div
                        className={
                            index > 2
                                ? "flex-col col-span-4 lg:flex my-12 lg:my-0 w-full h-full"
                                : "flex-col col-span-4 lg:flex mb-12 lg:mb-0 w-full h-full"
                        }
                        key={index}
                    >
                        <div className="flex flex-col gap-12 w-full h-96 lg:h-[700px]">
                            <div className="w-full h-full rounded-sm bg-gray-100" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default memo(ProjectDetailsSkeleton);