import { memo } from 'react'

const ProjectsSkeleton = () => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
            {Array.prototype.fill(4).map((index) => (
                <div className="mx-auto px-5 xl:px-0 box-border w-full h-full" key={index}>
                    <div className="filter ease-in-out duration-700 w-full h-full">
                        <div className="w-full rounded-sm bg-gray-100 h-64 sm:h-[400px] md:h-[485.33px] lg:h-[288px] xl:h-[400px] 2xl:h-[485.33px]" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default memo(ProjectsSkeleton);